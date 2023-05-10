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
        int result = signUpDAO.delete(signUpDTO);

        if(result>=1){
        session.invalidate();
%>
        <script>
            alert("삭제완료:)♥");
            window.location.href='./main.jsp';
        </script>
<%
        }
        else if(result==0){
%>
        <script>
            alert(<%=result%>);
            alert("회원탈퇴 실패");
            history.go(-1);
        </script>
<%
        }
        else if(result==-1){
%>
        <script>
            alert(<%= result %>);
            alert("회원탈퇴 되었습니다.");
            window.location.href="./main.jsp";
        </script>
<%
        }
        else {
%>
        <script>
            alert(<%= result %>);
            alert("회원탈퇴 실패. \n 아이디 비밀번호 다시 입력해 주세요. ");
            window.location.href="./delete.jsp";
        </script>
<%
        }
    }
%>