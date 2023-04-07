/**
 * J02_리터럴_데이터타입_형변환
 */
public class J02_리터럴_데이터타입_형변환 {
    public static void main(String[] args) {
        // 숫자 리터럴 
        long priceNum = 1_234_567_891_234_567_89L;
        // long priceNum = 1_234_567_891_234_567_899_L; 끝에 언더바 사용불가 
        float ploatNum = 3.12159f;
        // float ploatNum = 3._12159f; 소수점앞뒤에는 사용 불가 
        // float ploatNum = 3_.12159f; 소수점앞뒤에는 사용 불가 
        long longNum = 0x76;
        // long longNum = 0x_76; 앞뒤 사용 불가 
        // long longNum = 0_x76;

        long longNum2 = 0b01010; 
        // long longNum2 = 0_b01010; 
        // long longNum2 = 0b01010;
        
        int ingNum4 = 045; // 8진수 
        int ingNum5 = 034
        

        System.out.println("//숫자 리터럴 _ 언더바 (언더스코어) 사용 : 가독성을 높여준다. ________________");
        System.out.println("1_234_567_891_234_567_89L" + priceNum);

    }
}