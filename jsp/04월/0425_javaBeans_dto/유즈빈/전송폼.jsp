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
    <title>Document</title>

    <style>
        form {
            width: 600px;
            margin: 0 auto; 
        }
        ul { 
            list-style: none;
        }
        form input {
            width: 100%;
            height: 48px;
            padding: 0 15px;
            margin: 0 0 10px 0;
        }
    </style>
</head>
<body>
    
    <form name="submit_from" method="post" action="./유즈빈_DTO.jsp">
        <ul>
            <li><input type="text" name="userId"    placeholder="아이디"></li>
            <li><input type="text" name="userPw"    placeholder="비밀번호"></li>
            <li><input type="text" name="userName"  placeholder="이름"></li>
            <li><input type="text" name="userHp"    placeholder="핸드폰"></li>
            <li><input type="text" name="userAddr"  placeholder="주소"></li>
        </ul>
        <button type="submit">저장(SAVE)</button>
    </form>
    

</body>
</html>