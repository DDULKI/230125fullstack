import React from 'react';
import '../scss/sign_in_id_search.scss'

export default function SignInIdSearchComponent() {

    const [isTap, setIsTap] = React.useState(false);
    const [isBtn, setIsBtn] = React.useState(false);
    const {userName, setUserName} = React.useState('');
    const {userHp, setUserHp} = React.useState('');

    const onChangName = (e) => {
        setUserName(e.target.value);
    }
    const onChangHp = (e) => {
        setUserHp(e.target.value);
    }

    return (
        <main id='signInIdSearch'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>아이디 찾기</h2>
                    </div>
                    <div className="content">
                        <form>
                            <ul>
                                <li>
                                    <button className={isTap?'on':''}>휴대폰 인증</button>
                                    <button className={isTap?'on':''}>이메일 인증</button>
                                </li>
                                <li><label htmlFor="userName">이름</label></li>
                                <li>
                                    <input 
                                        onChange={onChangName}
                                        type="text" 
                                        name='user_name' 
                                        id='userName' 
                                        placeholder='이름을 입력해주세요' 
                                        value={userName}
                                    />
                                </li>
                                <li><label htmlFor="userHp">휴대폰 번호</label></li>
                                <li>
                                    <input 
                                        onChange={onChangHp}
                                        type="text" 
                                        name='user_hp' 
                                        id='userHp' 
                                        placeholder='휴대폰 번호를 입력해 주세요' 
                                        value={userHp}
                                    />
                                </li>
                                <li></li>
                                <li><button className={isBtn?'on':''} type='submit'>인증번호 받기</button></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

