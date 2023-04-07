/**
 * J01_시작하기
 */
public class J01_시작하기1 { // 파일이름.java 클래스 이름을 똑같이 설정한다. 

    public static void main(String[] args) {
        System.out.println("----------------------------------");
        System.out.println("자바시작하기 내용 출력 줄바꿈 발생");
        System.out.println("자바시작하기 내용 출력 줄바꿈 발생");
        System.out.println("자바시작하기 내용 출력 줄바꿈 발생");
        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println();
        System.out.print("Hello Java Start!!!!");
        System.out.print("Hello Java Start!!!!");
        System.out.print("Hello Java Start!!!!");
        System.out.print("Hello Java Start!!!!");
        System.out.print("");
        System.out.print("");
        System.out.print("");
        System.out.print("");
        System.out.println("\n new Line---------------------------------");


        System.out.println("");
        System.out.println("");
        // hap() 메서드 호출 실행 
        System.out.println("더하기 메서드 호출" + hap(200, 300) );
        System.out.println("곱하기 메서드 호출" + gob(200, 300) );
        System.out.println("");
        System.out.println("");
        System.out.println("");

      
    }


      // 리턴값이 있는 메서드 
        // 기본 자료형 정수 인트 int integer 실수 문자열 string 불린... 
        public static int hap(int a, int b) {
            return a + b;
        }

        public static int gob(int a, int b) {
            return a * b;
        }

        public static void name() {
            // 보이드가 달려있으면 리턴이 없다. 
        }
}

