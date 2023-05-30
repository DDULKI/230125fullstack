<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "vivienne.UserDAO" %>

<%
    request.setCharacterEncoding("UTF-8");
%>

<jsp:useBean id="userDTO" class="vivienne.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_pw1"/>
<jsp:setProperty name="userDTO" property="user_pw2"/>
<jsp:setProperty name="userDTO" property="user_email"/>

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signin(userDTO.getUser_pw1()+userDTO.getUser_pw2(), userDTO.getUser_email());
%>

<%
    //로그인이 됨 
    if(result == 1){
        session.setAttribute(userDTO.getUser_pw1()+userDTO.getUser_pw2(), "user_email");
    }
%>

{"AJAX실행 DTO & DAO 결과" : "<%=result%>"}