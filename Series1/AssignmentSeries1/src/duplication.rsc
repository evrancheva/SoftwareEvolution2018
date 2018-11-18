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
// TODO hashing

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
	int history = -1;
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
	print("Found ");
	print(dupCounter);
	println(" blocks of duplicated code!");
	
	print("Found ");
	print(dupLines);
	println(" duplicate lines!");
	return (dupLines);
}
