import java.util.Scanner;
public class J04_소수_선생님 {
    
    // 리턴값 있는 메서드 prime 
    public static boolean prime(int num){
        Boolean bool = true; 
        if(num==1){
            bool = false;
        }
        for (int i=2; i<num; i++){
            if(num % i == 0) {
                bool = false;
            }
        }


        return bool;
    }

    public static void main(String[] args) {


        Scanner sc = new Scanner(System.in);
        System.out.println("정수입력");
        int num = sc.nextInt();
    
        for(int i=2; i<=num; i++){
            if(prime(i)== true){ // 소수이면 true 반환 
                System.out.print(i + " ");
            }
        }


    }
}
