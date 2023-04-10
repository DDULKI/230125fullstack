public class J03_2차원배열_랜덤_숫자 {
    public static void main(String[] args) {
        // 임의 숫자(Random Number)를 증가시켜서 정수로 저장
        // Math.random() * 10 + 1;
        // arr [i][j] = ++cnt;
        // arr [i][j] = int math.random() * 10 + 1;
        // 5행 5열 

        
        // 1. 입력 설계 
        int [][] arr = new int[5][5];
      

        // // 3. 처리 설계   arr [i][j] = int math.random() * 10 + 1;
        // for(int i =0; i<arr.length; i++ ){
        //     for (int j=0; j<arr[i].length; j++){
        //             arr [i][j] = (int)(Math.random() * 10 + 1);
              
        //             System.out.printf("%4d", arr[i][j] );
             
                
               
        //     }
        // }


        // 2. 출력 설계 : 숫자 4자리 오른쪽 정렬 (첫칸은 공백없음 )

        // System.out.println("%4d", arr[i][j] );

        
        for (int i=0; i<arr.length; i++){
            for (int j=0; j<arr[i].length; j++){
                arr [i][j] = (int)(Math.random() * 10 + 1);
              
                if(j==0){
                    System.out.printf("%2d " , arr[i][j]);
                }
                else { 
                    System.out.printf("%5d " , arr[i][j]);
                }
               
            }
            System.out.println(); // 이것도 꼭 써줘야함.
        }
        

    }
}
