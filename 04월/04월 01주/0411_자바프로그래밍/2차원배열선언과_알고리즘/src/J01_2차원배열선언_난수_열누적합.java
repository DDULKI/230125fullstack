import java.util.Scanner;

/**
 * J01_2차원배열선언과_알고리즘
 */
public class J01_2차원배열선언_난수_열누적합 {

    public static void main(String[] args) {
        // 10 ~ 100 미만의 정수의 난수를 생성 그리고 
        // 배열 (열) 값으로 저장 그리고 누적합을 구한다. 
        // 예시] 
        // 난수 출력 열로 
        // 10   26 ... 누적합

        int[][] arr; //선언  
        
        // 입력값을 행수 열수 
        int row=4;
        int col=4; 
        int cnt= 0;

        // 화면 입력 받기 
        Scanner sc = new Scanner(System.in);
        System.out.println("행의 개수? ");
        row = sc.nextInt();

        System.out.println("열의 개수?");
        col = sc.nextInt();

        // 배열이 arr[4][4] 정방형 배열 가로의 열의 개수 크기가 일정한 배열 
        // 배열이 arr[4][4] 비정방형 배열 가로의 열의 개수 크기가 일정하지 않은 배열 
        
        int[][] arr2 = {
            {1,2 ,3 ,4 },
            {10, 20, 30},
            {100, 200, 300, 400, 500, 600}
        };

        arr = new int[row][col]; //생성 입력 받을 때 마다 배열값이 변경될 수 있다. 

        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr.length; j++){ // 배열이 불규칙한 경우 [i]를 써줘야한다. 
                cnt++;
                arr[i][j] = cnt;
            }
        }
        System.out.println();

        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr.length; j++){
                System.out.printf("%10d" , arr[i][j]);
            }
            System.out.println();
        }
        
        


    }
}