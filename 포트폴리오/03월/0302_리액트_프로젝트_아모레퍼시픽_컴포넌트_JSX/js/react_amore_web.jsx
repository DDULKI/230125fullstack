function WrapComponent (){
    return(
        <div id="wrap">
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    )
}
function HeaderComponent (){
        return (
            <header id="header">
            <div className="row1">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="left">
                                <ul>
                                    <li><a href="!#" className="left-btn on">KR</a></li>
                                    <li><a href="!#" className="left-btn">EN</a></li>
                                    <li><a href="!#" className="left-btn">CN</a></li>
                                </ul>
                            </div>
                            <div className="center">
                                <h1><a href="!#" title="HOME"><img src="./img/amorepacific.png" alt=""/></a></h1>
                            </div>
                            <div className="right">
                                <ul>
                                    <li><a href="!#"><img src="./img/header_facebook.png" alt=""/></a></li>
                                    <li><a href="!#"><img src="./img/header_insta.png" alt=""/></a></li>
                                    <li><a href="!#"><img src="./img/header_linkedin.png" alt=""/></a></li>
                                    <li><a href="!#"><img src="./img/header_square.png" alt=""/></a></li>
                                    <li><a href="!#"><img src="./img/header_youtube.png" alt=""/></a></li>
                                </ul>
                                <span className="material-symbols-outlined">search</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="left">
                                <h1><a href="!#" title="HOME"><img src="./img/amorepacific.png" alt=""/></a></h1>
                            </div>
                            <div className="center">
                                <nav className="nav">
                                    <ul>
                                        <li><a href="!#" className="nav-btn">ABOUT US</a></li>
                                        <li><a href="!#" className="nav-btn">BRANDS</a></li>
                                        <li><a href="!#" className="nav-btn">OUR CULTURE</a></li>
                                        <li><a href="!#" className="nav-btn">COMMITMENTS</a></li>
                                        <li><a href="!#" className="nav-btn">INVESTORS</a></li>
                                        <li><a href="!#" className="nav-btn">NEWS</a></li>
                                    </ul>                  
                                </nav>   
                            </div>
                            <div className="right">

                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
 }
    function MainComponent (){
        return (
            <main id="main">
            <Section1Component/>
            <Section2Component/>
            <Section3Component/>
            <Section4Component/>
            </main>
        )
    }
    function Section1Component (){
        return(
            <section1 id="section1">
                <div className="container">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide1">
                                    <div>
                                    <h2>WE MAKE A MORE BEAUTIFUL WORLD</h2>
                                    <br/>
                                    <h1>New Beauty</h1>
                                    <h3>아모레퍼시픽은 고객 한 사람 한사람이 뉴 뷰티로 영감받아<br/>
                                    자신만의 아름다움을 발견하고, 건강하고 만족스러운 삶을<br/>실현할 수 있도록 합니다.</h3>
                                    </div>
                                </li>
                                <li className="slide slide2">
                                    <div>
                                    <h2>WE MAKE A MORE BEAUTIFUL WORLD</h2>
                                    <br/>
                                    <h1>Sustainability</h1>
                                    <h3>아모레퍼시픽은 자연과 사람, 사회가 조화롭게 공존하는<br/>
                                    아름다운 세상을 만들어갑니다.<br/>모든 구성원이 함께 더 나은 미래를 꿈꿉니다.</h3>
                                    </div>
                                </li>
                                <li className="slide slide3">
                                    <div>
                                    <h2>WE MAKE A MORE BEAUTIFUL WORLD</h2>
                                    <br/>
                                    <h1>Innovation</h1>
                                    <h3>아모레퍼시픽은 고객 한 사람 한사람이 뉴 뷰티로 영감받아<br/>
                                    기술 혁신을 지속해나갑니다<br/>첨단 기술력을 바탕으로 초개인화 뷰티 솔루션을 제공합니다.</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="title">
        
                    </div>

                    {/* <!-- 좌우화살버튼 --> */}
                    <a href="#" className="arrow-next-btn"><i></i></a>
                    <a href="#" className="arrow-prev-btn"><i></i></a>

                    {/* <!-- 인디게이터 버튼 || 페이지네이션 버튼 --> */}
                    <div className="page-btn-box">
                        <span><a href="#" className="page-btn blind">New Beauty</a></span>
                        <span><a href="#" className="page-btn blind">Sustainability</a></span>
                        <span><a href="#" className="page-btn blind">Innovation</a></span>
                    </div>

                </div>
            </section1>           
        )
    }
    function Section2Component (){
        return(
            <section2 id="section2">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h1>Latest Amorepacific News</h1>
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <div className="col-gap">
                                        <div className="img-box"><img src="./img/thumb2.jpg" alt=""/></div>
                                        <div className="txt-box">
                                            <a href="#"><h2>헤라, 가벼운 제형과 뉴트럴한 
                                                <br/>컬러의 아이&립 메이크업 제품 출시</h2></a>
                                        </div>
                                    </div>
                                    <div className="col-gap">
                                        <div className="img-box"><img src="./img/thumb1.jpg" alt=""/></div>
                                        <div className="txt-box">
                                            <a href="#"><h2>샤이니 키, 올 화이트 수트 화보 공개</h2></a>
                                        </div>
                                    </div>
                                    <div className="col-gap">
                                        <div className="img-box"><img src="./img/thumb1-2.jpg" alt=""/></div>
                                        <div className="txt-box">
                                            <a href="!#"><h2>헤라, 신제품 ‘UV프로텍터 멀티디펜스 프레쉬’ 출시</h2></a>
                                        </div>
                                    </div>
                                    <div className="col-gap">
                                        <div className="img-box"><img src="./img/thumb1-3.jpg" alt=""/></div>
                                        <div className="txt-box">
                                            <a href="!#"><h2>에스트라, 인플루언서 꿈나무 지원 
                                            <br/>프로그램 ‘A리스트’ 2기 모집</h2></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section2>
        )
    }
    function Section3Component (){
        return(
            <section3 id="section3">
                <div class="container">
                    <div class="gap">
                        <div class="title">
                            <h2>Story of Amorepacific</h2>
                        </div>
                        <div class="content">
                            <div class="slide-container">
                                <div class="slide-view">
                                    <ul class="slide-wrap">
                                        <li class="slide slide1">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/architecture_slide01.jpg" alt=""/>
                                                    <span>
                                                        <em>본사</em>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="slide slide1">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/architecture_slide02.jpg" alt=""/>
                                                    <span>
                                                        <em>본사</em>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="slide slide1">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/architecture_slide03.jpg" alt=""/>
                                                    <span>
                                                        <em>본사</em>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="slide slide1">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/architecture_slide04.jpg" alt=""/>
                                                    <span>
                                                        <em>본사</em>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="two-title">
                                        <h2>건축</h2>
                                        <h3>아모레퍼시픽은 공간을 위해 기업의 비전과 함께 사회를 향한 약속까지 담아냅니다. 아모레퍼시픽의<br/> 
                                            건축은 세상에 아름다움을 전하기 위해 노력하는 마음을 담은 공간이며, 이러한 가치가 직원들은 물론<br/> 
                                            함께하는 시민들에게도 전달되길 바랐습니다. 건축물은 아모레퍼시픽이 만들지만, 그 공간들은 모두의<br/> 
                                            것이며 함께하는 모든 사람들이 그 가치를 공유하게 될 것입니다. </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section3>
        )
    }
    function Section4Component (){
        return(
            <section4 id="section4">
                <div class="container">
                    <div class="gap">
                        <div class="title">
                            <h2>Follow Our Brands</h2>
                        </div>
                        <div class="content">
                            <div class="slide-container">
                                <div class="slide-view">
                                    <ul class="slide-wrap">
                                        <li class="slide slide2">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/1036x1036_1 (1).jpg" alt=""/>
                                                </div>
                                                <div class="bottom-box">
                                                   <span><img src="./img/108(96)x19_gray.png" alt=""/></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="slide slide2">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/Main_Brands_mo_amorepacific_1036x1036.jpg" alt=""/>
                                                </div>
                                                <div class="bottom-box">
                                                    <span><img src="./img/logo_brand_01_min.png" alt=""/></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="slide slide2">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/1036x1036.jpg" alt=""/>
                                                </div>
                                                <div class="bottom-box">
                                                    <span><img src="./img/main_3.png" alt=""/></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="slide slide2">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/1036x1036_1.jpg" alt=""/>
                                                </div>
                                                <div class="bottom-box">
                                                    <span><img src="./img/logo_brand_03_min.png" alt=""/></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="slide slide2">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/Main_Brands_mo_mamonde_1036x1036_2_1.jpg" alt=""/>
                                                </div>
                                                <div class="bottom-box">
                                                    <span><img src="./img/gnb_mamonde_minify_new_2_1.jpg" alt=""/></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="slide slide2">
                                            <div class="col-gap">
                                                <div class="top-box">
                                                    <img src="./img/Main_Brands_mo_innisfree_1036x1036_1.jpg" alt=""/>
                                                </div>
                                                <div class="bottom-box">
                                                    <span><img src="./img/bi_innisfree2.jpg" alt=""/></span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section4>
        )
    }
    function FooterComponent (){
        return(
            <footer id="footer">
            <div class="container">
                <div class="gap">
                    <div class="title">
                        
                    </div>
                    <div class="content">
                        <div class="gotop">
                            <div class="col-gap">
                                <a href="btn-r btn-r-gotop"><i class="btn"><span>TOP</span></i></a>
                            </div>
                         </div>
                        <div class="links-list">
                             <ul>
                                <li><a href="" class="list-btn" title="윤리경영">윤리경영</a></li>
                                <li><a href="" class="list-btn" title="인재채용">인재채용</a></li>
                                <li><a href="" class="list-btn" title="고객상담실">고객상담실</a></li>
                                <li><a href="" class="list-btn" title="글로벌 네트워크">글로벌 네트워크</a></li>
                                <li><a href="" class="list-btn" title="방문판매원 찾기">방문판매원 찾기</a></li>
                                <li><a href="" class="list-btn" title="매거진">매거진</a></li>
                                <li><a href="" class="list-btn" title="사이트맵">사이트맵</a></li>
                                <li><a href="" class="list-btn" title="관련사이트">관련사이트</a></li>
                                <li><a href="" class="list-btn" title="법적 고지">법적 고지</a></li>
                                <li><a href="" class="list-btn" title="개인정보 처리방침">개인정보 처리방침</a></li>
                             </ul>
                          </div>
                        <div class="fuo">
                           <h4>FOLLOW US ON</h4>
                        </div>
                        <div class="foot-sns">
                            <img src=".img/header_facebook.png" alt=""/>
                            <img src=".img/header_insta.png" alt=""/>
                            <img src=".img/header_linkedin.png" alt=""/>
                            <img src=".img/header_youtube.png" alt=""/>
                            <img src=".img/header_square.png" alt=""/>
                        </div>
                        <div class="foot-row">
                            <p>&copy; Since 1945 Amorepacific, All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
ReactDOM.render(
    <WrapComponent/>,
    document.getElementById('root')
);