module cloneTests

import IO;

import util::Resources;
import String;
import Set;
import List;
import ListRelation;
import volume;
import commentsRemove;
import util::Math;

import lang::java::m3::AST;
import lang::java::m3::Core;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;

import helpers;
import duplicationSeries2;

public Resource testProject1 = getProject(|project://testProject1|);
public Resource testProject2 = getProject(|project://testProject2|);

public tuple [real, int] testClones () {
	return <testNumber1(testProject1), testNumber2(testProject2)>;
}

public real testNumber1 (Resource project1) {
	return dupLinesStats(project1).dupPerc;
}

public int testNumber2 (Resource project1) {
	return dupLinesStats(project1).biggestCloneClass;
}



