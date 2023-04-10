<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<% 
    // 폼 전송 받은 한글 깨짐현상 셋팅 인코딩
    // 리퀘스트.셋캐릭터인코딩("UTF-8");
       request.setCharacterEncoding("UTF-8");
%>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>폼 전송 응답 페이지</title>

    <style>
        table {width:50%;margin: 50px auto;border-collapse: collapse;}
        th,td {border:1px solid #ccc;height: 50px;border-top: 1px solid #ccc;}
        td {text-align: center;}

        td em,
        td i {color:#c33;}
    </style>

</head>
<body>
    
    <div id="wrap">
        
        <!-- 
            폼전송시 요청한 데이터 이름, 나이를 받는다  
            request.getParameter() 
        -->
        <%
            String user_name = request.getParameter("user_name");
            String user_hb = request.getParameter("user_hb");
            String user_hn = request.getParameter("user_hn");
            String user_gm = request.getParameter("user_gm");
        %>
        
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>학번</th>
                    <th>학년</th>
                    <th>과목</th>
                </tr>                
            </thead>
            
            <tbody>
                <tr>
                    <td><%= user_name %> 님</td>
                    <td><%= user_hb %></td>    
                    <td><%= user_hn %></td>    
                    <td><%= user_gm %></td>    
                </tr>
                
            </tbody>
        </table>


    </div>

</body>
</html>