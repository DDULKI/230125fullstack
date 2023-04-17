import java.util.Scanner;

public class J04_소수 {
    

    public static float prime(float num){
        for (int i=2; i<=num; i++){
            boolean count = true;
            for (int j = 2; count && j <= (i/2); j++){
                if (i %j ==0){
                    count = false;
                } 
            }
            if (count){
                System.out.print(i+" ");
            }
           
        }
        return num;
    }
    
    

    public static void main(String[] args) {
        // 소수(Prime number)를 구현하시오. 
        // 1보다 큰 수 자연수 
        // 1과 자신만을 약수로 가지는 수 
        // 메서드 리턴값있는, 메서드 이름 prime 
        // 리턴값은 부울린 으로 하시오. 
        // true of false 사용 소수 출력 아니면 출력 안함. 

        // 입력값 정소의 소수를 구하시오. 

        
        // int result = prime(num);
        float num; 
        Scanner sc = new Scanner(System.in);
        System.out.println("원하는 숫자를 입력하세요. ");
        num = sc.nextFloat();

        prime((float)num);
        
    }
}
