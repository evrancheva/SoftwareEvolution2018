package testProject2;

import java.awt.*;  
import java.awt.event.*;  
import javax.swing.*;  
  
class File3 extends JFrame implements ActionListener  
{  
    public void actionPerformed(ActionEvent e)  
    {  
        if(e.getSource()==b1)  
        {  
          // TODO
        }  
        if(e.getActionCommand().equals("Bookmark"))  
        {  
           System.exit(0);  
        }  
    }  
    void set()  
    boolean check()  
    {  
        if(current==0)  
            return(jb[1].isSelected());  
        if(current==1)  
            return(jb[2].isSelected());  
        if(current==2)  
            return(jb[3].isSelected());  
        if(current==3)  
            return(jb[0].isSelected());  
        if(current==4)  
            return(jb[2].isSelected());  
        if(current==5)  
            return(jb[2].isSelected());  
        return false;  
    }  
 
}