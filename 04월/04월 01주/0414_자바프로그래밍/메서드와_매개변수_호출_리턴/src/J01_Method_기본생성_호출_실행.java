public class J01_Method_기본생성_호출_실행 {
    public static void main(String[] args) { // 모든 클래스에 한개만 존재하는 메서드
        
        // const Object = new Object();
        // Object = {
        //     state: { // 멤버 변수 
        //         isLogin: true;
        //     },
        //     mainSlide: function(){

        //     },
        //     scrollEvent(){

        //     }
        // }
        // Object.state();

        // 접근제한자 public
        // public static 리턴타입(자료형, String, int ..., void(리턴없음)) 메서드이름(){}
        // public static 리턴타입(자료형, String, int ..., void(리턴없음)) 메서드이름(매개변수){}

        //메서드 호출 실행
        MainSlide("김유신");
        MainSlide("이순신");
        MainSlide("유관순");
        MainSlide("정슬기");
        MainSlide("");
        MainSlide("");
        

    }  // 메인 메서드 

    public static void MainSlide(String irum){  // => 메서드 호출 실행 메인 메서드 내에서 메서드이름();
        System.out.println("출력결과 : 메인슬라이드 메서드 입니다." + irum);
    }
}
