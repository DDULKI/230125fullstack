<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@
    page
    import = "java.sql.*"
%>

<%
    // 한글 인코딩 
    request.setCharacterEncoding("UTF-8");

    String gr_num = request.getParameter("gr_num");
    String saup_giho = request.getParameter("saup_giho");
    String gaib_yb = request.getParameter("gaib_yb");
    String user_id = request.getParameter("user_id");
    String user_pw1 = request.getParameter("user_pw1");
    String sel_pw = request.getParameter("sel_pw");
    String pwbs_ok = request.getParameter("pwbs_ok");
    String user_hp = request.getParameter("user_hp");
    String input_email1 = request.getParameter("input_email1");
    String input_email2 = request.getParameter("input_email2");
    String email_domain_select = request.getParameter("email_domain_select");
    String sosic_ok = request.getParameter("sosic_ok");
    String sosic_no = request.getParameter("sosic_no");
%>

<%

    // 1. JDBC 드라이버 로딩 
    Class.forName("com.mysql.jdbc.Driver");

    // 2. DB 연결 
    Connection conn = DriverManager.getConnection(
        
    )

%>