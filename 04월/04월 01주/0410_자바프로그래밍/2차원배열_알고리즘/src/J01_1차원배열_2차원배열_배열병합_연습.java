/**
 * J01_2차원배열
 */
public class J01_1차원배열_2차원배열_배열병합_연습 {

    public static void main(String[] args) {
        int[] numbers1 = {5, 10, 15, 20, 25};
        int[] numbers2 = {10, 20, 40, 50, 60}; 
        int[] numbers3 = {60, 80, 100, 200, 300};    
    
        int[][] arr1 = {
            {5, 10, 15, 20, 25},
            {10, 20, 40, 50, 60}, 
            {60, 80, 100, 200, 300}
        }; 

        System.out.println("arr1 행개수 = " + arr1.length);

        System.out.println();
        System.out.println("arr1[0] 열 개수 = " + arr1[0].length);
        System.out.println("arr1[1] 열 개수 = " + arr1[1].length);
        System.out.println("arr1[2] 열 개수 = " + arr1[2].length);
        System.out.println();

        for(int i =0; i<arr1.length; i++){
            for(int j=0; j<arr1[i].length; j++){
                System.out.println(arr1[i][j] + "\t");
            }
            System.out.println();
        }
        System.out.println();

        
        int[][] arr2 = {numbers1, numbers2, numbers3};

        System.out.println();
        System.out.println("arr[0] 열 개수 = " + arr2[0].length);
        System.out.println("arr[0] 열 개수 = " + arr2[1].length);
        System.out.println("arr[0] 열 개수 = " + arr2[2].length);
        System.out.println();

        

    }
}