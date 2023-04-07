((window, document, undefined)=>{

    // 객체는 첫글자 소문자 중단어 대문자 => 카멜 케이스 기법

    // const designHotelArray = new Array(); // 생성자 방식
    //
    // const designHotelObject = new Object(); // 생성자 방식
    // designHotelObject = {}
    const designHotelObject = { //리터럴  
        init(){
            this.mainMethod();
        },
        mainMethod(){
            // console.log('designHotelObject mainMethod 메서드 실행');
        }
    }
    designHotelObject.init(); // 객체이름. init();



    // 클래스는 첫글자 대문자 중간단어도 대문자 => 파스칼 케이스 기법
    class DesignHotelClass { // 클래스 선언
        init(){
            this.mainMethod();
        }
        mainMethod(){
            // console.log(' class DesignHotelClass mainMethod 메서드 실행');
            // 창너비
            // 창높이 
            // 비디오너비
            // 비디오높이 
            // 마진 left 
            // 마진 top 
            const $video = document.querySelector('#videoHotel video');
            let winW = window.innerWidth; 
            let winH = window.innerHeight;
            let vidW = $video.clientWidth;
            let vidH = $video.clientHeight;
            let marT = (winH-vidH)/2;
            let marL = (winW-vidW)/2;
            let setId = 0;





            // 로딩시 강제 실행 
            setId = setInterval(resizeVideo, 100); 
           

            // 반응형 함수 
            function resizeVideo (){
               
                winW = $(window).innerWidth(); 
                winH = $(window).innerHeight();
                vidW = $('#videoHotel video').innerWidth(); 
                vidH = $('#videoHotel video').innerHeight(); 
                marT = (winH-vidH)/2;
                marL = (winW-vidW)/2;
                let setId = 0;
                
                console.log(`marL ${marL}`);
                console.log(`marL ${marT}`);

                console.log(`winH ${winH}`);
                console.log(`winW ${winW}`);

                console.log(`vidW ${vidW}`);
                console.log(`vidW ${vidW}`);


                
                if(winW > vidW){
                   $video.style.width = `${winW}px`; 
                   $video.style.height = 'auto'; 
                }
                if(winH > vidH){
                   //$video.css({width: 'auto', height: winH}); // 창높이를 기준으로 너비를 정렬 마진으로
                
                   $video.style.width = 'auto'; 
                   $video.style.height = `${winW}px`; 
                }
               // $video.css({marginTop: marT, marginLeft: marL});
                $video.style.marginTop = `${marT}px`;
                $video.style.marginLeft = `${marL}px`;
            }

            // 반응형  나의 궁금 사항 달러를 붙이는 이유는 ? 
            $(window).resize(function(){
                clearInterval(setId);
                resizeVideo();
            });


        }
    }
    
    // 클래스도 함수()이다. 
    // 클래스는 반드시 생성자를 생성하고 호출 실행한다. 
    const newDesignHotelClass = new DesignHotelClass();
    newDesignHotelClass.init(); /* 생성자를 생성하여 메서드 호출 실행 */

})(window, document);

// 클래스는 콤마를 쓸 필요가 없다. 