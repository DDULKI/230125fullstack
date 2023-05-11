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
    <title>회원가입</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <form name="member_form" id="memberForm" method="post" action="member_insert_action.jsp">
            <div class="title">
                <h1>회원가입 폼</h1>
            </div>
            <ul>
                <li><input type="text" name="user_id"      id="userId"      placeholder="아이디"></li>
                <li><input type="text" name="user_pw"      id="userPw"      placeholder="비밀번호"></li>
                <li><input type="text" name="user_name"    id="userName"    placeholder="이름"></li>
                <li><input type="text" name="user_hp"      id="userHp"      placeholder="휴대폰"></li>
                <li><input type="text" name="user_email"   id="userEmail"   placeholder="이메일"></li>
            </ul>
            <div class="button-box">
                <button type="submit">등록</button>
            </div>
        </form>
    </div>

</body>
</html>