package testProject4;

import java.io.*;
public class File2 {

   public static void main(String args[]) throws IOException {  
	   // Next lines sets InputStream to null
      FileInputStream in = null;
      // Next lines sets OutputStream to null
      FileOutputStream out = null;

      try {
    	 /*
    	  * Creating Input 
    	  * & Output Streams
    	  */
         in = new FileInputStream("input.txt");
         out = new FileOutputStream("output.txt");
        
         /*
          * Setting Counter
          */
         int c;
         
         while ((c = in.read()) != -1) {//while cycle iterating
            out.write(c);
         }
      }finally {
    	  // Closing the connections
         if (in != null) {
            in.close();
         }
         if (out != null) {
            out.close();
         }
         //End of the program
      }
   }
}