import React from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import TopModalComponent from './wrap/TopModalComponent';
import MainComponent from './wrap/MainComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent(){


    return (
        <div id="wrap">
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route path='/signup' element={<SignUpComponent/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
            
            <TopModalComponent/>
            <MainComponent/>
            <FooterComponent/>
            <SignUpComponent/>
            
        </div>
    );
};