import java.util.Scanner;

public class J02_선생님 {

    public void methodfn(int num){
        // 출력설계 
        System.out.println();
        for(int i=0; i<num; i++){
            System.out.println("5월은 가정의 달입니다. 5월 29 대체휴일 좋아요^^");
        }    
    }
    public static void main(String[] args) {

         // 입력설계
        J02_선생님 newJ02_선생님 = new J02_선생님();
        int num=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("반복할 횟수는? ");
        num = sc.nextInt();

       



         // 2. 호출 실행
        newJ02_선생님.methodfn(num);


       



    }
}
