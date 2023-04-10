public class J02_2차원배열값증가와출력 {
    public static void main(String[] args) {
        // 2차원 배열 생성과 값 증가 출력 
        // 문제 1] 
        // 1. 2차원 배열 5행 5열 생성 
        // 2. 2차원 배열에 행열에 1씩증가 값을 넣어 출력 하시오. 
        // 3. 증가변수는 정수형 cnt 
        
        // [1] 입력 설계 2차원 5행 5열 

        int[][] arr = new int[5][5];
        int cnt = 0; 

        // [2-1] 처리 설계 5행, 5열 반복시 cnt 증가 
        // :  5행 5열 증가값을 넣는다. 

        for (int i=0; i<arr.length; i++){
            for (int j=0; j<arr[i].length; j++){

                arr[i][j] = ++cnt; // 먼저 증가하고 배열에 값을 대입한다.
                if(j==0){
                    System.out.printf("%2d " , arr[i][j]);
                }
                else { 
                    System.out.printf("%5d " , arr[i][j]);
                }
               
            }
            System.out.println(); // 이것도 꼭 써줘야함.
        }


       
        // [2-2] 출력 설계    5행 5열에 들어있는 증가값 숫자를 우측정렬 출력 
        // System.out.printf("%2d " , arr[i][j]);
        
        for (int i=0; i<arr.length; i++){
            for (int j=0; j<arr[i].length; j++){
                System.out.printf("%2d " , arr[i][j]);
            }
            System.out.println(); // 이것도 꼭 써줘야함.
        }
        
        // 2-3 역순으로 

        
        for (int i=arr.length-1; i>=0; i--){
            for (int j=arr[i].length-1; j>=0; j--){
                if(j==4) { // 4가 첫번째칸 
                    System.out.printf("%2d " , arr[i][j]);
                }   
                else {
                    System.out.printf("%4d " , arr[i][j]);
                }
                // [4][4] [4][3] [4][2] [4][1] [4][0]
                // [3][4] [3][3] [3][2] [3][1] [3][0]
            }
            System.out.println(); // 이것도 꼭 써줘야함.
        }
        System.out.println();
    }
}
