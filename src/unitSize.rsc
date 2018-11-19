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
public void unitSize(loc file){
	myModel = createM3FromEclipseProject(file);
	methodSet = methods(myModel);
	methodList = toList(methodSet);
	reversedMethodList = reverse(methodList);
	for(int i <- [0..size(reversedMethodList)]){
		methodCode = reversedMethodList[i];	
		print(methodCode);
		print(" - number of lines - ");
		int codeLinePerMethod = countCodeLines(methodCode);
		println(codeLinePerMethod);

	}
}
