public class J02_연습 {
    public static void main(String[] args) {
        int[][] arr = new int[5][5];
        int cnt = 0; 

        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                arr[i][j] = ++cnt;
                
            }
           
        }
         // [2-1] 출력 설계 : 오름차순
         for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){                
                if(j==0){
                    System.out.printf("%2d",  arr[i][j]);
                }
                else{
                    System.out.printf("%4d",  arr[i][j]);
                }
            }
            System.out.println();
        }



        // 역순으로 
        System.out.println();
        for (int i=arr.length-1; i>=0; i--){ // 행길이 -1 4 3 2 1 0  
            for (int j=arr[i].length-1; j>=0; j--){// 열길이 -1 4 3 2 1 0 
                if(j==4) { // 가 첫번째칸 
                    System.out.printf("%2d", arr[i][j]);
                }
                else {
                    System.out.printf("%4d", arr[i][j]);
                }
               
            } 
            System.out.println();
        }
         System.out.println();
    }
}
