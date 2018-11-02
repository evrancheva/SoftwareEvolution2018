module Abstract

data Exp = con(int n)          
         | mul(Exp e1, Exp e2) 
         | add(Exp e1, Exp e2) 
         ;
         
public int eval(con(int n)) = n;                            
public int eval(mul(Exp e1, Exp e2)) = eval(e1) * eval(e2); 
public int eval(add(Exp e1, Exp e2)) = eval(e1) + eval(e2);