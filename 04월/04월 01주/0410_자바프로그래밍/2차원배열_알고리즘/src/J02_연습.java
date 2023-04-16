public class J02_연습 {
    public static void main(String[] args) {
        // 입력 설계 
        int [][] arr = new int[5][5];
        int cnt = 0 ; 

        // 처리 설계 
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                arr[i][j] = ++cnt; 
            }
        }



        // 출력 설계 오름 차순 
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                
                if(j==0){
                    System.out.printf("%2d", arr[i][j]);
                }
                else {
                    System.out.printf("%4d", arr[i][j]);
                }
            }
            System.out.println();
        }
        
        // 내림차순 
        System.out.println();
        for(int i=arr.length-1; i>=0; i--){
            for(int j=arr[i].length-1; j>=0; j--){
                if(j==4){
                    System.out.printf("%2d", arr[i][j]);
                }
                else {
                    System.out.printf("%4d", arr[i][j]);
                }
            }
            System.out.println();
        }
        System.out.println();

    }



}
