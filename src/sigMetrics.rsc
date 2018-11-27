module sigMetrics

import util::Resources;
import IO;
import util::Math;
import List;
import helpers;
import volume;
import unitSize;
import complexity;
import optDuplication;


public str testabilityMetric(str unitSizeRating, str unitComplexityRating){

	int unitSizeIntRating = symbolToInt(unitSizeRating);
	int unitComplexityIntRating = symbolToInt(unitComplexityRating);
	int testability = (unitSizeIntRating + unitComplexityIntRating) / 2;
	return intToSymbol(testability);
	
}

public str changeabilityMetric(str unitComplexityRating, str duplicationRating){

	int unitComplexityIntRating = symbolToInt(unitComplexityRating);
	int duplicationIntRating = symbolToInt(duplicationRating);
	int changeability = (unitComplexityIntRating + duplicationIntRating) / 2;
	return intToSymbol(changeability);
	
}  

public str analysabilityMetric(str volumeSizeRating, str duplicationRating, str unitSizeRating){

	int volumeSizeIntRating = symbolToInt(volumeSizeRating);
	int duplicationIntRating = symbolToInt(duplicationRating);
	int unitSizeIntRating = symbolToInt(unitSizeRating);
	int analysability = (volumeSizeIntRating + duplicationIntRating + unitSizeIntRating) / 3;
	return intToSymbol(analysability);
	
}

public str maintainabilityMetric(str analysabilityRating, str changabilityRating, str testabilityRating){

	int analysabilityIntRating = symbolToInt(analysabilityRating); 
	int changabilityIntRating = symbolToInt(changabilityRating);
	int testabilityIntRating = symbolToInt(testabilityRating);
	maintainability = (analysabilityIntRating + changabilityIntRating + testabilityIntRating) / 3;
	return intToSymbol(maintainability);

}