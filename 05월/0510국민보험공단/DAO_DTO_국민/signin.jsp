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
    <title>LOGIN</title>
    <style>
        form {width: 1200px; }
        form table {}
        form table tbody{}
        form table tbody tr{}
        form table tbody tr th{}
        form table tbody tr td{}
    </style>

</head>
<body>
    <div id="wrap">
        <form name="signup_form" id="signupForm" method="post" action="./signin_action.jsp">
            <table>
                <tbody>
                    <tr>
                        <th class="row">아이디<i>*</i></th>
                        <td><input name="user_id" id="userId" type="text" placeholder="영문+숫자 6~10자 이내 아이디 입력"><button>아이디 중복 검색</button></td>
                    </tr>
                    <tr>
                        <th class="row">비밀번호<i>*</i></th>
                        <td><input name="user_pw1" id="userPw1" type="text" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내 비밀번호 입력"></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">로그인</button>
        </form>
    </div>
</body>
</html>