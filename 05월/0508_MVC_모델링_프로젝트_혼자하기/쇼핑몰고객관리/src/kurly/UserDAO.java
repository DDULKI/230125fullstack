package kurly;

import java.sql.DriverManager;
import java.sql.*;
import kurly.UserDTO;

public class UserDAO {    
    
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;
       
    public UserDAO(){
        try {
            // 변수설정
            String URL = "jdbc:mysql://localhost:3306/user";
            String ID = "root";
            String PW = "1234";
             // 1. 데이터베이스 드라이버(JDBC)
            Class.forName("com.mysql.jdbc.Driver");
           
             // 2. 데이터베이스 인증 & 인가 (URL, ID, PW)
            conn = DriverManager.getConnection(URL, ID, PW);
        } catch (Exception e) {
           e.printStackTrace();
        }
    }
        //1. 회원가입 signup
        //2. 회원로그인 signin
        //3. 회원정보수정 update
        //4. 회원탈퇴처리(회원정보삭제) delete

        public int signup(UserDTO userDTO){
            String SQL = "INSERT INTO kurly_table(user_id, user_pw, user_name, user_email, user_hp, user_addr, user_gender, user_birth) VALUES(?,?,?,?,?,?,?,?)";
            try {
                ps = conn.prepareStatement(SQL); // 데이터베이스를 여기에 저장하겠다~ 
                ps.setString(1, userDTO.getUser_id());
                ps.setString(2, userDTO.getUser_pw());
                ps.setString(3, userDTO.getUser_name());
                ps.setString(4, userDTO.getUser_email());
                ps.setString(5, userDTO.getUser_hp());
                ps.setString(6, userDTO.getUser_addr());
                ps.setString(7, userDTO.getUser_gender());
                ps.setString(8, userDTO.getUser_birth());
                return ps.executeUpdate();
            }
            catch (Exception e){
                e.printStackTrace();
            }
            return -1;
        }


        public int signin(String user_id, String user_pw){
            String SQL = "SELECT user_pw FROM kurly_table WHERE user_id = ?";
            try {
                ps = conn.prepareStatement(SQL);
                ps.setString(1, user_id);
             
                rs = ps.executeQuery();
                if(rs.next()){
                    if(rs.getString(1).equals(user_pw)){
                        return 1; // 로그인 성공 
                    }
                    else {
                        return 0; // 로그인 실패 (비밀번호틀림)
                    }
                }
                else{
                    return -1; // 아이디틀림 
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return -2; // 기타오류 
        }




        public int update(UserDTO userDTO){
            String SQL = "UPDATE kurly_table SET user_pw=?, user_name=?, user_email=?, user_hp=?, user_addr=?, user_gender=?, user_birth=? WHERE user_id = ?";
            try {
                ps = conn.prepareStatement(SQL);
                ps.setString(1, userDTO.getUser_pw());  
                ps.setString(2, userDTO.getUser_name());  
                ps.setString(3, userDTO.getUser_hp());  
                ps.setString(4, userDTO.getUser_email());  
                ps.setString(5, userDTO.getUser_addr());  
                ps.setString(6, userDTO.getUser_gender());  
                ps.setString(7, userDTO.getUser_birth());  

                ps.setString(8, userDTO.getUser_id());  
                return ps.executeUpdate();
            } catch (Exception e) {
                e.printStackTrace();
                // TODO: handle exception
            }
            return -1;
        }
        public int delete(UserDTO userDTO){
            String SQL = "DELETE FROM kurly_table WHERE user_id = ? AND user_pw = ? ";
            try {
                ps = conn.prepareStatement(SQL);
                ps.setString(1, userDTO.getUser_id());  
                ps.setString(2, userDTO.getUser_pw());  
                return ps.executeUpdate();
            } catch (Exception e) {
                e.printStackTrace();
            }
            return -1;
        }



        // 개인정보 수정하기 위해서 업데이트 폼에 데이터 내보내기 
        public UserDTO getJoin(String user_id){
            UserDTO userDTO = new UserDTO();


            String SQL = "SELECT * FROM kurly_table WHERE user_id = ?";
            try {
                ps = conn.prepareStatement(SQL);
                ps.setString(1, user_id); // 입력된 아이디를 통해서 뽑아내라
                rs = ps.executeQuery();
                if(rs.next()){ // 데이터베이스 자료를 가져와서 DTO 세터에 저장
                   userDTO.setUser_id(rs.getString("user_id"));
                   userDTO.setUser_pw(rs.getString("user_pw"));
                   userDTO.setUser_name(rs.getString("user_name"));
                   userDTO.setUser_email(rs.getString("user_email"));
                   userDTO.setUser_hp(rs.getString("user_hp"));
                   userDTO.setUser_addr(rs.getString("user_addr"));
                   userDTO.setUser_gender(rs.getString("user_gender"));
                   userDTO.setUser_birth(rs.getString("user_birth"));
                }
                
            } catch (Exception e) {
                e.printStackTrace();
            }
            return userDTO; // 기타오류 / 클래스 이름이 아닌 인스턴스 이름을 넣어줘야한다. 
        }
}
