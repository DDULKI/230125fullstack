(function($, window, document){
    const amore = {
        init() {
            this.header();
            this.section1();
        },
        header (){
            // 메인버튼 클릭 이벤트 : 스무스 스크롤링 이벤트 구현 
           
        },
        section1(){
            let cnt = 0;
            let setId = 0;// 3인경우

            // 1. 메인슬라이드 함수 
            function mainSlide(){
                $('.slid-wrap').stop().animate({left: `${-100*cnt}%`}, 1000, 'easeInOutExpo', function(){
                    if(cnt > 2) cnt=0;
                    if(cnt < 0) cnt=2; // 첫번째 왼쪽으로 이동하면 마지막 슬라이드 
                    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 0); // 처음으로 
                });

                //페이지네이션 함수
                PageNation();
            }
            
            // 2-1 다음카운트함수
            function nextCount (){
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
                setInterval(nextCount, 4000);
            }
            autoTimer();

            // 4. 다음 슬라이드, 이전 슬라이드 
            // 타이머 일시 정지 
            // 좌우 화살버튼에 마우스 올리면 
            // 슬라이드 컨테이너 박스에 마우스 올리면 
            // 슬라이드 컨테이너 박스에 마우스를 떠나면 
            $('.arrow-next-btn').on({
                mouseenter(){
                    clearInterval(setId);
                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    if(!$('.slide-wrap').is(':animated')){
                        nextCount();
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
            })
        }
    }
    amore.init();
})(jQuery, window, document); // 즉시 실행 함수를 써라! 

