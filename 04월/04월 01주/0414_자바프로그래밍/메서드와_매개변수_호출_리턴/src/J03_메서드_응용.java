import java.util.Scanner;

public class J03_메서드_응용 {


    // 1. 리턴 X, 매개변수 X 메서드 
    // 예제] "안녕하세요" 문자열을 5번 출력하는 메서드를 만들고 실행하시오
    // static이 없는 메서드는 실행할 수 없다. 
    // 단 클래스 생성자를 만들어서 메서드 호출 실행 가능하다. 
    static void hello(){
        for(int i=0; i<5; i++){
            System.out.println(( i+1 ) + " 안녕하세요!");
        }
    }

    // 2. 리턴 X, 매개변수 2개인 메서드 
    // 매개값 문자열과 숫자를 입력받고
    // 받은 숫자의 횟수만큼 문자열 내용을 
    // 반복 출력하는 메서드를 작성하고 실행하시오. 
    // 메서드 이름 repeatStr 매개변수는 문자열 str, 숫자는 num

    void repeatStr(String str, int num){
        for(int i=0; i<num; i++){
            System.out.println(str);
        }
    }

    // 3. 리턴 O , 매개변수 O 메서드 
    // 문제] 
    // 세개의 숫자를 입력받고, 평균값을 리턴하는 메서드를 작성하고 실행하시오. 
    // 메서드 이름 average 매개변수는 숫자 a,b,c 사용 

    double average(int a, int b, int c){
        return (a + b + c)/3.0;
    }


    // 4. 리턴 X, 매개변수 0 메서드 (int[] arr)
    // 문제 ] 매개변수가 1차원 배열
    // 매개변수 받아서 배열을 반복문 사용 출력하는 메서드 작성하고 실행하시오. 
    // 메서드 이름 arrMethod1 매개변수 배열은 정수형 1차원 배열 변수 사용 arr 

    void arrMethod1(int[] arr){
        for(int i=0; i<arr.length; i++){
            System.out.println(arr[i]);
        }
    }
    
    
    // 5. 리턴x, 매개변수 0 메서드 (int [][] arr1)
    // 문제] 매개변수가 2차원 배열 
    // 매개변수 받아서 배열을 반복문 사용 출력하는 메서드 작성하고 실행하시오.
    // 메서드 이름 arrMethod2 매개변수 배열은 정수형 1차원  

    static void arrMethod2(int[][] arr2){
        for(int i=0; i<arr2.length; i++){
            for(int j=0; j<arr2[i].length; j++){
                System.out.printf(" %2d ", arr2[i][j]);
            }
            System.out.println();
        }
    }

    // 6 . 
    static int arrMethod3(int[][] arr3){
        int sum =0; 
        for(int i=0; i<arr3.length; i++){
            for(int j=0; j<arr3[i].length; j++){
                sum+=arr3[i][j];
                System.out.printf(" %3d ", arr3[i][j]);
            }
            System.out.println();
        }
        return sum;
    }


 
    public static void main(String[] args) {


        // static 없으면 반드시 클래스를 생성자를 만들어서 
        // 실행할 수 있다. 
    
        //  J03_메서드_응용 newJ03_메서드_응용 = new J03_메서드_응용();

        // 1. 리턴 X, 매개변수 X 메서드 = > 메서드 호출 
        System.out.println();
        // newJ03_메서드_응용.hello(); static 키워드가 없는 경우에 사용 방법
        hello();
        System.out.println();

        // 2. 리턴 X, 매개변수 X 메서드 
        System.out.println();
        J03_메서드_응용 newJ03_메서드_응용 = new J03_메서드_응용();
        newJ03_메서드_응용.repeatStr("오늘은 즐거운 금요일^^~! ", 10);
        System.out.println();

        // 3. 리턴 0, 매개변수 0 , 메서드 
        System.out.println();
        
        double avg = newJ03_메서드_응용.average(100, 200, 300);
        System.out.println("세수의 평균 = " + avg);
        System.out.println();




        // 4. 리턴 x, 매개변수 0, 메서드(int[] arr) 
        // 문제 ] 매개변수가 1차원 배열 
        // 매개변수 받아서 배열을 반복문 사용 출력하는 메서드 작성하고 실행 
        // 메서드 이름 arrMethod1 매개변수는 배열 정수형 1차원 배열 변수 사용 arr 
        System.out.println();
        int [] arr = {1,2,3,4,5};
        newJ03_메서드_응용.arrMethod1(arr);
        System.out.println();




        // 5.  리턴 x , 매개변수 0, 메서드(int[][] arr1)
        // 문제 ] 매개변수가 2차원 배열 
        // 매개변수 받아서 배열을 반복문 사용 출력하는 메서드 작성하고 실행하시오. 
        // 메서드 이름 arrMethod2 매개변수 배열은 정수형 1차원 배열 변수 사용 arr 2
        System.out.println();
        int [][] arr2 = {
            {1,2,3,4,5},
            {6,7,8,9,10},
            {11,12,13,14,15},
            {16,17,18,19,20},
            {21,22,23,24,25}
        };
        arrMethod2(arr2);
        System.out.println();
        System.out.println(arrMethod3(arr2)); 
        System.out.println();


    }
    
}
