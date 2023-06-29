<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import= "bbs.UserDAO" %>
<%@ page import= "bbs.UserDTO" %>

<%
	request.setCharacterEncoding("UTF-8");
%>


<%

	// 이름 입력상자, 이메일 입력상자 유효성검사
	if(request.getParameter("userName")==null || request.getParameter("userEmail")==null){
		%>
			<script>
			alert("이름, 이메일 입력상자 입력해 주셍!");
			history.go(-1);                          
			</script>

		<%
	}
	else {
		// DAO 
		UserDTO userDTO = new UserDAO().idSearch(request.getParameter("userName"), request.getParameter("userEmail"));
		
		if(userDTO==null){ // 찾는데 실패! 
			%>
				<script>
					alert("이름과 이메일을 확인하고 다시 시도하세요!");
					history.go(-1);
				</script>
			<%
		}
		else { // 찾음 => 검색 결과 아이디를 검색결과 화면에 보내준다. 
			%>
				<script>
					location.href ="./idSearchResult.jsp?userId=<%=userDTO.getUserId()%>";
				</script>
			<%
		}
	}
%>