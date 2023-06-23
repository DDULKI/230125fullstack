<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입폼</title>
	<style type="text/css">
		* {margin: 0; padding: 0; vertical-align:center; box-sizing:border-box;}
		ul {list-style: none;}
		a {color:#333; text-decoration:none;}
		#signup {width:100%; padding: 100px 0; }
		#signup .container {width: 100%; max-width:800px; margin: 0 auto;}
		#signup .container .title{text-align: center; padding: 0 0 60px 0;}
		#signup .container .title h2{font-size: 28px; font-weight: 500}
		#signup .container .content{width: 100%;}
		#signup .container .content #signupForm{width: 100%;}
		#signup .container .content #signupForm ul{width: 100%;}
		#signup .container .content #signupForm ul li{width: 100%; padding: 5px 0;}
		#signup .container .content #signupForm ul li input{width: 100%; height: 40px; paddigng: 0 15px; font-size:15px;}
		#signup .container .content #signupForm .button-box {width: 200px; padding: 50px 0; text-align:center;}
		#signup .container .content #signupForm .button-box button{width: 200px; height: 45px; font-size : 20px; color:#222;}
		
		
	</style>
</head>
<body>

<div id="signup">
	<div class='container'>
		<div class='title'>
			<h2>회원가입폼 화면</h2>
		</div>
		<div class='content'>
			<form name='signupForm' id='signupForm' method='post' action='./signupAction.jsp'>
				<ul>
					<li><input type='text' name='userId' id='userId' placeholder='아이디를 입력하세요.'></li>
					<li><input type='text' name='userPw' id='userPw' placeholder='비밀번호를 입력하세요.'></li>
					<li><input type='text' name='userName' id='userName' placeholder='이름을 입력하세요.'></li>
					<li><input type='text' name='userEmail' id='userEmail' placeholder='이메일을 입력하세요.'></li>
				</ul>
				<div class='button-box'>
					<button type='submit'>회원가입</button>
				</div>
			</form>
		</div>
	</div>
</div>



</body>
</html>