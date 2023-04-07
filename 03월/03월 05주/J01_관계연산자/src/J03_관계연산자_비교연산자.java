public class J03_관계연산자_비교연산자 {
    public static void main(String[] args) {
        // 관계연산자(비교연산자)
        // >  크다 
        // >= 크거나 같다(이상)
        // < 작다 
        // <= 작거나 같다(이하)
        // == 같다 
        // != 같지않다. (서로다르다)
        //  boolean true, false 논리 값을 나타낸다. 

        int n = 10; 
        boolean b1;
        b1 = n > 5; // 변수 n은 보다 크다 
        System.out.println("b1 = n > 5 : " + b1); // 10은 5보다 크다 참이다. 
        // Result => b1 = n > 5 : true

        // 문제 1] 
        // n1 정수형 변수에 8을 대입
        // a1 정수형 변수에 20을 대입
        // b2는 boolean 으로 자료형 선언 변수  
        // n은 a보다 작거나 같다 조건식 
        // 비교 연산 구현하고 출력하시오 

        int n1, a1;
        boolean b2; // b2는 boolean 으로 자료형 선언 변수  

         n1 = 8;   // n1 정수형 변수에 8을 대입
         a1 = 20;    // a1 정수형 변수에 20을 대입

         b2 = n <= a1;   // n1은 a1보다 작거나 같다 조건식 
         System.out.println("1. n <= a1 : " + b2);
         System.out.println("2. n <= a1 : " + (n <= a1));
        


         // b3 결과 변수 
         // m 변수 = 15
         // n 변수 = 14 
         // b3 비교연산 => 같다.  
         // b4 비교연산 => 같지않다. 
         boolean b3;
         boolean b4;
         int m = 15;
         
         n= 14;

         b3 = n == m ;
         b4 = n != m; 
         System.out.println(" b3 비교연산 => 같다. / b4 비교연산 => 같지않다. ");
         System.out.println("m = " + m);
         System.out.println("n = " + n);
         System.out.println("b3 = n == m : " + (n == m));
         System.out.println("b4 = n != m : " + (n != m));

        
         // 문제 2] 
         // 변수 정수형 x = 90 
         // 변수 정수형 y = 70 
         // 변수 불형 p1 크다
         // 변수 불형 p2 작다
         // 변수 불형 p3 크거나 같다
         // 변수 불형 p4 작거나 같다
         // 변수 불형 p5 같다
         // 변수 불형 p6 같지않다. 

         // 구현 x, y, p1, p2, p3, p4, p5, p6 출력 

         int x, y; 
         boolean p1, p2, p3, p4, p5, p6; 

         x = 90;
         y = 70; 
         p1 = x > y; 
         p2 = x < y;
         p3 = x >= y;
         p4 = x <= y;
         p5 = x == y;
         p6 = x != y;
         System.out.println("문제2");
         System.out.println("p1 = x > y :" + (x > y));
         System.out.println("p2 = x < y :" + (x < y));
         System.out.println("p3 = x >= y :" + (x >= y));
         System.out.println("p4 = x <= y :" + (x <= y));
         System.out.println("p5 = x == y :" + (x == y));
         System.out.println("p6 = x != y :" + (x != y));
         

    }
}
