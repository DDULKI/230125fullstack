import React from 'react';
import axios from 'axios';
import Sub1ComponentChild from './Sub1ComponentChild';


export default function Sub1Component({사진}) {




    // 사진 페이지
    return (
        <div id='sub1'>
            <div className="container">
                <div className="gap">
                    <div className="row1">
                        <div className="headerbox1">
                            <ul>
                                <li><button>정렬<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>동영상<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>주거형태<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>공간<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>평수<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>스타일<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>컬러<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>셀프/전문<img src="./images/arrowbottom.png" alt="" /></button></li>
                                <li><button>제품정보<img src="./images/arrowbottom.png" alt="" /></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <Sub1ComponentChild 사진={사진} />
                    </div>
                </div>
            </div>
        </div>
    );
}

