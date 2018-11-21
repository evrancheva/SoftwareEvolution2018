module duplication

import IO;
import List;
import util::Resources;
import String;
import Set;

import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;


public loc dupFile = |project://JavaProject/src/dupCheck.java|;
public Resource project = getProject(|project://JavaProject/|);
public Resource projectTest = getProject(|project://smallsql0.21_src/|);
// TODO hashing

public int hashLine(str line){
    int hash = 0;
    for (int x <- [0 .. size(line)]){
        hash = (hash*256 + (charAt(line, x)))%101;
    }
    return hash;
}
public list[int] filesToHash (list[str] mergedFiles) {
	list[int] hashedLines = [0 .. size(mergedFiles)];
	for (int i <- [0 .. size(mergedFiles)]) {
		hashedLines[i] = hashLine(mergedFiles[i]);
	}
	return hashedLines;
}

public list[loc] projectToList (Resource project) {
	list[loc] projectFiles = [];
	visit (project) {
		case file(loc f): if (endsWith(f.path, ".java")) { projectFiles = projectFiles + f; }
	}
	return projectFiles;
}


public list[str] mergeAllFiles (Resource project) {
	list[loc] projectFiles = projectToList (project);
	list[str] mergedFiles = [];
	for (i <- [0 .. size(projectFiles)]) { 
		mergedFiles = mergedFiles + readFileLines(projectFiles[i]);
	}
	return mergedFiles;
}

public int fileToListOfSixLines (Resource project) {
	list[str] mergedFiles = mergeAllFiles(project);
	list[str] blocksOfSix;
	
	// TODO remove comment lines
	int k = 0;
	while (k < size(mergedFiles)) {
		mergedFiles[k] = trim(mergedFiles[k]);
		if (mergedFiles[k] == "") {
			mergedFiles = delete(mergedFiles,k);
		}
		k = k + 1;
	}
	
	blocksOfSix = mergedFiles;
	
	for (int i <- [0 .. 5]) {
		blocksOfSix = delete(blocksOfSix,0);
	}
	
	println(size(mergedFiles));
	println(size(blocksOfSix));
	
	for (int i <- [0 .. size(mergedFiles)-5]) {
		blocksOfSix[i] = mergedFiles[i]+mergedFiles[i+1]+mergedFiles[i+2]+mergedFiles[i+3]+mergedFiles[i+4]+mergedFiles[i+5];
	}
	for (int i <- [0 .. size(blocksOfSix)]) {
		print(i);
		println(blocksOfSix[i]);
	}
	
	int dupCounter = 0;
	int dupLines = 0;
	int i=0;
	int j=0;
	while (i < size(blocksOfSix)) {
		j = i + 1;
		while (j < size(blocksOfSix)) {
			if (blocksOfSix[i] == blocksOfSix[j]) {
				dupCounter = dupCounter + 1;
				dupLines = dupLines + 6;
				println("---");
				println(i);
				println(blocksOfSix[i]);
				println(j);
				println(blocksOfSix[j]);
				println("---");
				i = i + 1;
				j = j + 1;
				while (i < size(blocksOfSix) && j < size(blocksOfSix) && blocksOfSix[i] == blocksOfSix[j]) {
					dupLines = dupLines + 1;
					println(i);
					println(blocksOfSix[i]);
					println(j);
					println(blocksOfSix[j]);
					i = i + 1;
					j = j + 1;
				}
			}
			j = j + 1;
		}
		i = i + 1;
	}
}

public str duplicationRating(real duplicationRate){
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
