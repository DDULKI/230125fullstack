import React from 'react';
import LeftNavComponent from './LeftNavComponent';
import './scss/mypage.scss'

export default function UpdateComponent () {
    return (
        <>
        <LeftNavComponent/>
        <div id="Update">
            <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>회원정보</h2>
                        </div>
                        <div className="content">
                            <div className="center-box">
                                <div className='row1'>
                                    <ul>
                                        <li><span>정슬기</span>회원님, 반갑습니다</li>
                                        <li><a href="!#">로그아웃</a></li>
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
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="button-box">
                                <a href="!#">회원정보 수정하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
       
    );
};

