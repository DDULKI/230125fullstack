package gaib;

import java.sql.*;

/**
 * GaibDAO
 */
public class GaibDAO {

    private Connection conn=null;
    private PreparedStatement ps=null;
    private ResultSet rs=null;
    
    public GaibDAO() {
        try {
            String dbURL = "jdbc:mysql://localhost:3306/ddulki";
            String dbID = "root";
            String dbPW = "1234";
            Class.forName("com.mysql.jdbc.Driver"); // jdbc 드라이버 로딩 
            conn = DriverManager.getConnection(dbURL, dbID, dbPW);

        } catch (Exception e) {
           e.printStackTrace();
        }
    }
    
    public int signup(GaibDTO gaibDTO){
        String SQL = "INSERT INTO member(id, pw, name, birth, gender, email, nation, hp) VALUES(?,?,?,?,?,?,?,?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, gaibDTO.getId());
            ps.setString(2, gaibDTO.getPw());
            ps.setString(3, gaibDTO.getName());
            ps.setString(4, gaibDTO.getBirth());
            ps.setString(5, gaibDTO.getGender());
            ps.setString(6, gaibDTO.getEmail());
            ps.setString(7, gaibDTO.getNation());
            ps.setString(8, gaibDTO.getHp());
            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -1;
    }

    public int update(GaibDTO gaibDTO){
        String SQL = "UPDATE member SET pw=?, name=?, birth=?, gender=?, email=?, nation=?, hp=? WHERE id=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, gaibDTO.getPw());
            ps.setString(2, gaibDTO.getName());
            ps.setString(3, gaibDTO.getBirth());
            ps.setString(4, gaibDTO.getGender());
            ps.setString(5, gaibDTO.getEmail());
            ps.setString(6, gaibDTO.getNation());
            ps.setString(7, gaibDTO.getHp());
            ps.setString(8, gaibDTO.getId());
            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -1;
    }

    public int delete(GaibDTO gaibDTO){
        String SQL = "DELETE FROM member WHERE id=? AND name=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, gaibDTO.getId());
            ps.setString(2, gaibDTO.getName());
            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -1;
    }

    public int signin(String id, String pw){
        String SQL = "SELECT pw FROM member WHERE id=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, id);
            rs = ps.executeQuery();
            if(rs.next()){
                if(rs.getString(1).equals(pw)){
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
        return -2;
    }

    

}