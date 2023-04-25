<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@
    page
    import="java.sql.*"
%>

<%
    request.setCharacterEncoding("UTF-8");
    String id = request.getParameter("id") + "@naver.com";
    String pw = request.getParameter("pw1");
    String name = request.getParameter("name");
    String birth_year = request.getParameter("birth_year");
    String birth_month = request.getParameter("birth_month");
    String birth_day = request.getParameter("birth_day");
    String bir
    th = birth_year + "0" + birth_month + "0" + birth_day;
    String gender = request.getParameter("gender");
    String email = request.getParameter("email");
    String nation = request.getParameter("nation");
    String hp = request.getParameter("hp");
%>

<%
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/ddulki", "root", "1234");
    String SQL = "INSERT INTO member(id,pw,name,birth,gender,email,nation,hp) VALUES(?,?,?,?,?,?,?,?)";
    PreparedStatement ps = conn.prepareStatement(SQL);
    ps.setString(1, id);
    ps.setString(2, pw);
    ps.setString(3, name);
    ps.setString(4, birth);
    ps.setString(5, gender);
    ps.setString(6, email);
    ps.setString(7, nation);
    ps.setString(8, hp);
    ps.executeUpdate();

    ps.close();
    conn.close();
%>

<script>
    location.href="./member_view.jsp";
</script>
