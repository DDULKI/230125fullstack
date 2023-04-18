import java.util.Scanner;

public class J03_2차원배열_선언_화면입력값_행열생성_난수_알파벳대문자출력 {
    public static void main(String[] args) {
        // 2차원 배열 화면 입력 행개수, 열개수 입력 받는다. 
        // 행열 값은 난수*65~91를 이용 영문 대문자를 출력한다. 
        // arr[i][j] =(int)(Math.random()*26+25) // 실수 0~1 사이의 실수 0.1 0.001 0.3 0.98 .... 
        // 아스키코드(ASCKI CODE) A(65) B(66) ...Z(91) => 26자 * 난수 + 65
        // 아스키코드(ASCKI CODE) a(97) b(98) ...Z(123) => 26자 * 난수 + 97
        // 아스키코드(ASCKI CODE) 0(48) 1(49) 2(48) ...0(58) => 10자 * 난수 + 48
        // 영문대문자 배열값 = 난수 * 26자 + 65 ==> 65 ~ 91  A ~ Z  
        // 영문소문자 배열값 = 난수 * 26자 + 97 ==> 97 ~ 123  A ~ Z
        // 출력 강제형변환 정수를 문자로 출력 
        
    
        // 1. 입력설계 : 정방형 2차원 배열 사용 
        
        int[][] arr; 
        int rowNum = 0; 
        int colNum = 0; 

        Scanner sc = new Scanner(System.in);

        System.out.println("행수 입력 ");
        rowNum = sc.nextInt();

        System.out.println("열수 입력? ");
        colNum = sc.nextInt();
        arr = new int [rowNum][colNum];
        

    

        // 3. 처리설계 (구현)
        for(int i=0; i<arr.length; i++){
            for (int j=0; j<arr[i].length; j++){
                arr[i][j] =(int)(Math.random()*26+25);
            }
            System.out.println();
        }

        

        
        // 2. 출력 설계 
        for(int i=0; i<arr.length; i++){
            for (int j=0; j<arr[i].length; j++){
                System.out.printf("%3c", (char)arr[i][j]);
            }
            System.out.println();
        }

       

    }
}
