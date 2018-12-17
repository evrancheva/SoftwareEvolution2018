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
	list [tuple [loc fileName, int fileLines, list [tuple [str lineName, int startLine, int endLine] lines] classList] clone] fileClones = [];
	tuple [int tempStartLine, int tempEndLine] blockDupLines = <0,0>;	
	list[str] blocksizeLines = [];
	int duplicatedLines = 0, totalLines = 0, fileCount = 0;
	str linesOfBlocksize = "", duplicatedString = "", linesName = "";
	bool historyCounter = false;
	
	list[loc] projectFiles = projectToList(project);
	
	for (loc file <- projectFiles) {
		fileCount += 1;
		list[str] fileLines = removeComments(readFileLines(file));
		fileClones += [<file, size(fileLines), []>];
		// if the file contains less than blockSize lines, there is no point on checking for duplicate ones
		if (size(fileLines) < blockSize) {
			totalLines += size(fileLines);
			continue;
		}
		totalLines += size(fileLines);
		for (currLine <- [0 .. (size(fileLines)-blockSize+1)]) {
			linesOfBlocksize = "";
			// create blocks of blockSize code lines
			linesOfBlocksize = createBlocksOfLines(currLine, blockSize, fileLines);
			// if we have encountered the block of blockSize lines again, count them as duplicates
			if (linesOfBlocksize in blocksizeLines) {
				if (historyCounter == false) {
					blockDupLines = <currLine, currLine + blockSize>;
					duplicatedString = linesOfBlocksize;
					duplicatedLines = duplicatedLines + blockSize;
					historyCounter = true;
				}
				// if we have consecutive blocks of six duplicated, count only the new code line as duplicated
				else {
					duplicatedString += fileLines[currLine + blockSize-1];
					blockDupLines.tempEndLine = blockDupLines.tempEndLine + 1;
					duplicatedLines = duplicatedLines + 1;
				}
			}
			else {
				blocksizeLines = blocksizeLines + linesOfBlocksize;
				if (historyCounter == true) {
					if (!(duplicatedString in cloneClasses.lineName)) {
						cloneClasses += [<duplicatedString, [<file, blockDupLines.tempStartLine, blockDupLines.tempEndLine>]>];
					}
					else {
						int index = indexOf(cloneClasses.lineName, duplicatedString);
						cloneClasses[index].classList += [<file, blockDupLines.tempStartLine, blockDupLines.tempEndLine>];
					}
					fileClones[fileCount-1].classList += [<replaceAll(duplicatedString, "\t", "    "), blockDupLines.tempStartLine, blockDupLines.tempEndLine>];
					blockDupLines = <0,0>;
					historyCounter = false;
				}
			}
		}
		if (historyCounter == true) {
			if (!(duplicatedString in cloneClasses.lineName)) {
				cloneClasses += [<duplicatedString, [<file, blockDupLines.tempStartLine, blockDupLines.tempEndLine>]>];
			}
			else {
				int index = indexOf(cloneClasses.lineName, duplicatedString);
				cloneClasses[index].classList += [<file, blockDupLines.tempStartLine, blockDupLines.tempEndLine>];
			}
			fileClones[fileCount-1].classList += [<replaceAll(duplicatedString, "\t", "    "), blockDupLines.tempStartLine, blockDupLines.tempEndLine>];
			blockDupLines = <0,0>;
		}
		historyCounter = false;
		
	}
	printResultsToJson(fileClones, project, toReal(duplicatedLines)/toReal(totalLines) * 100, duplicatedLines,
						totalLines, duplicatedLines, getClassesNumber(cloneClasses),
						getBiggestCloneLines(cloneClasses), getBiggestClassClone(cloneClasses));

	return (toReal(duplicatedLines)/toReal(totalLines) * 100);
	
} 
private str createBlocksOfLines(int currLine, int blockSize, list[str] fileLines) {
	str linesOfBlockSize = "";
	for (int i <- [currLine .. (currLine+blockSize)]) {
		linesOfBlockSize += fileLines[i] + "ELITSA";
	}
	return linesOfBlockSize;
}

private int getClassesNumber (list [tuple [str lineName, list [tuple [loc file, int startLine, int endLine] clone] classList] class] cloneClasses) {
	return (size(cloneClasses));
}

private int getBiggestClassClone (list [tuple [str lineName, list [tuple [loc file, int startLine, int endLine] clone] classList] class] cloneClasses) {
	int temp, i, index = 0, max = 0;
	for (i <- [0 .. size(cloneClasses)]) {
		temp = size(cloneClasses[i].classList);
		if (max < temp) {
			max = temp;
			index = i;
		}
	}
	return max;
	//return <index,max>;
}

private int getBiggestCloneLines (list [tuple [str lineName, list [tuple [loc file, int startLine, int endLine] clone] classList] class] cloneClasses) {
	int i,j, max = 0;
	//tuple [int io, int jo] index = <0,0>;
	for (i <- [0 .. size(cloneClasses)]) {
		for (j <- [0 .. size(cloneClasses[i].classList)]) {
			temp = cloneClasses[i].classList[j].endLine - cloneClasses[i].classList[j].startLine;
			if (max < temp) {
				max = temp;
				//index = <i,j>;	
			}
		}
	}
	return max;
	//return <index.io, index.jo, max>;
}

private void checkFragmentsClones (list [tuple [str lineName, list [tuple [loc file, int startLine, int endLine] clone] classList] class] cloneClasses) {
	int i, j;
	list [tuple [loc fileName, list [tuple [str lineName, int startLine, int endLine] lines] classList] clone] fileClones = [];

	for (i <- [0 .. size(cloneClasses)]) {
		for (j <- [0 .. size(cloneClasses[i].classList)]) {
			if (cloneClasses[i].classList[j].file) {
				println("----------------------------------");
				println(cloneClasses[i].classList);
			}
		}
	}
}
private void printResultsToJson(list [tuple [loc fileName, int fileLines, list [tuple [str lineName, int startLine, int endLine] lines] classList] clone] fileClones,
								Resource projectName, real dupPercentage, int totalDupLines, int totalLOC, int clonesNum,
								int classNum, int biggestCloneLines, int biggestCloneClass) {

	writeFile(results, "{\n\t\"name_of_project\": \"", "TEST_smallProject", "\",\n");
	appendToFile(results, "\t\"duplicates_percentage\": \"", dupPercentage, "\",\n");
	appendToFile(results, "\t\"total_duplicates_lines\": \"", totalDupLines, "\",\n");
	appendToFile(results, "\t\"loc_project\": \"", totalLOC, "\",\n");
	appendToFile(results, "\t\"number_of_clones\": \"", clonesNum, "\",\n");
	appendToFile(results, "\t\"number_of_classes\": \"", classNum, "\",\n");
	appendToFile(results, "\t\"biggest_clone_lines\": \"", biggestCloneLines, "\",\n");
	appendToFile(results, "\t\"biggest_clone_class\": \"", biggestCloneClass, "\",\n");
	
	appendToFile(results, "\t\"example_clones\": {\n");
	int i,j = 0;
	for (i <- [0 .. 4]) {
		while (size(fileClones[j].classList) < 1) {
			j += 1;
		}
		appendToFile(results, "\t\t\"clone_", i+1, "\": {\n");
		appendToFile(results, "\t\t\t\"lines\": \"", fileClones[j].classList[0].startLine,"-", fileClones[j].classList[0].endLine, "\",\n");
		appendToFile(results, "\t\t\t\"code_lines\": \"", fileClones[j].classList[0].lineName, "\",\n");
		appendToFile(results, "\t\t\t\"file\": \"", fileClones[j].fileName, "\"\n");
		appendToFile(results, "\t\t},\n");
		j += 1;
	}
	appendToFile(results, "\t\t\"clone_", 5, "\": {\n");
	appendToFile(results, "\t\t\t\"lines\": \"", fileClones[j+1].classList[0].startLine,"-", fileClones[j+1].classList[0].endLine, "\",\n");
	appendToFile(results, "\t\t\t\"code_lines\": \"", fileClones[j+1].classList[0].lineName, "\",\n");
	appendToFile(results, "\t\t\t\"file\": \"", fileClones[j+1].fileName, "\"\n");
	appendToFile(results, "\t\t}\n\t},\n\t\"files\": [{\n");
	
	i = 0;
	while (i < size(fileClones)-1) {
		appendToFile(results, "\t\t\"file_name\": \"", fileClones[i].fileName, "\",\n");
		appendToFile(results, "\t\t\"loc\": \"", fileClones[i].fileLines, "\"");
		if (size(fileClones[i].classList) > 1) {
		appendToFile(results, ",\n\t\t\"clones\": [{\n");
			j = 0;
			while (j < size(fileClones[i].classList)-1) {
				appendToFile(results, "\t\t\t\"start_line\": ", fileClones[i].classList[j].startLine, ",\n");
				appendToFile(results, "\t\t\t\"end_line\": ", fileClones[i].classList[j].endLine, ",\n");
				appendToFile(results, "\t\t\t\"code_lines\": \"", fileClones[i].classList[j].lineName, "\"\n");
				appendToFile(results, "\t\t}, {\n");
				j += 1;
			}
			appendToFile(results, "\t\t\t\"start_line\": ", fileClones[i].classList[j].startLine, ",\n");
			appendToFile(results, "\t\t\t\"end_line\": ", fileClones[i].classList[j].endLine, ",\n");
			appendToFile(results, "\t\t\t\"code_lines\": \"", fileClones[i].classList[j].lineName, "\"\n");
			appendToFile(results, "\t\t}]\n\t}, {\n");
		}
		else if (size(fileClones[i].classList) == 1) {
			appendToFile(results, ",\n\t\t\"clones\": [{\n");
			appendToFile(results, "\t\t\t\"start_line\": ", fileClones[i].classList[0].startLine, ",\n");
			appendToFile(results, "\t\t\t\"end_line\": ", fileClones[i].classList[0].endLine, ",\n");
			appendToFile(results, "\t\t\t\"code_lines\": \"", fileClones[i].classList[0].lineName, "\"\n");
			appendToFile(results, "\t\t}]\n\t}, {\n");
		}
		else {
			appendToFile(results, "\n\t}, {\n");
		}
		i += 1;
	}
	appendToFile(results, "\t\t\"file_name\": \"", fileClones[i].fileName, "\",\n");
		appendToFile(results, "\t\t\"loc\": \"", fileClones[i].fileLines, "\"");
		if (size(fileClones[i].classList) > 1) {
			appendToFile(results, ",\n\t\t\"clones\": [{\n");
			j = 0;
			while (j < size(fileClones[i].classList)-1) {
				appendToFile(results, "\t\t\t\"start_line\": ", fileClones[i].classList[j].startLine, ",\n");
				appendToFile(results, "\t\t\t\"end_line\": ", fileClones[i].classList[j].endLine, ",\n");
				appendToFile(results, "\t\t\t\"code_lines\": \"", fileClones[i].classList[j].lineName, "\"\n");
				appendToFile(results, "\t\t}, {\n");
				j += 1;
			}
			appendToFile(results, "\t\t\t\"start_line\": ", fileClones[i].classList[j1].startLine, ",\n");
			appendToFile(results, "\t\t\t\"end_line\": ", fileClones[i].classList[j].endLine, ",\n");
			appendToFile(results, "\t\t\t\"code_lines\": \"", fileClones[i].classList[j].lineName, "\"\n");
			appendToFile(results, "\t\t}]\n\t}]\n}");
		}
		else if (size(fileClones[i].classList) == 1) {
			appendToFile(results, ",\n\t\t\"clones\": [{\n");
			appendToFile(results, "\t\t\t\"start_line\": ", fileClones[i].classList[0].startLine, ",\n");
			appendToFile(results, "\t\t\t\"end_line\": ", fileClones[i].classList[0].endLine, ",\n");
			appendToFile(results, "\t\t\t\"code_lines\": \"", fileClones[i].classList[0].lineName, "\"\n");
			appendToFile(results, "\t\t}]\n\t}]\n}");
		}
		else {
			appendToFile(results, "\n\t}, {\n");
		}
}

