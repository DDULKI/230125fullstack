import React from "react";
import HeaderComponent from './wrap/HeaderComponent.jsx';
import MainComponent from './wrap/MainComponent.jsx';
import FooterComponent from './wrap/FooterComponent.jsx';

function WrapComponent (){
    return(
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/> 
        </div>
    );
};

export default WrapComponent;