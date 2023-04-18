/**
 * J03_1차원배열_문자열처리_연습
 */
public class J03_1차원배열_문자열처리_연습 {

    public static void main(String[] args) {
        String [] names = new String[15];

        names[0]="정기원";
        names[1]="정슬기z";
        names[2]="정지혜dd";
        names[3]="정은지www";
        names[4]="권미숙ww";
        names[5]="이동희w";
        names[6]="박소연w";
        names[7]="홍혁진22222";
        names[8]="박수빈w";
        names[9]="장채연22";
        names[10]="김은아dsfdf";
        names[11]="박희진fsdfsfs";
        names[12]="이석율fsdfs";
        names[13]="아이유fsdfs";
        names[14]="송혜교fsdfds";

        for(int i=0; i<names.length; i++){
            // 이름이 네글자 이하인 이름만 출력
            if(names[i].length()<=9){
                System.out.println(names[i]);
            }
        }

        System.out.println();
        System.out.println();

        int i =0; 
        while(i<names.length-1){
            i++;
            // System.out.println("이름 : " + names[i] + " , " + "글자수 : " + names[i].length());
            System.out.println("이름 : " + names[i] + ", "+ " 글자수 : " + names[i].length());
            System.out.println();
        }

        String hh = "정말아름다운밤이야";

        System.out.println(hh + ", " + hh.charAt(0));
        System.out.println(hh + ", " + hh.charAt(1));
        System.out.println(hh + ", " + hh.charAt(2));
        System.out.println(hh + ", " + hh.charAt(3));
        System.out.println(hh + ", " + hh.charAt(4));
        System.out.println(hh + ", " + hh.charAt(5));
        System.out.println(hh + ", " + hh.charAt(6));
        System.out.println(hh + ", " + hh.charAt(7));
        System.out.println(hh + ", " + hh.charAt(8));
        

    }
}