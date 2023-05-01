<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="user.UserDAO" %>
<%@ page import="java.io.PrintWriter" %>

<%
    request.setCharacterEncoding("UTF-8");
%>

<jsp:useBean id="userDTO" class="user.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id"/>
<jsp:setProperty name="userDTO" property="user_pw"/>
<jsp:setProperty name="userDTO" property="user_name"/>
<jsp:setProperty name="userDTO" property="user_hp"/>
<jsp:setProperty name="userDTO" property="user_email"/>


<%
    // 입력상자 값이 없다면 다시 돌아가서 입력하시오. 
    // 게터함수에서 값을 가져온다 그리고 값이 비어있다면 돌아가서 입력대기 
    if(userDTO.getUser_id()==null || userDTO.getUser_pw()==null || userDTO.getUser_name()==null || userDTO.getUser_hp()==null || userDTO.getUser_email()==null){
        PrintWriter script = response.getWriter();
        script.println("<script>");
        script.println("alert('입력값이 비어있는 항목이 있습니다. \\n 다시 입력하고 시도해주세요. ')");
        script.println("history.go(-1)");
        script.println("</script>");
    }
    else{ // 입력값 모두 완료되면 가져온 DAO 객체를 인스턴스 생성한다. 

        UserDAO newUserDAO = new UserDAO();

        // insert(매개변수 DTO 인스턴스이름) 메서드 호출 실행 
        int result = newUserDAO.insert(userDTO);
        // result 변수값이 -1 이면? 중복된 아이디 ? 아이디 중복불가  
        if(result == -1){
            PrintWriter script = response.getWriter();
            script.println("<script>");
            script.println("alert('중복된 아이디 입니다. \\n 다시 입력하고 시도해주세요. ')");
            script.println("history.go(-1)");
            script.println("</script>");
        }
        else {
            PrintWriter script = response.getWriter();
            script.println("<script>");
            script.println("alert('회원가입을 축하드립니다 ^^')");
            script.println("history.go(-1)"); // 여기는 메인페이지 입니다. 가상
            script.println("</script>");
        }
    }
%>