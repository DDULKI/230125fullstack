import React from 'react';

export default function SignUpComponent () {

    const [state,setState] = React.useState({
        이메일 : '',
        이름 : '',
        비밀번호 : '',
        비밀번호확인: '',
        생년월일:'',
        약관동의: [],
        약관 : [
            "sms수신(선택)",
            "뉴스레터구독(선택)",
            "이용약관에 동의합니다(필수)",
            "개인 정보 보호 정책에 동의합니다(필수)"
        ],
        isEmailError : false,
        isEmailMsg : '',
        isNickError : false,
        isNickMsg: '',
        isPwError : false,
        isPwMsg : '',
        isPw2Error : false, 
        isPw2Msg : '',
        isUserServiceError : false,
        isUserServiceMsg : '' 
    })

    // 이메일 인증 
    const onChangeEmail = (e) => {
        const {value} = e.target;
        let isEmailError = false; 
        let isEmailMsg = '';

        if(value === ''){
            isEmailError = true;
            isEmailMsg = '필수 입력 항목입니다.';
        }
        else if(value !== ''){
            isEmailError = true;
            isEmailMsg = '이메일 형식이 올바르지 않습니다.';
        }
        setState({
            ...state,
            이메일 : value,
            isEmailError : isEmailError,
            isEmailMsg : isEmailMsg
        })
    }

    // 이름 인증 
    const onChangeName = (e) => {
        const {value} = e.target;
        let isNickError = false;
        let isNickMsg = '';

        const regExp1 = /^(.){2,16}$/g;

        if(value === ''){
            isNickError = true;
            isNickMsg = '필수 입력 항목입니다.';
        }
        else if(regExp1.test(value) === false){
            console.log("false");
            isNickError = true;
            isNickMsg = '2자 이상 입력해 주세요.';
        }
        setState({
            ...state,
            이름 : e.target.value,
            isNickError : isNickError,
            isNickMsg : isNickMsg 
        })
    }

    // 비밀번호 

    const onChangePw = (e) => {
        const {value} = e.target;
        let isPwError = false; 
        let isPwMsg = '';
        const regExp1 = /^(.){8,16}$/g;  // 패스워드가 8 ~ 16 사이 
        const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-Z]+)+/g; // 영문+숫자 포함 
        const regExp3 = /\s/g; // 공백 포함? 

        if(value === ''){
            isPwError = true; 
            isPwMsg = '필수 입력 항목입니다.'
        }
        else if(regExp1.test(value) === false || regExp2.test(value) === false){
            isPwError = true; 
            isPwMsg = '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.'
        }
        else if(regExp3.test(value) === true){
            isPwError = true; 
            isPwMsg = '공백은 사용할 수 없습니다.'
        }
        setState({
            ...state,
            비밀번호 : value, 
            isPwError : isPwError,
            isPwMsg : isPwMsg 
        })
    }

    // 비밀번호 확인 
    const onChangePwOk = (e) => {
        const{value} = e.target;
        let isPw2Error = false;
        let isPw2Msg = '';

        if(value !== state.비밀번호){
            isPw2Error = true;
            isPw2Msg = '비밀번호가 일치하지 않습니다.';
        }
        else {
            isPw2Error = false;
            isPw2Msg = '';
        }
        setState({
            ...state,
            비밀번호확인 : e.target.value,
            isPw2Error : isPw2Error,
            isPw2Msg : isPw2Msg
        })
    }


    const  onSubmitSignUp = (e) =>{
        e.preventDefault();

        let 약관동의 = '';
        state.약관동의.map((item, idx) => {
            if(idx===state.약관동의.length-1){
                약관동의 += item
            }
            else {
                약관동의 += item + ', '
            }
        })

    }

    return (
        <div id='SignUp'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>회원가입</h2>
                    </div>
                    <div className="content">
                        <form name='sign_up' id='signUp' method='post' action="" onSubmit={onSubmitSignUp}>
                            <div className="join">
                                <label className={`label_name ${state.isEmailError?'on':''}`} >이메일<i>*</i></label>
                                <input 
                                    type="text" 
                                    className='email_input' 
                                    id='userEmail' 
                                    name='user_email'
                                    placeholder='이메일 주소를 입력하세요.'
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className="join">
                                <label className={`label_name ${state.isNickError?'on':''}`} htmlFor="">이름<i>*</i></label>
                                <p className="sub-msg">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
                                <input 
                                    type="text" 
                                    className='name_input' 
                                    id='userName' 
                                    name='user_name'
                                    placeholder='이름을 입력하세요.'
                                    onChange={onChangeName}
                                />
                                 <p className={`error-msg ${state.isNickError?'on':''}`}>{state.isNickMsg}</p>
                            </div>
                            <div className="join">
                                <label className={`label_name ${state.isPwError?'on':''}`}>비밀번호<i>*</i></label>
                                <p className="sub-msg">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                                <input 
                                    type="text" 
                                    className='pw_input1' 
                                    id='userPw1' 
                                    name='user_pw1'
                                    placeholder='비밀번호를 입력하세요.'
                                    onChange={onChangePw}
                                />
                                <p className={`error-msg ${state.isPwError?'on':''}`}>{state.isPwMsg}</p>
                            </div>
                            <div className="join">
                                <label className={`label_name ${state.isPw2Error?'on':''}`} >비밀번호 확인<i>*</i></label>
                                <input 
                                    type="text" 
                                    className='pw_input1' 
                                    id='userPw2'
                                    name='user_pw2' 
                                    placeholder='비밀번호를 재입력하세요.'
                                    onChange={onChangePwOk}   
                                />
                                <p className={`error-msg ${state.isPw2Error?'on':''}`}>{state.isPw2Msg}</p>
                            </div>
                            <div className="join">
                                <label className='label_name'>성별<i>*</i></label>
                                <select type="text" name="gender" id="Gender">
                                    <option value="선택안함">선택안함</option>
                                    <option value="남">남</option>
                                    <option value="여">여</option>
                                </select>
                            </div>
                            <div className="join">
                                <label className='label_name' htmlFor="">휴대폰번호<i>*</i></label>
                                <input 
                                    type="text" 
                                    className='hp' 
                                    id='userHp' 
                                    name='user_hp'
                                    placeholder='번호를 입력하세요.'/>
                            </div>
                            <button>인증번호발송</button>
                            <div className="join">
                                <label className='label_name' htmlFor="">인증번호<i>*</i></label>
                                <input 
                                    type="text" 
                                    className='hp_ok' 
                                    id='userHpOk'
                                    name='user_hp_ok'
                                    placeholder='인증번호를 입력하세요.'/>
                            </div>
                            <button>확인</button>
                            <div className="join">
                                <label className='label_name' htmlFor="">정보수신<i>*</i>
                                <input 
                                    type="checkbox" 
                                    className='check' 
                                    id='userService'
                                    name='user_service'
                                    /> sms수신
                                <input 
                                    type="checkbox" 
                                    className='check' 
                                    id='userService'
                                    name='user_service'
                                    /> 뉴스레터구독
                                </label>
                            </div>
                            <div className="join">
                                <label className='label_name'>생년월일<i>*</i>
                                <input 
                                    type="text" 
                                    className='hp_ok' 
                                    id='userBirth'
                                    name='user_birth'
                                />
                                </label>
                            </div>
                            <div className="service">
                                <ul>
                                    <li>
                                        <label className='label_name'>
                                            <input 
                                                type="checkbox" 
                                                name='user_service'
                                                id='userService'
                                                />
                                            <h3>이용약관에 동의합니다.</h3>
                                        </label>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <label className='label_name'>
                                            <input 
                                                type="checkbox" 
                                                name='user_service'
                                                id='userService'
                                            />
                                            <h3>개인 정보 보호 정책에 동의합니다.</h3>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <button type='submit'>회원가입</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

