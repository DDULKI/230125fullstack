// $(function(){ // 제이쿼리 선언문 = > $ 사인이 제이쿼리 라이브러리와 충돌성이 있다. 
//     console.log($); // $는 제이쿼리  
// });

(function($){ // 내부변수

    // 객체 생성 : 변수의 중복을 피한다. 
    const market = {
        init(){
            this.header();
            this.section1();
        },

        header(){
            console.log('header');
        },
    
     
        section1(){
            let cnt=0;


            // 1. 메인슬라이드함수
            function mainSlide(){
         
                $('.slide-wrap').stop().animate({left: `${-100*cnt}%`} ,1000,'easeInOutExpo', function(){
                    if(cnt===14) cnt=0;
                    $('.slide-wrap').stop().animate({left: `${-100*cnt}%`} ,0); // 처음으로 리턴
                });
            }

            // 2. 다음카운트함수 
            function nextCount(){
                cnt++;
                mainSlide();
            }

           // 2-2 이전카운트함수 
             function prevCount(){
                  cnt--;
                  mainSlide();
          }

            // 3. 자동타이머함수
            function autoTimer(){
                setInterval(nextCount, 3000); // 다음카운트함수 3초간격으로 호출하기 
        
            }
            autoTimer(); // 로딩시 실행

            // 4. 다음 슬라이드, 이전 슬라이드 

            $('.arrow-next-btn').on({
                mouseenter(){
                    clearInterval(setId);
                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    if( !$('.slide-wrap').is(':animated')){
                        nextCount(); // 다음 슬라이드
                    }
                }
            });

            $('.arrow-prev-btn').on({
                mouseenter(){
                    clearInterval(setId);
                },
                mouseleave(){
                    autoTimer();
                },
                click (){
                    if(!$('.slide-wrap').is(':animated')){
                        prevCount();
                    }
                }
            });

            // 5. 터치 스와이프 
            let touchstart = 0;
            let touchEnd = 0;
            let mouseDown = false;
            let dragStart = 0;
            let dragEnd = 0;
            let winWidth = $(window).innerWidth();

            $('#section1').on({
                mousedown(event){
                    winWidth = $(window).innerWidth();
                    clearInterval(setId);
                    mouseDown=true; 
                    touchStart = event.clientX;
                    dragStart = event.clienX - $('.slide-wrap').offset().left-winWidth;
                },
                mouseup(event){
                    touchEnd = event.clientX;

                    if(touchStart - touchEnd > 0) {
                        if(!$('.slide-wrap').is(':ani'))
                    }
                }
            })

        },
     
           
    }

    market.init();



})(jQuery); // 즉시 실행 함수를 써라! IIFE 



// (function(){
//     alert('즉시실행함수');
// })();