public class J01_데이터타입_리터럴_접두사_접미사 {
    public static void main(String[] args) {
        // 변수의 타입 
        // 기본형 타입(Primitive 프리미티브 타입) : 실제 갑을 저장(스레드) 
        
        // Byte 별로 구분 타입
        // 1Byte : boolean, byte
        // 2Byte : char, short
        // 4Byte : int, float
        // 8Byte : long, double

        
        // 논리 : boolean
        // 문자 : char
        // 정수 : byte, short, int, long  -  789   부호(Sign) 와 절대값(Absolute) 부호를 포함하지 않는 숫자
        // 실수 : float, double => 부동소숫점 표현식 : 수치의 정밀도 높다


        // 참조형 타입(Referrence Type 레퍼런스 타입) : 기본형을 제외한 나머지 
        // 참조형 타입 : 객체의 주소를 저장 
        // String, System, 객체, 배열, 나열형 


        // 부호의 유무의 분류 => 자료표현 범위가 달라진다. 
        
        // -2^(n-1)  ~ 2^(n-1)-1
        //                                                              |Sign 1| 31bit 절대값 | |부호| 절대값 |
        // 음수, 양수 부가 있는거(Signed)    int => 4byte => 32bit => -2^(32-1)  ~ 2^(32-1)-1 => -2^(31)  ~ 2^(31)-1 =>  -2,147,483,648 ~ 2,147,483,647 
        // 양수만 사용(부호가 없다 Unsigned) int => 4byte => 32bit => 2^(32)-1 => 2^(32)-1 =>  0 ~ 4,294,967,295 
        // * n-1 => 의미는 부호비트 1비트를 제외한것이다.
        // 부호가 있는 자료형 : byte, short, int, long, float, double



        // 2^(n)-1
        // boolean => 1byte => 8bit => 2^(8)-1 => 256-1 => 255 최대수 시작은 0 ~ 255
        // char => 2byte => 16bit => 2^(16)-1 => 65536-1 => 65535 최대수 시작은 0 ~ 65535
        // -1의 의미 => 모두 수는 기본이 0 부터 시작하기 때문 n-1 즉 10진수는 10-1 => 9 최대수(0-9)
        // -1의 의미 => 모두 수는 기본이 0 부터 시작하기 때문 n-1 즉 16진수는 16-1 => 15 최대수(0-15(F))
        // -1의 의미 => 모두 수는 기본이 0 부터 시작하기 때문 n-1 즉 8진수는 8-1 => 7 최대수(0-7)
        // -1의 의미 => 모두 수는 기본이 0 부터 시작하기 때문 n-1 즉 4진수는 4-1 => 3 최대수(0-3)
        // -1의 의미 => 모두 수는 기본이 0 부터 시작하기 때문 n-1 즉 2진수는 2-1 => 1 최대수(0-1)
        // * n-1 => 의미는 부호비트 1비트를 제외한것이다.
        // 부호가 없는 자료형 : boolean, char


        // 자료형  변수이름 = 변수값(리터럴) <= 자료형에 맞는 리터럴값 지정
        // int cnt = 0;
        // 변수이름 => 명명규칙 => 네이밍규칙
        // 클래스 => 첫글자 대문자 이면서 영문 중간연결단어 대문자 [파스칼케이스]  
        // 예]  ProjectKurly
        // 변수, 메서드 => 첫글자 소문자 이면서 중간연결단어 대문자 [카멜케이스]
        // 예]   _ 와 $ 특수문자 사용 가능
        //       a = 50;   abc = 70;  loveIs = 66;   _int    $long
        // 상수 => 모두 대문자로 사용 단어와 단어사이 연결되는 단어는 언더바(팟홀) 사용 [팟홀케이스]
        // 예] final double PI = 3.14;     ROOT_2 = 1.414213


        // 리터럴 => 변수에 대입대는 값
        int  cnt = 0;  // 리터럴
        char ch1 = 'A'; // 반드시 싱글 따옴표사용  리터럴
        // char ch1 = 'AB'; // 2글자는 오류  리터럴 오류
        char ch2 = 64; // 아스키코드(ASCII CODE) 값  65(A) ~  리터럴
        char ch3 = '\u0041'; // 유니코드(UNICODE) 값 \u0041(A) ~  리터럴
        char ch4 = '\t'; // tab 일정한 사이 간격 띄운다.  리터럴
        byte by1 = 99;   // byte 정수 리터럴
        short sh1 = 17536; // short 정수  리터럴
        int bi = 0b10101;     // 2진수 정수  리터럴 숫자 zero b => binary
        // 16 8  4  2  1
        // 1  0  1  0  1
        // =============
        // 16 0 4 0 1 => 21(10)

        int oct = 037; // octal 8진수  421(2진수 3자리)
        //  421 421 
        //  3    7
        //  =======
        //  011 111

        //    32 16  8  4  2  1
        //    0  1   1  1  1  1
        //   ===================
        //       16  8 4 2 1 => 31

        int hex = 0x1100; // hexa 16진수  2진수 4자리
        // 8421 8421 8421 8421
        // 1     1    0    0
        // ==================
        // 0001 0001 0000 0000
        //    4096  2048  1024  512  256  128 64 32 16  8 4 2 1 
        // 000 1     0     0      0    1   0   0  0  0  0 0 0 0
        // 4096 + 256 = 4352

        long lon = 38228348123L; // LONG  숫자 맨뒤에 영문 L 소문자 l
        long lon2 = 38228348123l; // LONG  숫자 맨뒤에 영문 L 소문자 l
        // long lon3 = 38228348123; // LONG  숫자 맨뒤에 영문 L 소문자 l
        float flo = 1.41423f; // float  숫자 맨뒤에 영문 F 소문자 f
        float flo2 = 1.41423F; // float  숫자 맨뒤에 영문 F 소문자 f
        // float flo3 = 1.41423; // float  숫자 맨뒤에 영문 F 소문자 f
        double dou = 3.141423; // float  숫자 맨뒤에 영문 D 소문자 d  Double 형은 리터럴 표기 생략가능

        System.out.println("cnt " + cnt );
        System.out.println("ch1 " + ch1 );
        System.out.println("ch2 " + ch2 );
        System.out.println("ch3 " + ch3 );
        System.out.println("ch4 " + ch4 );
        System.out.println("by1 " + by1 );
        System.out.println("sh1 " + sh1 );
        System.out.println("bi " + bi );
        System.out.println("oct " + oct );
        System.out.println("hex " + hex );
        System.out.println("lon " + lon );
        System.out.println("flo " + flo );
        System.out.println("dou " + dou );





    }
}
