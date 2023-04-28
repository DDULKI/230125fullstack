import React from 'react';
import $ from 'jquery';

export default function IntroMainComponent () {
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
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/7c00af4d-862c-4e9a-8dc8-f891352446da.jpg' alt="" />
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
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/8b96dcf7-0d91-4eb7-88fc-870178338896.jpg' alt="" />
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
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/06d85013-b2b3-4b13-bee3-b567589e1737.jpeg' alt="" />
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
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/07caa830-d4ff-4439-bc9f-0bec879cedd6.jpg' alt="" />
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
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/7c00af4d-862c-4e9a-8dc8-f891352446da.jpg' alt="" />
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
                                                            <li><strong>[최현석의 쵸이닷]</strong> <em> 새우 토마토 파스타</em></li>
                                                            <li>8,900</li>
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
                                                        <img src='/images/intro/8b96dcf7-0d91-4eb7-88fc-870178338896.jpg' alt="" />
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

