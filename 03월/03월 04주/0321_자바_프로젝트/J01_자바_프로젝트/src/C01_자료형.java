public class C01_자료형 {
    public static void main(String[] args){
       // 자료형 => 데이터 타입(Data Type)
       // int => 정수형 
       // string => 문자형
       // 100% 타입설정 
       // 프로그램의 정확성 
       // 자바 기본타입 : int, long, float, double, char, string, boolean, byte, short  
        // 변수 _ $

        
        
        // - 정수 자료형 
        // 예] 타입설정 변수이름 = (대입연산자) 0(변수 값) 
        // 예] 타입설정 cnt = 0 
        // 타입의 정의는 변수에 들어오는(대입하는 ) 변수 값의 타입을 설정한 것.  
        // 예] int cnt = 123; 소문자 / 클래스는 대문자 // cnt 변수에 정수형 값을 대입한다. 
        // 예] int cnt2 = 3233213421; 소문자 / 클래스는 대문자 // cnt 변수에 정수형 값을 대입한다. 


        
        // - 실수 자료형 
        // 예] float num = 33.3333; // num 변수에 실수형  
        // 예] double num2 = 33.214123123333; // num 변수에 실수형 



        // - 문자 자료형
        // '' 싱글 쿼트(따옴표) 사용
        // 예] char grade='A';

        
        // - 문자 자료형
        // "" 더블 쿼트(따옴표) 사용
        // 예] string str="I Love you!";

        
        
        // - 논리 자료형
        // 참(true)/거짓(false) 데이터를 저장하는 자료형
        // 예] boolean isGender1 = false;
        // 예] boolean isGender2 = true;

        
        
        // 1. 정수 자료형 
        int numInt = 300;
        long numLong = 30000000;
        System.out.println("int형" + numInt );
        System.out.println("long형" + numLong );

        // 2. 실수 자료형 
        double numDouble = 1.414213; // 소수점이 길어질 때, 더블형으로 써줘야한다. 
        float numFloat = 3.14f; // 플로트형은 더블형 보다 작은 실수표현
                                // 반드시 숫자 맨뒤에 f를 붙여서 표기한다. 

        System.out.println("double 형" + numDouble);
        System.out.println("float 형" + numFloat);

        // 3. 문자 자료형 
        char a = 'A';
        char b = '대';
        char c = 65; //ASCII CODE 값 : A = 65, B= 66, C=67, .... 
        char d = 97; //ASCII CODE 값 : a = 65, b= 66  .... 
        char e = 98; //ASCII CODE 값 : a = 97, b= 98  .... 

        System.out.println("char a"+ a);
        System.out.println("char b"+ b);
        System.out.println("char c"+ c);
        System.out.println("char d"+ d);
        System.out.println("char e"+ e);




        // 실업급여 출석
    }
}
