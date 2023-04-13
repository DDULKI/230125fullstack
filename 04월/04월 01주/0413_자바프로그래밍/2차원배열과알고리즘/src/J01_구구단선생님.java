import java.util.Scanner;

public class J01_구구단선생님 {
    public static void main(String[] args) {
        // 문제 1] 2차원arr에 구구단을 저장 출력 
        // 1. 화면에서 구구단 단을 입력 받는다. 
        // 2. 단 2~9단까지 입력제한조건 (시작단, 끝단 )
        // 3. 행수는 1~9까지 기본 반복 수행 
        // 4. 2차원 arr에 저장
        // 5. 출력 실행 2 × 1 = 2 
        // 예] 구구단 시작단 입력하세요. 
        // 예] 구구단 끝단을 입력하세요.  

       
        // 입력설계 2 ~ 9 사이 입력 받는다. 
        // 시작단(sDan)보다 종료단 (eDan)은 커야한다. 
        // 행수는 1 ~ 9 => 9줄 
        // 열수는 eDan(5)-sDan(2) =?
        // 예시] 2 ~ 5 = 
        // 2차원arr 행수[9]열[종료단-시작단+1]
        // 2차원arr 행수[9][eDan-sDan+1]
        // 2차원arr [9][5-2+1]
        // 2차원arr [9][4]
        int sDan = 0; 
        int eDan = 0; 
        int[][] arr;

        Scanner sc = new Scanner(System.in);

        while (true){
            // 입력값이 정상적으로 입력될 떄 까지 반복 수행 while(true){}
            System.out.println("구구단 시작 정수 입력(2~9):");
            sDan = sc.nextInt();

            if(sDan<2 || sDan>9){ // sDan은 2보다 작으면 안되고 9단보다 크면 안된다. 
                System.out.println("입력범위는 정수 2~9 입니다. 다시 입력하세요.");

            }
            else {
            
                while(true){// 시작단 입력완료 
                        // 다음 종료단 입력 
                        System.out.println("구구단 종료 정수 입력(2~9)단, 시작 정수보다 큰 숫자 입력:");
                        eDan = sc.nextInt();
                        if(eDan<2 || eDan>9 || sDan<2 || sDan>9){
                            System.out.println("입력 범위는 정수 2 ~ 9 그리고 시작단 숫자가 종료단 숫자보다 크면 안됩니다. 다시 입력하세요.");
                        }
                        else {
                            // 디버깅
                            // 열 [4] 시작단 2 종료단 5  5-2=3+1 2단, 3단, 4단, 5단, 총 4칸 
                            // 열 [7] 시작단 2 종료단 8  8-2=6+1 2단, 3단, 4단, 5단, 6단, 7단, 8단 
                            // 시작단 종료단 정상 입력 완료 배열 생성 new int [9][eDan-sDan+1]
                            arr = new int[9][eDan-sDan+1]; // 배열 [9][4] 생성완료

                            System.out.println("배열크기 행" + arr.length);
                            System.out.println("배열크기 열" + arr[0].length);

                            // 구구단 저장 , 출력 
                            for(int i=1; i<=arr.length; i++){ // arr.length = 9 행 반복 
                                int col=-1;
                                for(int j=sDan; j<=eDan; j++){ // 열(칸) 반복 0 1 2 3 
                                    col++; // 0 1 2 3 
                                    // arr[i-1][col] = j*i; // 18 27 36 45
                                    // : 
                                    arr[i-1][col] = j*i; // 18 27 36 45 
                                    //System.out.printf("%d*%d=%2d", j , i , j*i);
                                }
                                System.out.println();
                            }


                            // 배열에 저장된 내용 출력 
                            System.out.println();
                            System.out.println("arr[][] 행" + arr.length);
                            System.out.println("arr[][] 열" + arr[0].length);
                            System.out.println("구구단 계산 결과 값");
                            System.out.println();
                            for(int i=0; i<arr.length; i++){
                                for(int j=0; j<arr[i].length; j++){
                                    System.out.printf("%2d ",arr[i][j]);
                                }
                                System.out.println();
                            }

                            break;
                        }
                    }

                break;
            }
        }


        // // 입력값이 정상적으로 입력될 떄 까지 반복 수행 while(true){}
        // System.out.println("구구단 종료 정수 입력(2~9)단, 시작 정수보다 큰 숫자 입력:");
        // eDan = sc.nextInt();


        // // int [][] arr = new int [][];

        // // 처리설계 

        System.out.println();
        for(int i=0; i<=arr.length; i++){
            int col =-1; // 칸
            for(int j=2; j<=9; j++){
                col++; // 칸이 증가해라. 
                arr[i-1][col] = j*i;
            //    arr[i-1][col] = 2*1; arr[0][1] = 3*1; arr[0][2] = 4*1; arr[0][3] = 5*1; 
            //    arr[1][0] = 2*2; arr[1][1] = 3*2; arr[1][2] = 4*2; arr[1][3] = 5*2; 
            //    :
            //    arr[9][0] = 2*2; arr[9][1] = 3*2; arr[9][2] = 4*2; arr[1][3] = 5*2; 
               
            }
            System.out.println();
        }



        // // 출력설계 
        // // 예시] arr[9][9]
        System.out.println();
        for(int i=0; i<=arr.length; i++){
            for(int j=2; j<=9; j++){
                System.out.printf( "%d×%d=%2d  ", j,i, j*i); // 2*1= 2 3*1 =3 4*1= 4 5*1 =... 
            }
            System.out.println();
        }
    }
}
