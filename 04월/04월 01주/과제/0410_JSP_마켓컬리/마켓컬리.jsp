<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<% request.setCharacterEncoding("utf-8");%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>

    * {margin:0;padding:0;vertical-align: middle;box-sizing: border-box;}
    table {border-collapse: collapse;width:1000px;margin: 100px auto; font-size: 14px;}
    table th,td{border:1px solid #ddd;height: 50px;padding: 0 10px;}
    table th {background: #f0f0f0;}
    table td {text-align: center;}

</style>
</head>
<body>
  <%
    String user_id = request.getParameter("user_id");
    String user_pw = request.getParameter("user_pw");
    String user_pw_ok = request.getParameter("user_pw_ok");
    String user_irum = request.getParameter("user_irum");
    String user_email = request.getParameter("user_email");
    String user_hp = request.getParameter("user_hp");
    String sex = request.getParameter("sex");
    String user_year = request.getParameter("user_year");
    String user_month = request.getParameter("user_month");
    String user_day = request.getParameter("user_day");
  %>
  <table>
    <thead>
      <tr>
        <th>아이디</th>
        <th>비밀번호</th>
        <th>비밀번호확인</th>
        <th>이름</th>
        <th>이메일</th>
        <th>휴대폰</th>
        <th>성별</th>
        <th>생년월일</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><%=user_id%></td>
        <td><%=user_pw%></td>
        <td><%=user_pw_ok%></td>
        <td><%=user_irum%></td>
        <td><%=user_email%></td>
        <td><%=user_hp%></td>
        <td><%=sex%></td>
        <td><%=user_year%>-<%=user_month%>-<%=user_day%></td>
      </tr>
    </tbody>
  </table>
  
</body>
</html>