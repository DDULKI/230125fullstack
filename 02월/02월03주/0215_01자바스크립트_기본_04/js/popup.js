// <!-- <body onLoad="popup(500, 700);"> -->
        
        // 팝업 함수
        // const _popupWidth = 1000; //전역(Global) 변수 = 전체영역의 변수.. 
        // const _popupHeight = 1000;
        let _popupWidth = 1000;
        let _popupHeight = 1000;

        console.log(`popupWidth ${_popupWidth}`)
        console.log(`popupHeight ${_popupHeight}`)
        popup(_popupWidth, _popupHeight); // 함수 호출시 아규먼트(전달인자값을) 사용

        //정의한 함수 : 절대 실행안함 => 함수는 반드시 호출 해야만 실행한다. 
        
        // (function popup(){ // 함수 안에서 사용되는 변수 지역(Local) 변수 / 선언 함수라서 어느 위치에 있든지 호출이 가능하다. 
        //   // window.open('팝업.html','창이름','너비=500, 높이=600, X축좌표=0, Y축좌표=0')
        
        //   const windowName = 'popup_20230215';
        //   const windowName2 = 'popup_20230216';
        //   const popupWidth = 530; // 변수에 값을 대입하면서 선언시는 const 지정가능하다. 
        //   const popupHeight = 570;
        //   const popupLeft = 0;
        //   const popupTop = 0;
        //   const popupLeft2 = 200;
        //   const popupTop2 = 200;

        //    console.log(`popupWidth ${popupWidth}`);
        //    console.log(`popupHeight ${popupHeight}`);

        //   window.open('./popup.html', windowName,`width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop}`)
        //   window.open('./popup2.html', windowName2,`width=${popupWidth},height=${popupHeight},left=${popupLeft2},top=${popupTop2}`)
        // })(); //즉시 표현 함수식



      