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
// TODO remove comments
// TODO hashing
// TODO remove empty new lines
public void fileToListOfSixLines (loc file){
	list[str] fileStr = readFileLines(file);
	list[str] blocksOfSix = fileStr;
	int sizeFile = size(fileStr);
	
	int k = 0;
	while (k < size(fileStr)) {
		fileStr[k] = trim(fileStr[k]);
		if (fileStr[k] == "") {
			println("before");
			println(fileStr[k]);
			fileStr = delete(fileStr,k);
			println("after");
			println(fileStr[k]);
		}
		k = k + 1;
	}
	println(sizeFile);
	for (int i <- [0 .. size(fileStr)]) {
		println(fileStr[i]);
		}
	for (int i <- [0 .. size(fileStr)-6]) {
		blocksOfSix[i] = fileStr[i]+fileStr[i+1]+fileStr[i+2]+fileStr[i+3]+fileStr[i+4]+fileStr[i+5];
	}
	int dupCounter = 0;
	int history = -1;
	int dupLines=0;
	for (int i <- [0 .. size(fileStr)-6]) {
		for (int j <- [i+1 .. size(fileStr)-6]) {
			if (blocksOfSix[i] == blocksOfSix[j]) {
				dupCounter = dupCounter + 1;
				if (history == i-1) {
					dupLines = dupLines + 1;
				}
				else {
					dupLines = dupLines + 6;
					println(blocksOfSix[i]);
					println(i+1);
				}
				history = i;
				}
		}
	}
	print("Found ");
	print(dupCounter);
	println(" duplicate blocks of six!");
	
	print("Found ");
	print(dupLines);
	println(" duplicate lines!");
	
	//println(blocksOfSix[size(fileStr)-7]);
	//println(fileStr[size(fileStr)-7]+fileStr[size(fileStr)-6]+fileStr[size(fileStr)-5]+fileStr[size(fileStr)-4]+fileStr[size(fileStr)-3]+fileStr[size(fileStr)-2]);
}
