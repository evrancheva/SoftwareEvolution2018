module optDuplication

import IO;
import List;
import util::Resources;
import String;
import Set;

import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

public Resource project = getProject(|project://JavaProject/|);
public Resource projectTest = getProject(|project://smallsql0.21_src/|);

public list[loc] projectToList (Resource project) {
	list[loc] projectFiles = [];
	visit (project) {
		case file(loc f): if (endsWith(f.path, ".java")) { projectFiles = projectFiles + f; }
	}
	return projectFiles;
}

public int calculateDuplicateLines (Resource project) {

	list[str] blocksOfSix = [];

// TODO trim and comments out
	list[loc] projectFiles = projectToList(project);
	int duplicatedLines = 0;
	
	for (loc file <- projectFiles) {
		list[str] fileLines = readFileLines(file);
		int historyCounter=0;
		for (currLine <- [0 .. (size(fileLines)-5)]) {
			str linesOfSix = "";
			for (i <- [currLine .. (currLine+5)]) {
				linesOfSix = linesOfSix + trim(fileLines[currLine]);
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