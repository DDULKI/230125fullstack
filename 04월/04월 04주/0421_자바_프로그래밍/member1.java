// 패키지 이름 member 
// 클래스 이름 SignUp 세터, 게터 
// 멤버변수는 모두 private 7개이상 변수 지정 
// 클래스 이름 Gaib 메인메서드 있는 클래스 생성자 생성 입력 출력 

package member;
public class Gaib {

    public static void main(String[] args) {
        
        // 
        SignUp newSignUp = new SignUp();
        newSignUp.setId("Seulki4994");
        newSignUp.setPw1("qjwm4547");
        newSignUp.setPw2("qjwm4547");
        newSignUp.setName("정슬기");
        newSignUp.setEmail("seulki4994@naver.com");
        newSignUp.setHp("010-7771-6035");
        newSignUp.setAddr("부천");
        newSignUp.setGender("여자");

        System.out.println("아이디 : " + newSignUp.getId());
        System.out.println("비밀번호 : " + newSignUp.getPw1());
        System.out.println("비밀번호확인 : " + newSignUp.getPw2());
        System.out.println("이름 : " + newSignUp.getName());
        System.out.println("이메일 : " + newSignUp.getEmail());
        System.out.println("핸드폰번호 : " + newSignUp.getHp());
        System.out.println("주소 : " + newSignUp.getAddr());
        System.out.println("성별 : " + newSignUp.getGender());
  
       
    }
}

class SignUp {

    private String id;
    private String pw1;
    private String pw2;
    private String name;
    private String email;
    private String hp;
    private String addr;
    private String gender;

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw1() {
        return this.pw1;
    }

    public void setPw1(String pw1) {
        this.pw1 = pw1;
    }

    public String getPw2() {
        return this.pw2;
    }

    public void setPw2(String pw2) {
        this.pw2 = pw2;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHp() {
        return this.hp;
    }

    public void setHp(String hp) {
        this.hp = hp;
    }

    public String getAddr() {
        return this.addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

  
}