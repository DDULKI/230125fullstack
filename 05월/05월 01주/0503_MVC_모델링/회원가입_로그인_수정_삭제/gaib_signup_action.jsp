<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "gaib.GaibDAO" %>

<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean id="gaibDTO" class="gaib.GaibDTO"/>
<jsp:setProperty name="gaibDTO" property="user_id"/>
<jsp:setProperty name="gaibDTO" property="user_pw"/>
<jsp:setProperty name="gaibDTO" property="user_name"/>
<jsp:setProperty name="gaibDTO" property="user_hp"/>
<jsp:setProperty name="gaibDTO" property="user_email"/>
<jsp:setProperty name="gaibDTO" property="user_addr"/>



<%
    if(
        gaibDTO.getUser_id()==null 
     || gaibDTO.getUser_pw()==null 
     || gaibDTO.getUser_name()==null 
     || gaibDTO.getUser_hp()==null 
     || gaibDTO.getUser_email()==null 
     || gaibDTO.getUser_addr()==null 
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
            alert("입력이 완료되었습니다:)"  );
        </script>
<%
    }
%>
