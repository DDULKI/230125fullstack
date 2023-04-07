public class J03_1차원배열_문자열처리 {
    public static void main(String[] args) {
        // 문제 1 
        // 문자열 배열 선언하고 생성하기 
        // 배열의 길이는 10개로 한다. 
        // 데이터는 인기 스타 또는 연예인 이름 넣기 


        // 1. 배열선언, 생성하기 
        // 타입(자료형)지정[]배열이름=new키워드 타입(자료형)지정[배열길이지정];
        String [] star = new String[10];
        
        star[0]="아이유";
        star[1]="몽돌";
        star[2]="딘";
        star[3]="정은지";
        star[4]="송혜교";
        star[5]="박연진";
        star[6]="송승헌";
        star[7]="공유";
        star[8]="이동욱";
        star[9]="남보라";

        for(int i=0; i<star.length; i++){
            // 이름이 두글자 이하인 이름만 출력하세요. 
            if(star[i].length()<=2){ 
                System.out.println(star[i]);
            }
        }

        System.out.println();
        System.out.println();

        // 배열 전체 출력
        // 출력 예시] 이름 : 아이유  글자수: 3
        int i =0; 
        while(i<star.length-1){
            i++; // ++++++++++++++++++++++
            System.out.println("이름 : " + star[i] + "," +  "글자수 : " + star[i].length() );
        }

        // 문자열을 글자 단위로 출력 
        String str = "summer";
        
        System.out.println(str + ", " + str.charAt(0));
        System.out.println(str + ", " + str.charAt(1));
        System.out.println(str + ", " + str.charAt(2));
        System.out.println(str + ", " + str.charAt(3));
        System.out.println(str + ", " + str.charAt(4));
        System.out.println(str + ", " + str.charAt(5));
        
       
     


    }
}
