<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@ page import="dto_beans.SjBeans"%>

<%
    // 클래스 생성자 생성하기 => 인스턴스 생성 
    SjBeans newSjBeans = new SjBeans();

    // 이름 입력하기
    newSjBeans.setName("DDULKI");
    newSjBeans.setAge(20);
    newSjBeans.setEng(80);
    newSjBeans.setMat(88);
    newSjBeans.setKor(95);
    newSjBeans.setSing(70);
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자바빈즈 DTO JSP</title>

    <style>
        body{
            text-align: center;
        }
    </style>

</head>
<body>
    
    <h1> 자바빈즈 DTO 가져오기 게터 getter 함수</h1>
    <hr>
    <h2><%= newSjBeans.getName()%></h2>
    <h2><%= newSjBeans.getAge()%></h2>
    <h2><%= newSjBeans.getEng()%></h2>
    <h2><%= newSjBeans.getMat()%></h2>
    <h2><%= newSjBeans.getKor()%></h2>
    <h2><%= newSjBeans.getSing()%></h2>
   


</body>
</html>