"use strict";

// $(function(){ // 제이쿼리 선언문 = > $ 사인이 제이쿼리 라이브러리와 충돌성이 있다. 
//     console.log($); // $는 제이쿼리  
// });
(function ($) {
  // 내부변수
  // 객체 생성 : 변수의 중복을 피한다. 
  var market = {
    init: function init() {
      this.header();
      this.section1();
    },
    header: function header() {
      console.log('header');
    },
    section1: function section1() {
      var cnt = 0; // 1. 메인슬라이드함수

      function mainSlide() {
        $('.slide-wrap').stop().animate({
          left: "".concat(-100 * cnt, "%")
        }, 1000, 'easeInOutExpo', function () {
          if (cnt === 14) cnt = 0;
          $('.slide-wrap').stop().animate({
            left: "".concat(-100 * cnt, "%")
          }, 0); // 처음으로 리턴
        });
      } // 2. 다음카운트함수 


      function nextCount() {
        cnt++;
        mainSlide();
      } // 3. 자동타이머함수


      function autoTimer() {
        setInterval(nextCount, 3000); // 다음카운트함수 3초간격으로 호출하기 
      }

      autoTimer(); // 로딩시 실행
    }
  };
  market.init();
})(jQuery); // 즉시 실행 함수를 써라! IIFE 
// (function(){
//     alert('즉시실행함수');
// })();
//# sourceMappingURL=market.dev.js.map
