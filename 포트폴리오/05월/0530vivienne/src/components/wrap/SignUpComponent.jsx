import React from 'react';

export default function SignUpComponent () {
    return (
        <div id='SignUp'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>회원가입</h2>
                    </div>
                    <div className="content">
                        <form name='sign_up' id='signUp' method='post' action="">
                            <div className="join">
                                <label className='label_name' htmlFor="">이메일<i>*</i></label>
                                <input type="text" className='email_input' id='emailInput' placeholder='이메일 주소를 입력하세요.'/>
                            </div>
                            <div className="join">
                                <label className='label_name' htmlFor="">이름<i>*</i></label>
                                <input type="text" className='name_input' id='nameInput' placeholder='이름을 입력하세요.'/>
                            </div>
                            <div className="join">
                                <label className='label_name' htmlFor="">비밀번호<i>*</i></label>
                                <input type="text" className='pw_input1' id='pwInput1' placeholder='비밀번호를 입력하세요.'/>
                            </div>
                            <div className="join">
                                <label className='label_name' htmlFor="">비밀번호 확인<i>*</i></label>
                                <input type="text" className='pw_input1' id='pwInput1' placeholder='비밀번호를 재입력하세요.'/>
                            </div>
                            <div className="join">
                                <label className='label_name' htmlFor="">성별<i>*</i></label>
                                <select type="text" name="gender" id="Gender">
                                    <option value="선택안함">선택안함</option>
                                    <option value="남">남</option>
                                    <option value="여">여</option>
                                </select>
                            </div>
                            <div className="join">
                                <label className='label_name' htmlFor="">휴대폰번호<i>*</i></label>
                                <input type="text" className='hp' id='Hp' placeholder='번호를 입력하세요.'/>
                            </div>
                            <button>인증번호발송</button>
                            <div className="join">
                                <label className='label_name' htmlFor="">인증번호<i>*</i></label>
                                <input type="text" className='hp_ok' id='hpOk' placeholder='인증번호를 입력하세요.'/>
                            </div>
                            <button>확인</button>
                            <div className="join">
                                <label className='label_name' htmlFor="">인증번호<i>*</i></label>
                                <input type="text" className='hp_ok' id='hpOk' placeholder='인증번호를 입력하세요.'/>
                            </div>
                            <div className="join">
                                <label className='label_name' htmlFor="">정보수신<i>*</i></label>
                                <input type="checkbox" className='check' id='Check'/> sms수신
                                <input type="checkbox" className='check' id='Check'/> 뉴스레터구독
                            </div>
                            <div className="join">
                                <label className='label_name' htmlFor="">생년월일<i>*</i></label>
                                <input type="text" className='hp_ok' id='hpOk'/>
                            </div>
                            <div className="service">
                                <ul>
                                    <li><input type="checkbox" /></li>
                                    <li><h3>이용약관에 동의합니다.</h3></li>
                                </ul>
                                <ul>
                                    <li><input type="checkbox" /></li>
                                    <li><h3>개인 정보 보호 정책에 동의합니다.</h3></li>
                                </ul>
                               

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

