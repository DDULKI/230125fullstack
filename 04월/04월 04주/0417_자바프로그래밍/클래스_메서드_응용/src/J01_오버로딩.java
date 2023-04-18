/**
 * J01_오버로딩
 */
public class J01_오버로딩 {

    
    public void Overloading(){
        System.out.println("static 없는 메서드 실행");
    }

    public static void Overloading(String str){
        System.out.println("매개변수없는 기본 메서드 = " + str);
    }


    // 오버로딩1 메서드 선언 
    // void 없는 메서드는 리턴값 있는 메서드 
    public static String Overloading(String name, String jikckeck){
        return name + " " + jikckeck; 
    }

    // 오버로딩2 메서드 선언 
    public static int Overloading(int a, int b) {
        return a + b;
    }

    // 오버로딩3 메서드 선언 
    public static String Overloading(String a, int b) {
        return a + " " + b;
    }


    // 오버로딩4 메서드 선언 
    public static long Overloading(int a, long b) {
        return a + b;
    }

    // 오버로딩5 메서드 선언 
    public static String Overloading(String a, int b, int c ) {
        return a + b + " " + c;
    }

    public static void main(String[] args) {

        // static 없는 메서드 
        // 클래스 생성하고 실행한다. 
        J01_오버로딩 newJ01_오버로딩 = new J01_오버로딩();



        String overload1= Overloading("이순신", "전라좌수영"); // 아규먼트(전달인자)
        int overload2= Overloading(10, 30);
        String overload3= Overloading("정슬기", 20); // 스트링 => 스트링 + 정수 
        long overload4=Overloading(20230417, 20230418 );
        String overload5=Overloading( "상쾌한 오늘" , 50,77);

        System.out.println();
        Overloading("기본메서드"); // 리턴값없는 메서드 호출 실행 
        newJ01_오버로딩.Overloading(); //
        System.out.println("오버로딩 결과 : " + overload1);
        System.out.println("오버로딩 결과 : " + overload2);
        System.out.println("오버로딩 결과 : " + overload3);
        System.out.println("오버로딩 결과 : " + overload4);
        System.out.println("오버로딩 결과 : " + overload5);
        System.out.println();
    }
}