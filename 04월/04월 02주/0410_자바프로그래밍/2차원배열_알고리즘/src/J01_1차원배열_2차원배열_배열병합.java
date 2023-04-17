/**
 * J01_2차원배열
 */
public class J01_1차원배열_2차원배열_배열병합 {

    public static void main(String[] args) {
        // 1. 1차원배열 3개 생성과
        int[] numbers1 = {5, 10, 15, 20, 25};
        int[] numbers2 = {10, 20, 40, 50};
        int[] numbers3 = {60, 80, 100};
        
        
        // 2. 2차원 배열 생성
        int[][] arr1 = {
            {5, 10, 15, 20, 25},
            {10, 20, 30, 50},
            {60, 80, 100}
        };

        // 배열의 길이 (행개수)
        System.out.println("arr1 행개수 = " + arr1.length );

        // 배열의 길이 (열개수)
        System.out.println();
        System.out.println("arr1[0] 열 개수 = " +arr1[0].length );
        System.out.println("arr1[1] 열 개수 = " +arr1[1].length );
        System.out.println("arr1[2] 열 개수 = " +arr1[2].length );
        System.out.println();
        
        // 배열 출력
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){ // i는 줄번호. 
                System.out.print(arr1[i][j] + "\t"); //5칸 출력 
            }
            System.out.println();
        }
        System.out.println();


        
        // 6. 1차원배열 2차원배열로 병합하기 
        int[][] arr2 = {numbers1, numbers2, numbers3};

        System.out.println();
        System.out.println("arr2[0] 열 개수 = " +arr2[0].length );
        System.out.println("arr2[1] 열 개수 = " +arr2[1].length );
        System.out.println("arr2[2] 열 개수 = " +arr2[2].length );
        System.out.println();

        
        
    }
}