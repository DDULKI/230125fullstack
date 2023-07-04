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

<jsp:useBean class="bbs.BbsDTO" id="bbsDTO" scope="page"/>

<jsp:setProperty name="bbsDTO" property="bbsId"/>

<%
    BbsDAO bbsDAO = new BbsDAO();
    int result = bbsDAO.delete(bbsDTO);
%>

{"result":"<%=result%>"}