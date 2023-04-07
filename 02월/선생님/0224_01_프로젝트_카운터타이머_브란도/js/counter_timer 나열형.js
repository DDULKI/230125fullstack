(function($, window, document){

    const gallery = {
        init(){
            this.main();
        },
        main(){


           const num = $('#sectionCounter .num');


           let countNum1 = 7823/1000; // Number
           let countNum2 = 9015/1000; // Number
           let countNum3 = 3614/1000; // Number
           let countNum4 = 1770/1000; // Number

           let countSum1 = 0;    // Number 누적시켜서 저장하는 
           let countSum2 = 0;    // Number
           let countSum3 = 0;    // Number
           let countSum4 = 0;    // Number
            
           let setId = 0    // Number
           let cnt = 0;


           function countFn () {
            cnt++ ; // 1~1000

            
                
                // countSum1 += countNum1 ; // 7.823;   
                // countSum2 += countNum2 ; // 9.015; 
                // countSum3 += countNum3 ; // 3.614; 
                // countSum4 += countNum4 ; // 1.770; 


                num.eq(0).html( Math.round(countSum1) );
                countSum1 += countNum1 ;// 7.823; 
                if(countSum1>7823){
                    clearInterval(setId);
                }

                num.eq(1).html( Math.round(countSum2) );

                countSum2 += countNum2 ; // 9.015; 
             
                num.eq(2).html( Math.round(countSum3) );
                countSum3 += countNum3 ; // 3.614; 
        
                num.eq(3).html( Math.round(countSum4) );
                countSum4 += countNum4 ; // 1.770; 
           }
           
           setInterval(countFn, 1000);
            

        }
    }
    conter_timer.init();

})(jQuery, window, document);