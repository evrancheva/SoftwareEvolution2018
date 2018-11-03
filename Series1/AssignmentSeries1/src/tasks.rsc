module tasks

import IO;
import List;
import util::Resources;
import String;
import Set;

import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;


public loc file = |project://JavaProject/src/HelloWorld.java|;
public Resource project = getProject(|project://JavaProject/|);


public list[str] fileToList(loc file){
	return readFileLines(file);
}

public int codeLines(list[str] project){
		int codeLines = size(project);
		return codeLines;
}

public void unitSize(loc file){
	myModel = createM3FromEclipseProject(file);
	methodSet = methods(myModel);
	methodList = toList(methodSet);
	reversedMethodList = reverse(methodList);
	for(int i <- [0..size(reversedMethodList)]){
		method = reversedMethodList[i];	
		print(method);
		print(" - number of lines - ");
		locFile2List = fileToList(method);
		codeLinePerMethod = codeLines(locFile2List);
		println(codeLinePerMethod);

	}

}

