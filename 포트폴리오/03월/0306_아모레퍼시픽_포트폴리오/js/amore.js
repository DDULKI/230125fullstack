(function($, window, document){
    const amore = {
        init() {
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.footer();
        },
        header (){
            // 메인버튼 클릭 이벤트 : 스무스 스크롤링 이벤트 구현 
           
        },
        section1(){
            const $slide = $('#section1 .slide');
            const $arrowNextBtn = $('#section1 .arrow-next-btn');
            const $arrowPrevBtn = $('#section1 .arrow-prev-btn');
            const $pageBtn      = $('#section1 .page-btn');
        
            let cnt = 0;
            let setId = 0;
            let imsi = null; 

            // 1-1. 메인슬라이드 함수 
            function mainNextSlide(){
                console.log( imsi, cnt);
                $slide          .css({zIndex: 1, opacity:1});
                $slide.eq(imsi!==null?imsi:(cnt===0?2:cnt-1)).css({zIndex: 2}); // 현재슬라이드 
                $slide.eq(cnt)        .css({zIndex: 3}).stop().animate({opacity:0}, 0).animate({opacity:1}, 1000); // 다음슬라이드 
                pageBtn();
            }
            
            // 1-2. 메인 이전슬라이드함수 : 페이드아웃 => 현재슬라이드를 부드럽게 사라지게하여 바로아래 부드럽게 보이는 이전슬라이드 
            function mainPrevSlide(){
                console.log( imsi, cnt);
                $slide          .css({zIndex: 1, opacity:1});
                $slide.eq(cnt)  .css({zIndex: 2}); // 이전슬라이드 
                $slide.eq(imsi!==null?imsi:(cnt===2?0:cnt+1)).css({zIndex: 3}).stop().animate({opacity:1}, 0).animate({opacity:0}, 1000);         
                pageBtn();
            }
            
            // 2-1. 다음(next)카운트함수 
            function nextCount(){
                cnt++;
                if(cnt>2){ // 마지막 슬라이드이면 처음으로 리턴 초기화 0으로 
                    cnt=0;
                }
                mainNextSlide();
            }

            
            // 2-2 이전(perv)카운트함수
            function prevCount(){
                cnt--;
                if(cnt<0){
                    cnt=2;
                }
                mainPrevSlide();
            }

            // 3. 자동타이머함수
            function autoTimer(){
                setId = setInterval(nextCount, 4000);
            }
            autoTimer();

            // 4-1. 다음화살버튼클릭 이벤트 
            $arrowNextBtn.on({
                click(e){
                    e.preventDefault();
                    if( !$slide.is(':animated')){
                        nextCount();
                        clearInterval(setId);
                    }
                }
            })

            // 4-2. 이전화살버튼클릭 이벤트
            $arrowPrevBtn.on({
                click(e){
                    e.preventDefault();
                    if(!$slide.is(':animated')){
                        prevCount();
                        clearInterval(setId);
                    }
                }
            })

            // 5. 페이지버튼 이벤트 함수
            function pageBtn(){
                $pageBtn.removeClass('on');
                $pageBtn.eq(cnt > 2 ? 0 : cnt).addClass('on');
            }

            // 6. 페이지버튼 클릭이벤트 
            $pageBtn.each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        clearInterval(setId);

                        if(cnt < idx){
                            if(Math.abs(idx-cnt)>=2){
                                imsi=cnt;
                            }
                            else{
                                imsi=null;
                            }
                            cnt=idx;
                        }
                        if(cnt>idx){
                            if (Math.abs(idx-cnt)>=2){
                                imsi=cnt;
                            }
                            else{
                                imsi=null;
                            }
                            cnt=idx;
                        }

                       
                        mainNextSlide();
                    }
                });
            });

            // // 7. 화면을 열 때마다 글씨가 천천히 보여지는 효과 
            // let observer = new IntersectionObserver((e)=>{
            //     e.forEach((박스)=>{
            //         if (박스.intersectiong){
            //             박스.target.style.opacity = 1;
            //         }
                    
            //     })
            // })


            // document.querySelectorAll('div')
            // observer.observe(div[0]) // html 요소가 화면에 등장하는지 감시해줌
            // observer.observe(div[1])
            // observer.observe(div[2])
            // observer.observe(div[3])
            // observer.observe(div[4])
            // observer.observe(div[5])

        },
        section2(){
            // 패럴럭스 구현
            // 섹션1의 탑값이 200px 아래로 이동시 애니메이션 동작 
            const sec1Top =$('#section1').offset().top + 300;
            
            // 스크롤이벤트
            $(window).scroll(function(){

                // 초기화 
                if($(window).scrollTop() === 0 ){
                    $('#section2 .container,#section2 .title, #section2 .img-box, #section2 .txt-box' ).removeClass('on');
                }
                
                if($(window).scrollTop() >= sec1Top ){
                    $('#section2 .container, #section2 .title, #section2 .img-box, #section2 .txt-box').addClass('on');
                }
            });
        },
        section3(){

        },
        section4(){
            const $arrowNextBtn = $('#section4 .arrow-next-btn');
            const $arrowPrevBtn = $('#section4 .arrow-next-btn');
            const $pageBtn = $('#section4 .page-btn');

            let cnt = 0;
            let setId = 0;
            let imsi = null; 

            // 1-1. 다음화살버튼클릭 이벤트 
            $arrowNextBtn.on({
                click(e){
                    e.preventDefault();
                    if( !$slide.is(':animated')){
                        nextCount();
                        clearInterval(setId);
                    }
                }
            })

            // 1-2. 이전화살버튼클릭 이벤트 
            $arrowPrevBtn.on({
                click(e){
                    e.preventDefault();
                    if(!$slide.is(':animated')){
                        prevCount();
                        clearInterval(setId);
                    }
                }
            })

            // 2. 페이지버튼 이벤트 함수 
            function pageBtn(){
                $pageBtn.removeClass('on');
                $pageBtn.eq(cnt > 2? 0 : cnt).addClass('on');
            }

            // 3. 페이지버튼 클릭이벤트 
            $pageBtn.each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        clearInterval(setId);

                        if(cnt < idx) {
                            if(Math.abs(idx-cnt)>=2){
                                imsi=cnt;
                            }
                            else{
                                imsi=null;
                            }
                            cnt=idx;
                        }
                        if(cnt>idx){
                            if(Math.abs(idx-cnt)>=2){
                                imsi=cnt;
                            }
                            else{
                                imsi=null;
                            }
                            cnt=idx;
                        }
                        mainNextSlide();
                    }
                });
            })


        },
        footer(){

            // 1. 부드럽게 스크롤되는 Top버튼 jqurey.. 
            $(document).ready(function(){
                var speed = 500;
                $(".gotop").css("cursor", "pointer").click(function(){
                    $('body,html').animate({scrollTop:0}, speed);
                });
            });
        }

    }
    amore.init();
})(jQuery, window, document); // 즉시 실행 함수를 써라! 

