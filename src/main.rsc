module main

import util::Resources;
import IO;
import util::Math;
import List;
import helpers;
import volume;
import unitSize;
import complexity;
import optDuplication;
import sigMetrics;

//To measure the metrics for the other project change the location of the project

public Resource projectAnalyzed = getProject(|project://smallsql0.21_src/|);

public void main(){
	//smallsql 
	println("Project Measures: ");
   	codeLinesOfProject = codeLinesProject(projectAnalyzed);
   	print("Volume: ");
   	println(codeLinesOfProject);
   	print("Volume rating: ");
   	volumeRating = volumeCountRating(codeLinesOfProject);
   	println(volumeRating);
   	
   	print("Average Unit Size: ");
   	firstFileOfProjectAnalyzed = projectToList(projectAnalyzed)[0];
   	unitSizes = unitSizeFaster(firstFileOfProjectAnalyzed);
   	
   	averageUnitSize = (toReal(sum(unitSizes)) / toReal(size(unitSizes)));
   	println(averageUnitSize);
   	
   	print("Unit Size Rating: ");
   	usPortfolio = unitSizePortfolio(unitSizes);
   	usRating = unitSizeRatingToSymbol(usPortfolio);
   	println(usRating);
   	
   	println("Cyclomatic complexity: ");
   	complexityPortfolio = riskPortfolio(projectAnalyzed);
   	print("Low risk: ");
   	println(complexityPortfolio.simple);
   	print("Moderate risk: ");
   	println(complexityPortfolio.moderate);
   	print("High risk: ");
   	println(complexityPortfolio.high);
   	print("Very high risk: ");
   	println(complexityPortfolio.veryHigh);
   	
   	print("Cyclomatic Complexity Rating: "); 
   	complexityRating = cyclomaticComplexityRatingToSymbol(complexityPortfolio);
   	println(complexityRating);
   	
   	print("Duplication rate: ");
   	duplication = calculateDuplicateLines(projectAnalyzed);
   	println(duplication);
   	print("Duplication Rating: ");
   	duplicationRatingS = duplicationRating(duplication);
   	println(duplicationRatingS);
   	

   	print("Analysability: ");
   	analysibility = analysabilityMetric(volumeRating,duplicationRatingS,usRating);
   	println(analysibility);
   	
   	print("Changeability: ");
   	changeability = changeabilityMetric(complexityRating,duplicationRatingS);
   	println(changeability);	
   	
   	print("Testability: ");
   	testability = testabilityMetric(usRating,complexityRating);
   	println(testability);	
   	
   	print("Maintainability: ");
   	maintainabilty = maintainabilityMetric(analysibility,changeability,testability);
   	println(maintainabilty);

 
}