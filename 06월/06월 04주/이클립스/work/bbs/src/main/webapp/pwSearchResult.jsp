<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>비밀번호찾기</title>

</head>
<body>
	

<%
// 로그인 정보 => 세션 가져오기
String userId = null;
if(session.getAttribute("userId")!=null){ // 세션값이 비어있지 않으면 세션아이디 변수에 저장
	userId = (String)session.getAttribute("userId");
}
%>

<header id='header'>
	<div class='container'>
		<div class='left'>
			<h1>BBS Board</h1>
			<a href='./admin.jsp'>HOME</a>
			<a href='./bbsListAction.jsp'>게시판</a>
		</div>
		<div class='right'>
		<%
			if(userId==null){
		%>
			<a href='./signup.jsp'>Signup</a>
			<a href='./login.jsp'>Login</a>
		<%
			}
			else{
		%>
			<a href='./logoutAction.jsp'>Logout</a>
		<%
			}
		%>	
		</div>
	</div>
</header>
	
	
<div id='idSearchResult'>
	<div class='container'>
		<div class='title'>
			<h1>고객님의 컬리 계정을 찾았습니다.</h1>
			<h5>비밀번호 확인 후 로그인 해주세요.</h5>
		</div>
		
		<div class="content">
		    <form name="loginForm" autocomplete="off" id="idSearchForm" method="post" action="./pwSearchAction.jsp">
		        <ul>
		            <li><%=request.getParameter("userId") %></li>
		            <li></li>
		        </ul>
		        
		        <div class="button-box" style="text-align:center">
		             <a href='./idSearchForm.jsp'>아이디 찾기</a>
		             <br>
		             <a href='./login.jsp' class='login-btn'>로그인</a>
		        </div>
		    </form>
		</div>
	
	</div>
</div>	
	

	
	

</body>


<style type="text/css">
	
	* {margin:0; padding:0; vertical-align:center;box-sizing:border-box;}
	ul {list-style:none;}
	a {color:#333;text-decoration:none;}
	
	#header {width:100%;height:80px;background:#fff;border-bottom:1px solid #e6e6e6;}
	#header .container {
		width:100%;max-width:80%;margin:0 auto;
		height:100%;
		display:flex;
		align-items:center;		
		justify-content:space-between;
		font-weight:600;
	}	
	#header .container .left  {width:50%;}
	#header .container .left  h1 {font-size:24px;display:inline-block;color:#5f0080;margin:0 20px; 0 0;}
	#header .container .left  a  {foant-size:17px;color:#333;margin:0 10px;}
	#header .container .left  a:hover  {color:#5f0080;}
	#header .container .right {width:50%;text-align:right;}
	#header .container .right a  {foant-size:17px;color:#333;margin:0 10px;}
	#header .container .right a:hover  {color:#5f0080;}
	
	
	
	
	
	
	#idSearchResult {width:100%;padding:100px 0;}
	#idSearchResult .container {width:100%;max-width:50%;min-width:320px;margin:0 auto;padding:80px;background:#f3f3f3;}
	#idSearchResult .container .title {text-align:center;padding:0 0 60px 0;}
	#idSearchResult .container .title h1 {font-size:28px;text-align:center;color:#5f0080;font-weight:500;}
	
	#idSearchResult .container .content {width:100%;height:auto;}
	#idSearchResult .container .content form {width:100%;}
	#idSearchResult .container .content form ul {width:100%;}
	#idSearchResult .container .content form ul li {width:100%;padding:5px 0; text-align: center;}
	#idSearchResult .container .content form ul li input {
		width:100%;height:48px;padding:0 15px;font-size:16px;border:1px solid #ddd;
		outline-offset:-1px;outline:1px solid transparent;transition: all 0.3s;
	}
	#idSearchResult .container .content form ul li input:focus {outline:1px solid #888;}
	

	#idSearchResult .container .content form .button-box {width:100%;padding:30px 0 50px 0; text-align:center;}
	#idSearchResult .container .content form .button-box a {
		display: inline-flex;
		align-items:center;
		justify-content:center;
		border: 1px solid #000;
		width:200px;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;
		background:#666;cursor:pointer;		
		transition: all 0.3s;
		margin: 3px 0;
	}
	#idSearchResult .container .content form .button-box a.login-btn{
		background:#fff; border: 1px solid #5f0080; color: #5f0080; font-size:17px;
	}
	
	#idSearchResult .container .content form .button-box button:hover {background:#111;}
	
</style>

</html>