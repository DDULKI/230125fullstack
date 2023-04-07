// $(function(){ // 제이쿼리 선언문 = > $ 사인이 제이쿼리 라이브러리와 충돌성이 있다. 
//     console.log($); // $는 제이쿼리  
// });

(function($, window, document){ // 내부변수

    // 객체 생성 : 변수의 중복을 피한다. 
    const wedding = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){


            // 패럴럭스 구현
            // 스크롤 탑값이 아래로 내려가면 헤더에 on 클래스를 추가한다. 
            // 스크롤 탑값이 위로 올라가면 헤더에 on 클래스를 삭제한다. 

            console.log(`윈도우 스크롤 이벤트 $(window).scrollTop() ${$(window).scrollTop()}`); /* 스크롤 탑값 */

            // $(window).scrollTop() 값은 스크롤 이벤트가 발생 되어야만 동작한다. 
            // $(window).resize(); // 창크기 높이 너비가 변하면 동작 
         
            let newScroll = $(window).scrollTop(); // 최신 스크롤값
            let oldScroll = newScroll ;            // 이전 스크롤값


            $(window).scroll(function(e){
                
                newScroll = $(window).scrollTop();
                // console.log(newScroll);
                
               // console.log(`newScroll-oldScroll ${newScroll-oldScroll}`);
                if(newScroll-oldScroll>0){
                    // console.log( '아래로' );
                    $('#header').addClass('on');
                    $('#header').removeClass('off');
                }
                if(newScroll-oldScroll<0){
                    // console.log( '위로' );
                    $('#header').addClass('off');
                    $('#header').removeClass('on');
                }


                oldScroll = newScroll;
                // console.log(oldScroll);
            }); // 스크롤값이 변경되면 동작

            // $(window).scroll(function(e){
            //     newScroll = $(window).scroll();

            //     if( newScroll-oldScroll > 0) {
            //         $('#header').addClass('on');
            //         $('#header').removeClass('off');
            //     }
            //     if( newScroll-oldScroll < 0) {
            //         $('#header').addClass('off');
            //         $('#header').removeClass('on');
            //     }

            //     oldScroll = newScroll;

            // });

         








            // 로딩시 바로가기 메뉴의 포지션 탑값을 가져오기 
            // 홈페이지 처음부터 섹션 6번까지의 길이를 구할때 offset
            // console.log($('#section6').offset().top); // top 값
            // console.log($('#section6').offset().left); // left 값


            // 메인버튼 클릭 이벤트 : 스무스 스크롤링 이벤트 구현 
            $('#mobile .main-btn').on({
                click(e){
                    e.preventDefault();
                    $(this).find('.line').toggleClass('on');
                    // console.log($(this).attr('href'))
                    // $('html,body').animate({ scrollTop: $($(this).attr('href')).offset().top /* 섹션별탑값 */ }, 500);
                }
            });












            // 모바일 버튼 이벤트 
            // 모바일 메뉴 햄버거메뉴 클릭 이벤트
            // 클릭하면
            // 이 버튼 안에 자식요소에서 line 클래스를 찾아서 find('.line')
            // on 클래스 추가 (addClass('on'))
            // $('.mobile-btn').on({
            //     click(){
            //     //    $(this).find('.line').addClass('on'); 
            //     //    $(this).find('.line').removeClass('on'); 
            //           $(this).find('.line').toggleClass('on'); // 버튼을 동시에 수행할 수 있다. 
            //     }
            // });
            // '7' === 7 true 등호 3개는 다르다고 나온다. 
            // '7' == 7 false 등호 2개는 같다고 나온다. 

            let t = false; // 토글 구현 : 스위칭
            $('.mobile-btn').on({
                // click(){
                //    if(t===false){ // t가 false 이면 true 로 
                //         t=true;
                //         $(this).find('.line').addClass('on'); 
                //    }
                //    else{   // t가 true 이면 false 로 변환
                //         t=false;
                //         $(this).find('.line').removeClass('on'); 
                //    }
                
                // }
                click(){
                    if(t===false){ // t가 0 이면 1 로 
                         t=1;
                         $(this).find('.line').addClass('on'); 
                    }
                    else{   // t가 1 이면 0 로 변환
                         t=0;
                         $(this).find('.line').removeClass('on'); 
                    }
                 
                 }
            });

        },
        section1(){
         const $slide = $('#section1 .slide');
         const $arrowNextBtn = $('#section1 .arrow-next-btn');
         const $arrowPrevBtn = $('#section1 .arrow-prev-btn');
         const $pageBtn      = $('#section1 .page-btn');
         let setId = 0; 
         let cnt = 0; 

         // 1-1. 메인 다음슬라이드함수 : 페이드인 => 현재슬라이드를 덮고 부드럽게 보이는 다음슬라이드
         function mainNextSlide(){
            $slide                     .css({zIndex: 1, opacity: 1});
            $slide.eq(cnt===0? 2:cnt-1).css({zIndex:2}); // 현재 슬라이드 
            $slide.eq(cnt)             .css({zIndex:3}).stop().animate({opacity:0}, 0).animate({opacity:1}, 1000); // 현재 슬라이드 

         }

        },
        section2(){
        
        },
        section3(){
           
        }
    }

    wedding.init();



})(jQuery, window, document); // 즉시 실행 함수를 써라! IIFE 



// (function(){
//     alert('즉시실행함수');
// })();