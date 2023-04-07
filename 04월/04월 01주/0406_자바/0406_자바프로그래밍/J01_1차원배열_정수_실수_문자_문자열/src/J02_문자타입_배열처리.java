public class J02_문자타입_배열처리 {
    public static void main(String[] args) {
        // 문제 1] 1문자(CHARacter) 타입 배열 5개 길이의 배열 생성하기
        char[] ch = new char[6];
        ch[0]='L';
        ch[1]='O';
        ch[2]='V';
        ch[3]='E';
        ch[4]='I';
        ch[5]='S';

        // 출력
        // 배열값 모두 줄바꿈 없이 출력 
        // 반복 for 
        for(int i=0; i<ch.length; i++){
           
            System.out.print(ch[i]); // 출력 예시 LOVE IS 
            if(i==3){
                System.out.print(" ");
            
           }
           
        }
        System.out.println();
        System.out.println();
    
        // 반복문 while    
        int i =-1;
        while(i<ch.length-1){
            i++;
            if(i==4){
                System.out.print(" ");
           }
            System.out.print(ch[i]);
        }
        

        // 문자열 

        



    }
}
