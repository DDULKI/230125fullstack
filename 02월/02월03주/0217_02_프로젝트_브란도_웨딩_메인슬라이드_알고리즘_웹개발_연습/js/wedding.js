// $(function(){ // 제이쿼리 선언문 = > $ 사인이 제이쿼리 라이브러리와 충돌성이 있다. 
//     console.log($); // $는 제이쿼리  
// });

(function($){

    const wedding = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){
            $('#mobile .main-btn').on({
                click(e){
                    e.preventDefault();
                    $(this).find('.line').toggleClass('on');
                }
            });

            let t = false; // 토글 구현 : 스위칭
            $('.mobile-btn').on({
                click(){
                    if(t===false){
                        t=1;
                        $(this).find('.line').addClass('on');
                    }
                    else{
                        t=0;
                        $(this).find('.line').removeClass('on');
                    }
                }
            });
        },
        section1(){
            let cnt = 0;
            let setId = 0;

            // 1. 메인슬라이드함수
            function mainSlide(){
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 1000, 'easeInOutExpo', function(){
                    if(cnt > 2) cnt=0;
                    if(cnt < 0) cnt=2;
                    $('.slide-wrap').stop().animate({left: `${-100*cnt}%`}, 0);
                });
            }
            // 2-1 다음카운트함수
            function nextCount(){
                cnt++;
                mainSlide();
            }

            // 2-2 이전카운트함수 
            function prevCount(){
                cnt--;
                mainSlide();
            }

            //3. 자동타이머함수
            function autoTimer(){
                setInterval(nextCount, 4000);
                console.log(setId);
            }
            autoTimer();

            //4. 다음 슬라이드, 이전 슬라이드 
            // 타이머 일시정지 
            // 좌우화살버튼에 마우스 올리면
            // 슬라이드 컨테이너 박스에 마우스 올리면 .. 
            // 슬라이드 컨테이너 박스에 마우스를 떠나면 
            $('.arrow-next-btn').on({
                mouseenter(){
                    clearInterval(setId);
                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    // 슬라이드 랩퍼 박스가 애니메이션이 진행 중 아니면 다음 슬라이드 호출
                    if (!$('.slide-wrap').is(':animated')){
                        nextCount(); // 다음슬라이드 
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
                click(){
                    if(!$('.slide-wrap').is(':animated')){
                    prevCount(); // 이전 슬라이드 
                    }
                }
            });

            //5. 터치 스와이프 
            // 터치는 section1 
            // 마우스로 우측에서 좌측으로 터치하면 방향을 계산하는 알고리즘
            // 마우스로 좌측에서 우측으로 터치하면 방향을 계산하는 알고리즘
            let touchStart = 0;
            let touchEnd = 0;
            let mouseDown = false; 

            $('#section1').on({
                mousedown(event){
                    clearInterval(setId);
                    mouseDown=true; 
                    touchStart = event.clientX;
                },
                mouseup(event){
                   touchEnd = event.clientX;
                
                   if(touchStart - touchEnd > 0){
                        if(!$('.slide-wrap').is(':animated')){
                            nextCount();
                        }
                   }
                   if(touchStart - touchEnd < 0) {
                        if(!$('.slide-wrap').is(':animated')){
                            prevCount();
                        }
                   }
                 mouseDown=false;
                    },
                    mousemove(e){
                        if(mouseDown!==true) return;
                        $('.slide-wrap').css({left:e.clientX});

                    }
                });
            },
            section2(){

            },
            section3(){

            },
        }       
        wedding.init();


})(jQuery);