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
    <title>회원삭제폼</title>
    <link rel="stylesheet" href="./css/signup.css">
    <link rel="stylesheet" href="./css/reset.css">
</head>
<body>
<div id="wrap">
    <section id="signup">
        <div class="container">
            <div class="title">
                <h2>회원 삭제</h2>
            </div>
            <div class="content">
                <form name="signup_form" id="signupForm" method="post" action="./gaib_delete_action.jsp">
                    <ul>
                        <li><input type="text" maxlength='16' name="user_id" id="userId" placeholder="아이디를 입력하세요"></li>
                        <li><input type="text" maxlength='13' name="user_hp" id="userHp" placeholder="연락처를 입력하세요"></li>
                    </ul>
                    <div class="submit-btn-box">
                        <button type="submit">삭제</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</div>
</body>
</html>