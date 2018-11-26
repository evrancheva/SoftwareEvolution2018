module duplicationNew


import IO;
import List;
import util::Resources;
import String;
import Set;
import util::Math;

import commentsRemove;
import helpers;

import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

//TODO ADD COMMENTS

public real calculateNewDuplicateLines (Resource project) {

	list[tuple[str string, bool dupl]] blocksOfSix = [];

	list[loc] projectFiles = projectToList(project);
	int duplicatedLines = 0;
	int totalLines = 0;
	str linesOfSix = "";
	
	for (loc file <- projectFiles) {
		list[str] fileLines = removeComments(readFileLines(file));
		// if the file contains less than 6 lines, there is no point to check for duplicate code
		if (size(fileLines) <6) {
			totalLines = totalLines + size(fileLines);
			continue;
		}
		totalLines = totalLines + size(fileLines);
		bool history = false;
		for (currLine <- [0 .. (size(fileLines)-5)]) {
			linesOfSix = "";
			// group the code lines in blocks of 6
			for (i <- [currLine .. (currLine+6)]) {
				linesOfSix = linesOfSix + fileLines[i];
			}
			if (<linesOfSix,false> in blocksOfSix) {
				if (history == false) {
					duplicatedLines = duplicatedLines + 6;
					if ((indexOf(blocksOfSix, <linesOfSix,false>)-1 >= 0) && blocksOfSix[indexOf(blocksOfSix, <linesOfSix,false>)-1].dupl == true) {
						duplicatedLines = duplicatedLines + 1;
					}
					else {
						duplicatedLines = duplicatedLines + 6;
					}
					blocksOfSix[indexOf(blocksOfSix, <linesOfSix,false>)].dupl = true;
					history = true;
				}
				else {
					duplicatedLines = duplicatedLines + 1;
					if ((indexOf(blocksOfSix, <linesOfSix,false>)-1 >= 0) && blocksOfSix[indexOf(blocksOfSix, <linesOfSix,false>)-1].dupl == true) {
						duplicatedLines = duplicatedLines + 1;
					}
					else {
						duplicatedLines = duplicatedLines + 6;
					}
					blocksOfSix[indexOf(blocksOfSix, <linesOfSix,false>)].dupl = true;
				}
			}
			else if (<linesOfSix,true> in blocksOfSix) {
				if (history == false) {
					duplicatedLines = duplicatedLines + 6;
					history = true;
				}
				else {
					duplicatedLines = duplicatedLines + 1;
				}
			}
			else {
				blocksOfSix = blocksOfSix + <linesOfSix,false>;
				history = false;
			}
		}
	}
	return (toReal(duplicatedLines)/toReal(totalLines) * 100);
}

public str duplicationNewRating(real duplicationRate){
	if (duplicationRate <= toReal(3)) {
		return "++";
	} else if (duplicationRate <= toReal(5)) {
		return "+";
	} else if (duplicationRate <= toReal(10)) {
		return "o";
	} else if (duplicationRate <= toReal(20)) {
		return "-";
	} else {
		return "--";
	}
}
