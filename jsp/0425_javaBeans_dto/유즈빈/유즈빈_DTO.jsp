<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<!-- // id에 클래스 이름을 넣는다  // 패키지 이름도 넣기.  -->
<jsp:useBean id="newBeans" class="use_bean.Beans" scope="page"/> 
<jsp:setProperty property="userId"   name="newBeans" />
<jsp:setProperty property="userPw"   name="newBeans" />
<jsp:setProperty property="userName" name="newBeans" />
<jsp:setProperty property="userHp"   name="newBeans" />
<jsp:setProperty property="userAddr" name="newBeans" />


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            text-align: center;
        }
    </style>

</head>
<body>
    <h1>자바(Java)빈즈(Beans) useBean DTO</h1>
    <hr>
    <h2><%=newBeans.getUserId()%></h2>
    <h2><%=newBeans.getUserPw()%></h2>
    <h2><%=newBeans.getUserName()%></h2>
    <h2><%=newBeans.getUserHp()%></h2>
    <h2><%=newBeans.getUserAddr()%></h2>


</body>
</html>