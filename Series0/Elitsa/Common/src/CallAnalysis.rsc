module CallAnalysis
import IO;
import Set;
import Relation;
import analysis::graphs::Graph;

//alias Proc = str;

rel[Proc, Proc] Calls = {<"a", "b">, <"b", "c">, <"b", "d">, <"d", "c">, <"d", "e">, <"f", "e">, <"f", "g">, <"g", "e">};

//carrier - gives the set in tuple 
//domain 
//range 
//top 
//bottom - leaves
//indirectCalls - Calls+
//closureCalls = Calls+; 
//calledFromA = closureCalls["a"];
//calledFromF = closureCalls["f"];
//calledFromA & calledFromF; - BOTH called