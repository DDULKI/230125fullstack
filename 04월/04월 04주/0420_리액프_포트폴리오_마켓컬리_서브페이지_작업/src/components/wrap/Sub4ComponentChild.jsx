import React from 'react';

export default function Sub4ComponentChild({특가혜택}) {

       // 정가 판매가 금액에 콤머 형식 정규표현식 구현하기 
       const commaPrice=(price)=>{
        let value = price.toString();
        // 383,000
        const regExp = /(^\d+)(\d{3})/g; // (그룹1)(그룹2)
        // console.log('정가 가져오기 = ' , price); 
        // console.log('정가.toString = ' , value); 
        // 가져온 데이터값은 숫자이다. 그래서 파란색으로 콘솔로그에 표시
        // 정규표현식 반드시 문자열만 처리 가능하다. 
        // 문자열 형식으로 변환 시키기 
        

        // 반복문 처리 모두 처리 
        // 리턴문으로 결과값 돌려준다. 
        while(regExp.test(value)){
            return value.replace(regExp, '$1,$2'); // $그룹1, $그룹2
        }
        
    }

    return (
        <ul>
            {
                특가혜택.map((item)=>{
                    return(
                        <li key={item.제품코드}>
                            <a href="!#">
                                <div className="img-box">
                                    <img src={`./images/sub4/${item.이미지}`} alt="" />
                                </div>
                            </a>
                        </li>
                    )
                })
            }


            {/* {result} */}
            

       </ul>
    );
};

