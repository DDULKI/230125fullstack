public class J02_2차원배열값증가와출력 {
    public static void main(String[] args) {
        // 2차원 배열 생성과 값 증가 출력
        // 문제1] 
        // 1. 2차원 5행 5열 배열 생성
        // 2. 2차원 배열에 행열에 1씩증가 값을 넣어 출력 하시오.
        // 3. 증가변수는 정수형 cnt
                
        // [1] 입력 설계  2차원 5행 5열
        int[][] arr = new int[5][5];
        int cnt = 0;

        // [3] 처리 설계
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){                   
                // cnt++;  // 전위연산 먼저 증가  cnt++ 후위연산(값을 넣어주고 그리고 증가)
                // arr[i][j] = cnt;  // cnt++ 후위연산(값을 넣어주고 그리고 증가) => 0 1 2 ... 24
                arr[i][j] = ++cnt;  // 전위연산 먼저 증가히거 베얄에 값을 대입한다. ++cnt => 1 2 3 .. 25
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



        // [2-2] 출력 설계 : 내림차순 출력
        //arr.length 5
        System.out.println();
        for(int i=arr.length-1; i>=0; i--){  // 4 3 2 1 0
            for(int j=arr[i].length-1; j>=0; j--){  // 4 3 2 1 0              
                if(j==4){ // 4가 첫번째 칸
                    System.out.printf("%2d",  arr[i][j]);
                }
                else{
                    System.out.printf("%4d",  arr[i][j]);
                }
            }
            System.out.println();
        }
        System.out.println();

        /*
        행열 역순
        4~0  칸

        줄
        4
        ~
        0
        [4][4] [4][3] [4][2] [4][1] [4][0]
        [3][4] [3][3] [3][2] [3][1] [3][0]
        [2][4] [2][3] [2][2] [2][1] [2][0]
        [1][4] [1][3] [1][2] [1][1] [1][0]
        [0][4] [0][3] [0][2] [0][1] [0][0]

        25  24  23  22  21
        20  19  18  17  16
        15  14  13  12  11
        10   9   8   7   6 
         5   4   3   2   1 

         */




    }
}
