module volume

import IO;


import util::Resources;
import String;
import Set;
import List;
import ListRelation;


import lang::java::m3::AST;
import lang::java::m3::Core;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;



public loc file = |project://JavaProject/src/HelloWorld.java|;
public Resource project = getProject(|project://JavaProject/|);


public list[str] fileToList(loc file){
	return readFileLines(file);
}

public int codeLines(list[str] file){
		int codeLines = size(file);
		return codeLines;
}

// Next function lacks multiline comments
public int countCommentLines(list[str] file){
  int countCommentLines = 0;
  for(lines <- file)
    if(/((\s|\/*)(\/\*|\s\*)|[^\w,\;]\s\/*\/)/ := lines)   
      countCommentLines += 1;
  return countCommentLines;
}

public int countMultiLinesComment(list[str] file){
  int countCommentLines = 0;
  for(lines <- file)
    if(/\/\*.*?\*\//s := lines)   
      countCommentLines += 1;
  return countCommentLines;
}


public int countBlankLines(list[str] file){
  int countBlankLines = 0;
  for(lines <- file)
    if(/^\s*$/ := lines)   
      countBlankLines += 1;
  return countBlankLines;
}

public int onlyCodeLines(loc file){
	listOfCode = fileToList(file);
	totalNumberOfLines = codeLines(listOfCode);
	totalCommentLines = countCommentLines(listOfCode);
	totalBlankLines = countBlankLines(listOfCode);
	int onlyCodeLines = totalNumberOfLines - totalCommentLines - totalBlankLines;
	return onlyCodeLines;
}



