/**
 * J01_화폐혼자연습
 */
public class J01_화폐혼자연습 {

    public static void main(String[] args) {
        
        // 금액 187000
        // 50000원권
        // 10000원권
        //  5000원권
        //  1000원권
        // 문제] 위 금액을 각 지폐 단위로 매수를 구하시오.
        // 1. 입력설계[INPUT] 

        int price= 187000;
        int oman=0;
        int ilman=0;
        int ochun=0;
        int ilchun=0;
        
        // 3. 처리 

        oman = price/50000;
        ilman = (price-(oman*50000))/10000;
        ochun = (price-(oman*50000)-(ilman*10000))/5000;
        ilchun= (price-(oman*50000)-(ilman*10000)-(ochun*5000))/1000;

        // 2. 출력 

        System.out.println("금액" + price + "원");
        System.out.println("50,000원" + oman + "장");
        System.out.println("10,000원" + ilman + "장");
        System.out.println("5,000원" + ochun + "장");
        System.out.println("1,000원" + ilchun + "장");


    }
}