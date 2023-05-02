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
    <title>네이버 회원가입</title>
    <style>
        *{margin: 0; padding: 0; vertical-align: middle; box-sizing: border-box;}
        body {background: #ffff;}
        #wrap {width:100%; max-width: 460px; margin: 0 auto;}
        #wrap .title{width: 100%; padding: 60px 0 20px 0;}
        #wrap .title a {
            display: block; 
            width: 240px; 
            height: 44px;
            background: url("https://static.nid.naver.com/images/ui/join/m_naver_logo_20191126.png") no-repeat 50% 0%; 
            background-size: 240px auto; 
            margin: 0 auto;
        }
        #wrap form{position: relative;}
        #wrap form label {display: block; width: 100%; font-size: 14px; font-weight: 700; cursor: pointer; margin: 20px 0 8px 0;}
        #wrap form label span{font-size: 12px; font-weight: 400; color: #8d8d8d;}
        #wrap form >span {display: flex;}
        #wrap form span .birth {width: 150px; margin-right: 10px; padding: 10px 14px;}
        #wrap form span .birth:nth-child(3){margin: 0;}
        #wrap form div{position:relative; width:100%; height: 50px; padding: 10px 15px; border:1px solid #ddd; display: flex; background: #fff;}
        #wrap form .hp{width: 335px;}
        #wrap form .hp span {display: flex;}
        #wrap form .hp >span input {border:0; width:100%; height: 29px;}
        #wrap form .hp span button { width: 100%;}
        #wrap form div input {border: 0; width: 100%; height: 29px;}
        #wrpa form div input:focus{outline: 0;}
        #wrap form div .year {width: 100%;}
        #wrap form div .day {width: 100%;}
        #wrap form div >span {position:absolute; top:16px; right: 13px; font-size: 15px; color: #8d8d8d; line-height: 18px;}
        #wrap form div select {border:0; width: 100%; height: 29px; font-size: 15px; line-height: 18px;}
        #wrap form div select:focus{outline: 0;}
        #wrap form .cerification{
            position:absolute; 
            top:0;
            right: -127px;
            width: 115px;
            height: 51px;
            padding: 18px 0 16px 0;
            font-weight: 700;
            text-align: center;
            color: #fff;
            background: #03c75a;
            border: 0;
            cursor:pointer;
        }
        #wrap form .signup {
            width: 100%;
            color: #fff;
            background: #03c75a;
            border: 0;
            cursor: pointer;
            padding: 15px 0 15px 0;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            margin: 50px 0 100px 0;
        }
    </style>

</head>
<body>
    <div id="wrap">
        <div class="title">
            <a href="http://www.naver.com"></a>
        </div>
        <form name="sign_up" id="signUp" method="post" action="./유즈빈_DTO.jsp">
            <label for="id">아이디</label>
            <div>
                <input type="text" name="id" id="id">
                <span>@naver.com</span>
            </div>
            <label for="pw">비밀번호</label>
            <div>
                <input type="text" name="pw" id="pw">
            </div>
            <label for="pw2">비밀번호 확인</label>
            <div>
                <input type="text" name="pw2" id="pw2">
            </div>
            <label for="name">이름</label>
            <div>
                <input type="text" name="name" id="name">
            </div>
            <label for="birth_year">생년월일</label>
            <span>
                <div class="birth">
                    <input class="year" type="text" name="birth_year" id="birthYear" placeholder="년(4자)">
                </div>
                <div class="birth">
                    <select class="month" name="birth_month" id="birthMonth">
                        <option value="월">월</option>
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
                    <input class="day" type="text" name="birth_day" id="birthDay" placeholder="월">
                </div>
            </span>
            <label for="gender">성별</label>
            <div>
                <select name="gender" id="Gender">
                    <option value="성별">성별</option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                    <option value="선택안함">선택안함</option>
                </select>
            </div>
            <label for="email">본인 확인 이메일<span>(선택)</span></label>
            <div>
                <input type="text" name="email" id="Email" placeholder="선택 입력">
            </div>
            <label for="hp">휴대전화</label>
            <div>
                <select name="nation" id="nation">
                    <option value="대한민국 +82">대한민국 +82</option>
                    <option value="그리스 +30">그리스 +30</option>
                    <option value="나이지리아 +234">나이지리아 +234</option>
                    <option value="노르웨이 +47">노르웨이 +47</option>
                    <option value="독일 +49">독일 +49</option>
                </select>
            </div>
            <button type="submit">저장(SAVE)</button>
        </form>
    </div>
    
</body>
</html>