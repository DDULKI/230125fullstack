public class J02_2차원배열_비정방형 {
    public static void main(String[] args) {
        
        // 정방형    2차원 배열 : 열의 개수가 행마다 같은것
        // 비정방형  2차원 배열 : 열의 개수가 행마다 다른것

        // 비정방형 선언과 생성
        int[][] arr = {
            {21, 3, 56, 7},
            {78, 22, 26, 87, 100, 150},
            {8, 12, 36, 77, 500},
            {98, 42, 26, 97, 500, 150, 250, 540, 700, 230}
        };
        int[] sum = new int[arr.length];
        System.out.println();

        for(int i=0; i<arr.length; i++){ // 행(줄) = Row
            sum[i]=0;
            for(int j=0; j<arr[i].length; j++){ // 열(칸) = Column
                sum[i]+=arr[i][j];  //sum[0] = 누적값 sum[1] = 누적값 ..
                System.out.printf("%4d", arr[i][j]);
            }
            // 칸이 끝나면 마지막 칸에 출력
            System.out.printf(" = [%d]", sum[i]);
            System.out.println();
        }

        System.out.println();

        /*
        21   3  56   7
        78  22  26  87 100 150
        8  12  36  77 500
        98  42  26  97 500 150 250 540 700 230 
        */


        // 출력예시]
        // 행번호 배열값  합계




        // 2차원 배열 선언과 생성방식
        int[][] arr1 = new int[4][]; // 행만 생성한다.
        // 각 행마다 열만 생성한다.
        arr1[0] = new int[4];
        arr1[1] = new int[6];
        arr1[2] = new int[5];
        arr1[3] = new int[10];

        int cnt=0;
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){
                cnt++;
                arr1[i][j] = cnt;
            }
        }

        System.out.println();

        for(int i=0; i<arr1.length; i++){ // 행(줄) = Row
            sum[i]=0;
            for(int j=0; j<arr1[i].length; j++){ // 열(칸) = Column
                sum[i]+=arr1[i][j];  //sum[0] = 누적값 sum[1] = 누적값 .
                System.out.printf("%3d", arr1[i][j]);
            }
             // 칸이 끝나면 마지막 칸에 출력
             System.out.printf(" = [%d]", sum[i]);
            System.out.println();
        }

        System.out.println();

        /* 
        *   
        1  2  3  4
        5  6  7  8  9 10
        11 12 13 14 15
        16 17 18 19 20 21 22 23 24 25
        */



    }
}
