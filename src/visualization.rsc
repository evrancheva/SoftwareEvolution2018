module visualization

import Relation;
import String;
import Map;
import List;
import Set;

import vis::Figure;
import vis::Render;

//public Figure hBarChart(map[str,num] vals){
// return
// bottomScreen("categories",
// leftAxis("y",
// hcat(
//	[box(height(convert(vals[k],"y")),
//	 project(text(k),"categories"),
//	 fillColor("blue"))
//	| k <- vals],
//hgrow(1.2))
// ));
//}

public void try(){
	overlay(
	 [box(project(text("A"),"s"),left(),top(),fillColor("red"),shrink(0.4)),
	 box(project(text("B"),"s"),center(),fillColor("green"),shrink(0.4)),
	 box(project(text("C"),"s"),right(),bottom(),fillColor("yellow"),shrink(0.4))
	 ], stdFontSize(20));
}




data COMPANY = company(str name, list[DIVISION] divisions);
data DIVISION = division(str name, list[UNIT] units);
data UNIT = unit(str name, int employees, int profit);

public COMPANY we =
 company("World Energy Ltd",
 [ division("Traditional",
 [ unit("Oil", 1000, 20000000),
 unit("Gas", 2000, 15000000)
 ]),
 division("Eco",
 [ unit("Wind", 500, 1000000),
 unit("Sun", 300, 3000000),
 unit("Bio", 100, 1050000)
 ]),
 division("Research",
 [ unit("Hydro", 50, 450000),
 unit("Earth", 80, 200000)
 ])
 ] );
 
 
 public tuple[int, int] totals(COMPANY c){
 nemp = 0;
 nprof = 0;
 for(/unit(name, emp, prof) <- c){
 nemp += emp;
 nprof += prof;
 }
 return <nemp, nprof>;
}
 public Figure drawCompany(COMPANY c){
 <nemp, nprof> = totals(c);
 return tree(box(text(c.name), fillColor("grey")),
 [drawDivision(d, nemp, nprof) | d <- c.divisions],
 std(gap(20)));
}

Figure drawDivision(DIVISION div, int totalEmployees, int totalProfit){
 return tree(ellipse(text(div.name)),
 [drawUnit(u, totalEmployees, totalProfit) | u <- div.units]);
}
Figure drawUnit(UNIT u, int totalEmployees, int totalProfit){
 percEmp = 100 * u.employees / totalEmployees; // percentage employees in unit
 avg = 100 * totalProfit / totalEmployees;
 thisAvg = 100 * u.profit / u.employees; // average profit per employee in unit
 c = mapColor1(avg, thisAvg);
 return box(text(u.name), size(50, 4*percEmp), resizable(false), fillColor(c));
}
Color mapColor1(num avg, num uAvg) =
 uAvg < avg ? color("red") : color("green");
