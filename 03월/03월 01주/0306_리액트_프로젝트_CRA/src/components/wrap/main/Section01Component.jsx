import React from 'react';

function Section01Component () {
    return (
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
                            <button className="button" typ="button"><p>자세히 보기 &gt;</p></button>
                            </div>
                        </li>
                        <li className="slide slide2">
                            <div>
                            <h2>WE MAKE A MORE BEAUTIFUL WORLD</h2>
                            <br/>
                            <h1>Sustainability</h1>
                            <h3>아모레퍼시픽은 자연과 사람, 사회가 조화롭게 공존하는<br/>
                            아름다운 세상을 만들어갑니다.<br/>모든 구성원이 함께 더 나은 미래를 꿈꿉니다.</h3>
                            <button className="button" typ="button"><p>자세히 보기  &gt;</p></button>
                            </div>
                        </li>
                        <li className="slide slide3">
                            <div>
                            <h2>WE MAKE A MORE BEAUTIFUL WORLD</h2>
                            <br/>
                            <h1>Innovation</h1>
                            <h3>아모레퍼시픽은 고객 한 사람 한사람이 뉴 뷰티로 영감받아<br/>
                            기술 혁신을 지속해나갑니다<br/>첨단 기술력을 바탕으로 초개인화 뷰티 솔루션을 제공합니다.</h3>
                            <button className="button" typ="button"><p>자세히 보기  &gt;</p></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="title">

            </div>

            <a href="!#" className="arrow-next-btn"><i></i></a>
            <a href="!#" className="arrow-prev-btn"><i></i></a>

            <div className="page-btn-box">
                <span><a href="!#" className="page-btn blind">New Beauty</a></span>
                <span><a href="!#" className="page-btn blind">Sustainability</a></span>
                <span><a href="!#" className="page-btn blind">Innovation</a></span>
            </div>

        </div>
    </section1>       
    );
};

export default Section01Component;