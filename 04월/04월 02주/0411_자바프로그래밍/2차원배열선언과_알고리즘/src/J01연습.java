import java.util.Scanner;

/**
 * J01연습
 */
public class J01연습 {

    public static void main(String[] args) {
        int [][] arr; 

        // 입력값을 행수 열수 
        int row =4; 
        int col =4;
        int cnt = 0;

        // 화면 입력 받기 
        Scanner sc = new Scanner(System.in);
        System.out.println("행의 개수? ");
        row = sc.nextInt();

        System.out.println("열의 개수?");
        col = sc.nextInt();

        int[][] arr2 = {
            {1,2,3,4,},
            {10,20,30,40,50,60},
            {70,80,90}
        };

        arr = new int [row][col]; // 생성 입력 받을 때 마다 배열 값이 변경될 수 있다. 

        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                arr[i][j]= ++cnt;
            }
        }
        System.out.println();

        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                System.out.printf("%5d", arr[i][j] );
            }
            System.out.println();
        }
        System.out.println();

    }
}