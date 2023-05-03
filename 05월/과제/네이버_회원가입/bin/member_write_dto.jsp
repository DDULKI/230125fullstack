<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<jsp:useBean id="newMember" class="use_beans.Member" scope="page" />
<jsp:setProperty property="id" name="newMember"/>
<jsp:setProperty property="pw1" name="newMember"/>
<jsp:setProperty property="pw2" name="newMember"/>
<jsp:setProperty property="name" name="newMember"/>
<jsp:setProperty property="birthYear" name="newMember"/>
<jsp:setProperty property="birthMonth" name="newMember"/>
<jsp:setProperty property="birthDay" name="newMember"/>
<jsp:setProperty property="gender" name="newMember"/>
<jsp:setProperty property="email" name="newMember"/>
<jsp:setProperty property="nation" name="newMember"/>
<jsp:setProperty property="hp" name="newMember"/>
<!-- <jsp:setProperty property="*" name="newMember"/> -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>네이버 회원 목록</title>
    <link rel="stylesheet" href="./css/view.css">
</head>
<body>

    <div id="wrap">
        <table>
            <caption>회원 목록</caption>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>비밀번호 확인</th>
                    <th>이름</th>
                    <th>생년</th>
                    <th>생월</th>
                    <th>생일</th>
                    <th>성별</th>
                    <th>이메일</th>
                    <th>국가</th>
                    <th>전화번호</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td><%=newMember.getId()%></td>
                  <td><%=newMember.getPw1()%></td>
                  <td><%=newMember.getPw2()%></td>
                  <td><%=newMember.getName()%></td>
                  <td><%=newMember.getBirthYear()%></td>
                  <td><%=newMember.getBirthMonth()%></td>
                  <td><%=newMember.getBirthDay()%></td>
                  <td><%=newMember.getGender()%></td>
                  <td><%=newMember.getEmail()%></td>
                  <td><%=newMember.getNation()%></td>
                  <td><%=newMember.getHp()%></td>
                </tr>
            </tbody>
        </table>
    </div>
    
</body>
</html>