import React from 'react';
import $ from 'jquery';
import '../introMain/scss/section3.scss';
import Section3SlideComponent from './Section3SlideComponent';
import axios from 'axios';

export default function Section3Component (){

    // 1. state 상태관리 변수 지정 
    // 2. AXIOS 외부데이터 상품 가져오기 그리고 상태관리 배열 변수, 상품개수 n에 데이터 저장하기 
    // 3. React.useEffect() 상품개수 등록되면 즉시 슬라이드 전체너비 설정하기
    // 4. 상태변수 데이터를 자식컴포넌트에게 내려준다. 
    // 5. 자식컴포넌트는 비구조화로 받아서 탬플릿 요소에 반복처리 바인딩한다. 


    // 1. 
    const [state, setState] = React.useState({
        상품:[], 
        n:0
    });

    // 2. 
    React.useEffect(()=>{

        axios({
            url:'./data/section3.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    상품:res.data.상품,
                    n:res.data.상품.length
                })
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 실패 + ${err}`)
        })

    },[]);
    

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



            // 섹션3 슬라이드 
            React.useEffect(()=>{

                const $slideContainer   = $('#section3 .slide-container');
                const $slideWrap        = $('#section3 .slide-wrap');
                const $slide            = $('#section3 .slide-wrap .slide');
                const $leftArrowBtn     = $('#section3 .left-arrow-btn');
                const $rightArrowBtn    = $('#section3 .right-arrow-btn');
                let cnt = 0;
                let n = (state.n)/4; // (20)/4=5
    
                
                $slideWrap.css({width:`${25 * state.n}%`})
    
                //1. 메인슬라이드함수 
                mainSlide();
                function mainSlide(){
                    // console.log(cnt);
                    $slideWrap.stop().animate({left: `${-100*cnt}%`});
                    if(cnt>=4){
                        $('.right-arrow-btn').fadeOut(600);
                    }
                    else {
                        $('.right-arrow-btn').fadeIn(600);
                    }
                    if(cnt<=0){
                        $('.left-arrow-btn').fadeOut(600);
                    } // 0 페이지면 사라지고 나머지는 보여라. 
                    else {
                        $('.left-arrow-btn').fadeIn(600);
                    }
                }
                //2-1. 다음슬라이드 카운트함수
                function nextCount(){
                    cnt++;
                    console.log(cnt);
                    if(cnt>=4){cnt=4}
                    mainSlide();
                } 
    
                //2-2. 이전카운트함수
                function prevCount(){
                    if(cnt<=0){cnt=0}
                    cnt--;
                    mainSlide();
                } 
    
                //2. 다음화살버튼 클릭 이벤트 
                $leftArrowBtn.on({
                    click(e){
                        e.preventDefault();
                        prevCount();
                    
                    }
                });
                $rightArrowBtn.on({
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


                            {/* div.slide-container>div.slide-view>ul.slide-wrap>li.slide.slide0>div.col-gap>a>div.img-box+div.txt-box */}
                            <Section3SlideComponent 상품={state.상품}/>



                        </div>
                    </div>
                </div>
                <a href="!#" className='left-arrow-btn'><img src="./images/intro/icon_arrow_white_right2.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn'><img src="./images/intro/icon_arrow_white_right2.svg" alt="" /></a>
            </section>
     
    );
};
