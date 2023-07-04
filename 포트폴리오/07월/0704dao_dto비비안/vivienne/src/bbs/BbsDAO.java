package bbs;
import java.sql.*;
import bbs.BbsDTO;
import java.util.*;

public class BbsDAO {
    private Connection conn;
    private PreparedStatement ps; 
    private ResultSet rs; 

    public BbsDAO() {
        try {
            String DBURL = "jdbc:mysql://localhost:3306/vivienne";
            String DBID = "root";
            String DBPW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public int post(BbsDTO bbsDTO) {
        String SQL ="insert into bbs(user_email, subject, content) values(?,?,?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, bbsDTO.getUser_email());
            ps.setString(2, bbsDTO.getSubject());
            ps.setString(3, bbsDTO.getContent());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }     
        finally {
            try {
                if (rs != null) { rs.close(); }
                if (ps != null) { ps.close(); }
                if (conn != null) { conn.close(); }
            } catch (Exception e) {}
        }
        return -1; 
    }
  
         
    // member table과 bbs table join 해서 member의 이메일이 현재 로그인된 이메일인 bbs를 불러옴 
    public List<BbsDTO> select(String user_email){
        BbsDTO bbsDTO = null;
        List<BbsDTO> list = new ArrayList<>();
        // String SQL = "select * from vivienne_member m join bbs b where v.user_email=? && b.user_email=?";
        String SQL = "SELECT * FROM vivienne_member m JOIN bbs b ON m.user_email = b.user_email WHERE m.user_email=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            ps.setString(2, user_email);
            rs = ps.executeQuery();
            while(rs.next()){
                bbsDTO = new BbsDTO();
                bbsDTO.setBbsId(rs.getInt("bbsId"));
                bbsDTO.setSubject(rs.getString("subject"));
                bbsDTO.setContent(rs.getString("content"));
                list.add(bbsDTO);
            }
            return list;
        } catch (Exception e) {
            e.printStackTrace();
        }
        finally {
            try {
                if (rs != null) { rs.close(); }
                if (ps != null) { ps.close(); }
                if (conn != null) { conn.close(); }
            } catch (Exception e) {}
        }
        return list;
    }   

    public int delete(BbsDTO bbsDTO) {
        String SQL = "delete from bbs where bbsId=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setInt(1, bbsDTO.getBbsId());
            return ps.executeUpdate();
        }
        catch(Exception e){}
        finally {
            try {
                if (rs != null) { rs.close(); }
                if (ps != null) { ps.close(); }
                if (conn != null) { conn.close(); }
            } catch (Exception e) {}
        }
        return -1; 
    }

}


