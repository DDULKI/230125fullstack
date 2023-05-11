<%@
    page
    language ="java"
    contentType ="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>LOGIN</title>
</head>
<body>
    <div id="wrap">
        <main id="signUp">
            <section id="section1">
                <div class="container">
                    <div class="gap">
                        <div class="title">
                            <h2>로그인</h2>
                            <p><span><i></i>필수입력사항</span></p>
                        </div>
                        <div class="content">
                            <form name="signup_form" id="signUpFrom" method="post" action="./signin_action.jsp">
                                <ul>
                                    <li>
                                        <div>
                                            <label htmlFor="userId">아이디<i>*</i></label>
                                            <div class="center-box">
                                                <input type="text" maxlength={16} name="user_id" id="userId" placeholder="아이디를 입력해주세요">
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
                                                />
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <button type='submit'>로그인</button>
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