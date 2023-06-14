import React from 'react';
import {Link} from 'react-router-dom';

export default function SignInPwSearchComponent() {
    return (
        <main id='signInPwSearch'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>비밀번호 찾기</h2>
                    </div>
                    <div className="content">
                        <form>
                            <ul>
                                <li><input type="text" name='user_id' id='userId' placeholder='아이디를 입력해주세요' value={''}/></li>
                                <li><input type="password" name='user_pw' id='userPw' placeholder='아이디를 입력해주세요' value={''}/></li>
                                <li>
                                    <span>
                                        <Link to="/idSearch">아이디 찾기</Link>
                                        <i>|</i>
                                        <Link to="/pwSearch">비밀번호 찾기</Link>
                                    </span>
                                </li>
                                <li><button type='submit'>로그인</button></li>
                                <li><Link to="/signup">회원가입</Link></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

