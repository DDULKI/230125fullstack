
// publc은 모두 가져온다.
import mission.MissionAgent;  // 패키지이름.클래스이름

public class J01_AccessModifier {
    
    public static void main(String[] args) {
        
        // 생성자 생성 MissionAgent
        MissionAgent newMissionAgent = new MissionAgent();

        newMissionAgent.setName("톰 크로즈"); // public 메서드로 어디서든지 접근 가능하다.
        newMissionAgent.codeNum = 301;  // public 접근제한자로서 어디서든지 접근 가능하다.

        newMissionAgent.showData();

        // 생성자 생성   Agent
        Agent newAgent = new Agent();

        newAgent.setName("안젤리나 졸리");
        newAgent.setAge(-40);

        // Agent 에서 게터함수으로 이름과 나이를 출력하라
        System.out.println("이름 : " + newAgent.getName() );
        System.out.println("나이 : " + newAgent.getAge() );


    }

}

// default  접근제한자
class Agent{

    // private 멤버변수 접근지정
    // public 메서드 접근지정
    private String name;
    private int age;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {

        if(age<0){
            this.age = age * -1;  // 양수변환
        }
        else{
            this.age = age;
        }
        
    }

}
