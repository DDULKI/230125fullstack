<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "kurly.UserDAO"%>

<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean id="userDTO" class="kurly.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="id"/>
<jsp:setProperty name="userDTO" property="pw"/>
<jsp:setProperty name="userDTO" property="name"/>
<jsp:setProperty name="userDTO" property="email"/>
<jsp:setProperty name="userDTO" property="hp"/>
<jsp:setProperty name="userDTO" property="addr"/>
<jsp:setProperty name="userDTO" property="gender"/>
<jsp:setProperty name="userDTO" property="birth"/>
<jsp:setProperty name="userDTO" property="chooga"/>
<jsp:setProperty name="userDTO" property="service"/>

<% 
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signup(userDTO);
%>

{"아이디" : "<%=userDTO.getId()%>", "비밀번호" : "<%=userDTO.getPw()%>", "이름" : "<%=userDTO.getName()%>", 
"이메일" : "<%=userDTO.getEmail()%>", "휴대폰" : "<%=userDTO.getHp()%>", "주소" : "<%=userDTO.getAddr()%>",
"성별" : "<%=userDTO.getGender()%>", "생년월일" : "<%=userDTO.getBirth()%>", "추가사항" : "<%=userDTO.getChooga()%>", "이용약관" : "<%=userDTO.getService()%>"}