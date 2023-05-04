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
    <title>수정</title>
    <link rel="stylesheet" href="./public/css/style.css">
</head>
<body>
<div id="wrap">
    <section id="signup">
        <div class="container">
            <div class="title">
                <h2>회원정보 수정</h2>
            </div>
            <div class="content">
                <form autocapitalize="off" name="update" id="update" method="post" action="./kurly_user_update_action.jsp">
                    <ul>
                        <li><input maxlength="16"  autofocus required type="text"       name="user_id"     id="userId"     placeholder="아이디를 입력하세요."></li>
                        <li><input maxlength="16"  autofocus required type="password"   name="user_pw"     id="userPw"     placeholder="수정할 비밀번호를 입력하세요."></li>
                        <li><input maxlength="30"  autofocus required type="text"       name="user_name"   id="userName"   placeholder="수정할 이름 입력하세요."></li>
                        <li><input maxlength="250" autofocus required type="email"      name="user_email"  id="userEmail"  placeholder="수정할 이메일을를 입력하세요."></li>
                        <li><input maxlength="13"  autofocus required type="text"       name="user_hp"     id="userHp"     placeholder="수정할 연락처를 입력하세요."></li>
                        <li><input maxlength="250" autofocus required type="text"       name="user_addr"   id="userAddr"   placeholder="수정할 주소를 입력하세요."></li>
                        <li>
                            <input type="radio" name="user_gender" id="male"  value="남성">
                            <label for="male">남성</label>
                            <input type="radio" name="user_gender" id="feMale"  value="여성">
                            <label for="feMale">여성</label>
                            <input type="radio" name="user_gender" id="none"  value="선택안함">
                            <label for="none">선택안함</label>
                        </li>
                        <li><input maxlength="10" type="text" name="user_birth" id="userBirth" placeholder="수정할 생년월일을 입력하세요."></li>
                    </ul>
                    <div class="submit">
                        <button type="submit">가입하기</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</div>
</body>
</html>