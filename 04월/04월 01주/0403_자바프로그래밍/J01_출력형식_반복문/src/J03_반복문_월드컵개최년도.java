import java.util.Scanner;
public class J03_반복문_월드컵개최년도 {
    public static void main(String[] args) {
        // 2002 ~ 2100 까지 월드컵 개최년도를 출력하시오.
        // 1. for 반복문 사용

        // for(int year=2002; year<=2100; year++){
        //     if( (year-2002) % 4 ==0){
        //         System.out.println(year + "년도입니다.");
        //     }
        // }


        for(int year=2002; year<=2100; year+=4){
                System.out.println(year + "년도입니다.");
        }

    }
}
