import React, {useEffect, useState} from 'react';
import ModalComponent from './sign_up/ModalComponent';
import '../../scss/signup.scss';

export default function SignUpComponent(){

    const [state, setState] = useState ({
        isModal: false // Boolean
        modalMsg: '',
        hpOkNumber: 0,
        아이디: '',
        비밀번호: '',
        이름: '',
        휴대폰번호:'',
        휴대폰인증번호: '',
        isUserHp: true,
        isUserHPOk: true,
        isTimer: false
    });

    // 1. 아이디 입력상자 : 온 체인지 이벤트 
    const onChangeUserId=(e)=>{
        setState({
            ...state,
            아이디: e.target.value
        })
    }

    // 2. 비밀번호 입력상자 
    const onChangeUserPw=(e)=> {
        setState({
            ...state,
            비밀번호: e.target.value
        })
    }

    // 3. 이름 입력상자
    const onChangeUserName=(e)=>{
        setState({
            ...state,
            이름: e.target.value
        })
    }

    // 4. 휴대폰 번호 
    const onChangeUserHp=(e)=>{
        let isUserHp=true;

        if(e.target.value.length > 1){
            isUserHp=false;
        }
        else {
            isUserHp=true;
        }

        setState({
            ...state,
            휴대폰번호: e.target.value,
            isUserHp: isUserHp
        })
    }

    // 5. 휴대폰 인증번호 
    const onChangeUserHpOk=(e)=>{
        let isUserHPOk=true;

        if( e.target.value >= 1){
            isUserHPOk=false;
        }
        else {
            isUserHPOk=true;
        }

        setState({
            ...state,
            휴대폰인증번호: e.target.value,
            isUserHPOk: isUserHPOk
        })
    }

    // 6. 인증번호 받기 버튼 클릭이벤트 

    const onClickHpOkNumber=(e)=>{
        e.prventDefault();
        let hpOkNumber = 0;
    }
    
    return (
        <div id='signUp'>
            <div className="title">
                <h1>회원가입폼</h1>
            </div>
            <div className="content">
                <form name='sign_up' id='signUp' method='post' action='./sign_up.php'>
                    <ul>
                        <li>
                            <div>
                                <input 
                                    onChange={onChangeUserId} 
                                    type="text" 
                                    name='user_id' 
                                    id='userId' 
                                    placeholder='아이디를 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input 
                                    onChange={onChangeUserPw}
                                    type="paddword"
                                    name='user_pw'
                                    id='userPw'
                                    placeholder='비밀번호를 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input 
                                    onChange={onChangeUserName}
                                    type="text"
                                    name='user_name'
                                    id='userName'
                                    placeholder='이름을 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input 
                                    onChange={onChangeUserHp}
                                    type="text"
                                    name='user_hp'
                                    id='userHp'
                                    placeholder='휴대폰 번호 입력하세요' />
                                <button 
                                    onClick={onClickHpOkNumber}
                                    type='button'
                                    disabled={state.inUserHp} // 버튼이 isUserHp 변수값이 false 이면 사용가능
                                    className={state.inUserHp===false?'on':''}
                                    >인증번호 받기</button> 
                            </div>
                        </li>
                        <li>
                            <div>
                                <input 
                                    onChange={onChangeUserHpOk}
                                    type="text"
                                    name='user_hpOk'
                                    id='userHpOk'
                                    placeholder='휴대폰 인증번호 입력하세요' />
                                <button 
                                    onClick={onClickHpOkIf}
                                    type='button'
                                    disabled={state.inUserHpOk}
                                    className={state.inUserHp===false?'on':''}
                                    >인증번호 확인</button> 
                                    <span></span>
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

