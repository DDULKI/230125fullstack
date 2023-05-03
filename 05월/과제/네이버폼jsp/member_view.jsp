<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@
    page
    import="java.sql.*"
%>

<%
    request.setCharacterEncoding("UTF-8");
%>

<%
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hyukjin", "root", "1234");
    String SQL = "SELECT * FROM member";
    Statement stmt = conn.createStatement();
    ResultSet rs = stmt.executeQuery(SQL);
%>

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
                    <th>번호</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                    <th>생년월일</th>
                    <th>성별</th>
                    <th>이메일</th>
                    <th>국가</th>
                    <th>전화번호</th>
                    <th>생성날짜</th>
                </tr>
            </thead>
            <tbody>
                <%
                    while(rs.next()){  
                %>
                <tr>
                    <td><%= rs.getString("idx") %></td>
                    <td><%= rs.getString("id") %></td>
                    <td><%= rs.getString("pw") %></td>
                    <td><%= rs.getString("name") %></td>
                    <td><%= rs.getString("birth") %></td>
                    <td><%= rs.getString("gender") %></td>
                    <td><%= rs.getString("email") %></td>
                    <td><%= rs.getString("nation") %></td>
                    <td><%= rs.getString("hp") %></td>
                    <td><%= rs.getDate("create_date") %></td>
                </tr>
                <%
                    }
                %>
            </tbody>
        </table>
    </div>
    
</body>
</html>