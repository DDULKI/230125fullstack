import React from 'react';
import $ from 'jquery';
import '../introMain/scss/section1.scss'
import Section1SlideComponent from './Section1SlideComponent';
import axios from 'axios';

export default function Section1Component(){

    const [state, setState] = React.useState({
        슬라이드:[],
        n: 0
    });

    
    React.useEffect(()=>{
        // axios API 
        axios({
            url:'./data/section1.json',
            method:'GET',

        })
        .then((res)=>{
           
            if(res.status===200){
                setState({
                    ...state,
                    슬라이드: res.data.slide,
                    n:res.data.slide.length-2
                })
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err}`);
        });
    },[]); // 빈배열 : 로딩시 화면이 그려지고(마운트) 난 뒤 1회실행 



    // 섹션1 컴포넌트 메인 슬라이드 
    React.useEffect(()=>{

        const $slideContainer  = $('#section1 .slide-container');
        const $slideWrap       = $('#section1 .slide-wrap');
        const $slide           = $('#section1 .slide');
        const $slidea          = $('#section1 .slide a');
        const $leftArrowBtn    = $('#section1 .left-arrow-btn');
        const $rightArrowBtn   = $('#section1 .right-arrow-btn');
        const $currentNumber   = $('#section1 .current-number');
        const $totalNumber     = $('#section1 .total-number');

        let   cnt = 0; 
        let   n   = $slide.length-2; // 슬라이드 25-2 = 23;
        let setId = 0; 
        
        $slideWrap.css({width: `${100*(state.n+2)}%`})

        // 1. 메인슬라이드함수 
        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left:`${-100*cnt}%`}, 500, function(){
                if(cnt>=state.n){cnt=0}
                if(cnt<0){cnt=state.n-1} // n-1인 인 이유는 0부터 22니까. 
                $slideWrap.stop().animate({left:`${-100*cnt}%`}, 0); // 삼항연산자
            });
            slidePageEvent();
        }


        // 2-1. 다음카운트함수
        function nextCount(){
            cnt++;
            mainSlide();
        }

        // 2-2. 이전카운트함수
        function prevCount(){
            cnt--;
            mainSlide();
        }


        // 3. 자동타이머함수 
        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000); // 3초에 한번씩 나오세요. 

            // 라우터를 잘 정리해놔서 사용할 일이 없다. 주석처리.. 
            // 타이머 setId 변수 모든 값들은 브라우저 저장소에 관리시킨다.
            // 세션스토리지를 사용할 때, 브라우저를 종료하면 날라간다. 브라우저가 생기면 생긴다. 
            // 저장소 key = ""
            // const key ='SETID_SEC1_SLIDE_KEY'; // 내가 정할 수 있다. 
            // sessionStorage.setItem(key, setId); 
            
        }
        autoTimer();

        // 4. 슬라이드 콘테이너 박스에 마우스 오버시 슬라이드 일시정지  
        $slideContainer.on({
            mouseenter(){
                clearInterval(setId);
                $leftArrowBtn.stop().fadeIn(1000);
                $rightArrowBtn.stop().fadeIn(1000);
                
            },
            mouseleave(){
                clearInterval(setId);
                $leftArrowBtn.stop().fadeOut(1000);
                $rightArrowBtn.stop().fadeOut(1000);
                autoTimer();
            }
        });


        // 5. 슬라이드 페이지 번호 
        function slidePageEvent(){
            $currentNumber.html(cnt+1>=(state.n+1)? 1 : (cnt+1===0? state.n : cnt+1)); // n+1 = 24 
            $totalNumber.html(state.n);
        }

        // 6-1. 다음화살버튼클릭이벤트
        $rightArrowBtn.on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        })

        // 6-2. 이전화살버튼클릭이벤트

        $leftArrowBtn.on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        })

        // 슬라이드 새로고침 방지. 
        $slidea.on({
            click(e){
                e.preventDefault();
            }
        })



    }, [state.n]); // [] 한번만 해라. 



    return (
       
        <section id="section1">
        <div className="container">
            <div className="gap">
                <div className="title hide">
                   <h2>마켓컬리 메인 슬라이드</h2> 
                </div>
                <div className="content">
                    <Section1SlideComponent 슬라이드 = {state.슬라이드} n={state.n}/>

                </div>
            </div>
        </div>
    </section>
   
    );
};

