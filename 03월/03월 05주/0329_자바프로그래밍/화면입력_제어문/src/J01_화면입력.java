import java.util.*;

/**
 * J01_화면입력
 */
public class J01_화면입력 {
    public static void main(String[] args) {
        
      

        Scanner sc = new Scanner(System.in);

        // 1. 문자열 입력을 받을 때 외부 클래스인 Scanner를 임포트 해서 
        //    생성자를 생성하여 사용한다. 
        //    문단을 입력받는다 즉 엔터를 만나면 입력받는다. 즉 문단 파라그래프(Pharagraphe)

        System.out.println("문자열을 입력 하세요");
        String str = sc.nextLine(); // 내가 적은 문자를 불러와준다. 
        System.out.println("입력된 문자는 = " + str);
        

        // 2. 단어 입력
        //    단어(Word)는 공백전까지 입력 받는다. 
        System.out.println("단어를 입력 : ?");
        String word = sc.next(); // 내가 적은 글자를 불러와준다. 한개씩 
        System.out.println("입력 단어는 = " + word);
        System.out.println();
    
    
        // 3. 정수 입력 
        System.out.println("정수 입력 : ");
        int num = sc.nextInt(); // 내가 적은 정수를 불러와준다. 
        System.out.println("입력된 정수는 = " + num);



        // 4. 실수 입력 
        System.out.println("정수 입력 : ");
        double num_d = sc.nextDouble(); // 내가 적은 실수를 불러와준다. 
        System.out.println("입력된 실수는 = " + num_d);

        // 5. 글자단위 문자(1글자) 입력 : next().글자단위로(인덱스번호); 
        // next().charAt(index Number) 인덱스 번호가 첫번째 글자 0, 두번째 글자 1, 세번째 글자 2....
        System.out.println("문자를 입력 : ");
        // char ch0 = sc.next().charAt(0); // char는 문자 자료형 
        // char ch1 = sc.next().charAt(1); 
        char ch2 = sc.next().charAt(2); 
        // System.out.println("입력된 첫번째 글자는 = " + ch0 ); 
        // System.out.println("입력된 두번째 글자는 = " + ch1 ); 
        System.out.println("입력된 세번째 글자는 = " + ch2 ); 


        
    
        sc.close(); // sc는 스캐너의 약자 
    }
}

