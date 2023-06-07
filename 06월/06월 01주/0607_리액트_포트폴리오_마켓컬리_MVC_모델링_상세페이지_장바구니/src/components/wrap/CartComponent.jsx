import React from 'react';
import './scss/cart.scss';

export default function CartComponent(){
    return (
        <div id='cart'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>장바구니</h1>
                    </div>
                    <div className="content">
                        <div className="left">
                            <ul>
                                <li>
                                    {/* 헤딩 */}
                                    <span>
                                        <button className='select-all-btn on'>
                                            전체선택
                                            <strong>
                                                (
                                                    <em className='select-count'>{3}</em>
                                                    <i>/</i>
                                                    <em className='cart-total'>{5}</em>
                                                )
                                            </strong>
                                        </button>
                                        <i>|</i> 
                                        <button className='delete-btn on'>선택삭제</button>
                                    </span>
                                    <li>
                                        <dl>
                                            <dt>
                                                <div>
                                                    <img src="./img/cart/mulbang.svg" alt="" />
                                                    <h3>냉장 상품</h3>
                                                </div>
                                                <div>
                                                    <button><img src="./img/cart/jub.svg" alt="" /></button>
                                                </div>
                                            </dt>
                                            <dd>
                                                <ul>
                                                    <li>
                                                        <input type="checkbox" id='chk1' name='chk' value='PRODUCT0001' />
                                                    </li>
                                                    <li>
                                                        <span className='cart-small-bgimg'></span>
                                                    </li>
                                                    <li>
                                                        <a href="!#">[Better me] 그린&레드페퍼 닭가슴살 (1개입)</a>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <button className='sub-btn'>빼기</button>
                                                            <strong>7</strong>
                                                            <button className='add-btn'>더하기</button>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span>13,300원</span>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className='del-bgimg-btn'><img src="./img/cart/x.svg" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                    </li>
                                </li>
                                <li>
                                    {/* 상품리스트 반복문처리 그룹별로(필터링) */}
                                </li>
                                <li>
                                    {/* 푸터 */}
                                     <span>
                                        <img src="" alt="" />
                                        <button className='select-btn'>
                                            전체선택
                                            <strong>
                                                <em className='select-count'>3</em>
                                                <em className='cart-total'>5</em>
                                            </strong>
                                        </button>
                                        <i>|</i> 
                                        <button className='delete-btn'>선택삭제</button>
                                    </span>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>
                                    <h3>
                                        <img src="./img/cart/map.svg" alt="" />배송지
                                    </h3>
                                    <p>
                                        <em>배송지를 등록</em><br />
                                        구매 가능한 상품을 확인하세요!
                                    </p>
                                    <button>
                                        <img src="./img/cart/little_serch.svg" alt="" />
                                        주소 검색
                                    </button>
                                </li>
                                <li>
                                    <div>
                                        <div className="row1">
                                            <p><strong>상품금액</strong> <strong>74,280</strong> <em>원</em></p>
                                            <p>
                                                <strong>상품할인금액</strong> 
                                                <strong>0</strong> 
                                                <em>원</em>
                                                <span>로그인 후 할인 금액 적용</span>
                                            </p>
                                            <p>
                                                <strong>배송비</strong>
                                                <strong>0</strong> 
                                                <em>원</em>
                                            </p>
                                            <p><strong>상품금액</strong></p>
                                        </div>
                                        <div className="row2">
                                            <strong>결제예정금액</strong>
                                            <strong>74,280</strong> 
                                            <em>원</em>
                                            <span>적립</span>
                                            로그인 후 회원 등급에 따라 적립
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button>배송지를 입력해주세요</button>
                                    <p>
                                        [주문완료] 상태일 경우에만 주문 취소 가능합니다.
                                        [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

