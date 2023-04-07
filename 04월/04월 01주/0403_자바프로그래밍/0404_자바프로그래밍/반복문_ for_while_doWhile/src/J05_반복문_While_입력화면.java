import java.util.Scanner;

public class J05_반복문_While_입력화면 {
    public static void main(String[] args) {
        // 문제] 
        // 무한 반복문 while문 
        // 화면에서 문자(character) 입력 받는다. 
        // 입력문자는 문자형 변수는 ch 변수 사용 
        // 증감 정수형 변수는 cnt 변수 사용
        // a를 입력하면 숫자 1 증가 
        // b를 입력하면 숫자 1 증가 
        // c를 입력하면 숫자 1 증가 
        // x를 입력하면 숫자 1 감소
        // y를 입력하면 숫자 1 감소
        // z를 입력하면 숫자 1 감소
        // 프로그램 종료는 e 를 입력시 강제종료. 
        // 프로그램 종료시 연산 결과 출력하시오. 

        int cnt = 0; 
       
        Scanner sc = new Scanner(System.in);
        while(true){
            System.out.println("문자를 입력 a|b|c|는 증가 x|y|z|는 감소 종료 ! e ");
            
            char ch = sc.next().charAt(0); // 공백전까지 입력 1글자 

            if(ch=='a' || ch=='b' || ch=='c'){
                cnt++; 
            }
            else if (ch=='x' || ch=='y' || ch=='z'){
                cnt--;
            }
            else if(ch=='e') {
                System.out.println("프로그램 종료합니다. ");
                break;
            }
        }
        System.out.println();
        System.out.println("연산 결과는 " + cnt);
        System.out.println();

    }
}
