import React from 'react';
import {HashRouter, BrowserRouter, Routes, Route}  from 'react-router-dom';
import TopModalComponent from './wrap/TopModalComponent';
import MainComponent from './wrap/MainComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';
import SigninComponent from './wrap/SigninComponent';
import MypageComponent from './wrap/mypage/MypageComponent';

export default function WrapComponent(){


    return (
        <div id="wrap">
            <TopModalComponent/>
            <HashRouter>
                <Routes>
                    <Route path='/*' element={<MainComponent/>}/>
                    <Route path='/signup' element={<SignUpComponent/>}/>
                    <Route path='/signin' element={<SigninComponent/>}/>
                    <Route path='/update' element={<MypageComponent/>}/>
                </Routes>
            </HashRouter>
            <FooterComponent/>
            
        </div>
    );
};