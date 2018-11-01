module CallLifting

alias proc = str;
alias comp = str;

public rel[comp,comp] lift(rel[proc,proc] aCalls, rel[proc,comp] aPartOf){
	return { <C1, C2> | <proc P1, proc P2> <- aCalls, <comp C1, comp C2> <- aPartOf[P1] * aPartOf[P2]};
}