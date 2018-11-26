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
public int unitSizeRatingToStar(tuple[real simple, real moderate, real high, real untestable] riskP) {
	if (riskP.moderate < 19.5 && riskP.high < 10.9 && riskP.untestable < 3.9) {
		return 5;
	} else if (riskP.moderate <= 26.0 && riskP.high <= 15.5 && riskP.untestable <= 6.5) {
		return 4;
	} else if (riskP.moderate <= 34.1 && riskP.high <= 22.2 && riskP.untestable <= 11.0) {
		return 3;
	} else if (riskP.moderate <= 45.9 && riskP.high <= 31.4 && riskP.untestable <= 18.1) {
		return 2;
	} else {
		return 1;
	}
}

public str unitSizeRatingToSymbol(tuple[real simple, real moderate, real high, real untestable] riskP) {
	if (distribution.untestable == 0 && distribution.high == 0 && distribution.moderate <= 25) {
		return "++";
	} else if (distribution.untestable == 0 && distribution.high <= 5 && distribution.moderate <= 30) {
		return "+";
	} else if (distribution.untestable == 0 && distribution.high <= 10 && distribution.moderate <= 40) {
		return "o";
	} else if (distribution.untestable <= 5 && distribution.high <= 15 && distribution.moderate <= 50) {
		return "-";
	}
	return "--";
}
