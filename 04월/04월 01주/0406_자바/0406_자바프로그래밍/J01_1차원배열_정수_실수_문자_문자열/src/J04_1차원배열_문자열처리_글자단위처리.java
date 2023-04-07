public class J04_1차원배열_문자열처리_글자단위처리 {
    public static void main(String[] args) {
       

        // 문자열을 글자 단위로 출력
        // str.charAt(글자위치 0 ~ length) 
        String str = "summer";
        
        // System.out.println(str + ", " + str.charAt(0));
        // System.out.println(str + ", " + str.charAt(1));
        // System.out.println(str + ", " + str.charAt(2));
        // System.out.println(str + ", " + str.charAt(3));
        // System.out.println(str + ", " + str.charAt(4));
        // System.out.println(str + ", " + str.charAt(5));
        
        // for(int i=0; i<str.length(); i++){
        //     System.out.println(str + ", " + str.toUpperCase().charAt(i));
        //     System.out.println(str + ", " + str.toLowerCase().charAt(i));
        // }

        // 문제 1] summer 문자열을 문자 배열 생성하여 문자단위로 저장하라 
        // 출력은 문자배열만 출력하시오. 
        // for 문 
        str ="summer";
        
        char [] fav = new char [str.length()];

       
        for(int i=0; i<str.length(); i++){
            fav[i] = str.charAt(i);
        

        }
        System.out.println();
        System.out.println();

        
        int i =-1;
        while(i<fav.length-1){
            i++;
            System.out.println("fav["+ i + "]" + fav[i]);

        }
    }
}
