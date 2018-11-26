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
	str unitSizeIntRating = symbolToInt(unitSizeRating);
	str unitComplexityIntRating = symbolToInt(unitComplexityRating);
	int testability = (unitSizeIntRating + unitComplexityIntRating) / 2;
	return intToSymbol(testability);
}