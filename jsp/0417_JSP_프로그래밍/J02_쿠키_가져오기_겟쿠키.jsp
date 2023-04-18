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
    <title>쿠키 가져오기</title>
    <style>
        body {
            text-align: center;
        }

        body h1 img {width: 100px; padding: 50px 0 0 0;}
    </style>

</head>
<body>
        <h1><img src="./img/pngtree-bakery-cookies-png-image_3451628.png" alt="">쿠키 가져오기<img src="./img/pngtree-bakery-cookies-png-image_3451628.png"></h1>
    <%
        // 쿠키 배열 처리 
        // Cookie[] 쿠키 = 요청.겟쿠키스();
        Cookie[] cookies = request.getCookies(); // 여러개의 쿠키 가져오기

        // 만약 쿠키가 한개도 없다면(빈값 null) 수행 안한다. 
        // 쿠키가 1개라도 있다면 수행한다.  (쿠키값이 null이 아니면 )
        // Cookie newCookie = new Cookie("seulki_cookie1", "첫번째쿠키값입니다");

        // getName()  >  key 
        // getvalue() >  value값

        if(cookies != null ){
            for(Cookie item : cookies){
                String cookieName = item.getName(); // 쿠키 이름을 가져옴,, 
                String cookieValue = item.getValue(); // 쿠키 값을 가져옴,, 
                // 쿠키 이름 (키 key) 검색 : "seulki_cookie1"
                if(cookieName.equals("seulki_cookie1")){
                    out.println("찾았다" + "seulki_cookie1 == " + cookieName);
                    out.println("쿠키값" + cookieValue);
                }
            }
        }

    %>
    
</body>
</html>