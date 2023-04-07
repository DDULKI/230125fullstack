import React, {useEffect, useState} from 'react';
import SignUpComponent from './wrap/SignUpComponent';

export default function WrapComponent(){

    const [state, setState] = useState({
        seconds: 59,
        minutes: 2,
        setId: 0,
        timerMsg: '',
        isTimer: false
    });

    const timerCounter=()=> {
        let seconds= 59;
        let minutes= 2;
        let setId= 0;
        let timerMsg= '';
   

        clearInterval(state.setId);
        clearInterval(setId);

        setId = setInterval(()=>{
            seconds--;
            if(seconds<0){
                seconds=59;
                minutes--;
                if(minutes<0){
                    clearInterval(setId);
                    seconds=0;
                    minutes=0;
                    timerMsg='유효시간이 만료되었습니다. 다시 시도해 주세요';
                }
            }

            setState({
                ...state,
                setId: setId,
                seconds: seconds,
                minutes: minutes,
                timerMsg: timerMsg
            })
        }, 1000);
    }    

    return (
        <div id='wrap'>
            <SignUpComponent/>
        </div>
    );
};

 