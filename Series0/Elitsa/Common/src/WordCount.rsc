module WordCount

public int wordCount(list[str] input, int(str s) countInLine){
	count = 0;
	for(str line <- input){
		count += countInLine(line);
	}
	return count;
}

public int countInLine1(str S){
	int count = 0;
	  for(/[a-zA-Z0-9_]+/ := S){
       count += 1;
 	 }
  return count;
}

public int countInLine2(str S){
  int count = 0;
  
  // \w matches any word character
  // \W matches any non-word character
  // <...> are groups and should appear at the top level.
  while (/^\W*<word:\w+><rest:.*$>/ := S) { 
    count += 1; 
    S = rest; 
  }
  return count;
}

public int countInLine3(str S){
  return (0 | it + 1 | /\w+/ := S);
}