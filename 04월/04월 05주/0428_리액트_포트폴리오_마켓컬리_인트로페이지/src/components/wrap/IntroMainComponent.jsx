import React from 'react';
import $ from 'jquery';

export default function IntroMainComponent () {



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



    // 섹션1 컴포넌트 메인 슬라이드 
    React.useEffect(()=>{

        const $slideContainer  = $('#section1 .slide-container');
        const $slideWrap       = $('#section1 .slide-wrap');
        const $slide           = $('#section1 .slide');
        const $slidea           = $('#section1 .slide a');
        const $leftArrowBtn    = $('#section1 .left-arrow-btn');
        const $rightArrowBtn   = $('#section1 .right-arrow-btn');
        const $currentNumber   = $('#section1 .current-number');
        const $totalNumber   = $('#section1 .total-number');
        let   cnt = 0; 
        let   n   = $slide.length-2; // 슬라이드 25-2 = 23;
        let setId = 0; 
        

        // 1. 메인슬라이드함수 
        function mainSlide(){
            console.log(cnt);
            $slideWrap.stop().animate({left:`${-100*cnt}%`}, 500, function(){
                if(cnt>=n){cnt=0}
                if(cnt<0){cnt=n-1} // n-1인 인 이유는 0부터 22니까. 
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
            $currentNumber.html(cnt+1>=(n+1)? 1 : (cnt+1===0? n : cnt+1)); // n+1 = 24 
            $totalNumber.html(n);
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


    }, []); // [] 한번만 해라. 

    return (
        <main id='main' className='sub-page intro'>


            {/* section#section$*10>div.container>div.gap>div.title+div.content */}
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title hide">
                           <h2>마켓컬리 메인 슬라이드</h2> 
                        </div>
                        <div className="content">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        {/* li.slide$*23>a>img[src=./images/intro/intro_main_slide$$.jpg] */}
                                        {/* li.slide$*23>a[href=!#]>img[src=./images/intro/intro_main_slide$$.jpg] */}
                                        {/* li.slide$@0*23>a[href=!#]>img[src=./images/intro/intro_main_slide$$@0.jpg] */}
                                        <li className="slide slide22"><a href="!#"><img src="./images/intro/intro_main_slide23.jpg" alt="" /></a></li>
                                        <li className="slide slide0"> <a href="!#"><img src="./images/intro/intro_main_slide01.jpg" alt="" /></a></li>
                                        <li className="slide slide1"> <a href="!#"><img src="./images/intro/intro_main_slide02.jpg" alt="" /></a></li>
                                        <li className="slide slide2"> <a href="!#"><img src="./images/intro/intro_main_slide03.jpg" alt="" /></a></li>
                                        <li className="slide slide3"> <a href="!#"><img src="./images/intro/intro_main_slide04.jpg" alt="" /></a></li>
                                        <li className="slide slide4"> <a href="!#"><img src="./images/intro/intro_main_slide05.jpg" alt="" /></a></li>
                                        <li className="slide slide5"> <a href="!#"><img src="./images/intro/intro_main_slide06.jpg" alt="" /></a></li>
                                        <li className="slide slide6"> <a href="!#"><img src="./images/intro/intro_main_slide07.jpg" alt="" /></a></li>
                                        <li className="slide slide7"> <a href="!#"><img src="./images/intro/intro_main_slide08.jpg" alt="" /></a></li>
                                        <li className="slide slide8"> <a href="!#"><img src="./images/intro/intro_main_slide09.jpg" alt="" /></a></li>
                                        <li className="slide slide9"> <a href="!#"><img src="./images/intro/intro_main_slide10.jpg" alt="" /></a></li>
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
                                        <li className="slide slide0"> <a href="!#"><img src="./images/intro/intro_main_slide01.jpg" alt="" /></a></li>
                                        
                                    </ul>
                                </div>

                                <a href="!#" className='left-arrow-btn'><img src="./images/intro/icon_right_arrow_gray.svg" alt="" /></a>
                                <a href="!#" className='right-arrow-btn'><img src="./images/intro/icon_right_arrow_gray.svg" alt="" /></a>
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
                                <img src="./images/intro/section_top.jpg" alt="" />
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
                            {/* div.slide-container>div.slide-view>ul.slide-wrap>li.slide.slide0>div.col-gap>a>div.img-box+div.txt-box */}
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                    <li className="slide slide12">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/7a6d9b97-42ca-4059-8661-deba014dfe97.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>  
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide13">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/7c00af4d-862c-4e9a-8dc8-f891352446da.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide14">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/7c199f48-c84b-4ce6-a549-818b78b7cc1f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide15">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/8b96dcf7-0d91-4eb7-88fc-870178338896.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide16">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/0ff922d7-5485-45e7-8395-c92daf86140a.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide17">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/0ff922d7-5485-45e7-8395-c92daf86140a.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide18">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/0ff922d7-5485-45e7-8395-c92daf86140a.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide19">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/0ff922d7-5485-45e7-8395-c92daf86140a.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide0">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/317f1e18-08d9-4358-9135-2c8a63028ab1.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide1">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/1b141312-abb4-4de9-bcf5-8e7eec556b34.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide2">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/2c776916-1d14-43ad-abc4-a26a9bdbd8fe.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide3">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/2eb88b09-69f4-453b-9843-d1339a01d7f9.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide4">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide5">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/4ba3eefa-93b6-4874-a110-3d9aa06c621f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide6">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/4d615329-a172-4563-94cc-e22f906d9223.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide7">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/5bbdae90-e559-4d95-8296-a9cd50a1ad76.jpeg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide8">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/5d04248c-1ba5-45f6-8781-3ea699bc0c97.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide9">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide10">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/6fab7f7c-50dd-42b3-aeca-8dda5af0c410.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide11">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/07caa830-d4ff-4439-bc9f-0bec879cedd6.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide12">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/7a6d9b97-42ca-4059-8661-deba014dfe97.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide13">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/7c00af4d-862c-4e9a-8dc8-f891352446da.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide14">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/7c199f48-c84b-4ce6-a549-818b78b7cc1f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide15">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/8b96dcf7-0d91-4eb7-88fc-870178338896.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li>샛별배송</li>
                                                            <li><strong>[미소프레쉬]</strong> <em>남도식 양념황태구이 (냉동)</em></li>
                                                            <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                            <li><span className='rate-price'>{0.18===0?``:`${Math.round(0.18*100)}%`}</span>{0.18 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                            <li>{ 0.18===0? <span className='panme-price'>{commaPrice(10000)}</span> : <s>{commaPrice(10000)}</s> }</li>
                                                            <li>{"마켓컬리"}</li>
                                                        </ul>    
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="slide slide16">
                                            <div className="col-gap">
                                                <a href="!#">
                                                    <div className="img-box">
                                                        <img src='/images/intro/0ff922d7-5485-45e7-8395-c92daf86140a.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/0ff922d7-5485-45e7-8395-c92daf86140a.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/0ff922d7-5485-45e7-8395-c92daf86140a.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/0ff922d7-5485-45e7-8395-c92daf86140a.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/317f1e18-08d9-4358-9135-2c8a63028ab1.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/1b141312-abb4-4de9-bcf5-8e7eec556b34.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/2c776916-1d14-43ad-abc4-a26a9bdbd8fe.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/2eb88b09-69f4-453b-9843-d1339a01d7f9.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/3fdf8c0a-d5ed-4148-9ced-d5440a43315f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/4ba3eefa-93b6-4874-a110-3d9aa06c621f.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/4d615329-a172-4563-94cc-e22f906d9223.jpg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/5bbdae90-e559-4d95-8296-a9cd50a1ad76.jpeg' alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="txt-box">
                                                        <ul>
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                <a href="!#" className='left-arrow-btn'><img src="./images/intro/icon_arrow_white_right2.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn'><img src="./images/intro/icon_arrow_white_right2.svg" alt="" /></a>
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

