<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<% 
    request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>마켓컬리 회원가입폼</title>
    <style>
        *{margin: 0;padding: 0;vertical-align: middle;box-sizing: border-box;}
        #wrap {padding: 130px 0;}
        table {width: 50%;margin: 0 auto; border-collapse: collapse;}
        thead {background: #ccc;}
        tbody {background: #f0f0f0;}
        td,th {border: 1px solid #ccc;height: 50px;border-color: #000;}
        td {text-align: center;}
        td em {color: #c33;}
        td i {color: #c33;}
    </style>
</head>
<body>
    <%
        String userId = request.getParameter("userId");
        String userPw = request.getParameter("userPw");
        String userPw2 = request.getParameter("userPw2");
        String userName = request.getParameter("userName");
        String userEmail = request.getParameter("userEmail");
        String userHp = request.getParameter("userHp");
        String userAddr1 = request.getParameter("userAddr1");
        String userAddr2 = request.getParameter("userAddr2");
        String userGender1 = request.getParameter("userGender1");
        // String userGender2 = request.getParameter("userGender2");
        // String userGender3 = request.getParameter("userGender3");
        // String gender = request.getParameter("gender");
        String userBirthYear = request.getParameter("userBirthYear");
        String userAddInput1 = request.getParameter("userAddInput1");
        String userAddInput2 = request.getParameter("userAddInput2");
        String userAddInput3 = request.getParameter("userAddInput3");
        String userAddInput4 = request.getParameter("userAddInput4");
        String userAgree1 = request.getParameter("userAgree1");
        String userAgree2 = request.getParameter("userAgree2");
        String userAgree3 = request.getParameter("userAgree3");
        String userAgree4 = request.getParameter("userAgree4");
        String userAgree5 = request.getParameter("userAgree5");
        String userAgree6 = request.getParameter("userAgree6");
        String userAgree7 = request.getParameter("userAgree7");
        
       
        // String user_gender = request.getParameter("user_gender");
        // String user_birth1 = request.getParameter("user_birth1");
        // String user_birth2 = request.getParameter("user_birth2");
        // String user_birth3 = request.getParameter("user_birth3");
        // String[] user_add_input = request.getParameterValues("user_add_input");
        // String[] user_agree = request.getParameterValues("user_agree");
    %>
    <%
        String result = "";
        result += "<p>"+ userId +"</p>";
        result += "<p>"+ userPw +"</p>";
        result += "<p>"+ userPw2 +"</p>";
        result += "<p>"+ userName +"</p>";
        result += "<p>"+ userEmail +"</p>";
        result += "<p>"+ userHp +"</p>";
        result += "<p>"+ userAddr1 +"</p>";
        result += "<p>"+ userAddr2 +"</p>";
        result += 남성"<p>"+ userGender1 +"</p>";
        // result += 여성"<p>"+ userGender2 +"</p>";
        // result += 선택안함"<p>"+ userGender3 +"</p>";
        // result += 성별"<p>"+ gender +"</p>";
        result += "<p>"+ userBirthYear +"</p>";
        result += "<p>"+ userAddInput1 +"</p>";
        result += "<p>"+ userAddInput2 +"</p>";
        result += "<p>"+ userAddInput3 +"</p>";
        result += "<p>"+ userAddInput4 +"</p>";
        result += "<p>"+ userAgree1 +"</p>";
        result += "<p>"+ userAgree2 +"</p>";
        result += "<p>"+ userAgree3 +"</p>";
        result += "<p>"+ userAgree4 +"</p>";
        result += "<p>"+ userAgree5 +"</p>";
        result += "<p>"+ userAgree6 +"</p>";
        result += "<p>"+ userAgree7 +"</p>";

        out.println(result);
    %>




</body>
</html>