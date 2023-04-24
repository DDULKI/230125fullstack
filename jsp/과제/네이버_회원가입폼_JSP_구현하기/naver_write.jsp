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

    String id           = request.getParameter("id");
    String pw           = request.getParameter("pw");
    String pwok         = request.getParameter("pwok");
    String name         = request.getParameter("name");
    String birth_year   = request.getParameter("birth_year");
    String birth_month  = request.getParameter("birth_month");
    String birth_day    = request.getParameter("birth_day");
    String birth        = birth_year + "-" + birth_month + "-" + birth_day;
    String gender       = request.getParameter("gender");
    String email        = request.getParameter("email");
    String country      = request.getParameter("country");
    String hp           = request.getParameter("hp");
    String hpck         = request.getParameter("hpck");

%>

<%
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/younghwan","root","1234");
    String sql = "INSERT INTO naver(id,pw,pwok,name,birth,gender,email,country,hp,hpck) VALUES(?,?,?,?,?,?,?,?,?,?)";
    PreparedStatement ps = conn.prepareStatement(sql);

    ps.setString(1,  id);
    ps.setString(2,  pw);
    ps.setString(3,  pwok);
    ps.setString(4,  name);
    ps.setString(5,  birth);
    ps.setString(6,  gender);
    ps.setString(7,  email);
    ps.setString(8,  country);
    ps.setString(9,  hp);
    ps.setString(10, hpck);
    ps.executeUpdate();

    ps.close();
    conn.close();
%>

<script>
    window.location.href="naver_view.jsp"
</script>