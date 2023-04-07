import java.sql.Date;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Scanner;
/**
 * J01_StringFomat
 */
public class J01_StringFomat {

    public static void main(String[] args) {

        // 1. 문자열 형식 
        // String str1 = "Java Programming";
        // String str2 = "JSP";
        // String str3 = "React.js";
        // String str4 = "Node.js";
        // String str5 = "HTML5";
        // String str6 = "CSS3";
        // String str7 = "SASS";
        // String str8 = "Vue.js";
        // String str9 = "Spring";

       
        // System.out.println(String.format("%s IDE 이클립스와 VS CODE, 인텔리제이", str1));
        // System.out.println(String.format("%s", str2));
        // System.out.println(String.format("%s", str3));
        // System.out.println(String.format("%s", str4));
        // System.out.println(String.format("%s", str5));
        // System.out.println(String.format("%s", str6));
        // System.out.println(String.format("%s", str7));
        // System.out.println(String.format("%s", str8));
        // System.out.println(String.format("%s", str9));


        // // 오른쪽 정렬 출력 
        // System.out.println(String.format("%20s", str1));
        // System.out.println(String.format("%20s", str2));
        // System.out.println(String.format("%20s", str3));
        // System.out.println(String.format("%20s", str4));
        // System.out.println(String.format("%20s", str5));
        // System.out.println(String.format("%20s", str6));
        // System.out.println(String.format("%20s", str7));
        // System.out.println(String.format("%20s", str8));
        // System.out.println(String.format("%20s", str9));

        // // 2. 실수형 형식 
        // double num_d = 123.456789;
        // double num_d1 = 123.459;
        // double num_d2 = 12322.89;
        // double num_d3 = 123.12;
        // double num_d4 = 0.1;
        
        // System.out.println(num_d);
        // System.out.println(String.format("%f", 3.41533));
        // System.out.println(String.format("%f_", 3.41533));
        // System.out.println(String.format("%f _부동소숫점 형식", num_d));
        // System.out.println(String.format("%.3f", num_d));
        // System.out.println(String.format("%3.3f", num_d1));
        // System.out.println(String.format("%3.6f", num_d2));
        // System.out.println(String.format("%3.7f", num_d3));
        // System.out.println(String.format("%3.1f", num_d4));
        
        // System.out.println("//////////////////////////////");
        // System.out.println(String.format("%05.3f", num_d1));
        // System.out.println(String.format("%05.6f", num_d2));
        // System.out.println(String.format("%05.7f", num_d3));
        // System.out.println(String.format("%05.1f", num_d4));
        
        // // 금액표기 
        // int money = 35000000; 

        // System.out.println("////////////// 금액표시 /////////////////");
        // System.out.println(String.format("%d", money));
        // System.out.println(String.format("%d원", money));
        // System.out.println(String.format("%,d원", money));
        // System.out.println(String.format("￦ %d원", money));
        // System.out.println(String.format("￦ %,d원", money));
        // System.out.println(String.format("$ %,d달러", money));

        
        
       
        
        // Calendar cal = Calendar.getInstance();

      

        // System.out.println("////////////////////////////////////////");
        // System.out.println(String.format("%tp", cal));



        // cal.set(2023, 03, 03); // 월  0 ~ 11 + 1 
        // System.out.println(String.format("Calendar 년-월-일 %tF", cal));
        // System.out.println(String.format("Calendar 년 %tY", cal)); // 4자리 
        // System.out.println(String.format("Calendar 년 %ty", cal)); // 2자리 
        // System.out.println(String.format("Calendar 월 %tm", cal));
        // System.out.println(String.format("Calendar 일 %td", cal));

        // Date today = new Date(cal.getTimeInMillis());

        // System.out.println("/////////////날짜객체 Date today = new Date(cal.getTimeInMillis) ////////////////");
        // System.out.println(String.format("1900년부터 오늘까지 날짜 날수 : %d", cal.getTimeInMillis()));
        // // 
        // System.out.println(String.format("Date 년-월-일 %tF", today));
        // System.out.println(String.format("Date 년 %tY", today));
        // System.out.println(String.format("Date 년 %ty", today));
        // System.out.println(String.format("Date 월 %tm", today));
        // System.out.println(String.format("Date 일 %td", today));
        // System.out.println(String.format("Date 요일 %tA", today));
        // System.out.println(String.format("Date 시 %tH", today));
        // System.out.println(String.format("Date 분 %tS", today));

        // 윤 4년 
        // 년도 기준 1900
        // 4년 주기 : 4로 나누어 나머지가 0이고 
        // 100으로 나누어 나머지가 0이 아니면 윤년 
        // 또는 
        // 400으로 나누어 나머지가 0이면 윤년

        
        
        int year = 1400; 

        Scanner sc = new Scanner(System.in);
        System.out.println("년도를 입력하세요.");
        year = sc.nextInt();

        if ((year%4==0 && year%100!=0) || year%400==0 ){
            System.out.println( year + "년도는");
            System.out.println("윤년입니다");

        }
        else {
            System.out.println( year + "년도는");
            System.out.println("평년입니다. ");
        }




    }
}