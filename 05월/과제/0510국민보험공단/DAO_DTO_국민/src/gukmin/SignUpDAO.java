package gukmin;
import java.sql.*;
import gukmin.SignUpDTO;
import java.util.*;
              
/**
 * SignUpDAO
 */  
public class SignUpDAO {

    private Connection conn=null;
    private PreparedStatement ps=null;
    private ResultSet rs=null;
    
    // 메인 생성자 
    public SignUpDAO(){
        try {
            String DBURL ="jdbc:mysql://localhost:3306/ddulki";
            String DBID ="root";
            String DBPW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
     
    // 입력 
    public int insert(SignUpDTO signUpDTO){
        String SQL = "INSERT INTO gmgungang_signup(saup_grbh, saup_giho, gaib_yb, user_id, user_pw1, sel_pw, pwbs_ok, user_hp, input_email, email_domain_select, sosic_ok) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, signUpDTO.getSaup_grbh());
            ps.setString(2, signUpDTO.getSaup_giho());
            ps.setString(3, signUpDTO.getGaib_yb());
            ps.setString(4, signUpDTO.getUser_id());
            ps.setString(5, signUpDTO.getUser_pw1());
            ps.setString(6, signUpDTO.getSel_pw());
            ps.setString(7, signUpDTO.getPwbs_ok());
            ps.setString(8, signUpDTO.getUser_hp());
            ps.setString(9, signUpDTO.getInput_email());
            ps.setString(10, signUpDTO.getEmail_domain_select());
            ps.setString(11, signUpDTO.getSosic_ok());
            return ps.executeUpdate();
        } 
        catch (Exception e) {
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
        return -1;
    }
    
    // 로그인
    public int signin(String user_id, String user_pw1){
        String SQL = "SELECT user_pw1 FROM gmgungang_signup WHERE user_id = ? ";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1,user_id);

            rs = ps.executeQuery();
            if(rs.next()){
                if(rs.getString(1).equals(user_pw1)){
                    return 1; //로그인 성공
                }
                else {
                    return 0;
                }
            }
            else {
                return -1; // 아이디 틀림
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -2; // 기타오류
    }

    // 수정 
    public int update(SignUpDTO signUpDTO){
        String SQL = "UPDATE gmgungang_signup SET user_pw1=?, saup_grbh=?, saup_giho=?, gaib_yb=?, sel_pw=?, pwbs_ok=?,  user_hp=?, input_email=?, email_domain_select=?, sosic_ok=? WHERE user_id=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, signUpDTO.getUser_pw1());
            ps.setString(2, signUpDTO.getSaup_grbh());
            ps.setString(3, signUpDTO.getSaup_giho());
            ps.setString(4, signUpDTO.getGaib_yb());
            ps.setString(5, signUpDTO.getSel_pw());
            ps.setString(6, signUpDTO.getPwbs_ok());
            ps.setString(7, signUpDTO.getUser_hp());
            ps.setString(8, signUpDTO.getInput_email());
            ps.setString(9, signUpDTO.getEmail_domain_select());
            ps.setString(10, signUpDTO.getSosic_ok());
            ps.setString(11, signUpDTO.getUser_id());
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
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -1;
    }

    //삭제
    public int delete(SignUpDTO signUpDTO){
        String SQL = "DELETE FROM gmgungang_signup WHERE user_id =? AND user_pw1=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, signUpDTO.getUser_id());
            ps.setString(2, signUpDTO.getUser_pw1());
            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally{
            try{
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                if(conn!= null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -1;
    }

    // 개인정보 수정하기 위해서 업데이트 폼에 데이터 내보내기   
    public SignUpDTO getJoin(String user_id){
        SignUpDTO signUpDTO = new SignUpDTO();

        String SQL = "SELECT * FROM gmgungang_signup WHERE user_id = ?";
        try { 
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);
            rs = ps.executeQuery();
            if(rs.next()){
                signUpDTO.setSaup_grbh(rs.getString("saup_grbh"));
                signUpDTO.setSaup_giho(rs.getString("saup_giho"));
                signUpDTO.setGaib_yb(rs.getString("gaib_yb"));
                signUpDTO.setUser_id(rs.getString("user_id"));
                signUpDTO.setUser_pw1(rs.getString("user_pw1"));
                signUpDTO.setSel_pw(rs.getString("sel_pw"));
                signUpDTO.setPwbs_ok(rs.getString("pwbs_ok"));
                signUpDTO.setUser_hp(rs.getString("user_hp"));
                signUpDTO.setInput_email(rs.getString("input_email"));
                signUpDTO.setEmail_domain_select(rs.getString("email_domain_select"));
                signUpDTO.setSosic_ok(rs.getString("sosic_ok"));
            }
        }
        catch (Exception e){
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
        return signUpDTO; // 기타오류 / 클래스 이름이 아닌 인스턴스 이름을 넣어줘야한다.
    }

    // 가입 회원 전체리스트 목록 가져오기 
    public List<SignUpDTO> getJoinList(){
        SignUpDTO signUpDTO = null;
        List<SignUpDTO> list = new ArrayList<>();

        // 모든 전체 리스트 목록을 가져오는 SQL 
        String SQL = "SELECT * FROM gmgungang_signup";
        try{
            ps = conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            while(rs.next()){
                signUpDTO = new SignUpDTO();
                signUpDTO.setSaup_grbh(rs.getString("saup_grbh"));
                signUpDTO.setSaup_giho(rs.getString("saup_giho"));
                signUpDTO.setGaib_yb(rs.getString("gaib_yb"));
                signUpDTO.setUser_id(rs.getString("user_id"));
                signUpDTO.setUser_pw1(rs.getString("user_pw1"));
                signUpDTO.setSel_pw(rs.getString("sel_pw"));
                signUpDTO.setPwbs_ok(rs.getString("pwbs_ok"));
                signUpDTO.setUser_hp(rs.getString("user_hp"));
                signUpDTO.setInput_email(rs.getString("input_email"));
                signUpDTO.setEmail_domain_select(rs.getString("email_domain_select"));
                signUpDTO.setSosic_ok(rs.getString("sosic_ok"));
                
                list.add(signUpDTO);
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        finally{
            try{
                if(rs!= null) {rs.close();}
                if(ps!= null) {ps.close();}
                if(conn != null) {conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return list;
    }
}