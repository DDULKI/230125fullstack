import React from 'react';

function HeaderComponent() {
    return (
        <header id="header">
            <div className="row1">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="left">
                                <ul>
                                    <li><a href="!#" className="left-btn on">KR</a></li>
                                    <li><a href="!#" className="left-btn">EN</a></li>
                                    <li><a href="!#" className="left-btn">CN</a></li>
                                </ul>
                            </div>
                            <div className="center">
                                <h1><a href="!#" title="HOME"><img src="./img/amorepacific.png" alt=""/></a></h1>
                            </div>
                            <div className="right">
                                <ul>
                                    <li><a href="!#"><img src="./img/header_facebook.png" alt=""/></a></li>
                                    <li><a href="!#"><img src="./img/header_insta.png" alt=""/></a></li>
                                    <li><a href="!#"><img src="./img/header_linkedin.png" alt=""/></a></li>
                                    <li><a href="!#"><img src="./img/header_square.png" alt=""/></a></li>
                                    <li><a href="!#"><img src="./img/header_youtube.png" alt=""/></a></li>
                                </ul>
                                <span className="material-symbols-outlined">search</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="left">
                                <h1><a href="!#" title="HOME"><img src="./img/amorepacific.png" alt=""/></a></h1>
                            </div>
                            <div className="center">
                                <nav className="nav">
                                    <ul>
                                        <li><a href="!#" className="nav-btn">ABOUT US</a></li>
                                        <li><a href="!#" className="nav-btn">BRANDS</a></li>
                                        <li><a href="!#" className="nav-btn">OUR CULTURE</a></li>
                                        <li><a href="!#" className="nav-btn">COMMITMENTS</a></li>
                                        <li><a href="!#" className="nav-btn">INVESTORS</a></li>
                                        <li><a href="!#" className="nav-btn">NEWS</a></li>
                                    </ul>                  
                                </nav>   
                            </div>
                            <div className="right">

                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;