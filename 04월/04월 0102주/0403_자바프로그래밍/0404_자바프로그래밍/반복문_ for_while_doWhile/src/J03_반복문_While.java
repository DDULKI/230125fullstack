import java.util.Scanner;

public class J03_반복문_While {


    public static void main(String[] args) {
        // 1 ~ 10 까지 출력하는 반복문
        // while(){} 사용 구현 

        Scanner sc = new Scanner(System.in);

        int i = 0;
        int hap =0; 

     
        while (i<10){
            i++;
            hap+=i;
            System.out.println("1~10까지 카운트 = " + i);
        } 

        // 3. 처리설계및 구현 
        System.out.println();
        
        System.out.println("1~10까지 누적합 = " + hap);
        System.out.println();
    }
}
