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
    <title>스타벅스 공지사항</title>
    <style>
         *{margin:0; padding: 0; vertical-align: middle;box-sizing: border-box;}
        table {width:1100px; margin: 50px auto; border-collapse: collapse; }
        table tr th {font-size: 16px; padding: 17px 0; line-height: 16px; border-top: 1px solid #000; border-bottom: 1px solid #000; }
        table tr td{padding: 17px 0; text-align: center; border-bottom: 1px solid #ccc; text-decoration: underline;}
        table tr td:hover {color: antiquewhite;}
        table tr td:nth-child(2){text-align: left; padding: 0 0 0 20px;}
        

    </style>
</head>
<body>
    <%
        int[] num_no = {425, 424, 423, 422, 421, 420, 419, 418, 417, 416};
        int[] num_jhs = {1480, 1721, 26001, 3705, 21038, 3377, 20654, 2135, 1879, 9036};
        String[] jemok ={ 
                         "시스템 개선 및 서비스 점검 안내",
                         "시스템 개선 및 서비스 점검 안내",
                         "탄소중립포인트 인센티브 지급 기준 안내", 
                         "스타벅스 코리아 사칭 홈페이지 및 이메일 주의 안내",
                         "Summer 시즌 사이렌 오더 음료 기본 설정 변경 안내",
                         "시스템 개선 및 서비스 점검 안내",
                         "탄소중립실천포인트제 도입 안내",
                         "영상정보처리기기 운영방침 / 위치정보 이용약관 / 개인정보처리방침 이용약관 개정 안내",
                         "시스템 개선 및 서비스 점검 안내",
                         "설 연휴 스타벅스 딜리버스 운영 안내"
                        };
       String[] nalzza = { 
                            "2023-04-04", 
                            "2023-03-27", 
                            "2023-03-23", 
                            "2023-03-20", 
                            "2023-03-17",
                            "2023-02-17",
                            "2023-02-02",
                            "2023-02-02",
                            "2023-01-27",
                            "2023-01-20"
                        };
    %>
    
        <table>
            <tr>
                <th>NO</th>
                <th>제목</th>
                <th>날짜</th>
                <th>조회수</th>
            </tr>
            <%
                for(int i=0; i<10; i++){
                    out.println("<tr><td>"+num_no[i]+"</td><td>"+jemok[i]+"</td><td>"+nalzza[i]+"</td><td>"+num_jhs[i]+"</td></tr>");
                }
            %>
        </table>



</body>
</html>