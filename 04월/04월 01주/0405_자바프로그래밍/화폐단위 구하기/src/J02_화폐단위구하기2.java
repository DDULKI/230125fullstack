import java.util.Scanner;

/**
 * J01_화폐단위구하기
 */
public class J02_화폐단위구하기2 {

    public static void main(String[] args) {
        // 금액 187000
        // 50000원권
        // 10000원권
        //  5000원권
        //  1000원권
        // 문제] 위 금액을 각 지폐 단위로 매수를 구하시오.
        // 1. 입력설계[INPUT] 
        


        long price = 187000;
        long oman = 0;
        long ilman = 0;
        long ochun = 0;
        long chun = 0;

        Scanner sc = new Scanner(System.in);

        System.out.println("금액을 입력하세요!");
        price = sc.nextLong();

        // 3. 처리설계

        oman = price/50000;
        ilman=(price-(oman*50000))/10000; // (187000-(3*50000)) / 10000
        ochun=(price-(oman*50000)-(ilman*10000))/5000; // (187000-(3*50000)) / 10000
        chun=(price-(oman*50000)-(ilman*10000)-(ochun*5000))/1000; // (187000-(3*50000)) / 10000
        
    
        
        // chun = 
  
        // 2. 출력설계[OUTPUT]
        System.out.println("금액" + price + "원");
        System.out.println("===========================");
        System.out.println("50,000원권 " + oman + "장");
        System.out.println("10,000원권 " + ilman + "장");
        System.out.println("5,000원권  " + ochun + "장");
        System.out.println("1,000원권  " + chun + "장");

        
  
  
     
        
       

    }
}