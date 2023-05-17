import React from 'react';

export default function Section3SlideComponen ({상품}){
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
        
    
    return (

        <div className="slide-container">
            <div className="slide-view">
                <ul className="slide-wrap">


                    {              
                        상품.map((item)=>{
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
        </div>

  
    );
};

