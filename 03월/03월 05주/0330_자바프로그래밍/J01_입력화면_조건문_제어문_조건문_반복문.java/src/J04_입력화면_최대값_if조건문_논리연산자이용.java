import java.util.Scanner;

public class J04_입력화면_최대값_if조건문_논리연산자이용{
    public static void main(String[] args) {

        // 자연수 3개를 입력 받아서 
        // 최대값을 구하시오. 
        // 최소값을 구하시오. 
        // 입력값과 출력(print, printf, println 사용 ) 하시오. 

        // 최대값 구현 알고리즘 : 중첩 조건문 활용 구현 하시오. 
        // 최소값 구현 알고리즘 : 중첩 조건문 활용 구현 하시오. 
        
        Scanner sc = new Scanner(System.in); 

        // 1. 입력 
        System.out.println("자연수1을 입력하세요.");
        int num1 = sc.nextInt();

        System.out.println("자연수2를 입력하세요.");
        int num2 = sc.nextInt();

        System.out.println("자연수3을 입력하세요.");
        int num3 = sc.nextInt();

        int max = 0;
        int min = 0;

        // 2. process(처리) 논리연산자 사용 && || ! 을 구하시오. 
            // 2-1. 조건문 (최대값) & 변수저장 max 

            if (num1>num2 && num1>num3){ // num1 기준
                max = num1;
            }
            else if (num2> num1 && num2>num3){ // num2 기준
                max = num2;
            }
            else if (num3>num1 && num3>num2){ // num3 기준
                max = num3;
            }
            

            // 2-2. 조건문 (최소값) & 변수저장 min  && 논리연산자 사용 
           
            if (num1<num2 && num1<num3){
                min = num1;
            }
            else if (num2<num1 && num2<num3){
                min = num2;
            }
            else if (num3<num1 && num3<num2){
                min = num3;
            }



        ////////////////////imformation process////////////////////


        // 3-1 출력형식 : 최대값 
        System.out.println();
        System.out.println("최대값은....! ");
        System.out.printf("자연수 1: %d , 자연수2 : %d, 자연수3 : %d, 최대값: %d", num1, num2, num3, max );
        System.out.println();

        // 3-2. 출력형식 : 최소값 
        System.out.println();
        System.out.println("최소값은 ...! ");
        System.out.printf("자연수 1: %d, 자연수2 : %d, 자연수3 : %d 최소값: %d", num1, num2, num3, min);
        System.out.println();

    }
}

