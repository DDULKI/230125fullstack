public class J02_성적처리 {
    public static void main(String[] args) {
        int kor, eng, mat, tot;
        double avg; 

        // 점수 입력 
        kor = 80;
        eng = 90;
        mat = 85; 

        // 총점 연산 합계 
        tot = kor + eng + mat;

        // 평균 
        avg = (double)tot / 3;

        // 출력 
        System.out.println("국어" + kor);
        System.out.println("영어" + eng);
        System.out.println("수학" + mat);
        System.out.println("총점" + tot);
        System.out.println("평균" + avg);

    }
}
