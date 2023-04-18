import java.util.Scanner;

public class J03_02_2차원배열_선언_화면입력값_행열생성_난수_알파벳대문자출력_조건문 {
    public static void main(String[] args) {
        
        int[][] arr; // 입력화면 행, 열
        int rowNum = 0;
        int colNum = 0;
        Scanner sc = new Scanner(System.in);


 while(true){  // 무한반복 break     

        System.out.print("행수 1~30 정수 입력 : ");        
        rowNum = sc.nextInt(); 
        if(rowNum<1 || rowNum>30){
            System.out.println("1`30까지 범위만 입력 ");
        }
        else{

            while(true){

                System.out.print("열수 1~30 정수 입력 : ");
                colNum = sc.nextInt();
        
                arr = new int[rowNum][colNum]; 
                if(colNum<1 || colNum>30){
                    System.out.println("1`30까지 범위만 입력 ");
                }
                else{
    
                    // 3. 처리설계(구현)
                    for(int i=0; i<arr.length; i++){
                        for(int j=0; j<arr[i].length; j++){
                            arr[i][j] = (int)(Math.random()*26+65);
                        }            
                    }
    
    
                    // 2. 출력설계
                    for(int i=0; i<arr.length; i++){
                        for(int j=0; j<arr[i].length; j++){
                            System.out.printf("%2c", (char)arr[i][j]);
                        }
                        System.out.println();
                    }
    
                    break;
    
    
                }
            }
        
            break;    
        }

}  
        


        
    }
}
