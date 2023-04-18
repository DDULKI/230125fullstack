import java.util.Scanner;

public class J02_반복문_for_팩토리얼_누승 {
    public static void main(String[] args) {
        // 5 팩토리얼(!) 구하기
        // 5! = 5 * 4 * 3 * 2 * 1  // 1씩 감소. 
        // 결과 = 120 
        // 곱한 결과를 누적한다.(누승)

        // 1. 입력 

        
        int num = 5;
        int num_sum =1; 

        // 화면 입력 받아서 팩토리얼 구하기. 
        Scanner sc = new Scanner(System.in);
        
        System.out.println("팩토리얼 정수로 입력 : ");
        num = sc.nextInt();
        
        

        // 3. 처리 

        for(int i =num; i>=1; i--){ // 5 // 4 // 3 // 2 // 1 
           System.out.print(i);
           if(i!=1){
             System.out.print(" × ");
           }
           num_sum*=i;
        }


        // 2. 출력 
        System.out.println("\n5! 팩토리의 합계 = " + num_sum);


    }
}
