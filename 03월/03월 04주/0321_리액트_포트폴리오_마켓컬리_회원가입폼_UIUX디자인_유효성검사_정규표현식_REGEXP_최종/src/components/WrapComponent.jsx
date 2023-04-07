import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent() {

    const [state, setState] = React.useState({
        minutes: 2,
        seconds: 59,
        setId: 0,
        msg:'',
        isEnd: false
    });

    React.useEffect(()=>{
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
                    msg= '유효 시간이 만료되었습니다. 다시 시도해 주세요.'; // 임시변수 
                    isEnd=true;
                }
            }  

            setState({
                ...state,
                seconds: seconds,
                minutes: minutes,
                msg: msg,
                setId: setId, // 환경변수 메모리의 실행중인 타이머의 할당 메모리 사용번호 인덱스를 clearInterbal(2)
                isEnd: isEnd
            })
            
        },300);
    },[]);

    return (
        <div id='wrap'>
                <TopModalComponent/>
                <HeaderComponent/>
                <SignUpComponent timer={state} />
                <FooterComponent/>                
        </div>
    );
};