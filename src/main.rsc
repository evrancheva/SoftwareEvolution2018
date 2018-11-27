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

public Resource smallSQL = getProject(|project://hsqldb-2.3.1/|);
public loc fileSmallSQL = |project://smallsql0.21_src/src/smallsql/database/Column.java|;

public void main(){
	//smallsql 
	println("Small SQL project ");
   	smallSqlCodeLines = codeLinesProject(smallSQL);
   	print("Volume: ");
   	println(smallSqlCodeLines);
   	print("Volume rating: ");
   	volumeRating = volumeCountRating(smallSqlCodeLines);
   	println(volumeRating);
   	
   	print("Average Unit Size: ");
   	firstFileSmallSQL = projectToList(smallSQL)[0];
   	unitSizes = unitSizeFaster(firstFileSmallSQL);
   	
   	averageUnitSize = (toReal(sum(unitSizes)) / toReal(size(unitSizes)));
   	println(averageUnitSize);
   	
   	print("Unit Size Rating: ");
   	usPortfolio = unitSizePortfolio(unitSizes);
   	usRating = unitSizeRatingToSymbol(usPortfolio);
   	println(usRating);
   	
   	println("Cyclomatic complexity: ");
   	complexityPortfolio = riskPortfolio(smallSQL);
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
   	duplication = calculateDuplicateLines(smallSQL);
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
   	terability = testabilityMetric(usRating,complexityRating);
   	println(terability);	
   	
   	print("Maintainability: ");
   	maintainabilty = maintainabilityMetric(analysibility,changeability,terability);
   	println(maintainabilty);
   	
 
}