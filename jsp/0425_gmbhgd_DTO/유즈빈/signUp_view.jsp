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
        "jdbc:mysql://localhost:3306/ddulki", "root", "1234"
    );
    Statement st = conn.createStatement();
    String SQL = "SELECT * FROM gmgungang_signup";
    ResultSet rs = st.executeQuery(SQL);
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>국민건강보험 회원가입</title>
</head>
<body>
    
    <div id="wrap">
        <table>
            <caption>회원가입</caption>
            <thead>
                <tr>
                    <th>사업장관리번호</th>
                    <th>사업장기호</th>
                    <th>단위사업장기호</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>비밀번호확인</th>
                    <th>비밀번호 분실 시 확인 질문</th>
                    <th>비밀번호 분실 시 확인 답변</th>
                    <th>전화번호</th>
                    <th>이메일</th>
                    <th>소식지 수신여부</th>
                </tr>
            </thead>
            <tbody>
                <%
                    while(rs.next()){
                %>
                    <tr>
                        <td><%=rs.getString("idx")%></td>
                        <td><%=rs.getString("saup_grbh")%></td>
                        <td><%=rs.getString("saup_giho")%></td>
                        <td><%=rs.getString("gaib_yb")%></td>
                        <td><%=rs.getString("user_id")%></td>
                        <td><%=rs.getString("user_pw1")%></td>
                        <td><%=rs.getString("sel_pw")%></td>
                        <td><%=rs.getString("pwbs_ok")%></td>
                        <td><%=rs.getString("user_hp")%></td>
                        <td><%=rs.getString("input_email")%></td>
                        <td><%=rs.getString("email_domain_select")%></td>
                        <td><%=rs.getString("sosic_ok")%></td>
                        <td><%=rs.getString("sosic_no")%></td>
                        <td><%=rs.getString("create_date")%></td>
                    </tr>
                <%
                    }
                %>
            </tbody>
        </table>
    </div>
</body>
</html>