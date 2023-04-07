import React from 'react';

export default function Section1Component(){
    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left">
                            <ul>
                                <li><h4>신상품</h4></li>
                                <li><h4>여성</h4></li>
                                <li><h4>남성</h4></li>
                                <li><h4>선물</h4></li>
                                <li><h4>SALE</h4></li>
                                <li><h4>COLLECTIONS</h4></li>
                            </ul>
                        </div>
                        <div className="center">
                            <img src="./img/logo.svg" alt="" />
                        </div>
                        <div className="title">
                            <div>
                                <h2>THE NEW COLLECTION</h2>
                                <img src="./img/curve-shop-woman.svg" alt="" />
                            </div>
                        </div> 
                        <div className="right">
                            <ul>
                                <li><span className="b-header_search_icon js-toggler js-search-icon h-minimized"></span></li>
                                <li><h4>배송조회</h4></li>
                                <li><h4>로그인 <i>/</i> 회원가입</h4></li>
                                <li><h4>쇼핑백 <i>0</i></h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};