<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "gukmin.SignUpDAO" %>

<%
    request.setCharacterEncoding("UTF-8");
%>

<jsp:useBean id="signUpDTO" class="gukmin.SignUpDTO" scope="page"/>
<jsp:setProperty name="signUpDTO" property="user_id"/>
<jsp:setProperty name="signUpDTO" property="user_pw1"/>

<%

    if( signUpDTO.getUser_id()==null || signUpDTO.getUser_pw1()==null ){
%>   
        <script>
            alert('빈값이 있는 항목이 있습니다. \\n 확인하고 다시 시도해주세요^^');
            history.go(-1);
        </script>
<%
    }
    else{
        SignUpDAO signUpDAO = new SignUpDAO();
        int result = signUpDAO.signin(signUpDTO.getUser_id(), signUpDTO.getUser_pw1());

        if(result==1){
        // 로그인한 본인 아이디로 로그인 세션 설정하기 
        session.setAttribute("user_id", signUpDTO.getUser_id());
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