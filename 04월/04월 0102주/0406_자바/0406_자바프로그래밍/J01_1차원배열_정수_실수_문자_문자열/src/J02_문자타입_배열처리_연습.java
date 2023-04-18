/**
 * J02_문자타입_배열처리_연습
 */
public class J02_문자타입_배열처리_연습 {

    public static void main(String[] args) {
        char[] ch = new char[13];
        ch[0]='계';
        ch[1]='속';
        ch[2]='공';
        ch[3]='부';
        ch[4]='해';
        ch[5]='라';
        ch[6]='돌';
        ch[7]='아';
        ch[8]='갈';
        ch[9]='곳';
        ch[10]='은';
        ch[11]='없';
        ch[12]='다';

        // for(int i=0; i<ch.length; i++ ){
        //     System.out.print(ch[i]);
        //     if(i==5){
        //         System.out.print(" ");
        //     }
        // }

        System.out.println();
        System.out.println();

        int i=-1;

        while(i<ch.length-1){
            i++;
            System.out.print(ch[i]);
            if(i==1){
                System.out.print(" ");
            }
            else if(i==5){
                System.out.print(" ");
            }
            else if(i==8){
                System.out.print(" ");
            }
            else if(i==10){
                System.out.print(" ");
            }
            
        }


    }
}