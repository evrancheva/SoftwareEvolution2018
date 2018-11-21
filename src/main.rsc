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

public Resource smallSQL = getProject(|project://smallsql0.21_src/|);
public loc fileSmallSQL = |project://smallsql0.21_src/src/smallsql/database/Column.java|;

public void main(){
	//smallsql 
	println("Small SQL project ");
   	smallSqlCodeLines = codeLinesProject(smallSQL);
   	print("Volume: ");
   	println(smallSqlCodeLines);
   	print("Volume rating: ");
   	println(volumeCountRating(smallSqlCodeLines));
   	print("Average Unit Size: ");
   	unitSizes = unitSizeFaster(fileSmallSQL);
   	averageUnitSize = (toReal(sum(unitSizes)) / toReal(size(unitSizes)));
   	println(averageUnitSize);
   	println("Cyclomatic complexity: ");
   	complexityPortfolio = riskPortfolio(project);
   	print("Low risk: ");
   	println(complexityPortfolio.simple);
   	print("Moderate risk: ");
   	println(complexityPortfolio.moderate);
   	print("High risk: ");
   	println(complexityPortfolio.high);
   	print("Very high risk: ");
   	println(complexityPortfolio.untestable);
   	print("Cyclomatic Complexity Rating: "); 
   	println(riskPerProject(smallSQL));
   	duplication = calculateDuplicateLines(smallSQL);
   	print("Duplication rate: ");
   	println(duplication);
   	print("Duplication Rating: ");
   	println(duplicationRating(duplication));
   	
 
}