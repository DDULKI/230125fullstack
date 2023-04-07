// $(function(){ // 제이쿼리 선언문 = > $ 사인이 제이쿼리 라이브러리와 충돌성이 있다. 
//     console.log($); // $는 제이쿼리  
// });

(function($){ // 내부변수

    // 객체 생성 : 변수의 중복을 피한다. 
    const wedding = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){


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
           // 메인슬라이드 웹개발 
           // 우측에서 좌측으로 0.6초간 이동하고 
           // 3초간 대기(보여줌)한다. 
           // let cnt = 3; 리턴 0으로
           let cnt = 0;
           // 자동타이머를 이용 슬라이드 구현
           //   mainSlide();
           // 1. 메인슬라이드함수()
            function mainSlide(){ // 애니메이션 이 버블링 
                $('.slide-wrap').stop().animate({left: `${-100 * cnt}%` }, 1000,'easeInOutExpo', function(){
                    if(cnt===3 ) cnt=0; // 마지막에서(처음) 리턴 처음으로 순간이동
                    // 한줄일 경우, {}를 안해도된다. 
                    $('.slide-wrap').stop().animate({left: `${-100 * cnt}%` }, 0); //리턴할 떄 타임 제로
                });
            }

           // 2. 다음카운트함수()
            function nextCount(){ 
                cnt++; // 1 증강연산자 
                mainSlide(); //메인슬라이드함수 호출 
                console.log(cnt);
            }
            nextCount();
            

           // 3. 자동타이머함수()
           
            function autoTimer(){
                setInterval(function(){
                    nextCount();
                   },3000); //3초간격으로 무한하게 반복 수행
        
            }
            
            autoTimer(); //로딩시 1회 실행

        },
        section2(){
        
        },
        section3(){
           
        }
    }

    wedding.init();



})(jQuery); // 즉시 실행 함수를 써라! IIFE 



// (function(){
//     alert('즉시실행함수');
// })();