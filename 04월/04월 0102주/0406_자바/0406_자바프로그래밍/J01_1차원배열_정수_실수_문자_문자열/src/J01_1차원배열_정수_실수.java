/**
 * J01_1차원배열_정수_실수_문자_문자열
 */
public class J01_1차원배열_정수_실수 {

    public static void main(String[] args) {
        

        double[] grade = {4.5, 3.7, 2.7, 3.3, 4.2, 4.0, 3.2};
        // 반복문 

        int i = -1; 
        int cnt = 0; 
        double sum =0; 
        while(i<grade.length-1) { // i < 7 -1 : -1 0 1 2 3 4 5 
            i++; // 0 1 2 3 4 5 6 7 => 버그 발생 인덱스 번호 초과 오류=> -1을 안했을 때.  
            if(grade[i]>=3.5){
                cnt++;
                sum+=grade[i];
                System.out.println("grade[" + i + "] " + grade[i] ); // grade[6] 디버깅 
            }
        }
        
        // 총점, 3.5이상 카운트 인원수 
        System.out.println("3.5 이상 인원수 = " + cnt);
        System.out.println("3.5 이상 인원수 = " + sum);
    }
}