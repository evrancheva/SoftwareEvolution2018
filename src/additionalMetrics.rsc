module additionalMetrics

// to be added to sigMetrics

public str analysabilityMetric(str volumeSizeRating, str duplicationRating, str unitSizeRating){
	str volumeSizeIntRating = symbolToInt(volumeSizeRating);
	str duplicationIntRating = sumbolToInt(duplicationRating);
	str unitSizeIntRating = symbolToInt(unitSizeRating);
	int analysability = (volumeSizeIntRating + duplicationIntRating + unitSizeIntRating) / 3;
	return intToSymbol(analyzability);
}

public str maintainabilityMetric(str analysabilityRating, str changabilityRating, str testabilityRating){
	str analysabilityIntRating = symbolToInt(analysabilityRating); 
	str changabilityIntRating = symbolToInt(changabilityRating);
	str testabilityIntRating = symbolToInt(testabilityRating);
	maintainability = (analysabilityIntRating + changabilityIntRating + testabilityIntRating) / 3;
	return intToSymbol(maintainability);

}