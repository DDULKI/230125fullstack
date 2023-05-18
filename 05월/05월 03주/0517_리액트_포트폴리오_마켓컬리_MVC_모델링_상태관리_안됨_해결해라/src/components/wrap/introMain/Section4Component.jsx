import React from 'react';
import $ from 'jquery';
import '../introMain/scss/section4.scss'
import Section4SlideComponent from './Section4SlideComponent'
import axios from 'axios';

export default function Section4Component (){

    const [state, setState] = React.useState({
        일일특가:[]
        
    });

    const [timer, setTimer] = React.useState({
        houres:0,
        minutes:0,
        secondes:0
    });

    React.useEffect(()=>{
        axios({
            url:'./data/section4.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    일일특가:res.data.일일특가,
                    n: res.data.일일특가.length
                })
            }
        })
        .then(()=>{})
    },[])
    

    // 정가, 판매가 금액에 콤머 형식 정규표현식 구현하기
    const commaPrice=(price)=>{
        let value = price.toString();
        //     300  
        // 383,000  
        const regExp = /(^\d+)(\d{3})/g;  // (그룹1)(그룹2)
        // console.log('정가 가져오기 = ' , price );
        // console.log('정가.toString  = ' , value );
        // 가져온 데이터값은 숫자이다 그래서 파란색으로 콘솔로그에 표시
        // 정규표현식 반드시 문자열만 처리가능하다.
        // 문자열형식으로 변환 시키기

        // 반복문 처리 모두처리
        // 리턴문으로 결과값 돌려준다.
        while( regExp.test(value) ){
            return  value.replace(regExp, '$1,$2');
        }        
    }



        // 섹션4 
        // 24시간 일일특가 
        React.useEffect(()=>{
            
            let setId =0;
            // const $slideWrap        = $('#section4 .right');
            // $slideWrap.css({width:`${25 * state.n}%`})

            function saleTimer(){
                // 1. 타임세일 시작 시점
                let start = new Date('2023-05-17 09:00:00');
                // 2. 현재시간 now
                let now = new Date();
                // 3. 시간+24 일일특가 시간 셋팅 setter함수 
                start.setHours(start.getHours()+24);
                // start.setHours(start.getHours()+6); 6시간 특가 
                // 4. 남은시간(세일종료시간) = 타임시작 시간(+24)-현재시간
                let end = start - now;
                // 5. 카운트 박스 시 분 초 표기 1초간격으로 
                // 6. 남은시간===0 타임종료  현재시간>=셋팅시간 종료 
                // 모두 초기화 일 : 시 : 분: 초 

                // console.log(`setId : ${setId}`);
                // console.log('세일종료 카운트 남은시간');
                // console.log(Math.floor((end/(60*60*24*1000))%24)); // 1일 시간 24시간, 천분의 일초 계산..  
                let eD = Math.floor(end/(60*60*24*1000)); // 날짜 일  
                let eH = Math.floor(end/(60*60*1000)%24); // 날짜 시간
                let eM = Math.floor(end/(60*1000)%60); // 날짜 분
                let eS = Math.floor(end/1000%60); // 날짜 초

                // 현재시간>=타임세일시간
                
                if(now >= start){
                    clearInterval(setId);
                    eD=0;
                    eH=0;
                    eM=0;
                    eS=0;
                    // $('.houres').text( eH <10?`0${eH}`:eH);
                    // $('.minutes').text( eM <10?`0${eM}`:eM);
                    // $('.secondes').text( eS <10?`0${eS}`:eS);
                    setTimer({
                        ...timer,
                        houres: eH <10?`0${eH}`:eH, 
                        minutes: eM <10?`0${eM}`:eM, 
                        secondes:eS <10?`0${eS}`:eS 
                    })
                }
                else{

                    // $('.houres').text( eH <10?`0${eH}`:eH);
                    // $('.minutes').text( eM <10?`0${eM}`:eM);
                    // $('.secondes').text( eS <10?`0${eS}`:eS);
                    setTimer({
                        ...timer,
                        houres: eH <10?`0${eH}`:eH, 
                        minutes: eM <10?`0${eM}`:eM, 
                        secondes:eS <10?`0${eS}`:eS 
                    })
                }
            }
            
            setId = setInterval(saleTimer, 1000);

        },[state.n]);
    return (
            <section id="section4">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="left">
                                <ul>
                                    <li>
                                        <h2>일일특가</h2>
                                    </li>
                                    <li>
                                        <h3>24시간 한정 특가</h3>
                                    </li>
                                    <li>
                                        <span><img src="./images/intro/icon_timer.svg" alt="" /></span>
                                        <span className='houres'>{timer.houres}</span>
                                        <span>:</span>
                                        <span className='minutes'>{timer.minutes}</span>
                                        <span>:</span>
                                        <span className='secondes'>{timer.secondes}</span>
                                    </li>
                                    <li>
                                        <p>망설이면 늦어요!</p>
                                    </li>
                                </ul>
                            </div>
                         

                            <Section4Component 일일특가={state.일일특가}/>
                        </div>
                    </div>
                </div>
            </section>
 
    );
};
