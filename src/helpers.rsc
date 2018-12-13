module helpers

import IO;

import util::Resources;
import String;
import Set;
import List;
import ListRelation;
import volume;
import commentsRemove;
import util::Math;

import lang::java::m3::AST;
import lang::java::m3::Core;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;


//public loc file = |project://JavaProject/src/HelloWorld.java|;
public Resource project = getProject(|project://smallsql0.21_src/|);
public loc fileTest = |project://smallsql0.21_src/src/smallsql/database/Column.java|;
public loc fileTest2 = |project://smallsql0.21_src/src/smallsql/database/Columns.java|;
public loc results = |project://SE/results/results.json|;

public list[str] fileToList(loc file){
	return readFileLines(file);
}

public list[loc] projectToList (Resource project) {
	list[loc] projectFiles = [];
	visit (project) {
		case file(loc f): if(f.extension == "java")projectFiles = projectFiles + f;
	}
	return projectFiles;
}


public list[str] removeComments(list[str] stringsInput) {
	int i = 0;
	while (i < size(stringsInput)) {
		stringsInput[i] = trim(stringsInput[i]);
		
		
		// Removing quotes.
		while(size(findAll(stringsInput[i], "\"")) >= 2) {
			int quoteStarts = findFirst(stringsInput[i], "\"");
			stringsInput[i] = replaceFirst(stringsInput[i], "\"", "");
			int quoteEnds = findFirst(stringsInput[i], "\"");
			tempStr = trim(substring(stringsInput[i], 0, quoteStarts));
			stringsInput[i] = tempStr + trim(substring(stringsInput[i], quoteEnds+1));
			if (stringsInput[i] == "") {
				stringsInput = delete(stringsInput, i);
				i = i - 1;
			}
		}
		
		// Checking for comments of type "/* ... */" that start and end in the same line.
		// Then it drops the comment area from the line. If the line contained only comment
		// it gets removed completely.
		while ((findFirst(stringsInput[i], "/*") != -1) && (findFirst(stringsInput[i], "*/") != -1)) {
			while ((findFirst(stringsInput[i], "/*") < (findFirst(stringsInput[i], "*/")))) {
				tempStr = trim(substring(stringsInput[i], 0, findFirst(stringsInput[i], "/*")));
				stringsInput[i] = tempStr + trim(substring(stringsInput[i], findFirst(stringsInput[i], "*/")+2));
				if (stringsInput[i] == "") {
					stringsInput = delete(stringsInput, i);
					i = i - 1;
				}
			}
		}
		
		// Dropping the comments of type "//..." from a line. If the line contained only a comment
		// of type "//...", then it deletes the line completely.
		if (findFirst(stringsInput[i], "//") != -1) {
			stringsInput[i] = trim(substring(stringsInput[i], 0, findFirst(stringsInput[i], "//")));
			if (stringsInput[i] == "") {
				stringsInput = delete(stringsInput, i);
				i = i - 1;
			}
		}
		
		// Checking for comments of type "/* ... */" that start from a line and end at another
		// line and  deletes all lines in between.
		else if (findFirst(stringsInput[i], "/*") != -1) {
			
			stringsInput[i] = trim(substring(stringsInput[i], 0, findFirst(stringsInput[i], "/*")));
			if (stringsInput[i] == "") {
				stringsInput = delete(stringsInput, i);
				i = i - 1;
			}
			i = i + 1;
			stringsInput[i] = trim(stringsInput[i]);
			while (i < size(stringsInput) && findFirst(stringsInput[i], "*/") == -1) {
				stringsInput[i] = trim(stringsInput[i]);
				stringsInput = delete(stringsInput, i);
			}
			if (i < size(stringsInput)) {
				stringsInput[i] = trim(stringsInput[i]);			
				stringsInput[i] = trim(substring(stringsInput[i], findFirst(stringsInput[i], "*/")+2));
				if (stringsInput[i] == "") {
				stringsInput = delete(stringsInput, i);
				i = i - 1;
				}
			}
		}
		
		// After trimming, if the line is empty, we delete it.
		else if (i < size(stringsInput) && stringsInput[i] == "") {
			stringsInput = delete(stringsInput, i);
			i = i - 1;
		}
		i = i + 1;
	}
	return stringsInput;
}

public int countCodeLines(loc file){
	listOfCode = fileToList(file);
	list[str] onlyCodeLines = removeComments(listOfCode);
	return size(onlyCodeLines);
}


public real calculatePercentage(int risk, int locOfCode){
	result = toReal(risk)/toReal(locOfCode)*100;
	return result;
}

public int symbolToInt(str rating){
	if (rating == "++") {
		return 5;
	} else if (rating == "+") {
		return 4;
	} else if (rating == "o") {
		return 3;
	} else if (rating == "-") {
		return 2;
	} else {
		return 1;
	}
}

public str intToSymbol(int rating){
	if (rating == 5) {
		return "++";
	} else if (rating == 4) {
		return "+";
	} else if (rating == 3) {
		return "o";
	} else if (rating == 2) {
		return "-";
	} else {
		return "--";
	}
}