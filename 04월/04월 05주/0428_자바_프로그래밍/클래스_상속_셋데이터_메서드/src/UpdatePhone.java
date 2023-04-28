class UpdatePhone extends Phone {
    String card; 
    int month;

    public void setData(String name, String telecom, int price, String card, int month ) {
        setData(name,telecom,price);
        this.card = card;
        this.month = month;
    }
    
    public void showData(){
        super.showData();
        System.out.println("할인카드 : " + this.card);
        System.out.println("보험기간 : " + this.month);
        System.out.println("========================================");
    }
}
