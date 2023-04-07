/**
 * J01_1차원배열_정수_실수_연습
 */
public class J01_1차원배열_정수_실수_연습 {

    public static void main(String[] args) {
        
        // double[] grade = {4.5, 3.7, 2.7, 3.3, 4.2, 4.0, 3.2};

        // int i =-1;
        // int cnt =0;
        // double sum =0;
        // while(i<grade.length-1){
        //     i++;
        //     if(grade[i]>=3.5){ // grade가 3.5보다 같거나 크면. 
        //         cnt++;
        //         sum+=grade[i];
        //         System.out.println("grade[" + i + " ] " + grade[i]);
        //     }
        // }

        // System.out.println("3.5 이상 인원수 = " + cnt);
        // System.out.println("총 점수 = " + sum);

        // double[] grade = {4.5, 3.7, 2.7, 3.3, 4.2, 4.0, 3.2};

        // int i =-1; 
        // int cnt = 0;
        // double sum =0;
        // while(i<grade.length-1){
        //     i++;
        //     if(grade[i]>=2.5){
        //         cnt++;
        //         sum+=grade[i];
        //         System.out.println("grade[" + i + "]" +grade[i]);

        //     }
        // }

        // System.out.println("2.5 이상 인원수 = " + cnt);
        // System.out.println("총 점수 = " + sum);

        double[] grade = {4.5, 6.2, 3.4, 2.2, 3.3, 7.0, 9.9};

        int i = -1;
        int cnt = 0;
        double sum =0; 
        while(i<grade.length-1){
            i++;
            if(grade[i]>5.5){
                cnt++;
                sum+=grade[i];
                System.out.println("grade["+i+"]"+grade[i]);
            }
        }

        System.out.println("5.5 이상 인원수 = " + cnt);
        System.out.println("총 점수 = " + sum);

    }
}