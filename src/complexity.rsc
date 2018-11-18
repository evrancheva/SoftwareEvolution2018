module complexity
import IO;

import util::Resources;
import String;
import Set;
import List;
import ListRelation;
import volume;
import util::Math;


import lang::java::m3::AST;
import lang::java::m3::Core;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;


public list[loc] projectToList (Resource project) {
	list[loc] projectFiles = [];
	visit (project) {
		case file(loc f): if(f.extension == "java")projectFiles = projectFiles + f;
	}
	return projectFiles;
}
public int codeLinesProject(Resource project){
	int codeLines = 0;
	list[str] file_str = [];
	projectFiles = projectToList (project);
	for (i <- [0 .. size(projectFiles)]) {
		file_str = readFileLines(projectFiles[i]);
		codeLines = codeLines + size(file_str);
	}
	return codeLines;
}


public lrel[int cc, int lines] methodComplexitesForFile(loc file){
	fileTree = createAstFromFile(file,false);
	result = [];
	visit(fileTree) {
		case m:\constructor(_,_,_,_) :
			result += <methodComplexity(m),onlyCodeLines(m.src)>;
		case m:\method(_,_,_,_,_) :
			result += <methodComplexity(m),onlyCodeLines(m.src)>;
		case m:\method(_,_,_,_) :
			result += <methodComplexity(m),onlyCodeLines(m.src)>;
	};
	return result;
}


public int methodComplexity(Declaration method){
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

public tuple[real simple, real moderate, real high, real untestable] riskPortfolio(Resource project){
	int simple = 0;
	int moderate = 0;
	int high = 0; 
	int untestable = 0;
	onlyFiles = projectToList(project);
	locPerProject = codeLinesProject(project);
	for(int i <- [0..size(onlyFiles)]){
		lrel[int cc,int lines] file = methodComplexitesForFile(onlyFiles[i]);
		for(int j <- [0..size(file)]){
			if(file[j].cc  >= 1 && file[j].cc <= 10){
					simple += file[j].lines;
			}else if(file[j].cc >= 11 && file[j].cc <= 20){
					moderate += file[j].lines;
			}else if(file[j].cc  >= 21 && file[j].cc  <= 50){
					high += file[j].lines;
			}else{
					untestable += file[j].lines;
			}		
		}	
	}
	totalV = simple + moderate + high + untestable;
	println(<riskInPercentage(simple,totalV),riskInPercentage(moderate,totalV),riskInPercentage(high,totalV),riskInPercentage(untestable,totalV)>);
	return <riskInPercentage(simple,totalV),riskInPercentage(moderate,totalV),riskInPercentage(high,totalV),riskInPercentage(untestable,totalV)>;
}
public real riskInPercentage(int risk, int locOfCode){
	result = toReal(risk)/toReal(locOfCode)*100;
	return result;
}
public str riskPerProject(Resource project){
	riskp = riskPortfolio(project);
	return ratingToSymbol(riskp);
	
}

public str ratingToSymbol(tuple[real simple, real moderate, real high, real untestable] riskP) {
	if (riskP.moderate < 25 && riskP.high < 0 && riskP.untestable < 0) {
		return "++";
	} else if (riskP.moderate <= 30 && riskP.high <= 5 && riskP.untestable <= 0) {
		return "+";
	} else if (riskP.moderate <= 40 && riskP.high <= 10 && riskP.untestable <= 0) {
		return "o";
	} else if (riskP.moderate <= 50 && riskP.high <= 15 && riskP.untestable <= 5) {
		return "-";
	} else {
		return "--";
	}
}


