package vivienne;
import java.sql.*;
import java.util.*;
/**  
 * UserDAO
 */
public class UserDAO {

    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;
      
    public UserDAO(){
        try {
            String URL = "jdbc:mysql://localhost:3306/vivienne";
            String ID = "root";
            String PW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(URL, ID, PW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    // user_email;
    // user_name;
    // user_pw;
    // user_gender;
    // user_hp;
    // user_service;
    // user_birth;
    // user_service1;
    // create_date;

    public int signup(UserDTO userDTO){
        String SQL = "INSERT INTO vivienne_member(user_email, user_name, user_pw, user_gender, user_hp, user_service, user_birth,user_service1) VELUES(?,?,?,?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_email());
            ps.setString(2, userDTO.getUser_name());
            ps.setString(3, userDTO.getUser_pw());
            ps.setString(4, userDTO.getUser_gender());
            ps.setString(5, userDTO.getUser_hp());
            ps.setString(6, userDTO.getUser_service());
            ps.setString(7, userDTO.getUser_birth());
            ps.setString(8, userDTO.getUser_service1());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }

    // public int signin(String user_email, String user_pw){
    //     String SQL = "SELECT user_pw FROM vivienne_member WHERE user_email = ?";
    //     try {
    //         ps = conn.prepareStatement(SQL);
    //         ps.setString(1, user_email);
    //         rs = ps.executeQuery();
    //         if(rs.next()){
    //             if(rs.getString("user_pw").equals(user_pw)){
    //                 return 1;
    //             }
    //             else {
    //                 return 0;
    //             }
    //         }
    //         else {
    //             return -1;
    //         }
    //     } catch (Exception e){
    //         e.printStackTrace ();
    //     }
    //     finally {
    //         try {
    //             if(rs!=null){rs.close();}
    //             if(ps!=null){ps.close();}
    //             if(conn!=null){conn.close();}
    //         }
    //         catch(Exception e){
    //             e.printStackTrace();
    //         }
    //     }
    //     return -2;
    // }

    // // 이름, 비밀번호 변경, 비밀번호 확인, 성별, 휴대폰번호, 정보수신 , 생년월일 수정사항 
    // // user_email;
    // // user_name;
    // // user_pw1;
    // // user_pw2;
    // // user_gender;
    // // user_hp;
    // // user_hp_ok;
    // // user_jbss;
    // // user_birth;

    // public int update(UserDTO userDTO){
    //     String SQL = "UPDATE vivienne_member SET user_name=? user_pw=?, user_gender=?, user_hp=?, user_service=?, user_birth=? WHERE user_email=?";
    //     try {
    //         ps = conn.prepareStatement(SQL);
    //         ps.setString(1, userDTO.getUser_name());
    //         ps.setString(2, userDTO.getUser_pw());
    //         ps.setString(3, userDTO.getUser_gender());
    //         ps.setString(4, userDTO.getUser_hp());
    //         ps.setString(5, userDTO.getUser_service());
    //         ps.setString(6, userDTO.getUser_birth());
    //         ps.setString(7, userDTO.getUser_email());
    //         return ps.executeUpdate();
    //     }
    //     catch(Exception e){
    //         e.printStackTrace();
    //     }
    //     finally {
    //         try {
    //             if(rs!=null){rs.close();}
    //             if(ps!=null){ps.close();}
    //             if(conn!=null){conn.close();}
    //         }
    //         catch(Exception e){
    //             e.printStackTrace();
    //         }
    //     }
    //     return -1;
    // }

}