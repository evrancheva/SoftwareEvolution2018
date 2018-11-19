module optDuplication

import IO;
import List;
import util::Resources;
import String;
import Set;
import commentsRemove;
import helpers;

import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

public int calculateDuplicateLines (Resource project) {

	list[str] blocksOfSix = [];

	list[loc] projectFiles = projectToList(project);
	int duplicatedLines = 0;
	
	for (loc file <- projectFiles) {
		list[str] fileLines = removeComments(readFileLines(file));
		int historyCounter=0;
		for (currLine <- [0 .. (size(fileLines)-5)]) {
			str linesOfSix = "";
			for (i <- [currLine .. (currLine+5)]) {
				linesOfSix = linesOfSix + fileLines[currLine];
			}
			if (linesOfSix in blocksOfSix) {
				if (historyCounter == 0) {
					duplicatedLines = duplicatedLines + 6;
					historyCounter = 1;
				}
				else {
					duplicatedLines = duplicatedLines + 1;
				}
			}
			else {
				blocksOfSix = blocksOfSix + linesOfSix;
				historyCounter = 0;
			}
			
		}
	}
	return duplicatedLines;
}

public str hashTesting (loc file) {
	
	return (md5HashFile(file));

}