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


public Resource bigProject = getProject(|project://hsqldb-2.3.1/|);
public Resource project = getProject(|project://smallsql0.21_src/|);
public loc fileTest = |project://smallsql0.21_src/src/smallsql/database/Column.java|;
public loc fileTest2 = |project://smallsql0.21_src/src/smallsql/database/Columns.java|;
public loc results = |project://SE/results/results.json|;
public loc cloneResults = |project://SE/results/cloneResults.json|;


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
		<stringsInput, i> = removeQuotes(stringsInput, i);
		
		// Dropping the comments of type "//..." from a line. If the line contained only a comment
		// of type "//...", then it deletes the line completely.
		if (i < size(stringsInput)) {
			<stringsInput, i> = removeCommentsType1(stringsInput, i);
		}
		// Checking for comments of type "/* ... */" that start and end in the same line.
		// Then it drops the comment area from the line. If the line contained only comment
		// it gets removed completely.
		if (i < size(stringsInput)) {
			<stringsInput, i> = removeCommentsType2(stringsInput, i);
		}
		
		// Checking for comments of type "/* ... */" that start from a line and end at another
		// line and  deletes all lines in between.
		if (i < size(stringsInput)) {
			<stringsInput, i> = removeCommentsType3(stringsInput, i);
		}
		
		// After trimming, if the line is empty, we delete it.
		if (i > 0 && i < size(stringsInput) && stringsInput[i] == "") {
			stringsInput = delete(stringsInput, i);
			i = i - 1;
		}
		i += 1;
	}
	//println(size(stringsInput));
	//exit(1);
	return stringsInput;
}

public tuple[list[str], int] removeQuotes(list[str] stringsInput, int currLine) {
	while(size(findAll(stringsInput[currLine], "\"")) >= 2) {
		int quoteStarts = findFirst(stringsInput[currLine], "\"");
		stringsInput[currLine] = replaceFirst(stringsInput[currLine], "\"", "");
		int quoteEnds = findFirst(stringsInput[currLine], "\"");
		str tempStr = trim(substring(stringsInput[currLine], 0, quoteStarts));
		stringsInput[currLine] = tempStr + trim(substring(stringsInput[currLine], quoteEnds+1));
		if (stringsInput[currLine] == "") {
			stringsInput = delete(stringsInput, currLine);
			currLine -= 1;
		}
	}
	return <stringsInput, currLine>;
}
public tuple[list[str], int] removeCommentsType1(list[str] stringsInput, int currLine) {
	if (findFirst(stringsInput[currLine], "//") != -1) {
		stringsInput[currLine] = trim(substring(stringsInput[currLine], 0, findFirst(stringsInput[currLine], "//")));
		if (stringsInput[currLine] == "") {
			stringsInput = delete(stringsInput, currLine);
			currLine -= 1;
		}
	}
	return <stringsInput, currLine>;
}

public tuple[list[str], int] removeCommentsType2(list[str] stringsInput, int currLine) {
	while ((findFirst(stringsInput[currLine], "/*") != -1) && (findFirst(stringsInput[currLine], "*/") != -1)) {
		while ((findFirst(stringsInput[currLine], "/*") < (findFirst(stringsInput[currLine], "*/")))) {
			tempStr = trim(substring(stringsInput[currLine], 0, findFirst(stringsInput[currLine], "/*")));
			stringsInput[currLine] = tempStr + trim(substring(stringsInput[currLine], findFirst(stringsInput[currLine], "*/")+2));
			if (stringsInput[currLine] == "") {
				stringsInput = delete(stringsInput, currLine);
				currLine -= 1;
			}
		}
	}
	return <stringsInput, currLine>;
}
public tuple[list[str] stringsInput, int currLine] removeCommentsType3 (list[str] stringsInput,int currLine) {
	if (findFirst(stringsInput[currLine], "/*") != -1) {
		
		stringsInput[currLine] = trim(substring(stringsInput[currLine], 0, findFirst(stringsInput[currLine], "/*")));
		if (stringsInput[currLine] == "") {
			stringsInput = delete(stringsInput, currLine);
			currLine -= 1;
		}
		currLine += 1;
		stringsInput[currLine] = trim(stringsInput[currLine]);
		while (currLine < size(stringsInput) && findFirst(stringsInput[currLine], "*/") == -1) {
			stringsInput[currLine] = trim(stringsInput[currLine]);
			stringsInput = delete(stringsInput, currLine);
		}
		if (currLine < size(stringsInput)) {
			stringsInput[currLine] = trim(stringsInput[currLine]);			
			stringsInput[currLine] = trim(substring(stringsInput[currLine], findFirst(stringsInput[currLine], "*/")+2));
			if (stringsInput[currLine] == "") {
				stringsInput = delete(stringsInput, currLine);
				currLine -= 1;
			}
		}
	}
	return <stringsInput, currLine>;
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