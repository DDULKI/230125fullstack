import java.util.Scanner;

public class J01_구구단_단화면입력_시작번호_화면입력_while문_2차원배열저장_출력 {
    public static void main(String[] args) {
        // 문제 1] 2차원배열에 구구단을 저장 출력 
        // 1. 화면에서 구구단 단을 입력 받는다. 
        // 2. 단 2~9단까지 입력제한조건 (시작단, 끝단 )
        // 3. 행수는 1~9까지 기본 반복 수행 
        // 4. 2차원 배열에 저장
        // 5. 출력 실행 2 × 1 = 2 
        // 예] 구구단 시작단 입력하세요. 
        // 예] 구구단 끝단을 입력하세요.  

        int [][] gobhagi;
        int i = 2; 
        int j = 1;  
        Scanner sc = new Scanner(System.in);
        
        // System.out.println("구구단 시작단을 입력하세요.");
        // i = sc.nextInt();
        
        // System.out.println("구구단 끝단을 입력하세요.");
        // j = sc.nextInt();
        
        gobhagi = new int[i][j];
    

        // 처리 
        // while(i<=9){
        //     System.out.println("구구단 시작단을 입력하세요.");
        //     i = sc.nextInt();
        //         while (j<=9){
        //             System.out.println("구구단 끝단을 입력하세요.");
        //             j = sc.nextInt();
        //             System.out.printf(i + "×" + j  + "=" + (i*j));
        //             j++;
        //             System.out.println();
        //         }
        //         j=1;
        //         i++;
        //     }

        while(i<=9){
            System.out.println("구구단 시작단을 입력하세요.");
            i = sc.nextInt();

          
                while (j<=9){
                    System.out.println("구구단 끝단을 입력하세요.");
                    j = sc.nextInt();
                    System.out.printf(i + "×" + j  + "=" + (i*j) );
                    j++;
                    System.out.println();
                }
                j=1;
                i++;
            }
            
    
        

        // 혼자해보기 ㅋㅋ
        // while(true){
        //     System.out.println("구구단 시작단을 입력하세요.");
        //     i = sc.nextInt();
        //     if (i=2 && i<=9){
        //         System.out.println();
        //     }
        //     else {
        //         gobhagi = new int[i][j];
        //         // 이제 처리한다. 
        //         for(i=2; i<=9; i++ ){
        //             for(j=1; j<=9; j++){
        //                 System.out.println("%3d" + i + " *=" + j);    
        //             }
        //             System.out.println();
        //         }


        //     }
        // }
        
        // 출력 
        // for(i=2; i<=9; i++ ){
        //     for(j=1; j<=9; j++){
        //         System.out.println("%3d" + i + " *=" + j);    
        //     }
        //     System.out.println();
        // }
        
        // System.out.println();

        while(i<=9){
            while (j<=9){
                System.out.printf(i + "×" + j  + "=" + (i*j));
                j++;
                System.out.println();
            }
            j=1;
            i++;
        }
    }
}
