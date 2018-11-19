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


public loc file = |project://JavaProject/src/HelloWorld.java|;
public Resource project = getProject(|project://smallsql0.21_src/|);
public loc fileTest = |project://smallsql0.21_src/src/smallsql/database/Column.java|;

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

public int codeLinesProject(Resource project){
	int codeLines = 0;
	list[str] file_str = [];
	projectFiles = projectToList(project);
	for (i <- [0 .. size(projectFiles)]) {
		codeLines += countCodeLines(projectFiles[i]);
	}
	return codeLines;
}

public real riskInPercentage(int risk, int locOfCode){
	result = toReal(risk)/toReal(locOfCode)*100;
	return result;
}

public str ratingToSymbol(tuple[real simple, real moderate, real high, real untestable] riskP) {
	if (riskP.moderate < 25 && riskP.high < 0 && riskP.untestable < 0) {
		return "++";
	} else if (riskP.moderate <= 30 && riskP.high <= 5 && riskP.untestable <= 0) {
		return "+";
	} else if (riskP.moderate <= 40 && riskP.high <= 10 && riskP.untestable <= 0) {
		return "o";
	} else if (riskP.moderate <= 50 && riskP.high <= 15 && riskP.untestable <= 5) {
		return "-";
	} else {
		return "--";
	}
}

