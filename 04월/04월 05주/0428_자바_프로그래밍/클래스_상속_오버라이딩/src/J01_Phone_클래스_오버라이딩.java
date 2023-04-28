/**
 * J01_Phone_클래스_오버라이딩
 * 
 * 기존의 Phone 이라는 클래스로  휴대폰 정보 관리했으나
 * 업데이트가 진행되면서 새로운 정보들이 추가되었다.
 * Phone 클래스는 그대로 사용, 상속을 하여
 * 추가된 정보들을 저장하도록 업그레이드를 한다.
 * 
 * 부모클래스 Phone
 * 모든 필드는 private 접근제한자 사용한다.
 * 필드 : 이름(name), 통신사(telecome), 가격(price)
 * 
 * @생성자  Phone  
 * 자식클래스 객체의 모든 필드를 초기화 한다.
 * 
 * 메서드  showData
 * 
 *  
 * @메서드 오버라이딩
 * showData() : 이름, 통신사, 가격의 정보를 Phone과 똑같이 나타내고
 *              할인카드, 보험기간 정보를 추가하여 출력한다.
 * 
 * 자식클래스 업데이트폰 UpdatePhone
 * 할인카드(card), 보험기간(month)
 * 
 * @모든 필드를 초기화하는 생성자  UpdatePhone
 * 
 * 오버라이딩 메서드  showData
 * 
 */
public class J01_Phone_클래스_오버라이딩 {

    public static void main(String[] args) {
        
        // 생성자 인스턴스 배열처리
        // UpdatePhone[] p = new UpdatePhone[3];

        // // // 예시]
        // p[0] = new UpdatePhone("아이폰12","LG",1000,"롯데",30);
        // p[1] = new UpdatePhone("아이폰","LG",1000,"현대카드",30);
        // p[2] = new UpdatePhone("갤럭시20","LG",1000,"삼성카드",30);
     

        // // // 반복처리 출력
        // for(int i=0; i<p.length; i++){
        //     p[i].showData();
        //     System.out.println();
        // }

    }
}

