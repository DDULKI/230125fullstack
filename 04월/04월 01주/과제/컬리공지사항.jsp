<%@
    page
    info="java"
    contentType="text/html; charshe=UTF-8"
    pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>마켓컬리 공지사항</title>
    <style>
        *{box-sizing:border-box;}
        table {width: 820px; margin: 50px auto; border-collapse: collapse;}
        table caption {width:100%; text-align: left; padding: 0 0 27px 0;}
        table caption h1 {font-size: 24px; font-weight: 500; color: #333; line-height: 48px;}
        table caption span {font-size: 14px; color: #999; padding: 0 0 0 11px; line-height: 20x;}
        table thead th {
            font-size: 14px; 
            color: #333; 
            line-height: 20px; 
            font-weight: 400; 
            height: 63px; 
            padding: 20px 0; 
            border-top: 2px solid #000; 
            border-bottom: 1px solid #ddd;
        }
        table tbody td:nth-child(2){
            text-align: left;
            padding: 20px 0 20px 20px;
        }
        table tbody td:nth-child(4){
            color:#999;
        }
        
    </style>
</head>
<%
    String[] arr1 = {"공지", "공지", "535", "534", "533","532","531","530","529","528","527","526","525","524","523"};
    String[] arr2 = {"[안내] 샛별배송 서비스 확장 안내 (2023.04.01~)",
                     "안내] 컬리 소비자 분쟁해결 기준 안내",
                     "[이벤트] 3월 봄날의 펫페어 기부 이벤트 공지의 건", 
                     "[안내] 컬리 APP 업데이트 안내 (2023.04.03)",
                     "[이벤트] 전주 베테랑 라이브 경품 당첨자 안내",
                     "[안내] 컬리로그 커뮤니티 가이드라인 일부 변경 안내 (2023.03.21~)",
                     "[안내] SKT휴대폰결제 서비스 점검 (2023.03.22)",
                     "[안내] 컬리 이메일 서버 점검 (2023.03.22)",
                     "[안내] 컬리 서비스 점검 안내 (2023.03.18)",
                     "[안내] 컬리 서비스 점검 안내 (2023.03.15)",
                     "[안내] LGU+ 휴대폰 본인인증 서비스 점검 안내 (2023.03.08)",
                     "[안내] LGU+ 휴대폰결제 서비스 점검 안내 (2023.03.10)",
                     "[안내] SKT 휴대폰본인인증 서비스 SMS 시스템 점검 (2023.03.03~03.04, 03.05)",
                     "[안내] 적립금 정책 일부 변경 안내 (2023.04.01~)",
                     "[안내] 후기 적립금 정책 일부 변경 안내 (2023.04.01~)"
                    };
    String[] arr3 = {"컬리", "컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리"};
    String[] arr4 = {"2023.03.31", "2022.07.27", "2023.04.03", "2023.03.31", "2023.03.29", 
                     "2023.03.22", "2023.03.21", "2023.03.17", "2023.03.14", "2023.03.10", 
                     "2023.03.07", "2023.03.07", "2023.03.02", "2023.03.01", "2023.02.23"};
%>

<body>
    <table>
        <caption>
            <h1>공지사항<span>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</span></h1>
        </caption>
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>
        </thead>
        <tbody>
            <%
            for(int i=0; i<15; i++){
                out.println("<tr><td>" + arr1[i] + "</td><td>" + arr2[i] + "</td><td>" + arr3[i] + "</td><td>" + arr4[i] + "</td></tr>");
            }
            %>
        </tbody>
    </table>

</body>
</html>