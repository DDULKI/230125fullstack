<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입폼</title>
    <link rel="stylesheet" href="./css/signup.css">
    <link rel="stylesheet" href="./css/reset.css">
</head>
<body>
<div id="wrap">
    <section id="signup">
        <div class="container">
            <div class="title">
                <h2>회원가입</h2>
            </div>
            <div class="content">
                <form name="signup_form" id="signupForm" method="post" action="./gaib_signup_action.jsp">
                    <ul>
                        <li><input type="text" maxlength='16' name="user_id" id="userId" placeholder="아이디를 입력하세요"></li>
                        <li><input type="text" maxlength='16' name="user_pw" id="userPw" placeholder="비밀번호를 입력하세요"></li>
                        <li><input type="text" maxlength='30' name="user_name" id="userName" placeholder="이름을 입력하세요"></li>
                        <li><input type="text" maxlength='13' name="user_hp" id="userHp" placeholder="연락처를 입력하세요"></li>
                        <li><input type="text" maxlength='250' name="user_email" id="userEmail" placeholder="이메일을 입력하세요"></li>
                        <li><input type="text" maxlength='250' name="user_addr" id="userAddr" placeholder="주소를 입력하세요"></li>
                    </ul>
                    <div class="submit-btn-box">
                        <button type="submit">저장</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</div>
</body>
</html>