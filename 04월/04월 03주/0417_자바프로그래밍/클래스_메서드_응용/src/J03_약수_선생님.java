import java.util.Scanner;

public class J03_약수_선생님 {

    static void fn(int num){
        for(int i=1; i<=num; i++){
            if (num % i == 0){ // num 나머지 i 는 0이다. 
                System.out.println(i + " ");
            }
        }
    }


    public static void main(String[] args) {
        int num =0; 
        Scanner sc = new Scanner(System.in);
        System.out.println("정수를 입력 : ");
        num = sc.nextInt();
       
        // 메서드 호출 
        fn(num);




    }
}
