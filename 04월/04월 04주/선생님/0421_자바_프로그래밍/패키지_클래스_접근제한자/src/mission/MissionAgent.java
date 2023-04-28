package mission;

public class MissionAgent {
    
    String name;    // default 멤버변수
    public int codeNum; // publick 멤버변수 : 중요한 비밀번호가 저장된다.
      
    public String getName(){  // getter 함수
        return name;  
    }

    public void setName(String name){  // setter 함수
        this.name = name;
    }

    // 진짜코드는 은닉화 관리한다.
    private int getCodeNum(){  // getter 함수
        return codeNum+2023;
    }


    public void showData(){
        System.err.println("이름 : " + getName() );

        // private 멤버를 같은 클래스에서 접근하여 사용한다.
        System.err.println("코드번호 : " + getCodeNum() );
    }

}




