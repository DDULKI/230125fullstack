<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.BbsDAO" %>
<%@ page import = "bbs.BbsDTO" %>
<%@ page import = "bbs.UserDAO" %>

<%
	request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<h1>글보기 페이지 입니다.</h1>

	<%
		//게시판 목록에서 보내온 쿼리스트링 키와 키값을 받아서 DAO 전달 
		//그러면 DAO는 해당 글번호에 상세내용 리턴해준다. 
		//리턴 받는 글내용 모두를 
		//현재 페이지에 
		//내용을 모두 바인딩해서 화면에 보여준다. 
		
		// bbsId를 변수 bbsId=0 으로 초기화하고 받는다.
		int bbsId = 0; 
		if(request.getParameter("bbsId")!=null){
			bbsId = Integer.parseInt(request.getParameter("bbsId"));
		}
		// 만약 클릭한 글번호에 데이터가 없다면
		// 다시 게시판 목록으로 돌려보낸다. 
		if(bbsId==0){
	%>
			<script>
				alert("데이터가 없습니다. 다시 확인하고 클릭하세요ㅇ0ㅇ");
				history.go(-1);
			</script>
	<% 
		}
		// 해당 글번호 DAO에게 전달하기 
		BbsDTO bbsDTO = new BbsDAO().getView(bbsId);
	
	%> 
		<ul>
			<li>글번호: <%=bbsDTO.getBbsId()%></li>
			<li>작성자: <%=bbsDTO.getUserId()%></li>
			<li>제목: <%=bbsDTO.getSubject()%></li>
			<li>내용: <%=bbsDTO.getContent()%></li>
			<li>작성일: <%=bbsDTO.getWriteDate()%></li>
		</ul>
</body>
</html>