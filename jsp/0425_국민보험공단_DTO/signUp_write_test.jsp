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
    String saup_grbh = request.getParameter("saup_grbh");
    String saup_giho = request.getParameter("saup_giho");
    String gaib_yb = request.getParameter("gaib_yb");
    String user_id = request.getParameter("user_id");
    String user_pw1 = request.getParameter("user_pw1");
    String sel_pw = request.getParameter("sel_pw");
    String pwbs_ok = request.getParameter("pwbs_ok");
    String user_hp = request.getParameter("user_hp");
    String input_email = request.getParameter("input_email");
    String email_domain_select = request.getParameter("email_domain_select");
    String sosic_ok = request.getParameter("sosic_ok");
    String sosic_no = request.getParameter("sosic_no");

%>

<%

    out.println("<br>1. saup_grbh = " + saup_grbh );
    out.println("<br>2. saup_giho = " + saup_giho );
    out.println("<br>3. gaib_yb = " + gaib_yb );
    out.println("<br>4. user_id = " + user_id );
    out.println("<br>5. user_pw1 = " + user_pw1 );
    out.println("<br>6. sel_pw = " + sel_pw );
    out.println("<br>7. pwbs_ok = " + pwbs_ok );
    out.println("<br>8. user_hp = " + user_hp );
    out.println("<br>9. input_email = " + input_email );
    out.println("<br>10. email_domain_select = " + email_domain_select );
    out.println("<br>11. sosic_ok = " + sosic_ok );
    out.println("<br>12. sosic_no = " + sosic_no );

%>

