module EvaluatingMetrics

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
    int numFiles =0;
	visit (project) {
		case file(f): numFiles = numFiles + 1;
	}
	return numFiles;
}

public list[loc] projectToList (Resource project) {
	list[loc] files = [];
	visit (project) {
		case file(loc f): files = files + f;
	}
	return files;
}

public list[str] fileToList(loc file){
	return readFileLines(file);
}

public int codeLines(list[str] project){
	int codeLines = size(project);
	return codeLines;
}

/* public list[str] unitSize(loc file){
	myModel = createM3FromEclipseProject(file);
	methodSet = methods(myModel);
	methodList = toList(methodSet);
	return methodList;

}
*/
public int codeLinesInProject(Resource project){
	
}


// 	return noLines;
//}
