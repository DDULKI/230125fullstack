<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@ page import="beans_dto.SungjukBeans"%>

<%
    // 클래스 생성자 생성하기 => 인스턴스 생성
    SungjukBeans newSungjukBeans = new SungjukBeans();

    // 이름 입력하기(이름 설정하기 setter 세터함수)
    newSungjukBeans.setName("정슬기");
    newSungjukBeans.setKor(20);
    newSungjukBeans.setMat(95);
    newSungjukBeans.setEng(98);
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자바빈즈 DTO JSP</title>

    <style>
        body { 
            text-align: center;
        }
    </style>

</head>
<body>


    <h1> 자바빈즈 DTO 가져오기 게터 getter 함수</h1>
    <hr>
    <h2><%= newSungjukBeans.getName() %></h2>
    <h2><%= newSungjukBeans.getKor() %></h2>
    <h2><%= newSungjukBeans.getMat() %></h2>
    <h2><%= newSungjukBeans.getEng() %></h2>

    
</body>
</html>