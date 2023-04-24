<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<%@
    page import="java.sql.*"
%>

<%  
    request.setCharacterEncoding("UTF-8");

%>

<%
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/younghwan","root","1234");
    String sql = "INSERT INTO naver(id,pw,pwok,name,birth,gender,email,country,hp,hpck) VALUES(?,?,?,?,?,?,?,?,?,?)";
    PreparedStatement ps = conn.prepareStatement(sql);

    ps.setString(1, "moonjong9");
    ps.setString(2, "moonjong123");
    ps.setString(3, "moonjong123");
    ps.setString(4, "이순신장군");
    ps.setString(5, "1970-9-29");
    ps.setString(6, "남성");
    ps.setString(7, "moonjong@naver.com");
    ps.setString(8, "대한민국 +82");
    ps.setString(9, "010-7942-5305");
    ps.setString(10, "1234567");
    ps.executeUpdate();

    ps.close();
    conn.close();
%>

<script>
    location.href="naver_view.jsp"
</script>