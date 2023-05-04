<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "gaib.GaibDAO" %>
<%@ page import = "java.io.PrintWriter" %>

<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean id="gaibDTO" class="gaib.GaibDTO"/>
<jsp:setProperty name="gaibDTO" property="id"/>
<jsp:setProperty name="gaibDTO" property="pw"/>

<%
    if(
       gaibDTO.getId()==null 
    || gaibDTO.getPw()==null 
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
        int result = gaibDAO.signin(gaibDTO.getId(),  gaibDTO.getPw()); 

        if(result == 1) {
            PrintWriter script = response.getWriter();
            script.println("<script>alert('로그인 성공')</script>");
        }
        else if(result == 0){
            PrintWriter script = response.getWriter();
            script.println("<script>alert('비밀번호 불일치');history.go(-1)</script>");
        }
        else if(result == -1){
            PrintWriter script = response.getWriter();
            script.println("<script>alert('없는 아이디입니다.');history.go(-1)</script>");
        }
        else if(result == -2){
            PrintWriter script = response.getWriter();
            script.println("<script>alert('데이터베이스의 알 수 없는 오류 확인 후 다시 시도하세요.');history.go(-1)</script>");
        }
    
%>
    <script>
        alert("로그인 완료" + <%= result %>);
    </script>
<%
    }
%>
        