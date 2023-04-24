<%@
    page
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
    <title>네이버 회원가입폼</title>
    <style>
        *{ margin : 0;padding : 0;vertical-align: middle;box-sizing: border-box;}
        body{ background: #f5f6f7;}
        #wrap{
            width : 100%;
            max-width: 465px;
            margin : 100px auto;
        }
        #wrap .title{
            width : 100%;
            padding : 60px 0 20px 0;
        }
        #wrap .title a{
            display: block;
            width : 200px;
            height : 40px;
            background: url("https://static.nid.naver.com/images/ui/join/m_naver_logo_20191126.png") no-repeat 50% 0%;
            background-size: 200px auto;
            margin : 0 auto;
        }
        #wrap form{
            position: relative;
        }
        #wrap form label{
            display: block;
            width : 100%;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            margin : 20px 0;
        }
        #wrap form label span{
            font-size: 12px;
            font-weight: 400;
            color : #ddd;
        }
        #wrap form >span{
            display: flex;
        }
        #wrap form span .birth{
            width : 200px;
            margin : 0 10px 0 0;
            padding : 15px;
        }
        #wrap form span .birth:nth-child(3){
            margin : 0;
        }
        #wrap form div{
            position: relative;
            width : 100%;
            height : 51px;
            padding : 10px 14px;
            border : 1px solid #ddd;
            display: flex;
            background: #fff;
        }
        #wrap form .hp{
            width : 335px;
        }
        #wrap form .hp span{
            display: flex;
        }
        #wrap form .hp >span input{
            border : 0;
            width : 100%;
            height : 30px;
        }
        #wrap form div input{
            border : 0;
            width : 100%;
            height : 30px;
        }
        #wrap form div input:focus{
            outline: 0;
        }
        #wrap form div .year{
            width : 100%;
        }
        #wrap form div .day{
            width : 100%;
        }
        #wrap form div >span{
            position : absolute;
            top : 15px;
            right : 10px;
            font-size: 15px;
            color : #ddd;
        }
        #wrap form div select{
            border : 0;
            width : 100%;
            height : 25px;
            font-size: 15px;
        }
        #wrap form div select:focus{
            outline: 0;
        }
        #wrap form .check{
            position : absolute;
            top : 0;
            right : -130px;
            width : 120px;
            height : 50px;
            padding : 18px;
            font-weight: 700;
            text-align: center;
            color : #fff;
            background: #03c75a;
            border : 0;
            cursor: pointer;
        }
        #wrap form .join{
            width : 100%;
            color : #fff;
            background: #03c75a;
            border : 0;
            cursor: pointer;
            padding: 20px;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            margin : 50px 0;
        }
    </style>
</head>
<body>

    <div id="wrap">
        <div class="title">
            <a href="#"></a>
        </div>
        <form name="naver_form" id="naverForm" method="post" action="naver_write.jsp">
            <label for="id">아이디</label>
            <div>
                <input autocomplete="off" type="text" name="id" id="id" required>
                <span>@naver.com</span>
            </div>
            <label for="pw">비밀번호</label>
            <div>
                <input autocomplete="off" type="text" name="pw" id="pw" required>
            </div>
            <label for="pwok">비밀번호 재확인</label>
            <div>
                <input autocomplete="off" type="text" name="pwok" id="pwok" required>
            </div>
            <label for="name">이름</label>
            <div>
                <input autocomplete="off" type="text" name="name" id="name" required>
            </div>
            <label for="birth_year">생년월일</label>
            <span>
                <div class="birth">
                    <input autocomplete="off" class="year" type="text" name="birth_year" id="birthYear" placeholder="년(4자)" required>
                </div>
                <div class="birth">
                    <select class="month" name="birth_month" id="birthMonth" required>
                        <option value="">월</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div class="birth">
                    <input autocomplete="off" class="day" type="text" name="birth_day" id="birthDay" placeholder="일" required>
                </div>
            </span>
            <label for="gender">성별</label>
            <div>
                <select name="gender" id="gender" required>
                    <option value="성별">성별</option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                    <option value="선택안함">선택안함</option>
                </select>
            </div>
            <label for="email">본인 확인 이메일<span>(선택)</span></label>
            <div>
                <input autocomplete="off" type="text" name="email" id="email" placeholder="선택입력" required>
            </div>
            <label for="hp">휴대전화</span></label>
            <div>
                <select name="country" id="country" required>
                    <option value="대한민국 +82">대한민국 +82</option>
                    <option value="가나 +233">가나 +233</option>
                    <option value="가봉 +241">가봉 +241</option>
                    <option value="가이아나 +592">가이아나 +592</option>
                    <option value="감비아 +220">감비아 +220</option>
                    <option value="나우루 +674">나우루 +674</option>
                    <option value="터키 +90">터키 +90</option>
                    <option value="포르투갈 +351">포르투갈 +351</option>
                    <option value="폴란드 +48">폴란드 +48</option>
                    <option value="프랑스 +33">프랑스 +33</option>
                    <option value="핀란드 +358">핀란드 +358</option>
                    <option value="필리핀 +63">필리핀 +63</option>
                    <option value="헝가리 +36">헝가리 +36</option>
                </select>
            </div>
            <label for="hp"></label>
            <div class="hp">
                    <input autocomplete="off" class="hp" type="text" name="hp" id="hp" placeholder="전화번호 입력" required>
                    <button class="check">인증번호 받기</button>
            </div>
            <label for="hpok"></label>
            <div>
                <input autocomplete="off" type="text" name="hpck" id="hpck" placeholder="인증번호를 입력하세요" required>
            </div>
            <button class="join" type="submit">가입하기</button>
        </form>
    </div>
    
</body>
</html>