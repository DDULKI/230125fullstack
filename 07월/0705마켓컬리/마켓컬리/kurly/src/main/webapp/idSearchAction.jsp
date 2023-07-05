<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "kurly.UserDAO"  %>
<%@ page import = "kurly.UserDTO"  %>

<%
	request.setCharacterEncoding("UTF-8");
%> 


<%
	// 이름 입력상자, 휴대폰 입력상자 유효성검사 
	if( request.getParameter("user_irum")==null || request.getParameter("user_hp")==null ){
		out.println("이름과 휴대폰을 확인하고 다시 시도하세요!");
	}
	else{
		UserDTO userDTO = new UserDAO().idSearch(request.getParameter("user_irum"), request.getParameter("user_hp"));
		
		
		
%>
	{"아이디":"<%=userDTO.getUser_id()%>"}
<%
	}

%>











