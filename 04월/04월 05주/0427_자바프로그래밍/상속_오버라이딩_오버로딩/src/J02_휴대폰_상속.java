/**
 * 부모클래스 : Phone
 * 필드: 이름 name , 통신사 telecom , 가격 price
 * 
 * 자식클래스1 : Phone1
 * 필드: 서비스시간 (time)
 * 
 * 
 * 자식클래스2 : Phone2
 * 필드: 서비스시간 (time)
 * 
 * 
 */
public class J02_휴대폰_상속 {

    public static void main(String[] args) {
        
        Phone1 newPhone1 = new Phone1();

        newPhone1.setData("아이폰14", "SKT", 130, "130시간");
        newPhone1.showPhone1();

        Phone2 newPhone2 = new Phone2();

        newPhone2.setData("갤럭시20", "KT", 100, "200시간");
        newPhone2.showPhone2();
    }
}


class Phone {
    String name;
    String telecom;
    int price;
    
    public void setData(String name, String telecom, int price) {
        this.name = name;
        this.telecom = telecom;
        this.price = price;
    }

    public void showData(){
        System.out.println("==========================");
        System.out.println();
        System.out.println(" 핸드폰 이름 : " + name);
        System.out.println(" 통신사 : " + telecom);
        System.out.println(" 가격 : " + price);
    }
}

class Phone1 extends Phone {
    String time;

    // 메서드 1. 오버라이딩 
    public void setData(String name, String telecom, int price, String time) {
        super.setData(name, telecom, price);
        this.time = time;
    }

    // 출력 
    public void showPhone1(){
        // 부모메서드 
        showData();
        System.out.println(" Phone1 이용 시간 : " + time);
        System.out.println();
        System.out.println("=================================");
    }
}

class Phone2 extends Phone { 
    String time;

    public void setData(String name, String telecom, int price, String time) {
        super.setData(name, telecom, price);
        this.time = time;
    }

    // 출력 

    public void showPhone2(){
        // 부모메서드 
        showData();
        System.out.println(" Phone2 이용 시간 : " + time);
        System.out.println();
        System.out.println("=================================");
    }
}