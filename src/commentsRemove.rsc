module commentsRemove

import IO;

import util::Resources;
import String;
import Set;
import List;
import ListRelation;
import volume;
import util::Math;
import helpers;

import lang::java::m3::AST;
import lang::java::m3::Core;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;


public list[str] removeComments(list[str] stringsInput) {
	int i = 0;
	while (i < size(stringsInput)) {
		stringsInput[i] = trim(stringsInput[i]);
		
		// Dropping the comments of type "//..." from a line. If the line contained only a comment
		// of type "//...", then it deletes the line completely.
		if (findFirst(stringsInput[i], "//") != -1) {
			stringsInput[i] = trim(substring(stringsInput[i], 0, findFirst(stringsInput[i], "//")));
			if (stringsInput[i] == "") {
				stringsInput = delete(stringsInput, i);
				i = i - 1;
			}
		}
		
		// Checking for comments of type "/* ... */" that start and end in the same line.
		// Then it drops the comment area from the line. If the line contained only comment
		// it gets removed completely.
		else if (findFirst(stringsInput[i], "/*") != -1 && (findFirst(stringsInput[i], "*/") != -1)) {
			tempStr = trim(substring(stringsInput[i], 0, findFirst(stringsInput[i], "/*")));
			stringsInput[i] = tempStr + trim(substring(stringsInput[i], findFirst(stringsInput[i], "*/")+2));
			if (stringsInput[i] == "") {
				stringsInput = delete(stringsInput, i);
				i = i - 1;
			}
		}
		
		// Checking for comments of type "/* ... */" that start from a line and end at another
		// line and  deletes all lines in between.
		else if (findFirst(stringsInput[i], "/*") != -1) {
			
			stringsInput[i] = trim(substring(stringsInput[i], 0, findFirst(stringsInput[i], "/*")));
			if (stringsInput[i] == "") {
				stringsInput = delete(stringsInput, i);
				i = i - 1;
			}
			i = i + 1;
			stringsInput[i] = trim(stringsInput[i]);
			while (i < size(stringsInput) && findFirst(stringsInput[i], "*/") == -1) {
				stringsInput[i] = trim(stringsInput[i]);
				stringsInput = delete(stringsInput, i);
			}
			if (i < size(stringsInput)) {
				stringsInput[i] = trim(stringsInput[i]);			
				stringsInput[i] = trim(substring(stringsInput[i], findFirst(stringsInput[i], "*/")+2));
				if (stringsInput[i] == "") {
				stringsInput = delete(stringsInput, i);
				i = i - 1;
				}
			}
		}
		
		// After trimming, if the line is empty, we delete it.
		else if (i < size(stringsInput) && stringsInput[i] == "") {
			stringsInput = delete(stringsInput, i);
			i = i - 1;
		}
		i = i + 1;
	}
	return stringsInput;
}