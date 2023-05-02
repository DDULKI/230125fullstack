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
    <title>국어 영어 수학 응답 페이지</title>
    <style>
        table {width: 50%; margin: 50px auto; border-collapse: collapse;}
        th, td{border: 1px solid #ccc; height: 50px; border-top: 1px solid #ccc;}
        td {text-align: center;}

        
    </style>
</head>
<body>
<div id="wrap">


    <%
        int user_ko = Integer.parseInt(request.getParameter("user_ko"));
        int user_en = Integer.parseInt(request.getParameter("user_en"));
        int user_ma = Integer.parseInt(request.getParameter("user_ma"));
    %>

    <table>
        <thead>
            <tr>
                <th>국어점수</th>
                <th>수학점수</th>
                <th>영어점수</th>
                <th>총점</th>
                <th>평균</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td><%=user_ko%></td>
                <td><%=user_en%></td>
                <td><%=user_ma%></td>
                <td><%=user_ko+user_en+user_ma%></td>
                <td><%=user_ko+user_en+user_ma/3%></td>
            </tr>
        </tbody>
    </table>
</div>
</body>
</html>