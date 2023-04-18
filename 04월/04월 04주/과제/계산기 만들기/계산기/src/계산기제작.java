import java.util.Scanner;

/**
 * 계산기제작
 */
public class 계산기제작 {

    static int addMethod (int num1, int num2){
        return num1 + num2;
    }
    static int subMethod (int num1, int num2){
        return num1 - num2; 
    } 
    static int mulMethod (int num1, int num2){
        return num1*num2;
    }
    static int divMethod (int num1, int num2){
        return num1/num2;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int num1, num2;

      
        System.out.print("첫 번째 수를 입력해주세요 = ");
        num1 = sc.nextInt();

        System.out.print("두 번째 수를 입력해주세요 = ");
        num2 = sc.nextInt();

        // 호출 
        addMethod(num1,num2);
        subMethod(num1,num2);
        mulMethod(num1,num2);
        divMethod(num1,num2);
        

    }
}