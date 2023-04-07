public class App {
    public static void main(String[] args) throws Exception {
        
        
    float num_float_F = 354.1234567890123456789F;
    float num_float_f = 354.1234567890123456789F;

    double num_double_D_float_F = (double)num_float_F;
    double num_double_d_float_f = (double)num_float_f;
    
    System.out.println("num_double_D_float_F" + num_double_D_float_F);
    System.out.println("num_double_D_float_f" + num_double_d_float_f);


    System.out.println("");
    System.out.println("// 수동형변환 (명시적 형변환) : 문자 => 숫자 ______");
    
    // 1. 문자 => 숫자 
    String strNum = "1"; // 스트링은 첫글자 대문자로 선언한다. 리터럴값은 더블쿼트를 사용한다. 

    // String to int 
    int intNum = Integer.parseInt(strNum); // 파스인트 숫자로 변환할때 썼었던.. 자바스크립때!  
    System.out.println("// String to int ______");
    System.out.println("String strNum = 1" + strNum);
    System.out.println("1 Integer.parseInt(strNum) => intNum" + intNum);

    // String to Double 
    double doubleNum = Double.valueOf(strNum);
    System.out.println("// String to double ______");
    System.out.println("String strNum = " + strNum);
    System.out.println("Double.valueOf(strNum) => doubleNum" + doubleNum);

    // String to Float 
    float floatNum = Float.valueOf(strNum);
    System.out.println("// String to float ______");
    System.out.println("String strNum = " + strNum);
    System.out.println("Float.valueOf(strNum) => floatNum" + floatNum);

    // String to Long 
    long longNum = Long.parseLong(strNum);
    System.out.println("// String to Long ______");
    System.out.println("String strNum = " + strNum);
    System.out.println("Long.parseLong(strNum) => longNum" + longNum);

    // short to Long 
    short shortNum = Short.parseShort(strNum);
    System.out.println("// String to Short ______");
    System.out.println("String strNum = " + strNum);
    System.out.println("Short.parseShort(strNum) => shortNum" + shortNum);




    System.out.println("");
    System.out.println("");
    System.out.println("// 수동형변환 (명시적 형변환) : 숫자 => 문자  ______");

    // 2. 숫자 => 문자 
    int intNum2 = 10;
    String strNum2 = ""; 

    strNum2 = String.valueOf(intNum2);

    System.out.println("int intNum2 = " + intNum2);
    System.out.println("String.valueOf(intNum2) => strNum2" + strNum2);

    strNum2 = Integer.toString(intNum2);

    System.out.println("int intNum2 = " + intNum2);
    System.out.println("Integer.toString(intNum2) => strNum2" + strNum2);

    // 3. 정수 <=> 실수 
    double doubleNum2 = 1.12345;
    
    int intNumResult;

    // Double to Int
    intNumResult = (int)doubleNum2;

    System.out.println("doubleNum2 = " + doubleNum2);
    System.out.println("(int)doubleNum2 => intNumResult" + intNumResult);


    float floatNum2 = 1.12345f; 
    // Float to Int
    intNumResult = (int)floatNum2;

    

    }
}
