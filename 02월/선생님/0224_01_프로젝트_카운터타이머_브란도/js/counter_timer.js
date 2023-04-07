(function($, window, document){

    const gallery = {
        init(){
            this.main();
        },
        main(){


           const num = $('#sectionCounter .num');

           let countNum = [ 7823000, 9015000,  3614000, 1770000];
           let countSum = [0,0,0,0];    // 누적 변수는 반드시 초기값 설정
           let setId = 0    // Number

           // 천단위 마다 콤마형식으로 변환(치환 Replace)하기 
           // 스트링(문자열).replace(정규표현식REGEXP, '그룹1, 그룹2')
           // 그룹은 소괄호 ()() 공백은 절대 사용하면 안됨. 
           // 시작문자 숫자\d 1자이상+ 234 뒤에는 반드시 숫자 3자리{3,4}
           // 시작문자 숫자\d 1자이상+ 1,234
           // 시작문자 숫자\d 1자이상+ 156,234
           // 시작문자 숫자\d 1자이상+ 3,156,234
           // const regexp = /(그룹1)(그룹2)/   //g; 글로벌  ^ 시작문자 , [] 부정, \d는 숫자를 이야기할 때.  
           // const regexp = /$1)($2)/   달러사인이 그룹 이름으로 지정한다. 
           const regexp = /(^\d+)(\d{3})/g;       

            // 콤마형식 반복문 사용 구현하기 000, 000, 000
            // 1회 구현하기 
            let number = 7823;
            let number2 = 823;
            let number3 = String(3123451);
             console.log(String(number).replace(regexp, '$1,$2'));

            // 반복문 활용
            // 정규 표현식참 거짓 이걸 확인 테스트 
            // 정규표현식.test('문자열')
            // regexp.test('String(number)')
            console.log(regexp.test(String(number)));
            console.log(regexp.test(String(number2)));
            
            function commaFn(value){
                number3 =String(value);
                // while 문은 참일 때 실행이 된다. true 만! 사용 가능. 
              
                while(regexp.test(number3)){
                    number3 = number3.replace(regexp, '$1,$2') ;
                    console.log(nuber3);
                 }
                 // 화일문 끝나면 리턴 값을 되돌려 보내줘라. 
                 return number3;
            }


            // while 문은 참일 때 실행이 된다. true 만! 사용 가능. 
            while(regexp.test(number3)){
                  number3 = number3.replace(regexp, '$1,$2') ;
                
            }
            console.log(String(number3).replace(regexp, '$1,$2') );

           function countFn () {
                for(let i=0; i<countNum.length; i++){
                    countSum[i] += (countNum[i]/1000);
                }

                console.log(countSum) ; // 배열 4개 누적값 확인 . 

                if(countSum[0]>countNum[0]){
                    clearInterval(setId);
                }

                for(let i=0; i<countNum.length; i++){
                    // num.eq(i).html( String(Math.round((countSum[i])).replace(regexp,'$1,$2') ) );
                    num.eq(i).html( (Math.round((countSum[i])).replace(regexp,'$1,$2') ) ); // 함수 호출 반복문 정규 표현식 
                }
               
           }
           
           setId = setInterval(countFn, 10);
            

        }
    }
    gallery.init();


})(jQuery, window, document);