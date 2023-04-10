public class J03_2차원배열_랜덤_숫자 {
    public static void main(String[] args) {
        // 임의의 숫자[난수](Random Number)를 증가시켜서 정수로 저장
        // Math.randow() => 0보다크고 1보다 작은 임의의 실수가 출력
        // arr[i][j] = (int)(Math.random() * 10 + 1);     //11  19 1 2
        // 5행 5열

        // 1. 입력설계
        int[][] arr = new int[5][5];


        // 3. 처리설계 : arr[i][j] = (int)(Math.randow() * 10 + 1);
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){                   
                arr[i][j] =  (int)(Math.random() * 10 + 1); 
            }
        }   


        // 2. 출력설계 : 숫자 4자리 오른쪽 정렬(첫칸은 공백없음)
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){                
                if(j==0){
                    System.out.printf("%2d",  arr[i][j]);
                }
                else{
                    System.out.printf("%4d",  arr[i][j]);
                }
            }
            System.out.println();
        }



    }
}
