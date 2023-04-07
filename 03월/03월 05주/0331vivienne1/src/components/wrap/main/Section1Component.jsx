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
                            <a href="!#" title="HOME"><img src="./img/logo.svg" alt="" /></a>
                        </div>
                        <div className="title">
                            <ul>
                                <li><h2>THE NEW COLLECTION</h2></li>
                                <li><a href="!#" title="HOME"><img src="./img/curve-shop-woman.svg" alt="" /></a></li>
                            </ul>
                        </div> 
                        <div className="right">
                            <ul>
                                <li><span class="material-symbols-outlined" type="search" placeholder="검색" >search</span></li>
                                <li><h4>배송조회</h4></li>
                                <li><h4>로그인 / 회원가입</h4></li>
                                <li><h4>쇼핑백 </h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};