import React from 'react';


export default function SigninComponent() {
    return (
        <div id='signIn'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                       <a href="!#">로그인/회원가입</a>
                    </div>
                    <div className="content">
                        <div className="left">
                            <ul>
                                <li><h3 className='login-title'>처음이신가요?</h3></li>
                                <li><p className='desc-txt'>비비안웨스트우드 회원으로 가입하시면, 빠르고 편리하게 이용하실 수 있습니다.</p></li>
                            </ul>
                            <button type='submit'>회원가입</button>
                        </div>
                        <div className="right">
                            <form id="login-form" className='vivienne-login-form' action="">
                                <h3 className='login-title'>로그인</h3>
                                <ul>
                                    <li><p className='desc-txt'>로그인을 위해 이메일주소와 비밀번호를 입력해 주십시오.</p></li>
                                    <li>
                                        <div className='login-box'>
                                            <input type="text" id='userEmail' name='user_email' placeholder='Email*'/>
                                            <input type="text" id='userPw1' name='user_pw1' placeholder='Password*'/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='login-txt'>
                                            <input type="checkbox" id='remMe' name='rem_me'/>로그인 상태 유지
                                            <p>비밀번호 찾기</p>
                                        </div>
                                        <button className='login-btn'>로그인</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
