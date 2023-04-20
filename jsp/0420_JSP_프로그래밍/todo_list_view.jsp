<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>
 
<%@
    page
    import ="java.sql.*"
%>

<%
    // 한글 인코딩 
    request.setCharacterEncoding("UTF-8");
%>

<%

    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/user", "root", "1234"
    );
    Statement st = conn.createStatement();   
    String SQL = "SELECT * FROM todo_list";
    ResultSet rs = st.executeQuery(SQL);


%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO LIST 목록보기</title>
    <link rel="stylesheet" href="./css/view.css">
</head>
<body>

    <div id="wrap">
        <div class="top">
            <a href="./">글쓰기</a>
        </div>
        
        <table>
            <caption>TODO LIST</caption>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>할일 목록</th>
                    <th>작성날짜</th>
                </tr>
            </thead>
            <tbody>
                
                <%
                    while(rs.next()){
                %>

                    <tr>
                        <td><%=rs.getString("idx")%></td>
                        <td><%=rs.getString("todo_list")%></td>
                        <td><%=rs.getDate("create_date")%></td>
                    </tr>
                
                <%
                    }
                %>

            </tbody>
        </table>
        


    </div>
    
</body>
</html>