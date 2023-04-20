/**
 * J01_클래스_객체_배열처리
 */
public class J01_클래스_객체_배열처리 {

    public static void main(String[] args) {
        // name    |   telecom  |  service
        // 폰기종   |   통신사  |   서비스시간
        // 객체배열[]

        // 클래스(객체) 생성자 배열[3] 반복처리
        // 빈벅믄 실행
        // 결과를 출력하시오

        // 매개변수 3개를 생성하고 처리하시오
        // 아이폰       LG          120
        // 갤럭시       KT          80
        // 모토로라     SKT         100      
        
        // 1. 생성자 생성 일반변수 개별 사용
        // 클래스이름  생성자이름 = new 클래스이름();

        // 2. 생성자 생성 배열변수[] 사용
        // 클래스이름[]  생성자이름 = new 클래스이름[3];
        System.out.println(" ============================= ");
        Phone[] newPhone = new Phone[3];
        newPhone[0] = new Phone("아이폰", "LG", 120);
        newPhone[1] = new Phone("갤럭시", "KT", 80);
        newPhone[2] = new Phone("모토로라", "SKT", 100);

        for(int i=0; i<newPhone.length; i++){
            System.out.print("폰 " + (i+1) + " : ");
            newPhone[i].showTelecom();
        }
        System.out.println();


        ///////////////////////////////////////////////////
        System.out.println(" ============================= ");

        Phone[] newPhone2 = new Phone[2];
        newPhone2[0] = new Phone("아이폰14", "KT", 200);
        newPhone2[1] = new Phone("갤럭시폴더", "SKT", 180);

        for(int i=0; i<newPhone2.length; i++){
            System.out.print("폰 " + (i+1) + " : ");
            newPhone2[i].showTelecom();
        }
        System.out.println();


        ///////////////////////////////////////////////////        
        System.out.println(" ============================= ");

        Phone[] newPhone3 = new Phone[1];
        newPhone3[0] = new Phone("아이폰15", "SKT", 300);
        for(int i=0; i<newPhone3.length; i++){
            System.out.print("폰 " + (i+1) + " : ");
            newPhone3[i].showTelecom();
        }

        System.out.println();

        ///////////////////////////////////////////////////        
        System.out.println(" ============================= ");

        Phone newPhone4 = new Phone();
        newPhone4 = new Phone("모토로라");
        newPhone4.showTelecom();

        System.out.println();

        ///////////////////////////////////////////////////        
        System.out.println(" ============================= ");

        Phone newPhone5 = new Phone();
        newPhone5 = new Phone();
        newPhone5.showTelecom();

        System.out.println();

        /* 
        ============================= 
        폰 1 :
        폰기종 : 아이폰 | 통신사 : LG | 서비스시간 : 120 분
        폰 2 :
        폰기종 : 갤럭시 | 통신사 : KT | 서비스시간 : 80 분
        폰 3 :
        폰기종 : 모토로라 | 통신사 : SKT | 서비스시간 : 100 분

        =============================
        폰 1 :
        폰기종 : 아이폰14 | 통신사 : KT | 서비스시간 : 200 분
        폰 2 :
        폰기종 : 갤럭시폴더 | 통신사 : SKT | 서비스시간 : 180 분

        =============================
        폰 1 :
        폰기종 : 아이폰15 | 통신사 : SKT | 서비스시간 : 300 분

        =============================

        폰기종 : 모토로라 | 통신사 : 국민통신 | 서비스시간 : 50 분

        =============================

        폰기종 : 알뜰폰 | 통신사 : 국민통신 | 서비스시간 : 50 분
        */


    }
}





// 문제]
// 클래스 : 클래스(객체) 이름 : Phone
// 필드: Phone 클래스 내부 필드 : name, telecom, service
// 자료형 : 타입은 적절하게 지정 사용하시오.
// 기본생성자
// 생성자 : (매개변수 1개, 2개, 3개)
// void 메서드이용 출력 : showTelecom(){} 

class Phone{

    // 필드 ////////////////////////////////////
    String  name = "알뜰폰";
    String  telecom = "국민통신";
    int     service = 50;


    // 생성자 ////////////////////////////////////
    // 생성자: 리턴값없고, void도 없는 생성자 이다.
    // 여러 생성자 : 오버로딩
    // 기본 생성자  => 생성자 호출 데이터 변경 => 메인 메서드
    Phone(){}
    
    // 생성자 오버로딩(매개변수 : 폰이름)  => 생성자 호출 데이터 변경 => 메인 메서드
    public Phone(String name){
        this.name = name;
    }

    // 생성자 오버로딩(매개변수 : 폰이름, 통신사)  => 생성자 호출 데이터 변경 => 메인 메서드
    public Phone(String name, String telecom){
        this.name = name;
        this.telecom = telecom;
    }

    // 생성자 오버로딩(매개변수 : 폰이름, 통신사, 서비스시간 )  => 생성자 호출 데이터 변경 => 메인 메서드
    public Phone(String name, String telecom, int service){
        this.name = name;
        this.telecom = telecom;
        this.service = service;
    }



    // 메서드 ////////////////////////////////////  => 메서드 호출 => 메인 메서드
    public void showTelecom(){
        System.out.println();
        System.out.print("폰기종 : " + this.name);
        System.out.print(" | ");
        System.out.print("통신사 : " + this.telecom);
        System.out.print(" | ");
        System.out.print("서비스시간 : " + this.service + " 분");
        System.out.println();
    }

}
 
