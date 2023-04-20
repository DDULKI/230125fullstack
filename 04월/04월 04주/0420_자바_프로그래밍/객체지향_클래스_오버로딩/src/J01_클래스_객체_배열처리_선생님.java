/**
 * J01_클래스_객체_배열처리
 */
public class J01_클래스_객체_배열처리_선생님 {

    public static void main(String[] args) {
        // name   |    telecom  |   service
        // 폰기종  |   통신사    |   서비스시간
        // 객체배열[]
        
        // 클래스(객체) 생성자 배열[3] 반복처리 
        // 반복문 실행 
        // 결과를 출력하시오 
        
        

        // 매개변수 3개를 생성하고 처리하시오
        // 아이폰       LG          120
        // 갤럭시       KT          80
        // 모토로라     SKT         100

        // 1. 생성자 생성 일반변수 개별 사용

        // 2. 생성자 생성 배열변수[] 사용 
        // 클래스이름[] 생성자이름 = new 클래스이름[3];
        phone [] newPhone = new phone[4];
        newPhone[0] = new phone();
        newPhone[1] = new phone("아이폰14", "LG", 50);
        newPhone[2] = new phone("갤럭시20", "KT", 20);
        newPhone[3] = new phone("모토로라16", "SKT", 10);

        newPhone[3] = new phone("모토로라16", "SKT", 10);
        for(int i=0; i<newPhone.length; i++){
            System.out.print("폰 " + (i+1) + " : ");
            newPhone[i].showTelecom();
            
        }


    }
}


// 문제 ] 
// 클래스 : 클래스(객체) 이름 : phone 
// 필드 : phone 클래스 내부 필드 :  name, telecom, service 
// 자료형 : 타입은 적절하게 지정하시오.
// 기본 생성자 
// 생성자 : (매개변수, 1개, 2개, 3개) 
// void 메서드이용 출력: showTelecom(){}

class phone{
    // 필드 (멤버변수) ///////////////////////////
    String name = "알뜰폰";
    String telecom = "국민통신";
    int service = 50; 
    

    // 2. 생성자 ////////////////////////////////
    // 클래스이름에 괄호를 붙인다. 그리고 스코프(프로그램의 실행영역범위){}
    // 기본 생성자 
    phone(){
        
    }
    phone(String name){
        this.name = name;
    }
    phone(String name, String telecom){
        this.name = name;
        this.telecom = telecom; 
    }
    
    // 생성자 오버로딩(매개변수 : 폰이름, 통신사, 서비스시간) => 생성자 호출 데이터 변경 => 메인메서드 
    phone(String name, String telecom, int service){
        this.name = name;
        this.telecom = telecom;
        this.service = service;
    }

    // 메서드 //////////////////////////// => 메서드 호출 => 메인
    void showTelecom(){
        System.out.println();
        System.out.print("폰기종 = " + this.name);
        System.out.print(" | ");
        System.out.print("통신사 = " + this.telecom);
        System.out.print(" | ");
        System.out.print("서비스시간 = " + this.service);
        System.out.println();
      
    }

}