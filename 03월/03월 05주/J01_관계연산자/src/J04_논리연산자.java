public class J04_논리연산자 {
    public static void main(String[] args) {


        // 2항 연산
        // 논리연산자(논리곱, 논리합, 논리부정) 
        // && : 논리곱(AND) 연산자 => 모두 true 이면 true 
        // || : 논리합(OR) 연산자  => 어느 하나라도 true 이면 true
        // !  : 논리부정(NOT) 연산자 => 반대 true이면 false / false 이면 true 

        // 논리연산자 조견표
        ///////////////////////////////////////////
        // 참/거짓      연산자      참/거짓      결과   
        //  true          &&         true       true
        //  true          &&         false      false
        //  false         &&         true       false
        //  false         &&         false      false



        //  || : 논리합(||) /////////////////// 트루가 하나라도 있으면 true
        //  어느 하나라도 true 이면 true
        ///////////////////////////////////////////
        // 참/거짓      연산자      참/거짓      결과   
        //  true          ||         true       true
        //  true          ||         false      true
        //  false         ||         true       true
        //  false         ||         false      false


        // 단항 연산 
        // !  : 논리부정(NOT) 연산자 
        //  => 반대 true이면 false / false 이면 true 
        ///////////////////////////////////////////
        // 참/거짓      연산자          결과   
        //  true          !              flase
        //  false         !              true
        

        int num1 = 90; 
        int num2 = 70;
        boolean p1 = num1 > num2; // 90은 70보다 크다 맞다 true 참 
        boolean p2 = num1 == num2;  // 90은 70와 같다 틀리다 false 거짓
        boolean logic1 = p1 && p2; // p1 논리값과 p2 논리값 논리곱(AND)  
        boolean logic2 = p1 || p2; // p1 논리값과 p2 논리값 논리합(OR)  
        boolean logic3 = !p1;       // p1 논리값 부정 (NOT)
        boolean logic4 = !p2;       // p2 논리값 부정 (NOT)
 


      
        System.out.println("num1 : " + num1);
        System.out.println("num2 : " + num2);
        System.out.println("p1 : num1 > num2 " + (num1 > num2));
        System.out.println("p2 : num1 == num2 " + (num1 == num2));

        System.out.println("p1 && p2 : " + logic1);
        System.out.println("p1 || p2 : " + logic2);
        System.out.println("!p1; : " + logic3);
        System.out.println("!p2 : " + logic4);
    


        // 복합 논리연산 

        // System.out.println("(((num1>num2) && (num1<num2)) || ((num1==num2) || (num1!=num2))) " + (((num1>num2) && (num1<num2)) || ((num1==num2) || (num1!=num2))) );


        boolean logic5 = (((num1>num2) && (num1<num2)) || ((num1==num2) || (num1!=num2)));
        System.out.println("(((num1>num2) && (num1<num2)) || ((num1==num2) || (num1!=num2))) =  " + logic5 );

        // 삼항 연산 
        // 조건식 ? 참 : 거짓;

        int score = 90; 
        
        System.out.println("score >= 90 ? 합격 : 불합격 = " + (score >= 90 ? "합격" : "불합격"));


    }
}
