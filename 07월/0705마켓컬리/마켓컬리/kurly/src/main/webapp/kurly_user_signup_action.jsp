<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "kurly.UserDAO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="kurly.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />
<jsp:setProperty name="userDTO" property="user_irum" />
<jsp:setProperty name="userDTO" property="user_email" />
<jsp:setProperty name="userDTO" property="user_hp" />
<jsp:setProperty name="userDTO" property="user_addr" />
<jsp:setProperty name="userDTO" property="user_gender" />
<jsp:setProperty name="userDTO" property="user_birth" />
<jsp:setProperty name="userDTO" property="user_chooga" />
<jsp:setProperty name="userDTO" property="user_service" />

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signup(userDTO);
%>

{"result":"<%=result%>","user_id":"<%=userDTO.getUser_id()%>","user_pw":"<%=userDTO.getUser_pw()%>","user_irum":"<%=userDTO.getUser_irum()%>", "user_email":"<%=userDTO.getUser_email()%>", "user_hp":"<%=userDTO.getUser_hp()%>","user_addr":"<%=userDTO.getUser_addr()%>","user_gender":"<%=userDTO.getUser_gender()%>","user_birth":"<%=userDTO.getUser_birth()%>","user_chooga":"<%=userDTO.getUser_chooga()%>","user_service":"<%=userDTO.getUser_service()%>"}