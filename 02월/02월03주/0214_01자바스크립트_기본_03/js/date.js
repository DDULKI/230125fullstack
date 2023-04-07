// const 는 오늘 날짜를 변경할 때, 사용하지 않음. 
//const newDate = new Date(); // 날짜 객체 불변 변수
let newDate = new Date(); // 날짜 객체 가변 변수

const day = ['일','월','화','수','목','금','토']; // 7개의 방에 요일 저장 


//날짜
console.log(`표준시 new Date()        ${newDate}`); // 날짜 확인 
console.log(`년 newDate.getFullYear() ${newDate.getFullYear()}년`); // 년을 가져오겠다~!   //메쏘드는 객체의 행동대장! 
console.log(`월newDate.getMonth()     ${newDate.getMonth()+1}월`); // 월을 가져오겠다.  0~11 
console.log(`일newDate.getDate()      ${newDate.getDate()}일`); // 일을 가져오겠다. 
console.log(`요일 newDate.getDay()    ${newDate.getDay()}요일`); // 요일을 가져오겠다. 0(일)1(월)2(화)3(수)~6(토)
console.log(`요일 newDate.getDay()    ${day[newDate.getDay()]}요일`);



// 조건문이 있어야 요일을 표기한다
// 배열 [] day[0] day[2]=> 화

// 0000-00-00
console.log( `${newDate.getFullYear()}-${newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}`: newDate.getMonth()+1}-${newDate.getDate()}`);

//조건문 
//if(){}
//switch() case{}

// 삼항연산자 
// 조건식(1항) ? 참(2항) : 거짓(3항);
// 월 10보다 작으면 ? `0${월}` : 월 
// 2 < 10 ? 02 : 2
newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1


//시간 
console.log( newDate.getHours() ); //시
console.log( newDate.getMinutes() ); //분
console.log( newDate.getSeconds() ); //초

// 00:00:00
console.log( `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}` );


// 게터 getter() : 날짜와 시간 가져오기
// 세터 setter() : 날짜와 시간 변경하기

// 현재 년도에 1년을 더한다. setFullYear( 현재년도 + 1 );
// 현재 월에 1년을 더한다. setMonth( 현재월 + 1 );
// 현재 일에 1일을 더한다. setDate( 현재일 + 1 );
// 현재 일에 1일을 더한다. setHours( 현재시 + 1 );
// 현재 일에 1일을 더한다. setMinute( 현재분 + 1 );
// 현재 일에 1일을 더한다. setSeconds( 현재초 + 1 );

// newDate.setFullYear(오늘현재가져오기 + 1);
newDate.setFullYear(newDate.getFullYear() + 1); // 2024 = 2024+1
//설정된 년도 확인하기 
console.log(newDate.getFullYear(), '1년 후', newDate.getFullYear());

// 날짜를 반환 표준시로 
console.log(newDate.toUTCString());
console.log(newDate.toGMTString());

// 3개월 더하기 
newDate = new Date();

// newDate.setMonth( 현재월을가져오기 + 3);
console.log('셋팅 이전 상태 월',newDate.getMonth()+1);
newDate.setMonth( newDate.getMonth() + 3);
console.log('셋팅 이후 상태 월',newDate.getMonth()+1);
console.log(newDate.toUTCString());

// 7일 더하기 
newDate = new Date();

// newDate.setMonth( 현재일을가져오기 + 7);
console.log('셋팅 이전 상태 일',newDate.getDate());
newDate.setDate( newDate.getDate() + 7);
console.log('셋팅 이후 상태 일',newDate.getMonth());
console.log(newDate.toUTCString());


// 10시간 더하기 
newDate = new Date();

// newDate.setMonth( 현재시를가져오기 + 10);
console.log('셋팅 이전 상태 시',newDate.getHours());
newDate.setHours( newDate.getHours() + 10);
console.log('셋팅 이후 상태 시',newDate.getHours());
console.log(newDate.toUTCString()); // 반드시 표준시로 설정해 줘야한다. 

// 현재 시 분 초 띄우기 
// 1초단위로 현재 날짜객체 가져오기                
// 자동타이머
// setInterval(function(){
//     newDate = new Date();
//     console.log ( `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
// }, 1000) // 1초간격으로 계속 실행