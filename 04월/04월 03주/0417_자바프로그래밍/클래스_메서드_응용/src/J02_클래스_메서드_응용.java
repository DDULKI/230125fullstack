import java.util.Scanner;

public class J02_클래스_메서드_응용 {


    // 1. 메서드 제작 

    public void name(String str, int chul) {// 출력 
            for(int i=0; i<chul; i++ ) {
                System.out.println("5월은 가정의 달입니다. 5월 29 대체휴일 좋아요^^");
            }
            
    }

    public static void main(String[] args) {
        // 출력할 횟수를 정수로 화면에서 입력 
        // 그리고 메서드는 static 키워드도 없고 
        // 리턴값도 없는 메서드생성하고 호출 실행 하시오. 


        // 입력 
        int chul= 0;

        Scanner sc = new Scanner(System.in);
        System.out.println(" 몇번 출력할래? ");
        chul = sc.nextInt();

        
        J02_클래스_메서드_응용 newJ02_클래스_메서드_응용 = new J02_클래스_메서드_응용();
        


        // 2. 호출 실행 
        newJ02_클래스_메서드_응용.name("5월은 가정의 달입니다. 5월 29 대체휴일 좋아요^^",chul);
        

        
    }
}
