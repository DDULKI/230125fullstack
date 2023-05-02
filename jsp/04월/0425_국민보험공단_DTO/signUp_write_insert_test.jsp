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
%>

<%
    // 1. JDBC 드라이버 로딩 
    Class.forName("com.mysql.jdbc.Driver");

    // 2. DB 연결(Connection) & 인증 (Authentication) : 데이터베이스 이름 ddulki 연결 & 인증 
    Connection conn = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/ddulki", "root", "1234"
    );

    // 3. SQL 
    
    // 4-1. 
    String sql = "INSERT INTO gmgungang_signup(saup_grbh, saup_giho,gaib_yb,user_id ,user_pw1,sel_pw,pwbs_ok,user_hp,input_email,email_domain_select,sosic_ok,sosic_no) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";

    // 4-2 
    PreparedStatement ps = conn.prepareStatement(sql);

    // 4-3 
    ps.setString(1, "사업장관리번호99");
    ps.setString(2, "사업장기호22");
    ps.setString(3, "단위사업장기호33");
    ps.setString(4, "ddilki1004");
    ps.setString(5, "wjdtmfrl13");
    ps.setString(6, "sel_pw");
    ps.setString(7, "pwbs_ok");
    ps.setString(8, "010-7771-6035");
    ps.setString(9, "seulki4994@naver.com");
    ps.setString(10, "email_domain_select");
    ps.setString(11, "sosic_ok");
    ps.setString(12, "sosic_no");

    

    // 6. 닫기 
    ps.close();
    conn.close();

%>

<script>

    location.href = "signUp_view.jsp";

</script>