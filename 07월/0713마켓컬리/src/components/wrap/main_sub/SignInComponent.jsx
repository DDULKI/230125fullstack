import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/signin.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ConfirmContext } from '../../../context/ConfirmContext';
import { GlobalContext } from '../../../context/GlobalContext';

export default function SignInComponent () {

    const navigate = useNavigate();
    const {login, setLogin, signin, setSignin} = React.useContext(GlobalContext);
    const {confirmModalOpen, isConfirmModal} = React.useContext(ConfirmContext);

    const [userId, setUserId] = React.useState('');
    const [userPw, setUserPw] = React.useState('');

    const onChangeUserId=(e)=>{
        console.log(e.target.value);
        setUserId(e.target.value);
    }

    const onChangeUserPw=(e)=>{
        console.log(e.target.value);
        setUserPw(e.target.value);
    }

    
    // 로그인 구현 
    // user_signin_action.jsp
    const onClickLogin =(e)=>{
        e.preventDefault();

        if(userId===''){
            confirmModalOpen('아이디를 확인하고 입력하세요!');
        }
        else if(userPw===''){
            confirmModalOpen('비밀번호를 확인하고 입력하세요!');
        }
        else {
            axios({
                // 이름, 휴대폰번호를 전송한다.
                url:'/kurly/user_signin_action.jsp',
                method: 'POST',
                data:{},
                params: {
                    "user_id": userId,
                    "user_pw": userPw
                }
            })
            .then((res)=>{
                if(res.status===200){
                    const result = res.data;

                    try {                    
                        if( result === -1 ){ 
                            confirmModalOpen('가입회원이 아닙니다. 회원가입하세요 ');
                            setTimeout(function(){
                                window.location.pathname = `/signup`;
                            },1000);
                        }
                        else if( result === 0 ){ 
                            confirmModalOpen('비밀번호를 확인하고 다시 시도해 주세요.');
                           
                        } 
                        else{
                            let toDay = new Date();
                            toDay.setDate(toDay.getDate()+3); // 로그인이 3일 만료일 
                            // 라우터 네비게이트 사용 구현 파미터전송   
                            const obj = {
                                userId: userId,
                                expires: toDay.getTime()
                            }               
                            localStorage.setItem('KURLYUSERLOGIN', JSON.stringify(obj))     
                            
                            setSignin({
                                userId: userId,
                                expires:toDay.getTime()
                            })

                            confirmModalOpen('로그인되었습니다:)');  
                            setTimeout(function(){
                                window.location.pathname = `/main`;
                            },1000);  
                        }
                    } catch (error) {
                        console.log( error );
                    }
                }
    
            })
            .catch((err)=>{
                console.log(`AXIOS 실패! ${err} `)
            });    
    
        }
    }




    return (
        <main id='signIn'>
            <section id="secino1">
                <div className="container">
                    <div className="title">
                        <h2>로그인</h2>
                    </div>
                    <div className="content">
                        <form autoComplete='off'>
                            <ul>
                                <li>
                                    <input 
                                    onChange={onChangeUserId}
                                    type="text" 
                                    name='user_id' 
                                    id='userId' 
                                    value={userId} 
                                    placeholder='아이디를 입력해주세요' 
                                    />
                                </li>
                                <li>
                                    <input 
                                    onChange={onChangeUserPw}
                                    type="password" 
                                    name='user_pw' 
                                    id='userPw' 
                                    value={userPw} 
                                    placeholder='비밀번호를 입력해주세요' 
                                    />
                                </li>
                                <li>
                                    <span>
                                        <Link to="/idSearch">아이디 찾기</Link>
                                        <i>|</i>
                                        <Link to="/pwSearch">비밀번호 찾기</Link>
                                    </span></li>
                                <li><button onClick={onClickLogin}>로그인</button></li>
                                <li><Link to="/signup">회원가입</Link></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};