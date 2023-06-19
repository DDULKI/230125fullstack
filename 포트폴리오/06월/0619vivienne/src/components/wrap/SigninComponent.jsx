import React from 'react';
import './scss/signin.scss'

export default function SigninComponent(){
    return (
        <div id='signin'>
            <div className="container">
                <div className="content">
                    <div className="left">
                    <ul>
                        <li><h3 className='title1'>처음신가요?</h3></li>
                        <li><p className='title2'>비비안웨스트우드 회원으로 가입하시면, 빠르고 편리하게 이용하실 수 있습니다.</p></li>
                    </ul>
                    <button>회원가입</button>
                    </div>
                    <div className="right">
                        <ul>
                            <li><h3 className='title1'>로그인</h3></li>
                            <li><p className='title2'>로그인을 위해 이메일주소와 비밀번호를 입력해 주십시오.</p></li>
                        </ul>
                        <div className="login-box">
                            <ul>
                                <li><input className='email' type="email" name='user_email' id='userEmail' placeholder='Email*' /></li>
                                <li><input className='email' type="password" name='user_pw' id='userPw' placeholder='Password*' /></li>
                            </ul>

                        </div>
                        <div className="right-bottom">
                            <label htmlFor="">
                                <input type="checkbox" name='stay_logged_in'id='stayLoggedIn'/>로그인 상태 유지
                            </label>
                        </div>
                        <div className="btn-box">
                            <button>로그인</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

