import React from 'react';
import $ from 'jquery';


export default function IntroMainComponent() {

    // const {state,setState} = React.useState({
    //     cnt : 0
    // });

    // const setCnt = (cnt) => {
    //     setState({
    //         ...state,
    //         cnt : cnt
    //     })
    // }



    // 판매가격, 정가 콤머형식 함수
    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while( regExp.test(value) ){
            return  value.replace(regExp, '$1,$2');
        }        
    }



    // 섹션1 컴포넌트 메인 슬라이드
    React.useEffect(()=>{

        const $slideContainer   = $('#section1 .slide-container');
        const $slideWrap        = $('#section1 .slide-wrap');
        const $slide            = $('#section1 .slide');
        const $slidea            = $('#section1 .slide a');
        const $leftArrorwBtn    = $('#section1 .left-arrorw-btn');
        const $rightArrorwBtn   = $('#section1 .right-arrorw-btn');
        const $currentNumber    = $('#section1 .current-number');
        const $totalNumber      = $('#section1 .total-number');

        let   cnt   = 0;
        let   n     = $slide.length-2; //23
        let   setId = 0;
        

        //1. 메인슬라이드함수
        function mainSlide(){
            console.log( cnt );
            $slideWrap.stop().animate({left: `${-100*cnt}%`}, 600, function(){
                if(cnt>=n){cnt=0}
                if(cnt< 0){cnt=n-1}  // 23-1 (0~22)
                $slideWrap.stop().animate({left: `${-100*cnt}%`}, 0);
            });
            slidePageEvent();            
        }


        //2-1. 다음카운트함수
        function nextCount(){
            cnt++;
            mainSlide();
        }

        //2-2. 이전카운트함수
        function prevCount(){
            cnt--;
            mainSlide();
        }


        //3. 자동타이머함수
        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();


        // 4. 슬라드 콘테이너 박스에 마우스 오버시 슬라이드 일시정지
        $slideContainer.on({
            mouseenter(){
                clearInterval(setId);
                $leftArrorwBtn.stop().fadeIn(1000);
                $rightArrorwBtn.stop().fadeIn(1000);
            },
            mouseleave(){                
                $leftArrorwBtn.stop().fadeOut(1000);
                $rightArrorwBtn.stop().fadeOut(1000);
                autoTimer();
            }
        });


        // 5. 슬라이드 페이지 번호
        function slidePageEvent(){
            $currentNumber.html( cnt+1===(n+1) ? 1 : (cnt+1===0 ? n : cnt+1) );
            $totalNumber.html( n );
        }

        // 6-1. 다음화살버튼클릭이벤트
        $rightArrorwBtn.on({
            click(e){
                e.preventDefault();
                nextCount();    
            }
        })

        // 6-2. 이전화살버튼클릭이벤트
        $leftArrorwBtn.on({
            click(e){
                e.preventDefault();
                prevCount();    
            }
        })
    
        // 디버깅
        $slidea.on({
            click(e){
                e.preventDefault();
            }
        })     

    },[]);
    

    return (
        <main id='main' className='sub-page intro'>

           


            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title  hide">
                            <h2>마켓컬리 메인 슬라이드</h2>
                        </div>
                        <div className="content">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        {/* li.slide$@0*23>a[href=!#]>img[src=./images/intro/intro_main_slide$$@1.jpg] */}
                                        <li className="slide slide22"><a href="!#"><img src="./images/intro/intro_main_slide23.jpg" alt="" /></a></li>
                                        <li className="slide slide0" ><a href="!#"><img src="./images/intro/intro_main_slide01.jpg" alt="" /></a></li>
                                        <li className="slide slide1" ><a href="!#"><img src="./images/intro/intro_main_slide02.jpg" alt="" /></a></li>
                                        <li className="slide slide2" ><a href="!#"><img src="./images/intro/intro_main_slide03.jpg" alt="" /></a></li>
                                        <li className="slide slide3" ><a href="!#"><img src="./images/intro/intro_main_slide04.jpg" alt="" /></a></li>
                                        <li className="slide slide4" ><a href="!#"><img src="./images/intro/intro_main_slide05.jpg" alt="" /></a></li>
                                        <li className="slide slide5" ><a href="!#"><img src="./images/intro/intro_main_slide06.jpg" alt="" /></a></li>
                                        <li className="slide slide6" ><a href="!#"><img src="./images/intro/intro_main_slide07.jpg" alt="" /></a></li>
                                        <li className="slide slide7" ><a href="!#"><img src="./images/intro/intro_main_slide08.jpg" alt="" /></a></li>
                                        <li className="slide slide8" ><a href="!#"><img src="./images/intro/intro_main_slide09.jpg" alt="" /></a></li>
                                        <li className="slide slide9" ><a href="!#"><img src="./images/intro/intro_main_slide10.jpg" alt="" /></a></li>
                                        <li className="slide slide10"><a href="!#"><img src="./images/intro/intro_main_slide11.jpg" alt="" /></a></li>
                                        <li className="slide slide11"><a href="!#"><img src="./images/intro/intro_main_slide12.jpg" alt="" /></a></li>
                                        <li className="slide slide12"><a href="!#"><img src="./images/intro/intro_main_slide13.jpg" alt="" /></a></li>
                                        <li className="slide slide13"><a href="!#"><img src="./images/intro/intro_main_slide14.jpg" alt="" /></a></li>
                                        <li className="slide slide14"><a href="!#"><img src="./images/intro/intro_main_slide15.jpg" alt="" /></a></li>
                                        <li className="slide slide15"><a href="!#"><img src="./images/intro/intro_main_slide16.jpg" alt="" /></a></li>
                                        <li className="slide slide16"><a href="!#"><img src="./images/intro/intro_main_slide17.jpg" alt="" /></a></li>
                                        <li className="slide slide17"><a href="!#"><img src="./images/intro/intro_main_slide18.jpg" alt="" /></a></li>
                                        <li className="slide slide18"><a href="!#"><img src="./images/intro/intro_main_slide19.jpg" alt="" /></a></li>
                                        <li className="slide slide19"><a href="!#"><img src="./images/intro/intro_main_slide20.jpg" alt="" /></a></li>
                                        <li className="slide slide20"><a href="!#"><img src="./images/intro/intro_main_slide21.jpg" alt="" /></a></li>
                                        <li className="slide slide21"><a href="!#"><img src="./images/intro/intro_main_slide22.jpg" alt="" /></a></li>
                                        <li className="slide slide22"><a href="!#"><img src="./images/intro/intro_main_slide23.jpg" alt="" /></a></li>
                                        <li className="slide slide0"><a href="!#"><img src="./images/intro/intro_main_slide01.jpg" alt="" /></a></li>                                        
                                    </ul>
                                </div>
    

                                <a href="!#" className='left-arrorw-btn'><img src="./images/intro/icon_right_arrow_gray.svg" alt="" /></a>
                                <a href="!#" className='right-arrorw-btn'><img src="./images/intro/icon_right_arrow_gray.svg" alt="" /></a>
                                
                                <span className='page-count-box'>
                                   <em className='current-number'>1</em>
                                   <i>/</i>     
                                   <em className='total-number'>23</em>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='sectionTopBanner'>
                <div className="container">
                    <div className="gap">
                        <div className="title hide">
                            <h2>섹션탑배너</h2>
                        </div>
                        <div className="content">
                            <a href="!#">
                                <img src="./images/intro/section_top_baaner.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section2">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>이 상품 어때요?</h2>
                        </div>
                        <div className="content">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                    <li className="slide slide12">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide13">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[하남핫푸드]</strong> <em>{"낙지 볶음 350g (냉동)"}</em></li>
                                                            <li>{}</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(42900*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(42900)}</span> : <s>{commaPrice(42900)}</s> }</li>
                                                            <li>{"마케컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide14">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide15">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                        <li>샛별배송</li>
                                                            <li><strong>[하남핫푸드]</strong> <em>{"낙지 볶음 350g (냉동)"}</em></li>
                                                            <li>{}</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(42900*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(42900)}</span> : <s>{commaPrice(42900)}</s> }</li>
                                                            <li>{"마케컬리"}</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide16">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide17">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li>샛별배송</li>
                                                            <li><strong>[하남핫푸드]</strong> <em>{"낙지 볶음 350g (냉동)"}</em></li>
                                                            <li>{""}</li>
                                                            <li><span className='rate-price'>{0.22===0?``:`${Math.round(0.18*100)}%`}</span>{0.22 > 0 && (<span className='panme-price'>{commaPrice(50000*(1-0.22))}</span>) }</li>
                                                            <li>{ 0.22===0? <span className='panme-price'>{commaPrice(50000)}</span> : <s>{commaPrice(50000)}</s> }</li>
                                                            <li>{"마케컬리"}</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide18">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide19">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="slide slide0">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/9c4cbb5a-4a1f-4ff0-92e7-92011d236602.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li>샛별배송</li>
                                                            <li><strong>[하남핫푸드]</strong> <em>{"낙지 볶음 350g (냉동)"}</em></li>
                                                            <li>{}</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(42900*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(42900)}</span> : <s>{commaPrice(42900)}</s> }</li>
                                                            <li>{"마케컬리"}</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide1">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/9ac79acc-2ffb-4978-af87-51596e2e1d77.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide2">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/317f1e18-08d9-4358-9135-2c8a63028ab1.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li>샛별배송</li>
                                                            <li><strong>[하남핫푸드]</strong> <em>{"낙지 볶음 350g (냉동)"}</em></li>
                                                            <li>{}</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(42900*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(42900)}</span> : <s>{commaPrice(42900)}</s> }</li>
                                                            <li>{"마케컬리"}</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide3">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/165303902534l0.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide4">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide5">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide6">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide7">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide8">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide9">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide10">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide11">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide12">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide13">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide14">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide15">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide16">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide17">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide18">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide19">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="slide slide0">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide1">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide2">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide3">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide4">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide5">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide6">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide7">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='./images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li><strong>[풀무원]</strong> <em>로스팅 돈코츠라멘 (4개입)</em></li>                                                        
                                                            <li>5,450</li>
                                                            <li>후기</li>
                                                        </ul> 
                                                    </div>
                                                </a>
                                            </div>
                                        </li>                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="!#" className='left-arrorw-btn'><img src="./images/intro/icon_left_arrow_white.svg" alt="" /></a>
                <a href="!#" className='right-arrorw-btn'><img src="./images/intro/icon_left_arrow_white.svg" alt="" /></a>
            </section>
            <section id="section3">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section4">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section5">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section6">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section7">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section8">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section9">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
            <section id="section10">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};