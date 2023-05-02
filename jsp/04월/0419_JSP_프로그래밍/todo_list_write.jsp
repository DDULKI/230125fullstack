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

    // 2. DB 인증과 연결 
    Connection conn = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/user", "root", "1234"
    );

    // 3. SQL 
    // Statement ps = conn.createStatement();

    // 4-1. 
    String sql = "INSERT INTO todo_list(todo_list) VALUES(?)";

    // 4-2.
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

    alert("저장되었습니다.");
    location.href="index.jsp";

</script>