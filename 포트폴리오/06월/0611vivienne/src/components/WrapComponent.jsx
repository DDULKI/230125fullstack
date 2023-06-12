import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import MainComponent from './wrap/MainComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent(){
    return (
        <div id="wrap">
            {/* <BrowserRouter>
                <Routes>
                    Route

                </Routes>
            </BrowserRouter> */}
            
            <TopModalComponent/>
            <MainComponent/>
            <FooterComponent/>
            <SignUpComponent/>
            
        </div>
    );
};