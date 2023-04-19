/**
 * 1. 생성자 이름은 반드시 클래스 이름과 같아야한다. 
 * 2. 생성자는 리턴이 없다. 
 * 3. 생성자는 Void 또한 없다. 
 * 4. 생성자는 몇가지만 제외하면 메서드와 다르지 않다. 
 * 5. 생성자는 메서드처럼 클래스내애 선언되고, 오버로딩이 가능하다. 
 * 6. 하나의 클래스에 여러개의 생성자가 존재할 수 있다. 
 * 7. 기본생성자가 자동으로 생성될 수 있다. ()
 *    클래스에 생성자가 하나도 정의되지 있지 않다면 
 *    컴파일러가 자동으로 기본 생성자를 생성시켜서 컴파일 해준다.
 *    Book(){} 
 *  
 *    // 생성자 오버로딩 
 *     매개변수를 달리하는 생성자를 여러개 선언할 수 있다. 
 *     클래스이름(){}
 *     클래스이름(매개변수1){}
 *     클래스이름(매개변수1, 매개변수2 ){}
 *     클래스이름(매개변수1, 매개변수2, 매개변수3){}
 * 
 */



class Book{
    // 멤버변수(필드)
    String title;
    String author;


    // 멤버 함수 
    // 자료형, void 없다. 
    public Book(String t){
        title = t; author = "작자미상"; 
        title = "춘향전"; author = "작자미상"; 
    }

    public Book(String t, String a){
        title = t; author = a; 
        title = "어린왕자"; author = "생텍쥐페리"; 
       
    } 

   
    public static void main(String[] args) {

        Book littlePrince = new Book("어린왕자", "생텍쥐페리");
        Book loveStroy = new Book("춘향전");
        System.out.println(littlePrince.title + "" + littlePrince.author);
        System.out.println(loveStroy.title + " " + loveStroy.author);

        System.out.println();
        System.out.println("============와플2,3===============");
        System.out.println();

        // 생성자 생성한다. 
        Waffle2 w2 = new Waffle2("아이스크림", 10000);
        w2.showW2();
        // 생성자 w2를 이용해서 Waffle2() 내부에서 호출 실행할 메서드를 만들어준다.
        Waffle2 w22 = new Waffle2("메로나", 800);
        w22.showW2();
        Waffle2 w222 = new Waffle2("바닐라크림콜드브루", 5000);
        w222.showW2();
        Waffle2 w22222 = new Waffle2("커피", 2000);
        w22222.showW2();


        Waffle3 w34 = new Waffle3();
        w34.showW3();

        Waffle3 w3 = new Waffle3("바닐라", 2300);
        w3.showW3();

        Waffle3 w33 = new Waffle3("허니와플");
        w33.showW3();

        Waffle3 w32 = new Waffle3("아이스크림와");
        w32.showW3();

    }
}



// 와플2 => this 
/**
 * 생성자
 */

class Waffle2 { //루트영역 this 
    String name;  // 클래스 내부에서 접근할 때 사용 가능 this.name 
    int price;    // this.price 

    // 매개변수 2개인 생성자를 선언했으므로 기본 생성자는 만들어지지 않는다. 
    Waffle2(String irum, int money){
        // 생성자의 매개변수 값으로 멤버변수를 초기화
        // this로 객체의 멤버변수에 접근할 수 있다. 
        this.name = irum;
        this.price = money;


        // this 객체를 도입 

    }

    // 출력 메서드 w2
    void showW2(){
        System.out.println("이름 = " + name + " 가격 = " + price );
    }



}


class Waffle3 {
    String name; 
    int price; 

    // 기본 생성자 : 클래스 이름 그대로 
     Waffle3(){
        this.name = "기본메뉴";
     }

    // 생성자 오버로딩 
    Waffle3(String name){
        this.name = name; // 멤버변수  name의 값을 매개변수 값으로 변경한다. 
                          // 접근 방식은 this 사용  
    }

    Waffle3(String name, int price){
        this.name = name;     // 멤버변수  name의 값을 매개변수 값으로 변경한다. 
        this.price = price;   // 접근 방식은 this 사용  
    }

    // 출력 메서드 w3
    void showW3(){
        System.out.println("이름 = " + name + " 가격 = " + price );
    }
}

