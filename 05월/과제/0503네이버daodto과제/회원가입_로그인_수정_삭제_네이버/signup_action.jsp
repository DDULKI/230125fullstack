<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "gaib.GaibDAO" %>

<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean id="gaibDTO" class="gaib.GaibDTO"/>
<jsp:setProperty name="gaibDTO" property="id"/>
<jsp:setProperty name="gaibDTO" property="pw"/>
<jsp:setProperty name="gaibDTO" property="name"/>
<jsp:setProperty name="gaibDTO" property="birth"/>
<jsp:setProperty name="gaibDTO" property="gender"/>
<jsp:setProperty name="gaibDTO" property="email"/>
<jsp:setProperty name="gaibDTO" property="nation"/>
<jsp:setProperty name="gaibDTO" property="hp"/>

<%
    if(
       gaibDTO.getId()==null 
    || gaibDTO.getPw()==null 
    || gaibDTO.getName()==null 
    || gaibDTO.getBirth()==null 
    || gaibDTO.getGender()==null 
    || gaibDTO.getEmail()==null
    || gaibDTO.getNation()==null 
    || gaibDTO.getHp()==null
    ){
%>
        <script>
            alert("빈값이 있는 항목이 있습니다. \n확인하고 다시 입력하세요.");
            history.go(-1);
        </script>
    
<%
    }
    else {
        GaibDAO gaibDAO = new GaibDAO();
        int result = gaibDAO.signup(gaibDTO); 
    
%>
    <script>
        alert("입력이 완료되었습니다" + <%= result %>);
    </script>
<%
    }
%>
        