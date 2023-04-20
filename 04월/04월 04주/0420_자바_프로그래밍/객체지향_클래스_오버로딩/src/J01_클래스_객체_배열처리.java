/**
 * J01_클래스_객체_배열처리
 */
public class J01_클래스_객체_배열처리 {

    public static void main(String[] args) {
        // name   |    telecom  |   service
        // 폰기종  |   통신사    |   서비스시간
        // 객체배열[]
        phone [] hap = new phone[4];
        hap[0] = new phone();
        hap[1] = new phone("아이폰14", "LG", 50);
        hap[2] = new phone("갤럭시20", "KT", 20);
        hap[3] = new phone("모토로라16", "SKT", 10);
     
        
        // 클래스(객체) 생성자 배열[4] 반복처리 
        // 반복문 실행 
        // 결과를 출력하시오 
        for(int i=0; i<hap.length; i++){
                hap[i].showTelecom();
        }


        // 매개변수 3개를 생성하고 처리하시오
        // 아이폰       LG          120
        // 갤럭시       KT          80
        // 모토로라     SKT         100

        phone p1 = new phone();
        p1.showTelecom();

        phone p2 = new phone("아이폰", "LG");
        p2.showTelecom();

        phone p3 = new phone ("갤럭시", "KT", 80);
        p3.showTelecom();
        
        phone p4 = new phone ("모토로라", "SKT", 70);
        p4.showTelecom();

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
    String name;
    String telecom;
    int service; 
    
    phone(){
        this.name = "알뜰폰";
        this.telecom = "국민통신";
        this.service = 50;
    }
    phone(String name){
        this.name = name;

    }
    // 생성자 오버로딩 (매개변수 : 폰이름, 통신사)
    phone(String name, String telecom){
        this.name = name;
        this.telecom = telecom; 
    }
    // 생성자 오버로딩 (매개변수 : 폰이름, 통신사, 서비스 시간)
    phone(String name, String telecom, int service){
        this.name = name;
        this.telecom = telecom;
        this.service = service;
    }


    // 메서드 /////////////////////////////////////////////////
    void showTelecom(){
        System.out.println("폰기종 = " + this.name + "통신사 = " + this.telecom + "서비스시간 = " + this.service);
    }

}