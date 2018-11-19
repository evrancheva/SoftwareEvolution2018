module volume

import IO;


import util::Resources;
import String;
import Set;
import List;
import ListRelation;
import commentsRemove;
import helpers;



public int countCodeLines(loc file){
	listOfCode = fileToList(file);
	list[str] onlyCodeLines = removeComments(listOfCode);
	return size(onlyCodeLines);
}



