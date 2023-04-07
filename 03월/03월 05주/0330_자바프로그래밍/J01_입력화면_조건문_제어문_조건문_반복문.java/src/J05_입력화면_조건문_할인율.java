import java.util.Scanner;

public class J05_입력화면_조건문_할인율 {
    public static void main(String[] args) {
        // 문제] 

        // 정가(임의의 정수)를 입력받아서 
        // 할인율을 정하라 그리고 
        // 판매가를 구하시오. 

        // 조견표 
        // 정가 500,000 이상 할인율 20%  0.2
        // 정가 100,000 이상 할인율 10% 
        // 정가  50,000 이상 할인율  5% 
        // 정가  50,000 이상 할인율  1% 
        // 정가에 할인율 적용해서 판매가를 구하시오. 


        // 1. INPUT 설계
        Scanner sc = new Scanner(System.in);

        System.out.println("가방 가격을 입력하세요.");
        long price = sc.nextLong();
         
        double rate =0;

        




        // 2. PROCESS 처리 

        if (price >= 500000){
            rate = 0.2;
        }
        else if (price >= 100000){
            rate = 0.1;
        }
       else if (price >= 50000){
            rate = 0.05;
        }
        else if( price >= 10000){
            rate = 0.01;
        }
        else {
            rate = 0.0; 
        }


        // 3. OUTPUT 설계 
        System.out.println();
        System.out.printf("정가(가격)는 [ %d ] 입니다.", price);
        System.out.printf("할인율은 [ %f ] 입니다.", rate);
        System.out.printf("판매가는 [ %d ] 입니다." ,(long)(price*(1-rate)));



    }
}
