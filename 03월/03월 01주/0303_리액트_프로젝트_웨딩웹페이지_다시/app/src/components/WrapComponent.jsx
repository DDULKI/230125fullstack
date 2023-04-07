import React from 'react';
import SkipComponent from './wrap/SkipComponent.jsx';
import HeaderComponent from './wrap/HeaderComponent.jsx';
import MainComponent from './wrap/MainComponent.jsx';
import GotopComponent from './wrap/GotopComponent.jsx';
import FooterComponent from './wrap/FooterComponent.jsx';

function WrapComponent (){
    return (
        <div id="wrap">
            <SkipComponent/>
            <HeaderComponent/>
            <MainComponent/>
            <GotopComponent/>
            <FooterComponent/>
        </div>
    );
};

export default WrapComponent;

