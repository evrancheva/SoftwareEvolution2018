module fileSearcher

import IO;
import List;
import util::Resources;
import String;
import Set;

import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;


public loc file = |project://JavaProject/src/HelloWorld.java|;
public Resource project = getProject(|project://JavaProject/|);

public int filesNumber (Resource project) {
    int numFiles = 0;
	visit (project) {
		case file(_): numFiles = numFiles + 1;
	}
	return numFiles;
}

public list[str] fileToList (loc file){
	return readFileLines(file);
}

public int codeLines(Resource project){
	int codeLines = 0;
	list[str] file_str = [];
	projectFiles = projectToList (project);
	for (i <- [0 .. size(projectFiles)]) { 
		file_str = fileToList(projectFiles[i]);
		codeLines = codeLines + size(file_str);
	}
	return codeLines;
}

public list[loc] projectToList (Resource project) {
	list[loc] projectFiles = [];
	visit (project) {
		case file(loc f): if (endsWith(f, ".java")) { projectFiles = projectFiles + f; }
	}
	return projectFiles;
}

public int codeLinesInProject(Resource project){
	
}

