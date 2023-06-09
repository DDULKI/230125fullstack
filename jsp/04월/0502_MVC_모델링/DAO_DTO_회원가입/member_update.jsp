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
    <title>회원정보 수정</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>

    <div class="wrap">
        <form name="member_update_form" id="memberUpdateForm" method="post" action="member_update_action.jsp">
            <div class="title">
                <h1>회원가입 정보 수정</h1>
            </div>
            <ul>
                <li><input type="text" name="user_id"   id="userId"     placeholder="아이디를 입력하세요."></li>
                <li><input type="text" name="user_pw"   id="userPw"     placeholder="수정할 비밀번호를 입력하세요."></li>
                <li><input type="text" name="user_name"   id="userName"     placeholder="수정할 이름을 입력하세요."></li>
                <li><input type="text" name="user_hp"   id="userHp"     placeholder="수정할 연락처를 입력하세요."></li>
                <li><input type="text" name="user_email"   id="userEmail"     placeholder="수정할 이메일을 입력하세요."></li>
                
            </ul>
            <div class="button-box">
                <button type="submit">수정</button>
            </div>
        </form>
    </div>

</body>
</html>