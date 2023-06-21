import React from 'react';
import './scss/left_nav.scss'

export default function LeftNavComponent(){
    return (
        <div id='leftNav'>
            <div className="container">
                <div className="title">
                    <h2>MY ACCOUNT</h2>
                </div>
                <div className="content">
                    <nav className="nav">
                        <ul>
                            <li><a href="!#">Home</a></li>
                            <li><a href="!#">회원정보</a></li>
                            <li><a href="!#">주소록</a></li>
                            <li><a href="!#">주문배송 조회</a></li>
                            <li><a href="!#">마일리지</a></li>
                            <li><a href="!#">쿠폰</a></li>
                            <li><a href="!#">위시리스트</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
