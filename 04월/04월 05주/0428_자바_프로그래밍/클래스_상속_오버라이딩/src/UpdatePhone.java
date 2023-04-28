/**
 * UpdatePhone
 */
class UpdatePhone extends Phone{
    String card;     
    int month; 

    // 생성자
    public UpdatePhone(String name, String telecom, int price, String card,int month) {
        super(name, telecom, price);
        this.card = card;
        this.month = month;
    }

    @Override
    public void showData(){
        super.showData();
        System.out.println("할인카드 : " + this.card);
        System.out.println("보험기간 : " + this.month);
    }
    
} 