import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import GotopComponent from './wrap/GotopComponent';
import SigninComponent from './wrap/SigninComponent';

export default function WrapComponent(){
    return (
        <div id="wrap">
            <TopModalComponent/>
            <MainComponent/>
            <FooterComponent/>
            <GotopComponent/>
            <SigninComponent/>
        </div>
    );
};