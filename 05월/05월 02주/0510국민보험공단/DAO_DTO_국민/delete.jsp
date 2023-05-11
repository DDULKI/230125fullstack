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
    <title>회원탈퇴</title>
    <link rel="stylesheet" href="./public/css/style.css">
    

</head>
<body>
    <div id="wrap">

        <%
            String loginId = null;
            if(session.getAttribute("user_id")!=null){
                loginId = (String) session.getAttribute("user_id");
            }
        %>

        <form name="signup_form" id="signupForm" method="post" action="./delete_action.jsp">
            <table>
                <tbody>
                    <tr>
                        <th class="row">아이디<i>*</i></th>
                        <td><input name="user_id" id="userId" type="text" placeholder="영문+숫자 6~10자 이내 아이디 입력" value=<%= loginId%>><button>아이디 중복 검색</button></td>
                    </tr>
                    <tr>
                        <th class="row">비밀번호<i>*</i></th>
                        <td><input name="user_pw1" id="userPw1" type="text" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내 비밀번호 입력"></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">회원탈퇴</button>
        </form>
    </div>
</body>
</html>