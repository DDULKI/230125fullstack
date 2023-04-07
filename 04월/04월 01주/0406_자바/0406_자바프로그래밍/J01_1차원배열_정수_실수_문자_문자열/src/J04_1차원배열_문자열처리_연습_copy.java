/**
 * J04_1차원배열_문자열처리_연습 copy
 */
public class J04_1차원배열_문자열처리_연습_copy{

    public static void main(String[] args) {
        String hh = "정말아름다운밤이야";

        // System.out.println(hh + ", " + hh.charAt(0));
        // System.out.println(hh + ", " + hh.charAt(1));
        // System.out.println(hh + ", " + hh.charAt(2));
        // System.out.println(hh + ", " + hh.charAt(3));
        // System.out.println(hh + ", " + hh.charAt(4));
        // System.out.println(hh + ", " + hh.charAt(5));
        // System.out.println(hh + ", " + hh.charAt(6));
        // System.out.println(hh + ", " + hh.charAt(7));
        // System.out.println(hh + ", " + hh.charAt(8));
        
        hh ="정말아름답고아름다운밤이야";

        char [] fav = new char [hh.length()];

        // for(int i=0; i<hh.length(); i++){
        //     fav[i] = hh.charAt(i);
        //     System.out.println("fav [ " + i + " ] " + fav[i]);

        // }

        int i=-1;
        while(i<hh.length()-1){
            i++;
            
            System.out.print(" fav [ " + i + " ] " + hh.charAt(i) );

        }
    }
}