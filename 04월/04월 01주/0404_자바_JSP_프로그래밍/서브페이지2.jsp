<%@ 
    page
    info="서브페이지2"
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서브페이지2</title>
        <style>
            .sub2 {
                width:100%;
                height: 100vh;
                background: #cce;
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                justify-content: center;

            }
            h1 {
                font-size: 70px;
                
            }
            h2 {
                font-size: 100px;
            }
        </style>
</head>
<body>

    <%! 
        // 전역변수선언
        // 메서드
        String strIrum = "이순신 장군님"; 

        
    %>
    

    <div id="wrap" class="sub2">
        <h1>서브페이지-2</h1>
        <h2><%= strIrum %></h2>
    </div>

</body>
</html>