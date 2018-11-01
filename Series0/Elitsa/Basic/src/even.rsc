module even

import IO;

public list[int] even(int max){
 return for(int i <- [0..max+1],i%2 == 0)
 		append i;
}

public list[int] even2(int max){
	return [i | i <- [0..max], i%2 == 0];
}

list[int] even3(int max) = [i | i <- [0..max],i%2==0];

set[int] even7(int max) = {i | i <-[0..max], i%2 ==0};