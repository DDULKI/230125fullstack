<%@
    page
    language ="java"
    contentType ="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>


<%@ page import = "kurly.UserDAO" %>
<%@ page import = "kurly.UserDTO" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>회원정보 수정</title>
</head>
<body>
    <div id="wrap">
        <%
            String loginId = null;
            if(session.getAttribute("user_id")!=null){
                loginId = (String)session.getAttribute("user_id");
            }
        %>

        <%
            UserDAO userDAO = new UserDAO();
            UserDTO userDTO = userDAO.getJoin(loginId);
        %>

        <main id="signUp">
            <section id="section1">
                <div class="container">
                    <div class="gap">
                        <div class="title">
                            <h2>회원정보 수정</h2>
                            <p><span><i></i>필수입력사항</span></p>
                        </div>
                        <div class="content">
                            <form autocapitalize="off" name="signup_form" id="signUpFrom" method="post" action="./update_action.jsp">
                                <ul>
                                    <li>
                                        <div>
                                            <label htmlFor="userId">아이디<i>*</i></label>
                                            <div class="center-box">
                                                <%=userDTO.getUser_id()%>
                                                <input class="hide" 
                                                    type="text" 
                                                    maxlength={16} 
                                                    name="user_id" 
                                                    id="userId" 
                                                    placeholder="아이디를 입력해주세요" 
                                                    value="<%=userDTO.getUser_id()%>"
                                                />
                                            </div>
                                            <button type="button">중복확인</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userPw">비밀번호<i>*</i></label>
                                            <div class="center-box">
                                                <input 
                                                    type='password'  
                                                    maxLength={16} 
                                                    name='user_pw' 
                                                    id='userPw' 
                                                    placeholder='비밀번호를 입력해주세요' 
                                                    value="<%=userDTO.getUser_pw()%>"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userName">이름<i>*</i></label>
                                            <div class="center-box">
                                                <input 
                                                    type='text' 
                                                    name='user_name' 
                                                    id='userName' 
                                                    placeholder='이름을 입력해주세요'
                                                    value="<%=userDTO.getUser_name()%>" 
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userEmail">이메일<i>*</i></label>
                                            <div class="center-box">
                                                <input 
                                                    type='email' 
                                                    name='user_email' 
                                                    id='userEmail' 
                                                    placeholder='이메일을 입력해주세요' 
                                                    value="<%=userDTO.getUser_email()%>"
                                                />
                                            </div>
                                            <button  
                                                type='button'
                                                onClick={onClickUserEmailOk}
                                            >중복확인</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userHp">휴대폰<i>*</i></label>
                                            <div class="center-box">
                                                <input 
                                                    type='text'  
                                                    maxLength={11} 
                                                    name='user_hp' 
                                                    id='userHp' 
                                                    placeholder='숫자만 입력해주세요' 
                                                    value="<%=userDTO.getUser_hp()%>"
                                                />
                                            </div>
                                            <button class="hp-num-btn" type='button'>인증번호 받기</button>
                                            <button class="hp-num-btn" type='button'>다른번호 인증</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userAddress1">주소<i>*</i></label>
                                            <div class="center-box">
                                                <input 
                                                    type='text' 
                                                    name='user_addr' 
                                                    id='userAddr' 
                                                    placeholder='주소 검색' 
                                                    value="<%userDTO.getUser_addr()%>"
                                                    />
                                                <h5>샛별배송</h5>
                                                
                                                <h6>배송지에 따라 상품 정보가 달라질 수 있습니다.</h6>
                                            </div>
                                        
                                            <button 
                                                class="addr-research-btn"
                                                type='button'
                                            >재검색</button>
                                        </div>
                                    </li>                                 
                                    <li>
                                        <div>
                                            <label>성별</label>
                                            <div class="center-box gender">
                                                <label><input type='radio' name='user_gender' id='userMale'   <% if(userDTO.getUser_gender().equals("남자")){%> checked="ckecked"<%}%> value='남자'/>남자</label>
                                                <label><input type='radio' name='user_gender' id='userFemale' <% if(userDTO.getUser_gender().equals("여자")){%> checked="ckecked"<%}%> value='여자'/>여자</label>
                                                <label><input type='radio' name='user_gender' id='userNone'   <% if(userDTO.getUser_gender().equals("선택안함")){%> checked="ckecked"<%}%> value='선택안함'/>선택안함</label>
                                            </div>                                            
                                        </div>
                                    </li>
                                    <li>
                                    <div>
                                            <label>생년월일</label>
                                            <div class="center-box birth">
                                                <div class="birth-box">
                                                    <ul>
                                                        <li>
                                                            <input 
                                                                type="text" 
                                                                maxLength={10} 
                                                                name='user_birth' 
                                                                id='userBirthYear' 
                                                                placeholder='생년월일'
                                                                value="<%=userDTO.getUser_birth()%>"
                                                            /></li>
                                
                                                       
                                                    </ul>
                                                </div>
                                            </div>                                       
                                    </div>
                                    </li>   
                                    <li>
                                        <label for="">추가 입력사항<br>
                                            <input class="radio" type="radio" name="user_add" id="add" <% if(userDTO.getUser_add().equals("친구초대 추천인 아이디")){%> checked="ckecked"<%}%> value="친구초대 추천인 아이디">친구초대 추천인 아이디
                                            <input class="radio" type="radio" name="user_add" id="add" <% if(userDTO.getUser_add().equals("참여 이벤트명")){%> checked="ckecked"<%}%> value="참여 이벤트명">참여 이벤트명<br>
                                        </label>
                                    </li> 
                                    <li>
                                        <label for="">이용약관동의<br>
                                            <input class="chk1" type="checkbox" name="user_chk1" id="chk1" <%if(userDTO.getUser_chk1().equals("이용약관동의")){%> checked="ckecked"<%}%> value="이용약관동의">이용약관동의
                                            <input class="chk1" type="checkbox" name="user_chk2" id="chk2" <%if(userDTO.getUser_chk2().equals("개인정보 수집∙이용 동의")){%> checked="ckecked"<%}%> value="개인정보 수집∙이용 동의">개인정보 수집∙이용 동의<br>
                                            <input class="chk1" type="checkbox" name="user_chk3" id="chk3" <%if(userDTO.getUser_chk3().equals("무료배송, 할인쿠폰 등 혜택/정보 수신 동의")){%> checked="ckecked"<%}%> value="무료배송, 할인쿠폰 등 혜택/정보 수신 동의">무료배송, 할인쿠폰 등 혜택/정보 수신 동의<br>
                                            <input class="chk1" type="checkbox" name="user_chk4" id="chk4" <%if(userDTO.getUser_chk4().equals("본인은 만 14세 이상입니다.")){%> checked="ckecked"<%}%> value="본인은 만 14세 이상입니다.">본인은 만 14세 이상입니다.<br>
                                        </label>
                                    </li>
                                    <li>
                                        <button type='submit'>가입하기</button>
                                    </li>

                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>