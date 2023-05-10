<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "gukmin.SignUpDAO"%>
<%@ page import = "gukmin.SignUpDTO"%>
<%@ page import = "java.util.*"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>메인 페이지</title>
    <link rel="stylesheet" href="./css/style.css">
    
</head>
<body>
    <div id="wrap">
        <section id="signup" class="main">
            <div class="container">
                <div class="title">
                    <h2>메인 페이지</h2>
                </div>
                
                <%
                    String loginId = null;
                    if(session.getAttribute("id") != null){
                        loginId = (String) session.getAttribute("id");
                    }
                    if(loginId == null){
                %>
                    <div class="content">
                        <h3>접속하기</h3>
                        <ul>
                            <li><a href="./signin.jsp">로그인</a></li>
                            <li><a href="./signup.jsp">회원가입</a></li>
                        </ul>
                    </div>
                <% 
                    }
                    else {
                %>
                    <div class="content">
                        <h3>회원관리</h3>
                        <h4><%=loginId%> 회원님</h4>
                        <ul>
                            <li><a href="./update.jsp">개인정보수정</a></li>
                            <li><a href="./delete.jsp">회원탈퇴</a></li>
                            <li><a href="./logout.jsp">로그아웃</a></li>
                        </ul>
                    </div>
                    <%
                        }
                    %>
            </div>
        </section>
    </div>

</body>
</html>