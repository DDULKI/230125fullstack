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
<jsp:setProperty name="gaibDTO" property="user_hp"/>

<%
    if( 
           gaibDTO.getUser_id()==null
        || gaibDTO.getUser_hp()==null
    ){
%>
            <script>
                alert("빈값이 있는 항목이 \n확인하고 다시 시도해주세요");
                history.go(-1);
            </script>
<%
    }
    else{     

        GaibDAO  gaibDAO = new GaibDAO();
        int result = gaibDAO.delete(gaibDTO);

        if(result>=1){
            // 삭제완료
%>
            <script>
                alert("삭제완료!"  + <%= result %> );        
            </script>  

<%
        }          
        else{
            // 삭제못함
            // 아이디 비밀번호 확인하세요
%>
            <script>
                alert("아이디 비밀번호 확인하세요!"  + <%= result %> );        
                history.go(-1);
            </script>  
<%
        }

    }
%>
