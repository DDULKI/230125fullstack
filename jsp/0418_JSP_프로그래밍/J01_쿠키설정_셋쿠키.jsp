<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>쿠키설정과 삭제</title>
    <style>
        body {
            text-align: center;
        }
    </style>

</head>
<body>
        <h1>쿠키 설정과 쿠키 삭제 하기</h1>
    <%
        // 1. 쿠키 생성하기 
        // Cookie newCookie = new Cookie("키(key)","값(value)");

        // 첫번째쿠키값입니다
        Cookie newCookie1 = new Cookie("seulki_cookie1", "첫번째쿠키값입니다");
        newCookie1.setPath("/"); 
        newCookie1.setMaxAge(60*60*24*1); // 1일쿠키
        response.addCookie( newCookie1 );  // 쿠키에 추가하기 

        // 두번째쿠키값입니다
        Cookie newCookie2 = new Cookie("seulki_cookie2","두번째쿠키값입니다");
        newCookie2.setPath("/"); // path=/ 패스설정
        newCookie2.setMaxAge(60*60*24*3);
        response.addCookie( newCookie2 );
        
        // 세번째쿠키값입니다
        Cookie newCookie3 = new Cookie("seulki_cookie3", "세번째쿠키값입니다");
        newCookie3.setPath("/"); // path=/ 패스설정
        newCookie3.setMaxAge(60*60*24*7);
        response.addCookie( newCookie3 );

        // 쿠키 삭제하기 
        // 만료일을 0으로 설정하면 삭제 
        // 쿠키3 추가되면 날짜설정이 0 이므로 삭제된다. 

         newCookie3.setMaxAge(0);
         response.addCookie(newCookie3); 

         newCookie2.setMaxAge(0);
         response.addCookie(newCookie2); 

         newCookie1.setMaxAge(0);
         response.addCookie(newCookie1); 
    %>


    
</body>
</html>