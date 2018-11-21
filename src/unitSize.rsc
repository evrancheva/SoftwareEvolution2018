module unitSize

import IO;


import util::Resources;
import String;
import Set;
import List;
import ListRelation;
import volume;
import helpers;


import lang::java::m3::AST;
import lang::java::m3::Core;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

// Unit Size 
public list[int] unitSize(loc file){
	myModel = createM3FromEclipseProject(file);
	methodSet = methods(myModel);
	methodList = toList(methodSet);
	list[int] unitSizes = [];
	for(int i <- [0..size(methodList)]){
		methodCode = methodList[i];	
		int codeLinePerMethod = countCodeLines(methodCode);
		unitSizes += codeLinePerMethod;
	}
	return unitSizes;
}
