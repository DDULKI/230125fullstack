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
<jsp:setProperty name="signUpDTO" property="saup_grbh"/>
<jsp:setProperty name="signUpDTO" property="saup_giho"/>
<jsp:setProperty name="signUpDTO" property="gaib_yb"/>
<jsp:setProperty name="signUpDTO" property="user_id"/>
<jsp:setProperty name="signUpDTO" property="user_pw1"/>
<jsp:setProperty name="signUpDTO" property="sel_pw"/>
<jsp:setProperty name="signUpDTO" property="pwbs_ok"/>
<jsp:setProperty name="signUpDTO" property="user_hp"/>
<jsp:setProperty name="signUpDTO" property="input_email"/>
<jsp:setProperty name="signUpDTO" property="email_domain_select"/>
<jsp:setProperty name="signUpDTO" property="sosic_ok"/>

<%

    if(signUpDTO.getSaup_grbh()==null || signUpDTO.getSaup_giho()==null || signUpDTO.getGaib_yb()==null 
    || signUpDTO.getUser_id()==null || signUpDTO.getUser_pw1()==null || signUpDTO.getSel_pw()==null ||
    signUpDTO.getPwbs_ok()==null || signUpDTO.getUser_hp()==null || signUpDTO.getInput_email()==null || 
    signUpDTO.getEmail_domain_select()==null || signUpDTO.getSosic_ok()==null){
%>   
        <script>
            alert('빈값이 있는 항목이 있습니다. \\n 확인하고 다시 시도해주세요^^');
            history.go(-1);
        </script>
<%
    }
    else{
        SignUpDAO signUpDAO = new SignUpDAO();
        int result = signUpDAO.update(signUpDTO);

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
            history.go(-1);
        </script>
<%
        }
    }
%>