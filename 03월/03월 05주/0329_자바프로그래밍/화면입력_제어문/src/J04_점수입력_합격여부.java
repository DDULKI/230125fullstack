import java.util.Scanner;

public class J04_점수입력_합격여부 {
    public static void main(String[] args) {


        

        // 문제] 성적처리 평균점수 
        // 0 scanner 임포트 그리고 생성자 생성 
        // 1. 화면입력 
        // 국어점수
        // 영어점수
        // 수학점수 
        // 3과목 점수 입력 받아서 

        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int num3 = sc.nextInt();
        System.out.println("과목 점수를 입력하세요.");

        System.out.println("국어 = " + num1  );
        System.out.println("영어 = " + num2  );
        System.out.println("수학 = " + num3  );
       

        
        // 2. 연산처리 
        // 총점 연산 평균 연산
        System.out.println("총점 = " + (num1 + num2 + num3)  );
        System.out.println("총점 = " + (num1 + num2 + num3) /3 );

        
        // double avg

        // 3. 조건문 구현 출력 
        // 평균이 80점이상이면 합격 그렇지않으면 불합격 
        // 알고리즘 구현 

        System.out.println("평균이 80이상이면 합격 그렇지않으면 불합격 ");

        if( 66 <= 80 ){
            System.out.println("불합격");
        }
        else {
            System.out.println("합격");
        }



        sc.close(); // sc는 스캐너의 약자 
    }
}
