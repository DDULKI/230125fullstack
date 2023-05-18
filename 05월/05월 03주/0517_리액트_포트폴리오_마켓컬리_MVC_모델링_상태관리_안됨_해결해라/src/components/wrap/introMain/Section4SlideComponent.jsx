import React from 'react';
import $ from 'jquery';
import '../introMain/scss/section4.scss'

export default function Section4Component ({일일특가}){

    

    // 정가, 판매가 금액에 콤머 형식 정규표현식 구현하기
    const commaPrice=(price)=>{
        let value = price.toString();
        //     300  
        // 383,000  
        const regExp = /(^\d+)(\d{3})/g;  // (그룹1)(그룹2)
        // console.log('정가 가져오기 = ' , price );
        // console.log('정가.toString  = ' , value );
        // 가져온 데이터값은 숫자이다 그래서 파란색으로 콘솔로그에 표시
        // 정규표현식 반드시 문자열만 처리가능하다.
        // 문자열형식으로 변환 시키기

        // 반복문 처리 모두처리
        // 리턴문으로 결과값 돌려준다.
        while( regExp.test(value) ){
            return  value.replace(regExp, '$1,$2');
        }        
    }



            // 섹션3 
        // 24시간 일일특가 
        React.useEffect(()=>{
            
            let setId =0;
            function saleTimer(){
                // 1. 타임세일 시작 시점
                let start = new Date('2023-04-28 17:53:33');
                // 2. 현재시간 now
                let now = new Date();
                // 3. 시간+24 일일특가 시간 셋팅 setter함수 
                start.setHours(start.getHours()+24);
                // start.setHours(start.getHours()+6); 6시간 특가 
                // 4. 남은시간(세일종료시간) = 타임시작 시간(+24)-현재시간
                let end = start - now;
                // 5. 카운트 박스 시 분 초 표기 1초간격으로 
                // 6. 남은시간===0 타임종료  현재시간>=셋팅시간 종료 
                // 모두 초기화 일 : 시 : 분: 초 

                // console.log(`setId : ${setId}`);
                // console.log('세일종료 카운트 남은시간');
                // console.log(Math.floor((end/(60*60*24*1000))%24)); // 1일 시간 24시간, 천분의 일초 계산..  
                let eD = Math.floor(end/(60*60*24*1000)); // 날짜 일  
                let eH = Math.floor(end/(60*60*1000)%24); // 날짜 시간
                let eM = Math.floor(end/(60*1000)%60); // 날짜 분
                let eS = Math.floor(end/1000%60); // 날짜 초

                // 현재시간>=타임세일시간
                
                if(now >= start){
                    clearInterval(setId);
                    eD=0;
                    eH=0;
                    eM=0;
                    eS=0;
                    $('.houres').text( eH <10?`0${eH}`:eH);
                    $('.minutes').text( eM <10?`0${eM}`:eM);
                    $('.secondes').text( eS <10?`0${eS}`:eS);
                }
                else{

                    $('.houres').text( eH <10?`0${eH}`:eH);
                    $('.minutes').text( eM <10?`0${eM}`:eM);
                    $('.secondes').text( eS <10?`0${eS}`:eS);
                }
            }
            
            setId = setInterval(saleTimer, 1000);

        },[]);
    return (

            <div className="right">
                    <ul>
                    {              
                        일일특가.map((item)=>{
                            return(
                                <li className="slide slide0" key={item.제품코드}>
                                    <div className="col-gap">
                                        <a href="!#">
                                            <div className="img-box">
                                                <img src={`./images/intro/${item.이미지}`} alt="" />
                                                <span>
                                                    <img src="./images/sub1/icon_cart.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="txt-box">
                                                <ul>
                                                    <li>{item.배송구분}</li>
                                                    <li><strong>[item.제조사]</strong> <em>{item.제품명}</em></li>
                                                    <li>된장소금으로 숙성하여 더욱 깊은 맛</li>
                                                    <li><span className='rate-price'>{item.할인율===0?``:`${Math.round(0.18*100)}%`}</span>{item.할인율 > 0 && (<span className='panme-price'>{commaPrice(10000*(1-0.18))}</span>) }</li>
                                                    <li>{ item.할인율===0? <span className='panme-price'>{commaPrice(item.정가)}</span> : <s>{commaPrice(item.할인율)}</s> }</li>
                                                    <li>{item.판매처}</li>
                                                </ul>    
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            )
                        })     

                    }
                </ul>
            </div>
              
     
 
    );
};
