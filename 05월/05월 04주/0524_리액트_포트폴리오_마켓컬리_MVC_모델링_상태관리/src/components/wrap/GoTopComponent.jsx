import React from 'react';
import goTop from './img/go_top/go_top.png'
import './scss/go_top.scss';
import $ from 'jquery';

export default function GoTopComponent(){
    
    React.useEffect(()=>{
        let sec4Top = $('#section4').offset().top;
        let goTop = $('#goTop');
        let gotopBtn = $('.gotop-btn');

        // console.log( $("#section4 img").offset().top); // 661.5

        // 스크롤이벤트
        $(window).scroll(function(){
            if($(window).scrollTop() >= sec4Top){
                goTop.stop().animate({bottom:'25px'})
            }
            else(
                goTop.stop().animate({bottom:-'-50px'})
            )
        });
   


        // Smooth Scrolling
        gotopBtn.on({
            click(){
                $('html, body').stop().animate({scrollTop: 0}, 600);
            }
        });
        // 스크롤 이벤트 


    },[]);

    return (
        <div id='goTop'>
            <a href="#wrap" className='gotop-btn'>
                <img src={goTop} alt="" />
            </a>
        </div>
    );
};
