import React from 'react';
import $ from 'jquery';
import { Link, useLocation } from 'react-router-dom';


export default function Section1Component(){

    const location = useLocation();

    // React.useEffect(()=>{
    //     // 헤더영역에 .right의 위에서 .right의 offset().top 포지션 스크롤탑값이 도달시 
    //     // .left, .center 에 on 클래스를 추가해라
    //     // const rightTop = $('#section1 .right').offset().top
    //     $(window).scroll(function(){

    //         // console.log(rightTop);
    //         // console.log($(window).scrollTop());
    //         if($(window).scrollTop()>=rightTop){
    //             $('#section1 .left, #secition1 .center').addClass('on');
    //         }
    //         else {
    //             $('#section1 .left, #section1 .center').removeClass('on');
    //         }
    //     });

    // },[]);

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
                                <li>
                                    <Link to="/signin" className={location.pathname==='/signin'?'on':''}>로그인</Link>
                                    <i>/</i>
                                    <Link to="/signup" className={location.pathname==='/signup'?'on':''} >회원가입</Link>
                                </li>
                                <li><h4>쇼핑백 </h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};