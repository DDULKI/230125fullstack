/**
 * J01_입력화면_조건문_SWITCH
 * 제한적인 조건문
 * 범위 조건에는 조금 부족하다. 그래서 if
 * 입력값을 받아서 
 * 선택된 메뉴에 따라 조건이 결정된다.
 */

import java.util.Scanner;
public class J01_입력화면_조건문_if_내꺼 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // 0.  변수 선언 및 타입 지정, 초기값 설정 
       
        int soo = 1; //
        int price = 8000;
        int menu = 1 ; 
        int pan = price * soo; // 초기값
       

        // 주문시 수량 입력안하면 기본은 1이다. 
        // 아래의 지시사항 대로 구현 하시오.

        // [1] INPUT(입력)
        // 1-1. 입력화면 설계 - 메뉴선택 :  1. 떡볶이 2. 순대 3. 튀김 
        // 1-2. 입력화면 설계 - 수량입력 : 
        System.out.println("메뉴를 선택하세요 : ?");
        System.out.println("1. 떡볶이 2. 순대 3. 튀김");
        menu = sc.nextInt();
        




        // [2] process(처리)
        // 2-1. 가격조견표 
        // 1. 떡볶이 : 8000원
        // 2. 순대   : 7000원
        // 3. 튀김   : 6000원
        // System.out.println("떡볶이는 8000원");
        
        // System.out.println("순대는 7000원.");
        
        
       


        // 2-2. 조건문 스위치 케이스switch() {}  IF(){} ELSE IF (){} ELSE {}
        // 2-3. 정가 * 수량 = 판매가 

        if(menu == 1 ){
            price = 8000;
            pan=price*soo;
        }
        else if(menu == 2 ){
            price = 7000;  
            pan=price*soo;
        }
        else if (menu == 3){
            price = 6000;
            pan=price*soo;
        }



        // [3] OUTPUT(출력)
        // 3-1. 출력설계 : ~ 를 선택했습니다. 잠시만 기다리세요. 
        // 3-2. 출력표시형식 : 메뉴, 수량, 판매 가격, 정가 

        System.out.printf(" 를 선택했습니다. 잠시만 기다리세요", menu, soo, price, pan);


    }
}