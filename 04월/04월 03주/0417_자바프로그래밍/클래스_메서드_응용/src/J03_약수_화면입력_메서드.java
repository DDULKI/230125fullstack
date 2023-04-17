import java.util.Scanner;

public class J03_약수_화면입력_메서드 {

    static void ys(int num) {
        for (int i=1; i<num; i++){
            if ( num % i == 0) {
                System.out.println(i + " ");
            }
        }
    }

    public static void main(String[] args) {
        // 소수(Prime number)를 구현하시오. 
        // 1보다 큰 수 자연수 
        // 1과 자신만을 약수 
        // 정수를 화면입력 받아서 
        // 약수를 구하시오 
        // 단 리턴문없는 메서드를 호출 실행한다. 

        // 예시] 
        // 10의 약수 
        // 1 2 5 10 

        // 8의 약수 
        // 1 2 4 8 
        // .... 

        // 입력 
        
        int num= 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("원하는 약수를 입력하세요. ");
        num = sc.nextInt();

        // 2. 호출 
        ys(num);


    }
}
