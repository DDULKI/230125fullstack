import React from 'react';

export default function Section3SlideComponent ({상품, n, setViewProduct} ) {

    const slideWrap = React.useRef();
    const [cnt, setCnt] = React.useState(0);

    React.useEffect(()=>{
        slideWrap.current.style.transition = `all 0.6s ease-in-out`;
        slideWrap.current.style.left = `${-100*cnt}%`;
        // 오른쪽 끝 정지
        // if(cnt>=4){ // 20/4=5 => 0 1 2 3 4 
        //     setCnt(4); // 넌 고정이야 
        //     slideWrap.current.style.left = `${-100*4}%`;
        // }
        
        if(cnt>(n/4-2)){ // 20/4=5 => 0 1 2 3 4 
            setCnt(n/4-2); // 넌 고정이야 
            slideWrap.current.style.left = `${-100*(n/4-2)}%`;
        }


        // 왼쪽 끝 정지

        if(cnt<=0){
            setCnt(0);
            slideWrap.current.style.left = `${-100*0}%`;
        }

    },[cnt]);

    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
    }
    const onClickPrev=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
    }


    // 판매가격, 정가 콤머형식 함수
    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while( regExp.test(value) ){
            return  value.replace(regExp, '$1,$2');
        }        
    }

    const onClickProductList=(e, product)=>{
        e.preventDefault();

        let obj = {
            제품코드: product.제품코드,
            이미지: `http://localhost:3000/images/intro/${product.이미지}`,
            저장일시: new Date().getTime()
        }
        console.log(obj);
        setViewProduct(obj);
    }

    return (
        <>
            <div className="container">
    
                <div className="gap">
                    <div className="content">
                    <div className="slide-container">
                    <div className="slide-view">
                        <ul ref={slideWrap} className="slide-wrap">
                            
                            {                    
                                상품.map((item)=>{
                                    return(
                                        <li className="slide slide0" key={item.제품코드}>
                                            <div className="col-gap">
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                    <div className="img-box">
                                                        <img src={`./images/intro/${item.이미지}`} alt="" />
                                                        <span>
                                                            <img src="./images/sub1/icon_cart.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="tex-box">
                                                        <ul>                                                        
                                                            <li>{item.배송구분}</li>
                                                            <li><strong>[item.제조사]</strong> <em>{item.제품명}</em></li>
                                                            <li>{}</li>
                                                            <li><span className='rate-price'>{item.할인율===0?``:`${Math.round(item.할인율*100)}%`}</span>{item.할인율 > 0 && (<span className='panme-price'>{commaPrice(42900*(1-item.할인율))}</span>) }</li>
                                                            <li>{ item.할인율===0? <span className='panme-price'>{commaPrice(item.정가)}</span> : <s>{commaPrice(item.정가)}</s> }</li>
                                                            <li>{ item.판매처 }</li>
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
                        

                    </div>
                </div>
            </div>
            <a onClick={onClickPrev} href="!#" className='left-arrorw-btn'><img src="./images/intro/icon_left_arrow_white.svg" alt="" /></a>
            <a onClick={onClickNext} href="!#" className='right-arrorw-btn'><img src="./images/intro/icon_left_arrow_white.svg" alt="" /></a>
    </>

    );
};

 