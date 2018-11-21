module volume

import IO;


import util::Resources;
import String;
import Set;
import List;
import ListRelation;
import commentsRemove;
import helpers;



public int countCodeLines(loc file){
	listOfCode = fileToList(file);
	list[str] onlyCodeLines = removeComments(listOfCode);
	return size(onlyCodeLines);
}


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
