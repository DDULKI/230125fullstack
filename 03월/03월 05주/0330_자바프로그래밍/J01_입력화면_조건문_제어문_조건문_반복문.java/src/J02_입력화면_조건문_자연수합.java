import java.util.*;

public class J02_입력화면_조건문_자연수합 {
    public static void main(String[] args) {
        // 문제 2]
        // 자연수 2개 입력값 받아서 
        // 합과 
        // num1-num2 = 차를 구하시오.
        Scanner sc = new Scanner(System.in);


        // 1. 입력 
        System.out.println("자연수1을 입력하세요.");
        int num1 = sc.nextInt();
        
        System.out.println("자연수2를 입력하세요.");
        int num2 = sc.nextInt();

        // 2. 합 
       
        System.out.printf("num1+num2 : %d + %d = %d\n", num1, num2, num1+num2);
        System.out.println();

        // 2-2 두수의 차 
        // 조건이 필요 : 이유는 작은수-큰수 음수가 나온다. 
        // 그래서 조건문이 필요 큰수-작은수로 처리 
        if(num1 > num2){
            System.out.printf("두 자연수의 차는 %d - %d = %d\n", num1, num2, num1-num2);
            System.out.println();
        }
        else {
            System.out.printf("두 자연수의 차는 %d - %d = %d\n", num2, num1, num2-num1);
            System.out.println();
        }

    

    }
}
