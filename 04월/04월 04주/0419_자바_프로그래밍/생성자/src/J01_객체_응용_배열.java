public class J01_객체_응용_배열 {
    public static void main(String[] args) {
        
        // 문제] 
        // 와플(waffle) 객체 만들고 그리고 생성자를 생성하되
        // 기본 생성자와 멤버변수 값은 기본값 기본고객 가격은 0 설정 
       
        // 멤버변수는 구분(단골고객, 일반고객, 우수고객), 가격(5000,10000,15000)


        // 객체 배열 선언 사용 그리고 호출하기 

        Waffle [] waf = new Waffle[6];
        waf[0] = new Waffle();
        waf[1] = new Waffle("기본와플");
        waf[2] = new Waffle("애플와플" , 5000);
        waf[3] = new Waffle("딸기와플" , 5000);
        waf[4] = new Waffle("허니버터와플" , 10000);
        waf[5] = new Waffle("초코와플" , 20000,10);
  
        // 멤버함수(메서드) 호출 실행 6회 반복처리
        for(int i=0; i<waf.length; i++){
            waf[i].show();
        }

        

        // 단일 객체 사용 
        Waffle w4 = new Waffle();
        w4.show();


         // 생성자 매개변수는 2개다.
        Waffle w1 = new Waffle("딸기와플 ", 5000);
        w1.show();

        Waffle w2 = new Waffle("허니버터와플 ", 10000);
        w2.show();
        
        Waffle w3 = new Waffle("바나나와플 ", 15000, 5);
        w3.show();


    }
}


// 클래스 
class Waffle{
    String name;
    int price;
    int 개수=0;

    Waffle(){
        this.name = "기본고객 ";
        this.price = 0; 
    }

    Waffle(String name){
        this.name = name; 
        this.price = 0;
    }

    Waffle(String name, int price){
        this.name = name; 
        this.price = price;
    }

    Waffle(String name, int price, int soo){
        this.name = name; 
        this.price = price;
        this.개수 = soo;
    }

    // 출력 
    void show(){
        System.out.println("이름 = " + this.name + " 가격 = " + this.price + " " + this.개수 + "개");
    }
}