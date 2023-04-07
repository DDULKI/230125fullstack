import React, {useEffect, useState} from 'react';
import ModalComponent from './sign_up/ModalComponent';
import '../../scss/signup.scss';

export default function SignUpComponent() {

    const [state, setState] = useState({
        isModal: false
    });


    const onClickHpOkNumber=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isModal: true
        })
    }


    return (
        <div id='signUp'>

            <div className="title">
            <h1>회원가입폼</h1>
            </div>
            
            <div className="content">
                <form   name='sign_up' id='signUp' method='post' action='./sign_up.php'>
                    <ul>
                        <li>
                            <div>
                                <input type="text" name='user_id' id='userId' placeholder='아이디를 입력하세요'/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="password" name='user_pw' id='userPw' placeholder='비밀번호를 입력하세요'/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='user_name' id='userName' placeholder='이름을 입력하세요'/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='user_hp' id='userHp' placeholder='휴대폰 번호 입력하세요'/>
                                <button onClick={onClickHpOkNumber} type='button'>인증번호 받기</button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='user_hpOk' id='userHpOk' placeholder='휴대폰 인증번호 입력하세요'/>
                                <button type='button'>인증번호 확인</button>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>

            {
                state.isModal && <ModalComponent/>
            }

        </div>
    );
};