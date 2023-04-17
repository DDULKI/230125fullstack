public class 마름모만들기 {
    public static void main(String[] args) {
        for (int i=0; i<5; i++){
            for (int j=0; j<5; j++){
                boolean b = i+j < 2 || i-j >2;
                boolean c = i-j > -3 && i +j <7;
                
                if(b) {
                    System.out.printf("");
                } else if(c){
                    System.out.printf("[%d,%d]", i,j);
                }
            }
            System.out.println();
        }

    }
}
