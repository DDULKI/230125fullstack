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

    out.println("<br>1. id          = " + id         );
    out.println("<br>2. pw          = " + pw         );    
    out.println("<br>3. name        = " + name       );
    out.println("<br>4. birth_year  = " + birth_year );
    out.println("<br>5. birth_month = " + birth_month);
    out.println("<br>6. birth_day   = " + birth_day  );
    out.println("<br>7. birth       = " + birth      );
    out.println("<br>8. gender      = " + gender     );
    out.println("<br>9. email       = " + email      );
    out.println("<br>10. country    = " + country    );
    out.println("<br>11. hp         = " + hp         );
    out.println("<br>12. hpck       = " + hpck       );

%>








<script>
    //location.href="naver_view.jsp"
</script>