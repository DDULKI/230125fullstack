<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>로그인 테스팅</h1>
	<h2>로그인 아이디 비밀번호 입력화면입니다.</h2>
	<div id="login">
		<form method="post" action="./loginAction.jsp">
			<input type="text" name="userId" id="userId">
			<input type="text" name="userPw" id="userPw">
			<button type="submit">로그인전송</button>
		</form>
	</div>
</body>
</html>