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


<%
    if(userDTO.getUser_id()==null 
    || userDTO.getUser_pw()==null 
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
        int result = userDAO.signin(userDTO.getUser_id(), userDTO.getUser_pw());
            if(result==1){
                session.setAttribute("user_id", userDTO.getUser_id());
%>
            <script>
                alert("로그인 되었습니다:)♥");
                window.location.href='./main.jsp';
            </script>
<%
        }
        else if(result==0){
%>
        <script>
            alert(<%=result%>);
            alert("로그인 실패입니다ㅠ_ㅠ \n확인하고 다시 시도해 주세요.");
            history.go(-1);
        </script>
<%
        }
        else if(result==-1){
%>
        <script>
            alert(<%= result %>);
            alert("아이디를 확인하고 \n다시 시도해 주세요.");
            history.go(-1);
        </script>            
<%

        }
        else {
%>
        <script>
            alert(<%= result %>);
            alert("로그인 실패되었습니다. \n회원가입 후 다시 시도해주세요.");
            window.location.href="./signup.jsp";
        </script>
<%
        }
    }
%>

