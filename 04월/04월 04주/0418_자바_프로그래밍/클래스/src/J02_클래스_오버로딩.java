public class J02_클래스_오버로딩 {
    public static void main(String[] args) {
        
        // 클래스와 오버로딩
        /* 
            하나의 클래스에 같은 이름의 메서드를 여러게 선언하는것.
            같은 이름의 메서드로 입력 매개변수값에 따라 다른 메서드를 호출하여 사용한다.            

            # 오버로딩의 조건
            1. 메서드 이름이 같아야 한다.
            2. 매개변수의 개수 혹은 타입이 달라야한다.
        */ 

        // 클래스 생성자를 생성하여 
        // 하나의 클래스 내에 같은 이름의 메서드 오버로딩 구현
        // 선택한 와플에 따른 주문내역 나타내기
        Waffle newWaffle = new Waffle();

        // 소스가 없는 와플 주문1 : 매개변수 x       
        String 주문내역 = newWaffle.name();
        System.out.println();
        System.out.println();
        System.out.println( 주문내역+"주문하였습니다." );

        // 소스가 있는 와플 주문2 : 매개변수1개;
        String 주문내역2 = newWaffle.name("핫소스");
        System.out.println( 주문내역2 +"주문하였습니다." );
        
        // 소스가 있는 와플 주문3 : 매개변수2개;
        String 주문내역3 = newWaffle.name("핫소스", "아이스크림");
        System.out.println( 주문내역3 +"주문하였습니다." );

        // 소스가 있는 와플 주문4 : 매개변수2개;
        String 주문내역4 = newWaffle.name("아이스크림", 3);
        System.out.println( 주문내역4 +"주문하였습니다." );
        System.out.println();
        System.out.println();
    }  // 메인 메서드 영역   


} // 메인 클래스





// 외부 클래스 제작 
// 클래스 1개에 다양한 주문형식의 메서드가 선택되어 주문 되어진다.
class Waffle {
    // 리턴값이 있는 메서드

    // 1. 매개변수 없는 메서드()
    String name(){
        return "와플";
    }

    // 2. 매개변수 1개(문자열) 있는
    String name(String source1){
        return source1 + "와플";
    }

    
    // 3. 매개변수 2개(문자열,문자열) 있는 메서드
    String name(String source1, String source2){
        return (source1 + source2) + "와플";
    }
    
    // 4. 매개변수 2개(문자열,문자열) 있는 메서드
    String name(String source, int count){
        return source + "와플" + count + "개";
    }

}
