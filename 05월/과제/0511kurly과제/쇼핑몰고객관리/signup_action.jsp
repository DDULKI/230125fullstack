<%@
    page
    language = "java"
    contentType ="text/html; charset=UTF-8"
    pageEncoding = "UTF-8"
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
    if(userDTO.getUser_id()==null 
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
            alert("빈값이 있습니다 \n다시 시도해 주세요.");
            history.back();
        </script>
<%
    }
    else{
        UserDAO userDAO = new UserDAO();
        int result = userDAO.signup(userDTO);
            if(result==1){
                session.setAttribute("user_id", userDTO.getUser_id());
%>
        <script>
            alert("감사합니다. 회원가입이 완료되었습니다.");
            window.location.href='./main.jsp';
        </script>
<%
        }
        else {
%>
        <script>
            alert(<%=result%>);
            alert("회원가입에 실패했습니다. \n확인 후 다시 가입하세요.");
            history.back();
        </script>
<%
        }
    }
%>

