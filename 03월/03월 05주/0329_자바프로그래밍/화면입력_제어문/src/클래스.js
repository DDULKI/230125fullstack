(()=>{

    class Kurly {
        init(){
            this.section1();
        }   
        section1(){
            console.log('섹션1 메서드입니다.')
        }
        next(){
            console.log('일반');
        }
        nextInt(){
            console.log('정수');
        }
        nextDouble(){
            console.log('실수');
        }
    }

    // 클래스는 함수이다. 
    const Kurly = new Kurly();
    Kurly.init();
    Kurly.next();
    Kurly.nextInt();



})();