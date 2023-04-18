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
  <title>마켓컬리 응답jsp</title>
  
</head>
<body>
  <%
    String user_id = request.getParameter("user_id");
    String user_pw1 = request.getParameter("user_pw1");
    String user_pw2 = request.getParameter("user_pw2");
    String user_name = request.getParameter("user_name");
    String user_email = request.getParameter("user_email");
    String user_hp = request.getParameter("user_hp");
    String user_gender = request.getParameter("user_gender");
    String user_birth_year = request.getParameter("user_birth_year");
    String user_birth_month = request.getParameter("user_birth_month");
    String user_birth_date = request.getParameter("user_birth_date");
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
        <td><%=user_pw1%></td>
        <td><%=user_pw2%></td>
        <td><%=user_name%></td>
        <td><%=user_email%></td>
        <td><%=user_hp%></td>
        <td><%=user_gender%></td>
        <td><%=user_birth_year%>-<%=user_birth_month%>-<%=user_birth_date%></td>
      </tr>
    </tbody>
  </table>

  <style>

    * {margin:0;padding:0;vertical-align: middle;box-sizing: border-box;}
    table {border-collapse: collapse;width:1000px;margin: 100px auto; font-size: 14px;}
    table th,td{border:1px solid #ddd;height: 50px;padding: 0 10px;}
    table th {background: #f0f0f0;}
    table td {text-align: center;}

  </style>
  
</body>
</html>