/**
 * J01_입력화면_조건문_SWITCH
 * 제한적인 조건문
 * 범위 조건에는 조금 부족하다. 그래서 if
 * 입력값을 받아서 
 * 선택된 메뉴에 따라 조건이 결정된다.
 */

import java.util.Scanner;
import java.text.DecimalFormat; 
public class J01_입력화면_조건문_SWITCH {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // 0.  변수 선언 및 타입 지정, 초기값 설정 
       
        int menu = 1 ; 
        int soo = 1; 
        int price = 8000;
        int pan = price * soo; // 초기값 계산
        String menuStr = "떡볶이";
       

        // 주문시 수량 입력안하면 기본은 1이다. 
        // 아래의 지시사항 대로 구현 하시오.

        // [1] INPUT(입력)
        // 1-1. 입력화면 설계 - 메뉴선택 :  1. 떡볶이 2. 순대 3. 튀김 
        // 1-2. 입력화면 설계 - 수량입력 : 



        System.out.println("손님, 뭐드실거에요?");
        menu = sc.nextInt();

        System.out.println("손님 몇개 주문하시나요? 수량을 말씀해 주세요.");
        soo = sc.nextInt();
        




        // [2] process(처리)
        // 2-1. 가격조견표 
        // 1. 떡볶이 : 8000원
        // 2. 순대   : 7000원
        // 3. 튀김   : 6000원
        // System.out.println("떡볶이는 8000원");
        
        // System.out.println("순대는 7000원.");
        
        
       


        // 2-2. 조건문 스위치 케이스switch() {}  IF(){} ELSE IF (){} ELSE {}
        // 2-3. 정가 * 수량 = 판매가 

        switch(menu){ // 메뉴가 
            case 1: // 1인 경우  (뭐뭐인 ~ 경우) 
            // case '떡볶이';
                price = 8000;
                pan= price*soo ;
                menuStr = "떡볶이";
                break;
            case 2: 
            // case '순대';
                price = 7000;  
                pan=price*soo;
                menuStr = "순대";
                break;
            case 3: 
            // case '튀김';
                price = 6000;
                pan=price*soo;
                menuStr = "튀김";
                break;
            default: 
        }

        // [3] OUTPUT(출력)
        // 3-1. 출력설계 : ~ 를 선택했습니다. 잠시만 기다리세요. 
        // 3-2. 출력표시형식 : 메뉴, 수량, 판매 가격, 정가 
        // 세자리 마다 콤마형식 : 데시멀 포맷형식
        // 외부 클래스를 가져오면 반드시 생성자를 생성하여 사용한다. 
        // DecimalFormat 은 숫자를 스트링 형태의 표시형으로 변환 => 반드시 출력은 스트링 자료형이다. 
        DecimalFormat df = new DecimalFormat("#,###"); // "#,###" "#,##0" 인용부호는 반드시 스트링이니까 더블 쿼트  


        System.out.println();
        System.out.printf("선택한 메뉴는 [%d번] [%s]이고, [%d]개 주문했습니다.\n", menu, menuStr, soo);
        System.out.printf(" 결제 금액은 [%d원] 입니다.\n", pan); 
        System.out.printf(" 결제 금액은 [%s원] 입니다.", df.format(pan)); // 3자리마다 콤마 찍어줘라. 
        System.out.println();
        System.out.println();

    }
}