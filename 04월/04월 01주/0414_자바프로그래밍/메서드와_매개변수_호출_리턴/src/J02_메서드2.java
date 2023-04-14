public class J02_메서드2 {
    public static void main(String[] args) {
        System.out.println();
        System.out.println();
        Method1();
        Method2("정슬기");
        Method3(3, 5);
        System.out.println("리턴값이 있는 메서드 호출 결과 = " + Method4(5, 10));
        int result = Method4(5,10);
        System.out.println("리턴값이 있는 매개변수2 메서드 변수에 호출 그리고 결과 = " + result);

        result = Method5(200, 5, 10);
        System.out.println("리턴값이 있는 매개변수3 메서드 변수에 호출 그리고 결과 = " + result);
        System.out.println();


        result = Method5(100, 2, 3);
        System.out.println("리턴값이 있는 오버로딩 결과 " + result);

        result = Method5(300, 3, 5);
        System.out.println("리턴값이 있는 오버로딩 결과 " + result);
        
        result = Method5(10, 72, 6);
        System.out.println("리턴값이 있는 오버로딩 결과 " + result);

        // 리턴값이 문자열 
        String resultStr = Method5("오버로딩", "매개변수2개");
        System.out.println("리턴값이 있는 문자열" + result);

        




        
    }

    // 1. 기본 메서드 : 리턴값이 없는 메서드 
    // 2. 기본 메서드 : 매개변수 없는 메서드 
    public static void Method1() {
        System.out.println("여기는 기본 메서드 입니다.");
    }

    // 2. void 메서드 : 리턴값이 없는 메서드 void
    //               : 매개변수 있는 메서드(매개변수)
    public static void Method2(String name) {
        System.out.println("리턴값이 없는 메서드, 매개변수 있는 메서드" + name);
    }

    // 3. void 메서드 : 리턴값이 없는 메서드 void 
    //                : 매개변수 있는 메서드(매개변수1, 매개변수2)
    public static void Method3(int a, int b) {
        System.out.println(" a + b = " + (a + b) );
    }


    // 4. 정수형 리턴값이 있는 메서드 
    //                : 매개변수 있는 메서드(매개변수1, 매개변수2)
    public static int Method4(int a, int b) {
        return a+b;
    }

    // 5. 정수형 리턴값이 있는 메서드 
    //                : 매개변수 있는 메서드(매개변수1, 매개변수2)
    public static int Method5(int x, int y, int z) {
        return x * y + z;
    }

    // 오버로딩 (OverLoading);
    // 6. 리턴값 자료형같고 메서드이름 같은 메서드(매개변수 자료형이 다르다.)
    //    매개변수 자료형이 다르면 같은이름의 메서드 사용 가능하다. 
    //                : 정수형 리턴값이 있는 메서드 
    //                : 매개변수 있는 메서드(매개변수1, 매개변수2)
    public static int Method5(int x, long y, int z) {
        return x * (int)y + z;
    }
    public static long Method5(int x, int y, long z) {
        return x + y + z;
    }
    public static long Method5(long x, int y, long z) {
        return x - y + z;
    }
    public static long Method5(long x, long y, long z) {
        return x / y + z;
    }
    public static long Method5(int x, long y, long z) {
        return x * y + z;
    }
    public static long Method5(long x, long y, int z) {
        return x * y + z;
    }
    public static String Method5(String x, String y) {
        return x + ", " + y;
    }
    
    
   

}
