package kurly;
import java.sql.*;
import kurly.*;
import kurly.UserDTO;
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
            String URL = "jdbc:mysql://localhost:3306/ddulki";
            String ID = "root";
            String PW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(URL,ID,PW);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
       
    }

    public int signup(UserDTO userDTO){
        String SQL ="INSERT INTO kurly(user_id, user_pw, user_name,user_email,user_hp,user_addr,user_gender,user_birth,user_add,user_chk1, user_chk2, user_chk3, user_chk4 ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        try {
            ps=conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_id());
            ps.setString(2, userDTO.getUser_pw());
            ps.setString(3, userDTO.getUser_name());
            ps.setString(4, userDTO.getUser_email());
            ps.setString(5, userDTO.getUser_hp());
            ps.setString(6, userDTO.getUser_addr());
            ps.setString(7, userDTO.getUser_gender());
            ps.setString(8, userDTO.getUser_birth());
            ps.setString(9, userDTO.getUser_add());
            ps.setString(10, userDTO.getUser_chk1());
            ps.setString(11, userDTO.getUser_chk2());
            ps.setString(12, userDTO.getUser_chk3());
            ps.setString(13, userDTO.getUser_chk4());
            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally {  // 무조건 실행하는 키워드 
            try {
                if(rs!= null){ rs.close();}
                if(ps!= null){ ps.close();}
                if(conn != null){ conn.close();}
            
            }
            catch(Exception e){
                e.printStackTrace();
            }
         }
        return -1;
    }

    public int signin(String user_id, String user_pw){
        String SQL = "SELECT user_pw FROM kurly WHERE user_id =? ";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);

            rs = ps.executeQuery();
            if(rs.next()){
                if(rs.getString(1).equals(user_pw)){
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                return -1;
            }
        } catch (Exception e) {
           e.printStackTrace();
        }
        finally {  // 무조건 실행하는 키워드 
            try {
                if(rs!= null){ rs.close();}
                if(ps!= null){ ps.close();}
                if(conn != null){ conn.close();}
            
            }
            catch(Exception e){
                e.printStackTrace();
            }
         }
        return -2;
    }
          
    public int update(UserDTO userDTO){
        String SQL = "UPDATE kurly SET user_pw=?, user_name=?, user_email=?, user_hp=?, user_addr=?, user_gender=?, user_birth=?, user_add=?, user_chk1=?, user_chk2=?, user_chk3=?, user_chk4=? WHERE user_id=?";
        try {
            ps = conn.prepareStatement(SQL);
         
            ps.setString(1, userDTO.getUser_pw());
            ps.setString(2, userDTO.getUser_name());
            ps.setString(3, userDTO.getUser_email());
            ps.setString(4, userDTO.getUser_hp());
            ps.setString(5, userDTO.getUser_addr());
            ps.setString(6, userDTO.getUser_gender());
            ps.setString(7, userDTO.getUser_birth());
            ps.setString(8, userDTO.getUser_add());
            ps.setString(9, userDTO.getUser_chk1());
            ps.setString(10, userDTO.getUser_chk2());
            ps.setString(11, userDTO.getUser_chk3());
            ps.setString(12, userDTO.getUser_chk4());
            ps.setString(13, userDTO.getUser_id());
            return ps.executeUpdate();
        } catch (Exception e){
            e.printStackTrace();
        }
        finally {  // 무조건 실행하는 키워드 
            try {
                if(rs!= null){ rs.close();}
                if(ps!= null){ ps.close();}
                if(conn != null){ conn.close();}
            
            }
            catch(Exception e){
                e.printStackTrace();
            }
         }
        return -1;
    }

    // 삭제 
    public int delete(UserDTO userDTO){
        String SQL = "DELETE FROM kurly WHERE user_id=? AND user_pw =?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_id());
            ps.setString(2, userDTO.getUser_pw());
            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                if(conn!= null){conn.close();}
            }
            catch (Exception e){
                e.printStackTrace();
            }
        }
        return -1; 
    }

    // 개인정보 수정하기 위해서 업데이트 폼에 데이터 내보내기 
    public UserDTO getJoin(String user_id){
        UserDTO userDTO = new UserDTO();

        String SQL = "SELECT * FROM kurly WHERE user_id=? ";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);
            rs = ps.executeQuery();
            if(rs.next()){
                userDTO.setUser_id(rs.getString("user_id"));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_email(rs.getString("user_email"));
                userDTO.setUser_hp(rs.getString("user_hp"));
                userDTO.setUser_addr(rs.getString("user_addr"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setUser_add(rs.getString("user_add"));
                userDTO.setUser_chk1(rs.getString("user_chk1"));
                userDTO.setUser_chk2(rs.getString("user_chk2"));
                userDTO.setUser_chk3(rs.getString("user_chk3"));
                userDTO.setUser_chk4(rs.getString("user_chk4"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null) {rs.close();}
                if(ps!= null) {ps.close();}
                if(conn!= null) {conn.close();}
            }
            catch (Exception e){
                e.printStackTrace();
            }
        }
        return userDTO;
    }    

    // 가입 회원 전체 가져오기 

    public List<UserDTO> getJoinList(){
        UserDTO userDTO = null;
        List<UserDTO> list = new ArrayList<>();

        // 모든 전체 리스트 목록을 가져오는 SQL
        String SQL = "SELECT * FROM kurly";
        try {
            ps = conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            while(rs.next()){       
                userDTO = new UserDTO();
                userDTO.setIdx(rs.getInt("idx"));
                userDTO.setUser_id(rs.getString("user_id"));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_email(rs.getString("user_email"));
                userDTO.setUser_hp(rs.getString("user_hp"));
                userDTO.setUser_addr(rs.getString("user_addr"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setUser_add(rs.getString("user_add"));
                userDTO.setUser_chk1(rs.getString("user_chk1"));
                userDTO.setUser_chk2(rs.getString("user_chk2"));
                userDTO.setUser_chk3(rs.getString("user_chk3"));
                userDTO.setUser_chk4(rs.getString("user_chk4"));

                list.add(userDTO);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                if(conn!= null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return list; 
    }

}