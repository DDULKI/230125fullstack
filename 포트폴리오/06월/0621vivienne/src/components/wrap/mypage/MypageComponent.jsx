import React from 'react';
import './scss/mypage.scss'

export default function UpdateComponent () {
    return (
       
        <div id="Mypage">
            <div className="container">
                    <div className="gap">
                        <div className="title">
                        </div>
                        <div className="content">
                            <nav className="nav">
                                <ul>
                                    <li><h2>MY ACCOUNT</h2></li>
                                    <li><a href="!#">Home</a></li>
                                    <li><a href="!#">회원정보</a></li>
                                    <li><a href="!#">주소록</a></li>
                                    <li><a href="!#">주문배송 조회</a></li>
                                    <li><a href="!#">마일리지</a></li>
                                    <li><a href="!#">쿠폰</a></li>
                                    <li><a href="!#">위시리스트</a></li>
                                </ul>
                            </nav>
                            <div className="center-box">
                                <div className='row1'>
                                    <ul>
                                        <li><h2>회원정보</h2></li>
                                        <li><span>정슬기</span>회원님, 반갑습니다.<a href="!#"> 로그아웃</a></li>
                                        <li><p>마이페이지는 구매상품의 배송추적 및 개인정보 관리를 위한 메뉴입니다.</p></li>
                                    </ul>
                                </div>
                                <div className="row2">
                                    <div className="left-box">
                                        <ul>
                                            <li><span>정슬기</span>님의 구매등급은 일반회원입니다.</li>
                                            <li><button>등급별 혜택보기</button></li>
                                        </ul>
                                    </div>
                                    <div className="right-box">
                                        <ul>
                                            <li>
                                                <div className='left'>현재 구매(확정) 금액</div>
                                                <div className="right">0원</div>
                                            </li>
                                            <li>
                                                <div className='left'>VIP등급까지 남은 금액</div>
                                                <div className="right">1,000,000원</div>
                                            </li>
                                            <li>
                                            <div className="button-box">
                                                <button><a href="!#">회원정보 수정하기</a></button>
                                            </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
       
        
       
    );
};

