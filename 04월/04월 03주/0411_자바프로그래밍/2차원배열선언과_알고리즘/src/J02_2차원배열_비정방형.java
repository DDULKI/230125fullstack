public class J02_2차원배열_비정방형 {
    public static void main(String[] args) {
        

        // 정방형    2차원 배열 : 열의 개수가 행마다 같은것 
        // 비정방형  2차원 배열 : 열의 개수가 행마다 다른것 

        // 비정방형 선언과 생성
        // 선생님 
        
        int[][] arr = {
            {21, 3, 5, 33},
            {283, 939, 39, 83, 26, 33},
            {383, 30, 2010, 303033, 33333, 3333, 222},
            {383, 30, 20, 33, 3233, 333, 22}
        };
        int [] sum1 = new int[4]; // 숫자 4가 들어간 곳에 arr.length; 를 적어주면 된다.    


        System.out.println(

        );
        for(int i =0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){ //[i] 줄마다 개수가 다르더라. 할 때 넣어주기. 
                sum1[i] += arr[i][j];
                System.out.printf("%4d", arr[i][j]);
            }
            System.out.println();
            System.out.println();
            System.out.printf(" 합계 %4d", sum1[i]);
        }
        System.out.println();


        // 2차원 배열 선언과 생성 방식 
        int[][] arr1 = new int[4][]; // 행(줄)만 생성한다. 

        // 각행마다 열(칸)을 생성한다. 
        arr1[0] = new int[4];
        arr1[1] = new int[6];
        arr1[2] = new int[7];
        arr1[3] = new int[7];

        int cnt =0;
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){
                
                arr1[i][j] = ++cnt;
            }
        }

        for(int i =0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){ //[i] 줄마다 개수가 다르더라. 할 때 넣어주기. 
                
                System.out.printf("%4d", arr1[i][j]);
            }
            System.out.println();
        }
        System.out.println();


        // 누적합 변수 
        
        
        int[][] array = {
            {21, 3, 5, 33},
            {283, 939, 39, 83, 26, 33},
            {383, 30, 2010, 303033, 33333, 3333, 222},
            {383, 30, 20, 33, 3233, 333, 22}
        };
        int n = array.length;
        int[] sum = new int[n];

        for(int i=0; i<n; i++){
            for(int j=0; j<array[i].length; j++){
                sum[i] += array[i][j];
                System.out.printf("%5d", array[i][j]); // 합계는 같이 쓰지 않음! 
            }
            System.out.println();
            System.out.println();
            System.out.printf("합계 %5d", sum[i]);
            System.out.println();
            System.out.println();
        }
        
       

       
    }
}
