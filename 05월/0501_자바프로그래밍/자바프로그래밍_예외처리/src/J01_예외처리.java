/**
 * J01_예외처리
 * 
 * 
 * 
 * 예외처리클래스명
 * : 대표적인 클래스 => Exception
 * Exception : 모든 예외를 잡아주는 클래스 
 */
public class J01_예외처리 {

    public static void main(String[] args) {
        
        double a = 5; 
        char b = '2'; 
        double c; 


        try {
            c=a+b;
            System.out.println(c + " = 5/0 " );
        }
        
        catch(Exception e){
            System.out.println("계산 오류발생!!!!");
        }
       


    }
}