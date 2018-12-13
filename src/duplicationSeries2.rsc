module duplicationSeries2

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

public real dupLinesStats (Resource project) {

	int blockSize = 6;
	
	list [tuple [str lineName, list [tuple [loc file, int startLine, int endLine] clone] classList] class] cloneClasses = [];
	/*
	cloneClasses += [<"HE",[<"FJFJ",0,0>]>];
	cloneClasses[0].classList += [<"ff",0,10>];
	println(cloneClasses);
	*/

	list [tuple [int startLine, int endLine]] duplicatedLOC = [];
	tuple [int tempStartLine, int tempEndLine] blockDupLines = <0,0>;	
	list[str] blocksOfSix = [];
	//list [tuple [str lines, list [tuple <str fileName, int startLine, int endLine] tu] ek] cloneClasses = [];
	int duplicatedLines = 0;
	int totalLines = 0;
	str linesOfSix = "";
	int historyCounter = 0;
	bool isFirst = true;
	str duplicatedString = "";
	
	list[loc] projectFiles = projectToList(project);
	
	writeFile(results, "{\n\t\"files\": [{\n");
	for (loc file <- projectFiles) {
		list[str] fileLines = removeComments(readFileLines(file));
		// if the file contains less than blockSize lines, there is no point on checking for duplicate ones
		if (size(fileLines) < blockSize) {
			totalLines += size(fileLines);
			printResultsToJson(file, size(fileLines), [<0,0>], isFirst);
			duplicatedLOC = [];
			continue;
		}
		totalLines += size(fileLines);
		for (currLine <- [0 .. (size(fileLines)-blockSize+1)]) {
			linesOfSix = "";
			// create blocks of blockSize code lines
			linesOfSix = createBlocksOfLines(currLine, blockSize, fileLines);
			// if we have encountered the block of blockSize lines again, count them as duplicates
			if (linesOfSix in blocksOfSix) {
				if (historyCounter == 0) {
					blockDupLines = <currLine, currLine + blockSize>;
					duplicatedString = linesOfSix;
					duplicatedLines = duplicatedLines + blockSize;
					historyCounter = 1;
				}
				// if we have consecutive blocks of six duplicated, count only the new code line as duplicated
				else {
					duplicatedString += fileLines[currLine + blockSize-1];
					blockDupLines.tempEndLine = blockDupLines.tempEndLine + 1;
					duplicatedLines = duplicatedLines + 1;
				}
			}
			else {
				blocksOfSix = blocksOfSix + linesOfSix;
				if (historyCounter != 0) {
					if (!(duplicatedString in cloneClasses.lineName)) {
						cloneClasses += [<duplicatedString, [<file, blockDupLines.tempStartLine, blockDupLines.tempEndLine>]>];
					}
					else {
						int index = indexOf(cloneClasses.lineName, duplicatedString);
						cloneClasses[index].classList += [<file, blockDupLines.tempStartLine, blockDupLines.tempEndLine>];
					}
				}
				if (blockDupLines.tempEndLine != 0) {
					duplicatedLOC = duplicatedLOC + [blockDupLines];
					blockDupLines = <0,0>;
				}
				historyCounter = 0;
			}
		}
		if (blockDupLines.tempEndLine != 0) {
			duplicatedLOC = duplicatedLOC + [blockDupLines];
			blockDupLines = <0,0>;
		}
		historyCounter = 0;
		if (duplicatedLOC == []) {
			duplicatedLOC = [<0,0>];
		}
		printResultsToJson(file, size(fileLines), duplicatedLOC, isFirst);
		isFirst = false;
		duplicatedLOC = [];
		
	}
	appendToFile(results, "\t}]\n}");
	println(getBiggestClassClone(cloneClasses));
	
	if (totalLines == 0) {
		return 0;
	}
	else {
		return (toReal(duplicatedLines)/toReal(totalLines) * 100);
	}
	
}
private void printResultsToJson(loc file, int lOC, list[tuple[int startLine, int endLine]] duplicatedLOC, bool isFirst) {
	if (!isFirst) {
		appendToFile(results, "\t}, {\n");
	}
	appendToFile(results, "\t\t\"file_name\": ", "\"",file,"\",\n");
	appendToFile(results, "\t\t\"loc\": ", "\"",lOC,"\",\n");
	appendToFile(results, "\t\t\"clones\": [");
	if (size(duplicatedLOC) > 1) {
		int i = 0;
		for (i <- [0 .. size(duplicatedLOC)-1]) {
			appendToFile(results, "{\n\t\t\t\"start_line\": ", duplicatedLOC[i].startLine,",\n");
			appendToFile(results, "\t\t\t\"end_line\": ", duplicatedLOC[i].endLine,"\n\t\t}, ");
		}
		appendToFile(results, "{\n\t\t\t\"start_line\": ", duplicatedLOC[i+1].startLine,",\n");
		appendToFile(results, "\t\t\t\"end_line\": ", duplicatedLOC[i+1].endLine,"\n\t\t}]\n");
	}
	if (size(duplicatedLOC) == 1) {
		appendToFile(results, "{\n\t\t\t\"start_line\": ", duplicatedLOC[0].startLine,",\n");
		appendToFile(results, "\t\t\t\"end_line\": ", duplicatedLOC[0].endLine,"\n\t\t}]\n");
	}

}
private str createBlocksOfLines(int currLine, int blockSize, list[str] fileLines) {
	str linesOfBlockSize = "";
	for (int i <- [currLine .. (currLine+blockSize)]) {
		linesOfBlockSize += fileLines[i];
	}
	return linesOfBlockSize;
}

private tuple[int, int] getBiggestClassClone (list [tuple [str lineName, list [tuple [loc file, int startLine, int endLine] clone] classList] class] cloneClasses) {
	int temp, i, index = 0, max = 0;
	for (i <- [0 .. size(cloneClasses)]) {
		temp = size(cloneClasses[i].classList);
		if (max < temp) {
			max = temp;
			index = i;
		}
	}
	return <index,max>;
}
/*
private void printStatistictToJson () {

% of duplicated lines,
number of clones,
number of clone classes,
biggest clone (in lines),
biggest clone class,
example clones.

int i;
} 
*/