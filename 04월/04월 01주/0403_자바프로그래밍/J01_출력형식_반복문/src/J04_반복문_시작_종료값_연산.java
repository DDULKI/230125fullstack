import java.util.Scanner;

public class J04_반복문_시작_종료값_연산 {
    public static void main(String[] args) {


        // 꼬옥!!!!!! 입/출력 설계 
        // 코딩 
        // 결과 확인 
        // 처리(Process)

        // 시작 정수 입력
        // 종료 정수 입력 

        // 문제1] 시작 ~ 종료 누적합 구하기 
        // 문제2] 시작 ~ 종료 4의배수 합 구하기 

        int start=0;
        int end=0;
        int sum=0;

        Scanner sc = new Scanner(System.in);
        
        System.out.println("시작 정수를 입력하세요.");
        start = sc.nextInt();
        System.out.println("종료 정수를 입력하세요.");
        end = sc.nextInt();


        // 3.process

        for(int i=start; i<=end; i++){
           sum+=i; // sum = sum + i;
        }

        // 2. 출력문 

        System.out.println();
        System.out.println("4의 배수 누적합은..!");
        System.out.printf("시작정수%d + 종료정수%d = 합%d ", start,end,sum);
        System.out.println();


        // 4. 시작 ~ 종료 4의 배수 합 구하기. 
        sum = 0;
        for(int i=start; i<=end; i++){
            if(i%4==0){
                sum+=i; // sum = sum + i; 알고리즘 표현법 
            }
         }

    }
}
