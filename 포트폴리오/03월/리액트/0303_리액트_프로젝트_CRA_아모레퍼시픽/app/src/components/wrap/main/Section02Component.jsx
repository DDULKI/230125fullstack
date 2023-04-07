import React from 'react';

function Section02Component() {
    return (
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
                                        <a href="!#"><h2>헤라, 가벼운 제형과 뉴트럴한 
                                            <br/>컬러의 아이&립 메이크업 제품 출시</h2></a>
                                    </div>
                                </div>
                                <div className="col-gap">
                                    <div className="img-box"><img src="./img/thumb1.jpg" alt=""/></div>
                                    <div className="txt-box">
                                        <a href="!#"><h2>샤이니 키, 올 화이트 수트 화보 공개</h2></a>
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
    );
};

export default Section02Component;