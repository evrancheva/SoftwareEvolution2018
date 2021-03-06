module optDuplication

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

public real calculateDuplicateLines (Resource project) {

	list[str] blocksOfSix = [];

	list[loc] projectFiles = projectToList(project);
	int duplicatedLines = 0;
	int totalLines = 0;
	str linesOfSix = "";
	
	for (loc file <- projectFiles) {
		list[str] fileLines = removeComments(readFileLines(file));
		// if the file contains less than 6 lines, there is no point on checking for duplicate ones
		if (size(fileLines) <6) {
			totalLines = totalLines + size(fileLines);
			continue;
		}
		totalLines = totalLines + size(fileLines);
		int historyCounter = 0;
		for (currLine <- [0 .. (size(fileLines)-5)]) {
			linesOfSix = "";
			// create blocks of six code lines
			for (i <- [currLine .. (currLine+6)]) {
				linesOfSix = linesOfSix + fileLines[i];
			}
			// if we have encountered the block of six lines again, count them as duplicates
			if (linesOfSix in blocksOfSix) {
				if (historyCounter == 0) {
					duplicatedLines = duplicatedLines + 6;
					historyCounter = 1;
				}
				// if we have consecutive blocks of six duplicated, count only the new code line as duplicated
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
	println(totalLines);
	return (toReal(duplicatedLines)/toReal(totalLines) * 100);
}

// Code found on stack overflow to get a fragment of file, in order to use the hashing
// function. Apparently the hashing function doesn't work with fragments of files.
public loc getFragment(loc f, int startLine, int endLine) {

    loc fragment = |file:///null|;
    int eol = 2;

    if (exists(f)) {
        int offset = 0;
        int len = 0;
        int i = 0;
        int endCol = 0;
        for (str line <- readFileLines(f)) {
            i += 1;
            if (i < startLine) {
                offset += size(line) + eol;
            } else if (i <= endLine) {
                len += size(line);
                if (i == endLine) {
                    endCol = size(line);
                } else {
                    len += eol;
                }
            }
        }
        fragment = f(offset,len,<startLine,0>,<endLine,endCol>);
    } 
    return fragment;
}
// Hashing implemented function of Rascal doesn't work for partitions of files
public str hashTesting (loc file, int startLine) {
	println(readFileLines(getFragment(file, startLine, startLine+5)));
	return(md5HashFile(getFragment(file, startLine, startLine+5)));


}

public str duplicationRating(real duplicationRate){
	if (duplicationRate <= 3.0) {
		return "++";
	} else if (duplicationRate <= 5.0) {
		return "+";
	} else if (duplicationRate <= 10.0) {
		return "o";
	} else if (duplicationRate <= 20.0) {
		return "-";
	} else {
		return "--";
	}
}
