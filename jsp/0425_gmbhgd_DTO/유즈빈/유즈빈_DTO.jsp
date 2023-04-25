<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<jsp:useBean id="newBhBeans" class="gungang.bhBeans" scope="page"/>
<jsp:setProperty property="saup_grbh"               name="newBhBeans"/>
<jsp:setProperty property="saup_giho"               name="newBhBeans"/>
<jsp:setProperty property="gaib_yb"                 name="newBhBeans"/>
<jsp:setProperty property="user_id"                 name="newBhBeans"/>
<jsp:setProperty property="user_pw1"                name="newBhBeans"/>
<jsp:setProperty property="sel_pw"                  name="newBhBeans"/>
<jsp:setProperty property="pwbs_ok"                 name="newBhBeans"/>
<jsp:setProperty property="user_hp"                 name="newBhBeans"/>
<jsp:setProperty property="input_email"             name="newBhBeans"/>
<jsp:setProperty property="email_domain_select"     name="newBhBeans"/>
<jsp:setProperty property="sosic_ok"                name="newBhBeans"/>
<jsp:setProperty property="sosic_no"                name="newBhBeans"/>

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
    <h1>국민보험공단 자바 빈즈 newBhBeans DTO</h1>
    <hr>
    <h2><%=newBhBeans.getSaup_grbh()%></h2>
    <h2><%=newBhBeans.getSaup_giho()%></h2>
    <h2><%=newBhBeans.getGaib_yb()%></h2>
    <h2><%=newBhBeans.getUser_id()%></h2>
    <h2><%=newBhBeans.getUser_pw1()%></h2>
    <h2><%=newBhBeans.getSel_pw()%></h2>
    <h2><%=newBhBeans.getPwbs_ok()%></h2>
    <h2><%=newBhBeans.getUser_hp()%></h2>
    <h2><%=newBhBeans.getInput_email()%></h2>
    <h2><%=newBhBeans.getEmail_domain_select()%></h2>
    <h2><%=newBhBeans.getSosic_ok()%></h2>
    <h2><%=newBhBeans.getSosic_no()%></h2>


</body>
</html>