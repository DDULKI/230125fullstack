/**
 * Phone
 */
public class Phone {
    String name; 
    String telecome;
    int price; 

    // 생성자
    public Phone(String name, String telecom, int price) {
        this.name = name;
        this.telecome = telecom;
        this.price = price;
    }

    public void showData(){
        System.out.println("이름 : " + this.name);
        System.out.println("통신사 : " + this.telecome);
        System.out.println("가격 : " + this.price);
    }
}