module bottles

import IO;

str bottles(0) = "no more bottles";
str bottles(1) = "1 bottle";
default str bottles(int n) = "<n> bottles";

public void sing(){
	for (n <- [3.. 0]){
		println("<bottles(n)> of beers on the wall, <bottles(n)> of beer.");
		println("take one down, pass it around, <bottles(n-1)>");
	}
	//println("No more bottles of beer on the wall, no more bottles of beer.");
  //println("Go to the store and buy some more, 99 bottles of beer on the wall.");
}