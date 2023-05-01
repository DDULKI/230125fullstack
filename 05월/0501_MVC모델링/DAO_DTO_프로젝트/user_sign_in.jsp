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

    <style>
        * {margin: 0; padding: 0; vertical-align: middle; box-sizing: border-box;}
        ul {list-style: none;}
        a{color:#333; text-decoration: none;}
        #wrap {width: 100%;}
        #wrap form {
            width: 1000px; 
            padding: 100px; 
            background: #f3f3ef; 
            margin: 50px auto;
        }
        #wrap form h1 {text-align: center; font-size: 30px; font-weight: 600;}
        #wrap form ul {width: 100%; padding: 50px 0;}
        #wrap form ul li{width: 100%; padding: 5px 0;}
        #wrap form ul li input {
            width: 100%; 
            height: 50px; 
            border: 1px solid #ccc; 
            background: #fff;
            padding: 0 15px;
            font-size: 16px;
            border-radius: 3px;
        }
        #wrap form button {
            width: 100%;
            height: 70px;
            color:#fff; 
            font-size: 20px;
            background: #c99;
            border: 0;
            border-radius: 3px;
            font-weight: 600;
        }
    </style>

</head>
<body>
    <div id="wrap">
        <form name="sign_in_form" id="signInForm" method="post" action="./user_sign_in_insert.jsp">
            <h1>회원가입</h1>
            <ul>
                <li><input type="text" name="user_id"    id="userId"    placeholder="아이디"></li>
                <li><input type="text" name="user_pw"    id="userPw"    placeholder="비밀번호"></li>
                <li><input type="text" name="user_name"  id="userName"  placeholder="이름"></li>
                <li><input type="text" name="user_hp"    id="userHp"    placeholder="휴대폰"></li>
                <li><input type="text" name="user_email" id="userEmail" placeholder="이메일"></li>
            </ul>
            <button type="submit" id="submitBtn">등록</button>
        </form>
    </div>

</body>
</html>