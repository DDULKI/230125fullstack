import java.util.Scanner;

/**
 * 계산기제작
 */
public class 계산기제작 {

    public static int addMethod (int num1, int num2){
        return num1 + num2; 
    }
    public static int subMethod (int num1, int num2){
        return num1 - num2; 
       
    }   
    public static long mulMethod (int num1, int num2){
        return num1 * num2;
       
    }
    public static int divMethod (int num1, int num2){
        return num1/num2;
        
    }

    public static void main(String[] args) {
        // 프로젝트 : 4칙연산 메서드 구현 => 1.덧셈, 2.뺄셈, 3.곱셈, 4.나눗셈
        // 입력화면에서 : 1번 선택하면 덧셈 메서드로 이동 연산결과를 리턴값으로 받는다.
        // 선택 조건문은 swhitch(){}
        // 메서드 이름은 
        // 1.덧셈   : addMethod
        // 2.뺄셈   : subMethod
        // 3.곱셈   : mulMethod
        // 4.나눗셈 : divMethod
        // 모든 메서드 리턴값이 있는 메서드로 제작한다.
        // 연산 매개변수는 2개로 한다. num1, num2
        // 연산결과는 println(); 출력

        // [예시]
        // 입력설계
        Scanner sc = new Scanner(System.in);
        System.out.print("첫 번째 수를 입력해주세요 = ");
        int num1 = sc.nextInt();
        System.out.print("두 번째 수를 입력해주세요 = ");
        int num2 = sc.nextInt();
        // 정수1 입력 : 5 
        // 정수2 입력 : 10 

        // 연산 종류를 선택하세요. 
        System.out.println("연산 종류를 선택하세요. ");
        System.out.println("1. 덧셈 2. 뺄셈 3. 곱셈 4. 나눗셈");
        int oper = sc.nextInt();

        switch(oper){
            // 1. 덧셈
            case 1 : int result = addMethod(num1, num2);
            System.out.println("덧셈 결과 = " + result);
            break;

            // 2. 뺄셈
            case 2 : result = subMethod(num1, num2);
            System.out.println("뺄셈 결과 = " + result);
            break;

            // 3. 곱셈 
            case 3 : long result1 = mulMethod(num1, num2);
            System.out.println("곱셈 결과 = " + result1);
            break;

            // 4. 나눗셈 
            case 4 : int result2 = divMethod(num1, num2);
            System.out.println("나눗셈 결과 = " + result2);
            break;

            default: break;
        }

        // 호출 
        addMethod(num1,num2);
        subMethod(num1,num2);
        mulMethod(num1,num2);
        divMethod(num1,num2);
        

    }
}