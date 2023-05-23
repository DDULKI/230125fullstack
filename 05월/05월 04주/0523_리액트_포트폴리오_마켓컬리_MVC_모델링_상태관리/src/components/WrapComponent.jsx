import React from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';

import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent   from './wrap/HeaderComponent';
import IntroMainComponent from './wrap/IntroMainComponent'; // 인트로 메인페이지
import Sub1Component from './wrap/Sub1Component';
import Sub2Component from './wrap/Sub2Component';
import Sub3Component from './wrap/Sub3Component';
import Sub4Component from './wrap/Sub4Component';
import SignUpComponent from './wrap/SignUpComponent';
import ConfirmModal from './wrap/ConfirmModal';
import GoTopComponent from './wrap/GoTopComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';
// 로그인
// 아이디찾기 페이지 - 이름,휴대폰 탭 / 이름,이메일 탭
// 찾은페이지결과 페이지
// 비밀번호찾기 페이지 - 이름,휴대폰 탭 / 이름,이메일 탭
// 비밀번호새로설정페이지
// BBS
// 공지사항
// 1:1문의
import FooterComponent from './wrap/FooterComponent';


export default function WrapComponent() {


    const [product, setProduct] = React.useState({
        key: 'MJ_KURLY_VIEW_PRODUCT',
        viewProduct : []
    });

    // 비구조화 === 구조분할할당
    const {viewProduct, key} = product;
    

    const setViewProduct=(value)=>{
        setProduct({
            ...product,
            viewProduct: [...viewProduct,value]
        });
       
    }
    
    React.useEffect(()=>{
        if(viewProduct.length>0){
            let arr = [];
            if(localStorage.getItem(key)!==null) {
                arr = JSON.parse(localStorage.getItem(key));
                arr = [...arr, viewProduct];
                localStorage.setItem(key, JSON.stringify(arr));
            } 
            else{
                arr = [...arr, viewProduct];
                localStorage.setItem(key, JSON.stringify(arr));
            }
        }
    },[viewProduct]);



    const [state, setState] = React.useState({
        minutes: 2,
        seconds: 59,
        setId: 0,
        msg:'',
        isEnd: false,
        // 헤더 프롭스로 전달하기
        mapText: '',
        isMap: true
    });

    const timerCounterfn=()=>{       

        let setId = 0;
        let minutes = 2;
        let seconds = 59;
        let msg = '';
        let isEnd = false;

        setId = setInterval(function(){

            seconds--;
            if(seconds<0){
                seconds=59;
                minutes--;
                if(minutes<0){
                    clearInterval(setId);
                    seconds=0;
                    minutes=0;
                    msg = '유효시간이 경과 되었습니다.'; // 모달창 메시지
                    isEnd=true;  //모달창 true
                }
            }

            setState({
               ...state,
               seconds: seconds,
               minutes: minutes,
               msg: msg,
               setId: setId,   // 환경변수 메모리의 실행중인 타이머의 할당 메모리 사용번호 인덱스를 clearInterval(2)
               isEnd: isEnd
            })

        }, 1000);
    }

    const mapAddressFn=(a,b)=>{
        setState({
            ...state,
            mapText: a,
            isMap: b
        })
    }

    //////////////////////////////////////////////////////////////
    // 모달 상태관리
    //////////////////////////////////////////////////////////////
    const [modal, setModal] = React.useState({
        confirmMsg: '모달창에 자식창에서 보내온 타이틀 메세지 내용입니다.',
        isConfirmModal: false // true 모달열기  false 모달닫기
    });

    // 1. 모달창 닫기 이벤트 => 모달창에 있는 버튼 클릭 이벤트 
    const comfirmModalClose=()=>{
        setModal({
            ...modal,
            isConfirmModal: false 
        });
    }

    // 2. 모달창 열기 이벤트 => 모든 자식컴포넌트에서 모달 열기와 메시지 전달하기 
    const comfirmModalOpen=(msg)=>{
        setModal({
            ...modal,
            confirmMsg: msg,
            isConfirmModal: true 
        });
    }

    //////////////////////////////////////////////////////////////
    // 1. 탑 모달 상태관리
    //////////////////////////////////////////////////////////////
    const [topModal, setTopModal] = React.useState({
        key: 'MJ_KURLY_TOPMODAL',
        isTopModal: true
    })

    // 2. 탑 모달 닫기 함수 => 쿠키설정 
    const topModalClose=(value, expires)=>{
        setTopModal({
            ...topModal,
            isTopModal: false
        });
        setCookieMethod(value, expires);
    }


    // 3. 쿠키 설정(저장)하기 : 탑모달을 닫기 클릭하면 쿠키 설정 저장  
    const setCookieMethod=(value, expires)=>{
        let toDay = new Date(); // 3일간 열리지 않음 
        toDay.setDate(toDay.getDate() + expires);
        document.cookie= `${topModal.key}=${value}; path=/; expires=${toDay.toUTCString()};`;

        document.cookie= `'ohyeah'='hihi3'; path=/; expies='toDay.toUTCString()';`;
    }

    // 4. (언제)쿠키 가져오기 : 설정된 쿠키가 없으면 탑모달은 열린다. 아니면 닫는다.
    const getCookieMethod=()=>{
        // console.log( document.cookie); 디버깅 
        if(document.cookie==='') return; // 예외처리
        try{
            const result = document.cookie.split(';'); // 세미콜론 단위로 쿠키를 자르세요. 
            console.log(result);
            let cookie = [];
            result.map((item, idx)=>{
                cookie[idx] = {
                    key: item.split('=')[0].trim(), // 
                    value : item.split('=')[1].trim()
                }
            });
            // console.log(cookie);
    
    
            // 찾기  key: 'MJ_KURLY_TOPMODAL'  선생님 
            // 모달닫기 했던 쿠키가 존재하면 
            // 모달닫기를 수행 : 새로고침하면 또 설정 ... 설정  
            cookie.map((item)=>{
                let isTopModal = null;
                if(item.key.includes(topModal.key)===true && item.value.includes('yes')){
                // if(item.key===topModal.key && item.value==='yes'){
                    setTopModal({
                        ...topModal,
                        isTopModal:false
                    })
                    return;
                }
            })

        // // // chat gpt 
        // const isTopModal = cookie.some(item => item.key === topModal.key);
        // console.log(item => item.key === topModal.key);

        // setTopModal({
        //     ...topModal,
        //     isTopModal: !isTopModal
        // });

    
        }
        catch(e){
            console.log('쿠키없음 ', e);
        }
    }   
    
    // 5. 
    React.useEffect(()=>{
        getCookieMethod();
    },[topModal.isTopModal]);


    return (
        <div id='wrap'>
                { 
                     topModal.isTopModal && <TopModalComponent topModalClose={topModalClose}/>
                }
                
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HeaderComponent mapText={state.mapText} isMap={state.isMap} />}>                            
                            <Route index element={<IntroMainComponent setViewProduct={setViewProduct}/>} />
                            <Route path='/메인' element={<IntroMainComponent setViewProduct={setViewProduct}/>} />
                            <Route path='/신상품' element={<Sub1Component />} />
                            <Route path='/베스트' element={<Sub2Component />} />
                            <Route path='/알뜰상품' element={<Sub3Component />} />
                            <Route path='/특가혜택' element={<Sub4Component />} />
                            <Route path='/회원가입' element={<SignUpComponent mapAddressFn={mapAddressFn} timer={state} timerCounterfn={timerCounterfn} comfirmModalOpen={comfirmModalOpen}/>} />                                                        
                        </Route>
                    </Routes>
                </BrowserRouter>    

                <FooterComponent/>  

            {
               modal.isConfirmModal && <ConfirmModal confirmMsg={modal.confirmMsg} comfirmModalClose={comfirmModalClose}/> // 모달의 메세지를 전달해준다.  
            }

                <GoTopComponent/>
                <QuickMenuComponent/>
                          
        </div>
    );
};