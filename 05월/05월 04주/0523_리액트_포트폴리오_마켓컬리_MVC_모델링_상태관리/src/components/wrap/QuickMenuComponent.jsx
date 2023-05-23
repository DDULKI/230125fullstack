import React from 'react';
import './scss/quick_menu.scss';
import $ from 'jquery';
import deliveryInfo from './img/quick_menu/deliveryInfo.png'
import icon_arrow_up from './img/quick_menu/icon_arrow.svg'


export default function QuickMenuComponent(){

    const [state, setState] = React.useState({
        isFixed: false,
        viewProduct: false
    });

    // 스크롤이벤트 동작시 스크롤탑값이 섹션1의 탑값에 도달하면 
    // fixed로 구현한다. 

    React.useEffect(()=>{
        let quickMenu = $('#quickMenu');
        let sec1Top = $('#section1').offset().top+40;
        let isFixed = false;

        // console.log(`quickMenu.height() ${quickMenu.height()}`);
        

        $(window).scroll(function(){

            if($(window).scrollTop()>=sec1Top){
                    isFixed= true;
                    quickMenu.css({marginTop: -quickMenu.height()/2})
            }
            else {
                    isFixed= false;
                    quickMenu.css({marginTop:0})
            }

            setState({
                ...state,
                isFixed:isFixed
            })
        });

        
    },[state.isFixed])

    // gpt
    // React.useEffect(() => {
    //     const handleScroll = () => {
    //       const sec1Top = document.getElementById('section1').offsetTop + 40;
    //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //       setState(scrollTop >= sec1Top);
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []); // <- Empty dependency array
    

    return (
        <div id='quickMenu' className={state.isFixed?'on':''}>
            <ul>
                <li>
                    <a href="!#">
                        <img src={deliveryInfo} alt="" />
                    </a>
                </li>
                <li>
                    <span><a href="!#">등급별혜택</a></span>
                    <span><a href="!#">레시피</a></span>
                </li>
    
                <li className='view-product'>
                  {  
                        state.viewProduct && (
                        <div>
                        <span><a href="!#"><img src={icon_arrow_up} alt="" /></a></span>
                        {/* <span><a href="!#">등급별혜택</a></span> */}
                        <h3>최근 본상품</h3>
                        <div className="view-box">
                            <ul className='wrap-box'>
                                <li><a href="!#"><img src="./images/intro/004ee48d-c745-4c58-b37f-f67a8f23b01f.jpg" alt="" /></a></li>
                                <li><a href="!#"><img src="./images/intro/004ee48d-c745-4c58-b37f-f67a8f23b01f.jpg" alt="" /></a></li>
                                <li><a href="!#"><img src="./images/intro/004ee48d-c745-4c58-b37f-f67a8f23b01f.jpg" alt="" /></a></li>
                                <li><a href="!#"><img src="./images/intro/004ee48d-c745-4c58-b37f-f67a8f23b01f.jpg" alt="" /></a></li>
                                <li><a href="!#"><img src="./images/intro/004ee48d-c745-4c58-b37f-f67a8f23b01f.jpg" alt="" /></a></li>
                                <li><a href="!#"><img src="./images/intro/004ee48d-c745-4c58-b37f-f67a8f23b01f.jpg" alt="" /></a></li>
                            </ul>
                         </div>
                        <span><a href="!#"><img src={icon_arrow_up} alt="" /></a></span>
                        </div>
                    )
                  }
                </li>
            </ul>
        </div>
    );
};
