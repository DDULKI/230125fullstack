public class 연습2 {
    public static void main(String[] args) {
        for(int i=0; i<5; i++){
            for(int j=0; j<5; j++){
                boolean b = i+j <=4;
                if(b){
                    System.out.printf("[%d,%d]", i,j);
                }
                else {
                    System.out.print("       ");
                }
            }
            System.out.println();
        }
    }
}
