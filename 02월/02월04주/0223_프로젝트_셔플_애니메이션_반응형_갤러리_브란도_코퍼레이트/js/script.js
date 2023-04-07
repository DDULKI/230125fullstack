(function($){

    const obj = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){
            console.log('header');
            
        },
        section1(){
            console.log('section1');
        },
        section2(){
            console.log('section2');
        },
        section3(){
            console.log('section3');
        }
    }

    obj.init();

})(jQuery);
