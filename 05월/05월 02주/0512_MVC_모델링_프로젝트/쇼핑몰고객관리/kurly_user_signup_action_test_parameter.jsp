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

<%
    String id  =       request.getParameter("id");
    String pw =        request.getParameter("pw");
    String name =      request.getParameter("name");
    String email =     request.getParameter("email");
    String hp =        request.getParameter("hp");
    String addr =      request.getParameter("addr");
    String gender =    request.getParameter("gender");
    String birth =     request.getParameter("birth");
    String chooga =    request.getParameter("chooga");
    String service =   request.getParameter("service");
%>

<% 
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signup(userDTO);
%>

{"아이디" : "<%= id %>", "비밀번호" : "<%= pw %>", "이름" : "<%= name %>", 
"이메일" : "<%= email %>", "휴대폰" : "<%= hp %>", "주소" : "<%= addr %>",
"성별" : "<%=gender%>", "생년월일" : "<%= birth %>", "추가입력사항" : "<%=chooga%>",
"이용약관" : "<%=service%>"
}