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
<jsp:setProperty name="gaibDTO" property="name"/>

<%
    if(
       gaibDTO.getId()==null 
    || gaibDTO.getName()==null 
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

        if(result>=1){
            // 삭제완료
%>
    <script>
        alert("삭제완료!" + <%= result %>);
    </script>
<%
    }
    else {
        // 삭제 못함
        // 아이디 비밀번호 확인하세요.
%>
        <script>
            alert("아이디 비밀번호 확인하세요!"  + <%= result %> );        
            history.go(-1);
        </script>  
<%
        }
    }
%>