<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "kurly.UserDAO"%>

<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="userDTO" class="kurly.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id"/>
<jsp:setProperty name="userDTO" property="user_pw"/>
<jsp:setProperty name="userDTO" property="user_name"/>
<jsp:setProperty name="userDTO" property="user_email"/>
<jsp:setProperty name="userDTO" property="user_hp"/>
<jsp:setProperty name="userDTO" property="user_addr"/>
<jsp:setProperty name="userDTO" property="user_gender"/>
<jsp:setProperty name="userDTO" property="user_birth"/>
<jsp:setProperty name="userDTO" property="user_add"/>
<jsp:setProperty name="userDTO" property="user_chk1"/>
<jsp:setProperty name="userDTO" property="user_chk2"/>
<jsp:setProperty name="userDTO" property="user_chk3"/>
<jsp:setProperty name="userDTO" property="user_chk4"/>

<%
    if(
       userDTO.getUser_id()==null 
    || userDTO.getUser_pw()==null 
    || userDTO.getUser_name()==null 
    || userDTO.getUser_email()==null 
    || userDTO.getUser_hp()==null 
    || userDTO.getUser_addr()==null 
    || userDTO.getUser_gender()==null 
    || userDTO.getUser_birth()==null 
    || userDTO.getUser_add()==null 
    ){
%>
        <script>
            alert("빈값이 있습니다 \n다시 시도해 주세요^^ ");
            history.back();
        </script>
<%
    }
    else{
        UserDAO userDAO = new UserDAO();
        int result = userDAO.update(userDTO);
            if(result>=1){
%>
        <script>
            alert("수정완료!★");
            window.location.href='./main.jsp';
        </script>
<%
        }
        else {
%>
        <script>
            alert(<%=result%>);
            alert("회원 정보 수정 실패! \n데이터 확인하고 다시 시도하세요.");
            history.back();
        </script>
<%
        }
    }
%>

