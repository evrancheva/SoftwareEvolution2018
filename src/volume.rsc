module volume

import IO;


import util::Resources;
import String;
import Set;
import List;
import ListRelation;
import commentsRemove;
import helpers;


public int codeLinesProject(Resource project){
	int codeLines = 0;
	list[loc] projectFiles = projectToList(project);
	for (i <- [0 .. size(projectFiles)]) {
		codeLines += size(removeComments(readFileLines(projectFiles[i])));
	}
	return codeLines;
}

public str volumeCountRating(int fileLines){
	
	if (fileLines <= 66000) {
		return "++";
	} else if (fileLines <= 246000) {
		return "+";
	} else if (fileLines <= 665000) {
		return "o";
	} else if (fileLines <= 1310000) {
		return "-";
	} else {
		return "--";
	}
}