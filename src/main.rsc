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

public Resource smallSQL = getProject(|project://smallsql0.21_src/|);
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
   	unitsizePortfolio =unitSizePortfolio(unitSizes);
   	unitSizeRating = unitSizeRatingToSymbol(unitsizePortfolio);
   	println(unitSizeRating);
   	
   	println("Cyclomatic complexity: ");
   	complexityPortfolio = riskPortfolio(smallSQL);
   	print("Low risk: ");
   	println(complexityPortfolio.simple);
   	print("Moderate risk: ");
   	println(complexityPortfolio.moderate);
   	print("High risk: ");
   	println(complexityPortfolio.high);
   	print("Very high risk: ");
   	println(complexityPortfolio.untestable);
   	
   	print("Cyclomatic Complexity Rating: "); 
   	complexityRating = unitSizeRating(complexityPortfolio);
   	println(complexityRating);
   	
   	print("Duplication rate: ");
   	duplication = calculateDuplicateLines(smallSQL);
   	println(duplication);
   	print("Duplication Rating: ");
   	duplicationRatingS = duplicationRating(duplication);
   	println(duplicationRatingS);
   	

   	print("Analysability: ");
   	analysibility = analysabilityMetric(volumeRating,duplicationRatingS,unitSizeRating);
   	println(analysibility);
   	
   	print("Changeability: ");
   	changeability = changeabilityMetric(complexityRating,duplicationRatingS);
   	println(changeability);	
   	
   	print("Testability: ");
   	terability = testabilityMetric(unitSizeRating,complexityRating);
   	println(terability);	
   	
   	print("Maintainability: ");
   	maintainabilty = maintainabilityMetric(analysibility,changeability,terability);
   	println(maintainabilty);
   	
 
}