<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>
 
<%@
    page
    import ="java.sql.*"
%>

<%
    // 한글 인코딩 
    request.setCharacterEncoding("UTF-8");
    

    // 파라미터 
    String todo = request.getParameter("todo");
%>

<%
    // 1. JDBC 드라이버 로딩
    Class.forName("com.mysql.jdbc.Driver");

    // 2. DB 연결 & 인증 
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/ddulki", "root", "1234");


    // 3-1.
    String sql = "INSERT INTO todo_list(todo_list) VALUES(?)";

    // 3-2.
    PreparedStatement ps = conn.prepareStatement(sql);

    // 4-3.
    ps.setString(1, todo);

    // 5. SQL 실행
    ps.executeUpdate();

    // 6. 닫기 
    ps.close();
    conn.close();

%>

<script>
    
    location.href="todo_list_view1.jsp";

</script>