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
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/younghwan","root","1234");
    
    Statement st = conn.createStatement();
    ResultSet rs = st.executeQuery("SELECT * FROM naver");
%>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>네이버 회원가입 목록</title>
</head>
<style>
    *{margin: 0; padding: 0; vertical-align: middle; box-sizing: border-box;}
    html,body{width: 100%; height: 100%;}
    body{font:normal 15px/1 "맑은고딕", 'arial'; color: #444; background: #fff;}
    #wrap{width: 100%;}
    #wrap table{width: 100%; max-width: 1000px; margin: 0 auto; border-collapse: collapse;}
    #wrap table caption{padding: 80px 0 50px 0; font-size: 40px; font-weight: 600; color: #38a;}
    #wrap table th,td{border-bottom: 1px solid rgba(51, 136, 170, 0.3);}
    #wrap table th{ height: 60px; font-size: 17px; font-weight: 400; color: #fff; background: #f0f0f0; border-top: 1px solid #ddd; background: #38a;}
    #wrap table td{height: 50px; font-size: 16px; color: #555;text-align: center;padding: 0 20px;}
</style>
<body>
    
    <div id="wrap">
        <table>
            <caption>회원가입된 목록</caption>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>비밀번호 재확인</th>
                    <th>이름</th>
                    <th>생년월일</th>
                    <th>성별</th>
                    <th>본인 확인 이메일</th>
                    <th>국가</th>
                    <th>전화번호</th>
                    <th>인증번호</th>
                    <th>작성날짜</th>
                </tr>
            </thead>
            <tbody>

                <%
                    while(rs.next()){
                %>


                    <tr>
                        <td><%=rs.getInt("idx")%></td>
                        <td><%=rs.getString("id")%></td>
                        <td><%=rs.getString("pw")%></td>
                        <td><%=rs.getString("pwok")%></td>
                        <td><%=rs.getString("name")%></td>
                        <td><%=rs.getString("birth")%></td>
                        <td><%=rs.getString("gender")%></td>
                        <td><%=rs.getString("email")%></td>
                        <td><%=rs.getString("country")%></td>
                        <td><%=rs.getString("hp")%></td>
                        <td><%=rs.getString("hpck")%></td>
                        <td><%=rs.getDate ("create_date")%></td>
                    </tr>
              
                <%
                    }
                %>


            </tbody>
        </table>
    </div>

</body>
</html>