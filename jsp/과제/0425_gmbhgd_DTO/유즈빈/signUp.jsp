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
    <title>국민보험공단</title>
</head>
<body>
    <div id="wrap">
        <form name="signup_form" id="signupForm" method="post" action="./유즈빈_DTO.jsp">
            <table>
                <tbody>
                    <tr>
                        <th class="row">사업장관리번호<i>*</i></th>
                        <td><input name="saup_grbh" id="saupGrbh" type="text"><button>사업장 관리번호 확인방법</button></td>
                    </tr>
                    <tr>
                        <th class="row">사업장기호<i>*</i></th>
                        <td><input name="saup_giho" id="saupGiho" type="text" placeholder="사업장관리번호확인 버튼을 클릭하여 검증하시면 자동입력 됩니다."></td>
                    </tr>
                    <tr>
                        <th class="row">단위사업장기호<i>*</i></th>
                        <td><button>단위사업장검색</button><input name="gaib_yb" id="gaibYb" type="text"><button>가입여부 확인하기(실명확인)</button></td>
                    </tr>
                    <tr>
                        <th class="row">아이디<i>*</i></th>
                        <td><input name="user_id" id="userId" type="text" placeholder="영문+숫자 6~10자 이내 아이디 입력"><button>아이디 중복 검색</button></td>
                    </tr>
                    <tr>
                        <th class="row">비밀번호<i>*</i></th>
                        <td><input name="user_pw1" id="userPw1" type="text" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내 비밀번호 입력"></td>
                    </tr>
                    <tr>
                        <th class="row">비밀번호확인<i>*</i></th>
                        <td><input name="user_pw2" id="userPw2" type="text" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내 비밀번호 입력"></td>
                    </tr>
                    <tr>
                        <th class="row">비밀번호 분실 시 확인 <br>질문<i>*</i></th>
                        <td>
                            <select name="sel_pw" id="selPw">
                                <option value selected="selected">질문을 선택하세요.</option>
                                <option value="나의 아버지 성함은?">나의 아버지 성함은?</option>
                                <option value="나의 그리운 고향은?">나의 그리운 고향은?</option>
                                <option value="나의 첫째아이 이름은?">나의 첫째아이 이름은?</option>
                                <option value="나의 초등학교 이름은?">나의 초등학교 이름은?</option>
                                <option value="나의 보물 제1호는?">나의 보물 제1호는?</option>
                                <option value="기억에 남는 추억의 장소는?">기억에 남는 추억의 장소는?</option>
                                <option value="나의 인생 좌우명은?">나의 인생 좌우명은?</option>
                                <option value="내가 좋아하는 캐릭터는?">내가 좋아하는 캐릭터는?</option>
                                <option value="추억하고 싶은 날짜가 있다면?">추억하고 싶은 날짜가 있다면?</option>
                                <option value="인상 깊게 읽은 책 이름은?">인상 깊게 읽은 책 이름은?</option>
                                <option value="내가 가장 존경하는 인물은?">내가 가장 존경하는 인물은?</option>
                                <option value="가장 기억에 남는 선생님 성함은?">가장 기억에 남는 선생님 성함은?</option>
                                <option value="내가 받았던 선물 중 기억에 남는 선물은?">내가 받았던 선물 중 기억에 남는 선물은?</option>
                                <option value="INPUT">직접입력</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th class="row">비밀번호 분실 시 확인 <br>답변<i>*</i></th>
                        <td><input name="pwbs_ok" id="pwbsOk" type="text" placeholder="조회 답변은 띄어쓰기 포함 10자 이내"></td>
                    </tr>
                    <tr>
                        <th class="row">전화번호<i>*</i></th>
                        <td><input name="user_hp" id="userHp" type="text" placeholder="“-(하이픈)” 없이 입력 (예 : 01012345678)"></td>
                    </tr>
                    <tr>
                        <th class="row">이메일<i>*</i></th>
                        <td>
                            <div class="form_email">
                                <span>
                                    <input class="input_email" name="input_email" id="inputEmail" type="text">
                                </span>
                                <em> @ </em>
                                <span>
                                    <input class="input_email" name="input_email" id="inputEmail" type="text">
                                </span>
                                <span>
                                    <select name="email_domain_select" id="emailDomainSelect">
                                        <option value selected="selected">직접입력</option>
                                        <option value="naver.com">네이버</option>
                                        <option value="nate.com">네이트</option>
                                        <option value="daum.net">다음(한메일)</option>
                                        <option value="yahoo.co.kr">야후</option>
                                        <option value="hotmail.com">핫메일(MSN)</option>
                                        <option value="gmail.com">Gmail</option>
                                    </select>
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="row">소식지 수신여부<i>*</i></th>
                        <td>
                            <span>
                                <input name="sosic_ok" id="sosicOk" value="Y" checked="checked" type="radio"><label for="infoYn1">받음</label>
                                <input name="sosic_no" id="sosicNo" value="N" checked="checked" type="radio"><label for="infoYn2">안받음 (공단의 다양한 소식을 무료로 만나보세요)</label>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">확인</button>
            <button type="submit">취소</button>
        </form>
    </div>
</body>
</html>