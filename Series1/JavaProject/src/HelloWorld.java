public class HelloWorld {

    public static void main(String[] args) {
        // Prints "Hello, World" to the terminal window.
        System.out.println("Hello, World");
    }
    public static void hello() {
    	int a = 22;
    	if(a > 10 && a < 30) {
    		System.out.println(a);
    	}

    }    
    public int f(int i, int j) {
        int result = 0;
        if(i % 2 == 0) {
            result = i + j;
        }
        else {
            if(j % 2 == 0) {
                result = i * j;
            }
            else {
                result = i - j;
            }
        }
        return result;
    }
}