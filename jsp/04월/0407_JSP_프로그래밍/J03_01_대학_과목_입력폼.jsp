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
    <title>대학교 과목 등록하는 JSP 프로젝트</title>
    <style>
        #wrap {margin: 0 auto;}
        #wrap table {width:100%; border-collapse: collapse;}
        th {
            width:20%; 
            border:1px solid salmon;
            height: 100%;
            display: flex; 
            align-items: center; 
            justify-content: center;
            padding: 50px 0; }
        span {width: 100%; font-size: 14px; }
       
       
    </style>

</head>
<body>
    <div id="wrap">
        <table>
            <form name="uni_form" id="uniForm" method="post" action="./J03_02_대학_과목_입력폼_응답.jsp">
                <tr>
                    <th>이름<label for="userName"><input type="text" name="user_name" id="userName" placeholder="이름을 입력하세요." required autofocus></label></th>
                    <th>학번<label for="userhb"><input type="text" name="user_hb" id="userHb" placeholder="학번을 입력하세요." required autofocus></label></th>
                    <th><label for="userhn"><span>1학년</span><input type="radio" name="user_hn" id="userHn" value="1학년" required autofocus></label></th>   
                    <th><label for="userhn"><span>2학년</span><input type="radio" name="user_hn" id="userHn" value="2학년" required autofocus></label></th>
                    <th><label for="userhn"><span>3학년</span><input type="radio" name="user_hn" id="userHn" value="3학년" required autofocus></label></th>    
                    <th><label for="userhn"><span>4학년</span><input type="radio" name="user_hn" id="userHn" value="4학년" required autofocus></label></th>
                    <th>
                        <label for="userGm">
                            <select name="user_gm" id="userGm" required autofocus>
                                <option value="" selected>과목을 선택하세요.</option>
                                <option value="전공실기">전공실기</option>
                                <option value="컴퓨터음악">컴퓨터음악</option>
                                <option value="미디어영상음악">미디어영상음악</option>
                                <option value="필라테스">필라테스</option>
                                <option value="파워요가">파워요가</option>
                                <option value="음악감상">음악감상</option>
                                <option value="화성학">화성학</option>
                                <option value="영어">영어</option>
                            </select>
                        </label>
                        <input type="submit" value="입력완료">
                    </th>
                </tr>
            </form>
        </table>
        
    </div>
</body>
</html>