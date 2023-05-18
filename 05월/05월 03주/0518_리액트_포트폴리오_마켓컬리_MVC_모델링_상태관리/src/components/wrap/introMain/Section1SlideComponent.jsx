import React from 'react';

export default function Section1SlideComponent({슬라이드, n}) {
    

    return (
        <div className="slide-container">
            <div className="slide-view">
                <ul className="slide-wrap">


                {
                    슬라이드.map((item,idx)=>{
                        return(
                            <li className="slide" key={idx}><a href="!#"><img src={item.src} alt="" /></a></li>
                        )
                    })

                }
                    

                </ul>
            </div>


            <a href="!#" className='left-arrorw-btn'><img src="./images/intro/icon_right_arrow_gray.svg" alt="" /></a>
            <a href="!#" className='right-arrorw-btn'><img src="./images/intro/icon_right_arrow_gray.svg" alt="" /></a>
            
            <span className='page-count-box'>
            <em className='current-number'>1</em>
            <i>/</i>     
            <em className='total-number'>{n}</em>
            </span>

        </div>
    );
};

