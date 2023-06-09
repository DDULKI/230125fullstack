import React from 'react';
import './scss/cart.scss';

export default function CartComponent() {

    const [isLogin, setSetLogin] = React.useState(true);
    const [cart, setCart] = React.useState([]);
    const [arr1, setArr1] = React.useState([]);
    const [arr2, setArr2] = React.useState([]);
    const [arr3, setArr3] = React.useState([]);


    // 장바구니의 우측 금액표기 집계(피벗테이블) 상태변수
    const [state, setState] = React.useState({
        총상품금액:0,   // 누계금액 
        상품할인금액:0, // 누계금액 
        배송비:0,      // 결정금액
        결제예정금액:0 // 결정금액
    });

    const {총상품금액, 상품할인금액, 배송비, 결제예정금액} = state;

    // 카드가 들어오면 계산 
    React.useEffect(()=>{

        let 총상품금액 = 0; 
        let 상품할인금액 = 0; 
        let 배송비 = 0; 
        let 결제예정금액 = 0; 

        cart.map((item,idx)=>{
            if(item.수량!==undefined && item.총상품금액!==undefined){
                총상품금액 += Number(item.총상품금액); 
                상품할인금액 += Math.round(Number(item.정가*Number(item.할인율)));
                배송비 = (Number(총상품금액 - 상품할인금액) < 40000 ? 3000 : 0); 
                결제예정금액 = Number(총상품금액-상품할인금액)+배송비 
            }
        });
        setState({
            총상품금액 : 총상품금액, 
            상품할인금액 : 상품할인금액, // 누계 
            배송비 : 배송비,      // 결정금액
            결제예정금액 : 결제예정금액 // 결정금액
        })

    },[cart]);

    //1. 냉장
    const res1 = cart.map((item, idx)=>{
        if(item.보관방법==='냉장'){
            return(                                                             
                <dd key={idx}>
                    <ul>
                        <li>
                            <input type="checkbox" name='chk' id='chk1' value={item.제품코드} />  
                        </li>
                        <li>
                            <span className='cart-small-bgimg  blind' style={{backgroundImage: `url(${item.이미지})`}}>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button className='sub-bgimg-btn blind'>빼기</button>
                                <strong>{item.수량}</strong>
                                <button className='add-bgimg-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}원</span>    
                        </li>
                        <li>
                            <a href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )  
        } 
    }) 
    
    //2. 냉동
    const res2 = cart.map((item, idx)=>{  
        if(item.보관방법==='냉동'){
            return(                                                                
                <dd key={idx}>
                    <ul>
                        <li>
                            <input type="checkbox" name='chk' id='chk1' value={item.제품코드} />  
                        </li>
                        <li>
                            <span className='cart-small-bgimg  blind' style={{backgroundImage: item.이미지}}>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button className='sub-bgimg-btn blind'>빼기</button>
                                <strong>{item.수량}</strong>
                                <button className='add-bgimg-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}원</span>    
                        </li>
                        <li>
                            <a href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )     
        }
    }) 

    //3. 상온
    const res3 = cart.map((item, idx)=>{  
        if(item.보관방법==='상온'){
            return(
                                                                
                <dd key={idx}>
                    <ul>
                        <li>
                            <input type="checkbox" name='chk' id='chk1' value={item.제품코드} />  
                        </li>
                        <li>
                            <span className='cart-small-bgimg  blind' style={{backgroundImage: `url(${item.이미지})` }}></span>
                        </li>
                        <li>
                            <a href="!#">{item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button className='sub-bgimg-btn blind'>빼기</button>
                                <strong>{item.수량}</strong>
                                <button className='add-bgimg-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}원</span>    
                        </li>
                        <li>
                            <a href="!#" className='del-bgimg-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
                                                                                                                                
            )
        }
    }) 

    // 장바구니(CART) 가져오기
    React.useEffect(()=>{

        if( localStorage.getItem('MJ_KURLY_CART_PRODUCT')!==null ){
            let result = JSON.parse(localStorage.getItem('MJ_KURLY_CART_PRODUCT'));
            
            // 정렬 : 보관방법 오름차순 ASC
            result.sort((a,b)=>{                
                if(a.보관방법  >  b.보관방법) return  1;
                if(a.보관방법  <  b.보관방법) return -1;
                if(a.보관방법 === b.보관방법) return  0;
            });

            setCart(result);

            let arr1 =[];
            let arr2 =[];
            let arr3 =[];
            
            // console.log( result );
            result.map((item, idx)=>{
                if( item.보관방법 === '냉장' ){
                    arr1 = [...arr1, item];
                }                
                else if( item.보관방법 === '냉동' ){
                    arr2 = [...arr2, item];
                }                
                else if( item.보관방법 === '상온' ){
                    arr3 = [...arr3, item];
                }                
            });

            // console.log( arr1 );
            // console.log( arr2 );
            // console.log( arr3 );
            setArr1(arr1)
            setArr2(arr2)
            setArr3(arr3)
        }

    },[]);

    return (
        <div id='cart'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>장바구니</h1>
                    </div>
                    <div className="content">
                        <div className="left">
                            <ul>
                                <li>
                                    <span>
                                        <button className='select-all-btn'>
                                            전체선택
                                            <strong>
                                                (
                                                    <em className='select-count'>{3}</em> 
                                                    <i>/</i> 
                                                    <em className='cart-tot'>{5}</em>
                                                )
                                            </strong>
                                        </button>
                                        <i>|</i>
                                        <button className='delete-btn'>
                                            선택삭제
                                        </button>
                                    </span>

                                </li>


                                <li>
                                    <dl>
                                        {/* 장바구니 상품 목록 시작  */}

                                        {
                                            arr1.length >=1 && (
                                                <div className='acodian'>
                                                    <dt>
                                                        <div><img src="./images/cart/icon_01.svg" alt="" /><h3>냉장 상품</h3></div> 
                                                        <div><button><img src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                                    </dt>
                                                    { res1 }
                                                </div>
                                            )
                                        }


                                                    
                                        {
                                            arr2.length >=1 && (
                                                <>
                                                    <dt>
                                                        <div><img src="./images/cart/icon_02.svg" alt="" /><h3>냉동 상품</h3></div> 
                                                        <div><button><img src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                                    </dt>
                                                    { res2 }
                                                </>
                                            )
                                        }
                                                              
                                                              {
                                            arr3.length >=1 && (
                                                <>
                                                    <dt>
                                                        <div><img src="./images/cart/icon_03.svg" alt="" /><h3>상온 상품</h3></div> 
                                                        <div><button><img src="./images/cart/icon_arrow_up.svg" alt="" /></button></div>
                                                    </dt>
                                                    { res3 }
                                                </>
                                            )
                                        }
                                                 
                                           
                                            
                                        {/* 상품 목록 반복문 끝    */}

                                    </dl>
                                </li>

                                
                                <li>
                                    <span>
                                        <button className='select-btn'>
                                            전체선택
                                            <strong>
                                                <em className='select-count'>3</em>  
                                                <em className='cart-tot'>5</em>
                                            </strong>
                                        </button>
                                            <i>|</i>
                                        <button className='delete-btn'>
                                            선택삭제
                                        </button>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>
                                    <h3>
                                        <img src="./images/cart/icon_94.svg" alt="" />
                                        배송지
                                    </h3>
                                    <p>
                                        <em>배송지를 등록</em> 하고<br/>
                                        구매 가능한 상품을 확인하세요!
                                    </p>
                                    <button><img src="./images/cart/icon_zoom.svg" alt="" />주소 검색</button>
                                </li>
                                <li>
                                    <div>
                                        <div className="row1">
                                            <p><strong>상품금액</strong><strong>{(총상품금액).toLocaleString('ko-KR')}원</strong></p>
                                            <p>
                                                <strong>상품할인금액</strong><strong>{(상품할인금액).toLocaleString('ko-KR')}원</strong>
                                                {isLogin && <span>로그인 후 할인 금액 적용</span>}
                                            </p>
                                            <p><strong>배송비</strong><strong>{(배송비).toLocaleString('ko-KR')}</strong></p>
                                            {/* <p>배송비>0 ? (40000-상품금액)원 추가주문 시, <strong>무료배송</strong> : '' </p> */}
                                        </div>
                                        <div className="row2">
                                            <p><strong>결제예정금액</strong><strong>{(결제예정금액).toLocaleString('ko-KR')}원</strong></p>
                                            <p><strong><em>적립</em>로그인 후 회원 등급에 따라 적립</strong></p>
                                        </div>
                                    </div>                                        
                                </li>
                                <li>
                                    <button>배송지를 입력해주세요</button>    
                                    <p>
                                        [주문완료] 상태일 경우에만 주문 취소 가능합니다.<br/> 
                                        [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};