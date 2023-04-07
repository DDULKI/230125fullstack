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
            console.log($('#section6').offset().top); // top 값
            console.log($('#section6').offset().left); // left 값


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
            let t = false;
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