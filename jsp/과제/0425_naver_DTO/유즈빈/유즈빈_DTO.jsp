<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<jsp:useBean id="newBeans" class="use_bean.Beans" scope="page"/>
<jsp:setProperty property="id"              name="newBeans" />
<jsp:setProperty property="pw1"             name="newBeans" />
<jsp:setProperty property="name"            name="newBeans" />
<jsp:setProperty property="birth_year"      name="newBeans" />
<jsp:setProperty property="birth_month"     name="newBeans" />
<jsp:setProperty property="birth_day"       name="newBeans" />
<jsp:setProperty property="birth"           name="newBeans" />
<jsp:setProperty property="gender"          name="newBeans" />
<jsp:setProperty property="email"           name="newBeans" />
<jsp:setProperty property="nation"          name="newBeans" />
<jsp:setProperty property="hp"              name="newBeans" />



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
    
    <h1>네이버 자바 빈즈 useBean DTO</h1>
    <hr>
    <h2><%=newBeans.getId()%></h2>
    <h2><%=newBeans.getPw1()%></h2>
    <h2><%=newBeans.getName()%></h2>
    <h2><%=newBeans.getBirth_year()%></h2>
    <h2><%=newBeans.getBirth_month()%></h2>
    <h2><%=newBeans.getBirth_day()%></h2>
    <h2><%=newBeans.getBirth()%></h2>
    <h2><%=newBeans.getGender()%></h2>
    <h2><%=newBeans.getEmail()%></h2>
    <h2><%=newBeans.getNation()%></h2>
    <h2><%=newBeans.getHp()%></h2>



</body>
</html>