/**
 * J01_빌딩 호텔 아파트 상속
 * 문제]
 * 주어진 빌딩 클래스를 상속하여
 * 다음 클래스들을 구현하고 객체를 실행하여보자
 * 필드 값은 메서드로 초기화하고, 
 * 자식 클래스의 setData() 메서드는 
 * 부모클래스의 메서드를 오버로딩하여 구현해보자
 * 
 * 1. 부모클래스 : Building
 *    - 필드 : 이름, 가격, 
 * 
 * 2. 자식클래스 : Hotel
 *    - 필드 : 이름, 가격, Vip룸 수
 * 
 * 3. 자식클래스 : Apart
 *    - 필드 : 이름, 가격, 층수
 * 
 *   예]
 * 
 *   이름: 신라호텔
 *   가격: 10
 *   vip룸 수 : 20
 * 
 *   이름: 자이아파트
 *   가격: 20
 *   층수: 40
 *   
 * 
 */
public class J01_빌딩_호텔_상속 {

    public static void main(String[] args) {
        
        Hotel newHotel = new Hotel();
        // 매개변수 3개
        newHotel.setData("신라호텔", 10,  20);
        newHotel.showHotel();

        Apart newApart = new Apart();
        // 매개변수 3개
        newApart.setData("자이", 20,  40);
        newApart.showApart();

    }
}


// 슈퍼클래스(부모클래스)
/**
 * InnerJ01_빌딩_호텔_상속
 */
class Building {
    String name;
    int price;

    public void setData(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public void showData() {
        System.out.println("==================================");
        System.out.println();
        System.out.println(" 이름 " + name );
        System.out.println(" 가격 " + price );        
    }

}

// 서브클래스(자식클래스1) 상속
class Hotel extends Building {
    int vip_room;


    // 메서드1 : 오버라이딩
    public void setData(String name, int price, int vip_room) {
        // this.name = name;
        // this.price = price;
        super.setData(name,price);
        this.vip_room = vip_room;
    }

    // 메서드2 : 출력
    public void showHotel() {
        //부모메서드 실행
        showData();
        System.out.println("Vip룸 수" + vip_room );
        System.out.println();
        System.out.println("==================================");
    }

}
// 서브클래스(자식클래스2) 상속
class Apart extends Building{
    int floor;
    
    // 메서드1 : 오버라이딩
    public void setData(String name, int price, int floor) {
        // this.name = name;
        // this.price = price;
        super.setData(name,price);
        this.floor = floor;
    }


    
    // 메서드2 : 출력
    public void showApart() {        
        // 부모메서드 실행
        // System.out.println(" 이름 " + name );
        // System.out.println(" 가격 " + price );
        super.showData();
        System.out.println("층 수" + floor );
        System.out.println();
        System.out.println("==================================");
    }
}