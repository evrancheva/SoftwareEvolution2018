module volume

import IO;


import util::Resources;
import String;
import Set;
import List;


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

// Next function doesnt detects lines inside the comments
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

// Unit Size 
public void unitSize(loc file){
	myModel = createM3FromEclipseProject(file);
	methodSet = methods(myModel);
	methodList = toList(methodSet);
	reversedMethodList = reverse(methodList);
	for(int i <- [0..size(reversedMethodList)]){
		method = reversedMethodList[i];	
		print(method);
		print(" - number of lines - ");
		locFile2List = fileToList(method);
		codeLinePerMethod = codeLines(locFile2List);
		println(codeLinePerMethod);

	}
}

//Complexity 

public lrel[int, int] complexityPerMe(loc complexityPerFile){
	fileTree = createAstFromFile(complexityPerFile,false);
	result = [];
	visit(fileTree) {
		case m:\constructor(_,_,_,_) :
			result += <complexityOfMethod(m),onlyCodeLines(m.src)>;
		case m:\method(_,_,_,_,_) :
			result += <complexityOfMethod(m),onlyCodeLines(m.src)>;
		case m:\method(_,_,_,_) :
			result += <complexityOfMethod(m),onlyCodeLines(m.src)>;
	};
	return result;
}


public int complexityOfMethod(Declaration method){
	int count = 1;		
	visit(method){ 
	    case \if(_,_) : count += 1;
        case \if(_,_,_) : count += 1;
        case \case(_) : count += 1;
        case \do(_,_) : count += 1;
        case \while(_,_) : count += 1;
        case \for(_,_,_) : count += 1;
        case \for(_,_,_,_) : count += 1;
        case foreach(_,_,_) : count += 1;
        case \catch(_,_): count += 1;
        case \conditional(_,_,_): count += 1;
        case infix(_,"&&",_) : count += 1;
        case infix(_,"||",_) : count += 1;
	};
	return count;
	
}




