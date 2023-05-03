package gaib;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.*;

public class GaibDAO {
    
    private Connection conn=null;
    private PreparedStatement ps=null;
    private ResultSet rs=null;
    
    public GaibDAO(){
        try{
            String dBURL = "jdbc:mysql://localhost:3306/user";
            String dBID = "root";
            String dBPW = "1234";

            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(dBURL, dBID, dBPW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    public int signup(GaibDTO gaibDTO) {
        String SQL = "INSERT INTO gaib_table(user_id, user_pw, user_name, user_hp, user_email, user_addr) VALUES(?, ?, ?, ?, ?, ?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, gaibDTO.getUser_id());
            ps.setString(2, gaibDTO.getUser_pw());
            ps.setString(3, gaibDTO.getUser_name());
            ps.setString(4, gaibDTO.getUser_hp());
            ps.setString(5, gaibDTO.getUser_email());
            ps.setString(6, gaibDTO.getUser_addr());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }

}
