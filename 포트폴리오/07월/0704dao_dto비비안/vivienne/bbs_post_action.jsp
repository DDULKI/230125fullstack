<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>

<%@ page import="bbs.BbsDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean id="bbsDTO" class="bbs.BbsDTO" scope="page"/>
<jsp:setProperty name="bbsDTO" property="user_email"/>
<jsp:setProperty name="bbsDTO" property="subject"/>
<jsp:setProperty name="bbsDTO" property="content"/>


<%
    BbsDAO bbsDAO = new BbsDAO();
    int result = bbsDAO.post(bbsDTO);
%>

{"AJAX실행 DTO & DAO 결과":"<%=result%>"}