import React from 'react';

export default function Sub2ComponentChild ({베스트}) {

  const newProductList = () => {
    베스트.map((item, idx) => {
      // console.log(idx, item);
      // console.log(item.이미지);
    })
  }

  React.useEffect(() => {
    newProductList();
  }, [베스트]);


  // 정가, 판매가 금액에 콤마 형식 정규표현식 구현하기
  const commaPrice = (price) => {
    let value = price.toString();
    // 가져온 데이터값 price는 숫자
    // 정규표현식은 반드시 문자열만 처리 가능하다.
    const regExp = /^(\d+)(\d{3})$/g;

    while(regExp.test(value)){
      return value.replace(regExp, '$1,$2')
    }
  }


  const result = 베스트.map((item) => {
    return (
      <li key={item.제품코드}>
        <a href="!#">
            <div className="img-box">
                <img src={`./images/sub1/${item.이미지}`} alt="" />
                <span>
                    <img src="./images/sub1/icon_cart.svg" alt="" />
                </span>
            </div>
            <div className="tit-box">
                <ul>
                    <li>{item.배송구분}</li>
                    <li><strong></strong> <em>{item.제품명}</em></li>
                    <li>{item.제품특성}</li>
                    <li><span className='rate-price'>{item.할인율===0?'':`${Math.round(item.할인율*100)}%`}</span> {item.할인율>0 && (<span className='panme-price'>{`${item.정가 * (1 - item.할인율)}원`}</span>)}</li>
                    <li>{ item.할인율 === 0 ? <span className='panme-price'>{commaPrice(item.정가)}</span> : <s>{commaPrice(item.정가)}</s> }</li>
                    <li>{item.판매처}</li>
                </ul>
            </div>
        </a>
      </li> 
    )
  })

  return (
            <ul>

              {
                // 신상품.map((item) => {
                //   return (
                //     <li key={item.제품코드}>
                //       <a href="!#">
                //           <div className="img-box">
                //               <img src={`./images/sub1/${item.이미지}`} alt="" />
                //               <span>
                //                   <img src="./images/sub1/icon_cart.svg" alt="" />
                //               </span>
                //           </div>
                //           <div className="tit-box">
                //               <ul>
                //                   <li>{item.배송구분}</li>
                //                   <li><strong>{item.제조사}</strong> <em>{item.제품명}</em></li>
                //                   <li>{item.제품특성}</li>
                //                   <li><span className='rate-price'>{`${Math.round(item.할인율*100)}%`}</span><span className='panme-price'>{`${item.정가 * (1 - item.할인율)}원`}</span></li>
                //                   <li><s>{item.정가}</s></li>
                //                   <li>{item.판매처}</li>
                //               </ul>
                //           </div>
                //       </a>
                //     </li> 
                //   )
                // })
              } 
              { result }

            </ul>     
  );
};

