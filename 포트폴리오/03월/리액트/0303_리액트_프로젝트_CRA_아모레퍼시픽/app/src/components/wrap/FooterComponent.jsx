import React from 'react';

function FooterComponent (){
    return (
        <footer id="footer">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        
                    </div>
                    <div className="content">
                        <div className="gotop">
                            <a href="#wrap"><i className="fa fa-angle-up"></i><br/><span>TOP</span></a>
                        </div>
                        <div className="links-list">
                             <ul>
                                <li><a href="!#" className="list-btn" title="윤리경영">윤리경영</a></li>
                                <li><a href="!#" className="list-btn" title="인재채용">인재채용</a></li>
                                <li><a href="!#" className="list-btn" title="고객상담실">고객상담실</a></li>
                                <li><a href="!#" className="list-btn" title="글로벌 네트워크">글로벌 네트워크</a></li>
                                <li><a href="!#" className="list-btn" title="방문판매원 찾기">방문판매원 찾기</a></li>
                                <li><a href="!#" className="list-btn" title="매거진">매거진</a></li>
                                <li><a href="!#" className="list-btn" title="사이트맵">사이트맵</a></li>
                                <li><a href="!#" className="list-btn" title="관련사이트">관련사이트</a></li>
                                <li><a href="!#" className="list-btn" title="법적 고지">법적 고지</a></li>
                                <li><a href="!#" className="list-btn" title="개인정보 처리방침">개인정보 처리방침</a></li>
                             </ul>
                          </div>
                        <div className="fuo">
                           <h4>FOLLOW US ON</h4>
                        </div>
                        <div className="foot-sns">
                            <a href="!#"><img src="./img/facebook.png" alt=""/></a>
                            <a href="!#"><img src="./img/linked_in.png" alt=""/></a>
                            <a href="!#"><img src="./img/insta.png" alt=""/></a>
                            <a href="!#"><img src="./img/youtube.png" alt=""/></a>
                            <a href="!#"><img src="./img/square.jpg" alt=""/></a>
                            
                        </div>
                        <div className="foot-row">
                            <p>&copy; Since 1945 Amorepacific, All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;