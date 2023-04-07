// const newDate = new Date(); 
let newDate = new Date();

const day = ['일','월','화','수','목','금','토'];

console.log(`표준시 new Date()          ${newDate}`);
console.log(`년 newDate.getFullYear()   ${newDate.getFullYear()}년`);
console.log(`월 newDate.getMonth()+1    ${newDate.getMonth(+1)}월`);
console.log(`일 newDate.getDate()       ${newDate.getDate()}일`)
console.log(`요일 newDate.getDay()      ${newDate.getDay()}요일`)


//조건문 
console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1}-${newDate.getDate()}`);
