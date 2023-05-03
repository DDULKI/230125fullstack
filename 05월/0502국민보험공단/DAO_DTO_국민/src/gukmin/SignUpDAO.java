package gukmin;
import java.sql.*;
        
/**
 * SignUpDAO
 */  
public class SignUpDAO {

    private Connection conn=null;
    private PreparedStatement ps=null;
    
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
        String SQL = "INSERT INTO gmgungang_signup(saup_grbh, saup_giho, gaib_yb, user_id, user_pw1, sel_pw, pwbs_ok, user_hp, input_email, email_domain_select, sosic_ok, sosic_no) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
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
            ps.setString(12, signUpDTO.getSosic_no());
            return ps.executeUpdate();
        } 
        catch (Exception e) {
            e.printStackTrace();
        }
        return -1;
    }
    
}