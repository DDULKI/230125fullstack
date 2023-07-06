<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "kurly.UserDAO"  %>
<%@ page import = "kurly.UserDTO"  %>

<%
	request.setCharacterEncoding("UTF-8");
%> 


<% 	
		// DAO 클래스 인스턴스 생성하고 
		// 아이디찾기함수() 를 호출실행(매개변수 이름, 이메일) 
		// 결과는 UserDTO().아이디찾기함수(파라미터1, 파라미터2) 로 반환받는다.
		//int result = new userDAO().pwReset("123456789","tmfrl4994");
		UserDAO userDAO = new UserDAO();
		int result = userDAO().pwReset(request.getParameter("user_pw"), request.getParameter("user_id"));
		out.print(result);
%>
		









