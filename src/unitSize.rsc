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
public list[int] unitSize(Resource project){
	list[loc] projectFiles = projectToList(project);
	list[int] unitSizes = [];
	for (currFile <- projectFiles) {
		myModel = createM3FromEclipseProject(currFile);
		methodSet = methods(myModel);
		methodList = toList(methodSet);
		for(int i <- [0..size(methodList)]){
			methodCode = methodList[i];	
			int codeLinePerMethod = countCodeLines(methodCode);
			unitSizes += codeLinePerMethod;
		}
	}
	
	return unitSizes;
}

public list[int] unitSizeFaster(loc file){
	myModel = createM3FromEclipseProject(file);
	methodSet = methods(myModel);
	methodList = toList(methodSet);
	unitSizes = [];
	for(int i <- [0..size(methodList)]){
			methodCode = methodList[i];	
			int codeLinePerMethod = countCodeLines(methodCode);
			unitSizes += codeLinePerMethod;
	}
	
	return unitSizes;
}

public tuple[real simple, real moderate, real high, real untestable] unitSizePortfolio(list[int] unitSizes){

	int simple = 0;
	int moderate = 0;
	int high = 0; 
	int untestable = 0;
	onlyFiles = projectToList(project);
	locPerProject = codeLinesProject(project);
	for(int i <- [0..size(unitSizes)]){
		if(unitSizes[i] < 30){
			simple += unitSizes[i];
		}
		else if(unitSizes[i] < 44){
			moderate += unitSizes[i];
		}
		else if(unitSizes[i] < 74){
			high += unitSizes[i];
		}else{
			untestable += unitSizes[i];
		}
	}
	int totalV = simple + moderate + high + untestable;
	return <riskInPercentage(simple,totalV),riskInPercentage(moderate,totalV),riskInPercentage(high,totalV),riskInPercentage(untestable,totalV)>;
}
public str unitSizeRatingToSymbol(tuple[real simple, real moderate, real high, real untestable] riskP) {
	if (riskP.moderate < 19.5 && riskP.high < 10.9 && riskP.untestable < 3.9) {
		return "++";
	} else if (riskP.moderate <= 26.0 && riskP.high <= 15.5 && riskP.untestable <= 6.5) {
		return "+";
	} else if (riskP.moderate <= 34.1 && riskP.high <= 22.2 && riskP.untestable <= 11.0) {
		return "o";
	} else if (riskP.moderate <= 45.9 && riskP.high <= 31.4 && riskP.untestable <= 18.1) {
		return "-";
	} else {
		return "--";
	}
}


