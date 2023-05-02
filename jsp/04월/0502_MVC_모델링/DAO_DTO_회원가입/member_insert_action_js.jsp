<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "member.MemberDAO"%>
<%@ page import = "java.io.PrintWriter" %>
<%
    request.setCharacterEncoding("UTF-8");
%>

<jsp:useBean id="memberDTO" class="member.MemberDTO" scope="page"/>
<jsp:setProperty name="memberDTO" property="user_id"/>
<jsp:setProperty name="memberDTO" property="user_pw"/>
<jsp:setProperty name="memberDTO" property="user_name"/>
<jsp:setProperty name="memberDTO" property="user_hp"/>
<jsp:setProperty name="memberDTO" property="user_email"/>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <%
        PrintWriter script = response.getWriter();
        script.println("<script>");
        script.println("alert('자바스크립트 테스트!')");
        script.println("history.go(-1)");
        script.println("</script>");
    %>



    
</body>
</html>