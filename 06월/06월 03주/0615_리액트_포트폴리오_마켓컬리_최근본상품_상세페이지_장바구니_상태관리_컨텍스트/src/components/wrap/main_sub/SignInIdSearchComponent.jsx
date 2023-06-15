import React from 'react';
import '../scss/sign_in_id_search.scss'
import { useRef } from 'react';

export default function SignInIdSearchComponent() {

    const [isTab, setIsTab] = React.useState(true);
    const [isBtn, setIsBtn] = React.useState(false);
    const [isBtn2, setIsBtn2] = React.useState(false);
    
    // 휴대폰 인증 : 이름 휴대폰 입력상자  

    const [userName, setUserName] = React.useState('');
    const [userHp, setUserHp] = React.useState('');

    // 이메일 인증 : 이름 이메일 입력상자 
    const [userName2, setUserName2] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');

    // 인증키
    const [userHpAuth, setUserHpAuth] = React.useState('');
    const [isAuth, setIsAuth] = React.useState(false);
   
    // 휴대폰 인증 useRef 
    const userNameRef = React.useRef();
    const userHpRef = React.useRef();
   

    // 이메일 인증 useRef 
    const userName2Ref = React.useRef();
    const userEmailRef = React.useRef();

    // 이름
    const onChangName = (e) => {
        setUserName(e.target.value);
    }
    // 휴대폰
    const onChangHp = (e) => {
        setUserHp(e.target.value);
    }

    // 이름 2 
    const onChangName2 = (e) => {
        setUserName2(e.target.value);
    }
    // 이메일
    const onChangEmail =(e)=>{
        setUserEmail(e.target.value);
    }
    
    // 휴대폰 인증 입력 상자
    const onChangHpAuth=(e)=>{
        setUserHpAuth(e.target.value);
    }

    // 탭메뉴 버튼 클릭 이벤트 
    const onClickTabBtn = (e, value) =>{
        e.preventDefault();

        if (value==="휴대폰"){
            setIsTab(true)
        }
        else {
            setIsTab(false)
        }
    }

    React.useEffect(()=>{
        (userName!=='' && userHp!=='') ? setIsBtn(true): setIsBtn(false);
        (userName!=='' && userEmail!=='') ? setIsBtn2(true): setIsBtn2(false);

    },[userName,userName2,userHp,userEmail]);

    // 인증번호 받기 버튼 클릭 이벤트 
    const onClickHpAuth =(e)=>{
        e.preventDefault();
        setIsAuth(true);
    }

    // 아이콘 삭제 버튼 클릭 이벤트 (x 이미지 지우면 안에있는 내용도 지워지는 이벤트) 
    const onClickIconDel =(e, value)=>{
        e.preventDefault();
        switch(value){
            case "userName":
                setUserName('');
                userNameRef.current.focus();
                return;

            case "userName2":
                setUserName2('');
                userName2Ref.current.focus();
                return 
            case "userHp":
                setUserHp('');
                userHpRef.current.focus();
                return 
            case "userEmail":
                setUserEmail('');
                userEmailRef.current.focus();
                return  
            default:
                return;
        }
    }

    // 인증키 확인 버튼 클릭 이벤트 
    const onClickHpAuthOk =(e)=>{
        e.preventDefault();
        // 인증 확인됐다고 하고 
        // 비밀번호 재설정 페이지로 이동 
        window.location.pathname = "/pwReset";
    }

    return (
        <main id='signInIdSearch' className='signInSearch'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>아이디 찾기</h2>
                    </div>
                    <div className="content">
                        <form autoComplete='off'>
                            <ul>
                                <li>
                                    <button onClick={(e)=>onClickTabBtn(e,"휴대폰")} className={isTab?'on':''}>휴대폰 인증</button>
                                    <button onClick={(e)=>onClickTabBtn(e,"이메일")} className={!isTab?'on':''}>이메일 인증</button>
                                </li>

                            {

                                isTab ?
                                    (
                                        <>
                                            <li><label htmlFor="userName">이름</label></li>
                                            <li>
                                                <input 
                                                    onChange={onChangName}
                                                    type="text" 
                                                    name='user_name' 
                                                    id='userName' 
                                                    placeholder='이름을 입력해주세요' 
                                                    value={userName}
                                                    ref={userNameRef}
                                                />
                                                {userName!=='' && <a onClick={(e)=>onClickIconDel(e,'userName')} href="!#"><img src="./images/sign_in/icon_x.svg" alt="" /></a>}
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
                                                    ref={userHpRef}
                                                />
                                                {userHp!=='' &&<a onClick={(e)=>onClickIconDel(e,'userHp')} href="!#"><img src="./images/sign_in/icon_x.svg" alt="" /></a>}
                                            </li>
                                            <li>                                                
                                            </li>
                                        {

                                           isAuth && (
                                           <>
                                                    <li><label htmlFor="userHp">인증번호</label></li>
                                                    <li>
                                                        <input 
                                                            onChange={onChangHpAuth}
                                                            type="text" 
                                                            name='user_hp_auth' 
                                                            id='userHpAuth' 
                                                            placeholder='인증번호 7자리' 
                                                            value={userHpAuth}
                                                            ref={userHpAuth}
                                                        />

                                                         <button>재발송</button>
                                                    </li>
                                                   
                                            </>) 
                                        }
                                            <li className='hp-btn'>
                                        
                                                {
                                                !isAuth ? 
                                                    (
                                                        <button onClick={onClickHpAuth} className={isBtn?' on':''}>인증번호 받기</button>
                                                    )
                                                    :
                                                    (

                                                        <button onClick={onClickHpAuthOk} className={isBtn?' on':''}>확인</button>
                                                    )
                                                }
                                            </li>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <li><label htmlFor="userName2">이름</label></li>
                                            <li>
                                                <input 
                                                    onChange={onChangName2}
                                                    type="text" 
                                                    name='user_name2' 
                                                    id='userName2' 
                                                    placeholder='이름을 입력해주세요' 
                                                    value={userName2}
                                                    ref={userName2Ref}
                                                />
                                                {userName2!==''&&<a onClick={(e)=>onClickIconDel(e,'userName2')} href="!#"><img src="./images/sign_in/icon_x.svg" alt="" /></a>}
                                            </li>
                                            <li><label htmlFor="userHp">이메일</label></li>
                                            <li>
                                                <input 
                                                    onChange={onChangEmail}
                                                    type="email" 
                                                    name='user_email' 
                                                    id='userEmail' 
                                                    placeholder='이메일을 입력해 주세요' 
                                                    value={userEmail}
                                                    ref={userEmailRef}
                                                />
                                                {userEmail!==''&&<a onClick={(e)=>onClickIconDel(e,'userEmail')} href="!#"><img src="./images/sign_in/icon_x.svg" alt="" /></a>}
                                            </li>
                                            <li></li>
                                            <li className='email-btn'><button className={isBtn2?' on':''} type='submit'>확인</button></li>
                                        </>
                                    )
                            }
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

