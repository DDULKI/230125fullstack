<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "kurly.UserDAO"  %>
<%@ page import = "kurly.UserDTO"  %>

<%
	request.setCharacterEncoding("UTF-8");
%> 


<%
	// 이름 입력상자, 이메일 입력상자 유효성검사 
	if( request.getParameter("user_id")==null || request.getParameter("user_hp")==null ){
		out.println("아이디, 휴대폰 입력값 확인하고 다시보내세요!");
	}
	else{
		// DAO 클래스 인스턴스 생성하고 
		// 아이디찾기함수() 를 호출실행(매개변수 이름, 이메일) 
		// 결과는 UserDTO().아이디찾기함수(파라미터1, 파라미터2) 로 반환받는다.
		UserDTO userDTO = new UserDAO().pwSearch(request.getParameter("user_id"), request.getParameter("user_hp"));
%>
	{"비밀번호":"<%=userDTO.getUser_pw()%>", "가입일":"<%=userDTO.getUser_gaib_date()%>"}
<%		
	}
%>









