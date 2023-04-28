public class J01_Phone_클래스_오버라이딩 {
    public static void main(String[] args) {

        UpdatePhone newup = new UpdatePhone();

        newup.setData("아이폰24", "LG", 23330, "삼성카드", 85555);
        newup.showData();

        
        newup.setData("아이폰14", "skt", 4568430, "삼성카드", 365);
        newup.showData();
    }
        
}
