package bbs;
import java.sql.*;

public class BbsDAO {
    private Connection conn;
    private PreparedStatement ps; 
    private ResultSet rs; 

    public BbsDAO() {
        try {
            String DBURL = "jdbc:mysql://localhost:3306/bbs";
            String DBID = "root";
            String DBPW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    Public String getDate(){
        String SQL = "SELECT now()";
        try {
            PreparedStatement ps = conn.prepareStatement(SQL);
            rs = ps.executeQurey();
        }
    }


}
