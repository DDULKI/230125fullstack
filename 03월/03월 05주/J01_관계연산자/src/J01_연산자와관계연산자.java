/**
 * J01_연산자와관계연산자
 */
public class J01_연산자와관계연산자 {

    public static void main(String[] args) {
        // 성적 연산
        // 국어, 영어, 수학, 총점, 평균 자료형에 맞게  변수 지정하고 
        // 총점과 평균을 출력하시오.    
        // 출력은 국어, 영어, 수학, 총점, 평균 모두 출력 
        // 1. 변수 선언 
        // 국어, 영어, 수학, 총점 자료형 => 정수형 Integer
        // 평균은 소숫점이 포함된 결과가 나오기 때문에 실수형으로 지정한다 => float 

        int kor, eng, mat, tot;
        float avg; 

        // 점수 입력 => 리터럴 값 
        kor = 80;
        eng = 90;
        mat = 85; 

        // 총점 연산 합계
        tot = kor + eng + mat; 

        // 평균 연산 = 총점 /3 
        avg = (float)tot / 3; 
        

        // 출력 

        System.out.println("국어" + kor);
        System.out.println("영어" + eng);
        System.out.println("수학" + mat);
        System.out.println("총점" + tot);
        System.out.println("평균" + avg);
        
    }
}