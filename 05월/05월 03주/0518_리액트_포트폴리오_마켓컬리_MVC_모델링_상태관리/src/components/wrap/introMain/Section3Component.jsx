import React from 'react';
import $ from 'jquery';
import './scss/section3.scss';
import Section3SlideComponent from './Section3SlideComponent';
import axios from 'axios';



export default function Section3Component () {

        // 1. state 상태관리 변수 지정
        // 2. AXIOS 외부데이터 상품 가져오기 그리고 상태관리 배열 변수, 상품개수 n 에 데이터 저장하기
        // 3. React.useEffect() 상품개수 등록되면 즉시 슬라이드 전체너비 설정하기
        // 4. 상태변수 데이터를 자식컴포넌트에게 내려준다
        // 5. 자식컴포넌트는 비구조화로 받아서 탬플릿 요소에 반복처리 바인딩한다.

        // 1.
        const [state, setState] = React.useState({
            상품: [],
            n: 0
        });


        // 2. 
        React.useEffect(()=>{

            axios({
                url:'./data/intro_page/section3.json',
                method:'GET'
            })
            .then((res)=>{
                if(res.status===200){
                    setState({
                        ...state,
                        상품: res.data.상품,
                        n:    res.data.상품.length
                    });
                }
            })
            .catch((err)=>{
                console.log( `AXIOS 실패! ${err}` );
            });


        }, []);




        
        // 섹션3 슬라이드
        React.useEffect(()=>{
        
            const $slideContainer = $('#section3 .slide-container');
            const $slideWrap      = $('#section3 .slide-wrap');
            const $slide =          $('#section3 .slide-wrap .slide');        
            const $leftArrorwBtn  = $('#section3 .left-arrorw-btn');
            const $rightArrorwBtn = $('#section3 .right-arrorw-btn');
            let   cnt = 0; // 5개
            let   n = state.n / 4 ;  // 20/4=5
    
       

            $slideWrap.css({width: `${25 * state.n}%` });

            //1. 메인슬라이드함수  
            mainSlide();    
            function mainSlide(){
                $slideWrap.stop().animate({left: `${-100*cnt}%`},300);
                if( cnt>=4 ){
                    $('#section3 .right-arrorw-btn').stop().fadeOut(300);
                }
                else{
                    $('#section3 .right-arrorw-btn').stop().fadeIn(300);
                }
                
                if( cnt<=0 ){
                    $('#section3 .left-arrorw-btn').stop().fadeOut(300);
                }
                else{
                    $('#section3 .left-arrorw-btn').stop().fadeIn(300);
                }
            }  
            //2-1. 다음카운트함수
            function nextCount(){
                cnt++;
                if(cnt>=4){cnt=4}  //20 / 4 = 5(0-4)
                mainSlide();
            }
            //2-2. 이전카운트함수
            function prevCount(){
                cnt--;
                if(cnt<=0){cnt=0}
                mainSlide();
            }
            //3. 다음화살버튼 클릭 이벤트
            $leftArrorwBtn.on({
                click(e){
                    e.preventDefault();
                    prevCount();
                }
            });
            $rightArrorwBtn.on({
                click(e){             
                    e.preventDefault();
                    nextCount();
                }
            });
        
        }, [state.n]);

    return (
        <section id="section3">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>이 상품 어때요?</h2>
                    </div>
                    <div className="content">

                    <Section3SlideComponent 상품={state.상품}/>

                    </div>
                </div>
            </div>
            <a href="!#" className='left-arrorw-btn'><img src="./images/intro/icon_left_arrow_white.svg" alt="" /></a>
            <a href="!#" className='right-arrorw-btn'><img src="./images/intro/icon_left_arrow_white.svg" alt="" /></a>
        </section>
    );
};