import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpComponent from './wrap/SignUpComponent';
import TopModalComponent from './wrap/TopModalComponent';
import FooterComponent from './wrap/FooterComponent';
import Sub1PageComponent from './wrap/Sub1PageComponent';
import Sub2PageComponent from './wrap/Sub2PageComponent';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function WrapComponet(){
    return (
        <div id='wrap'>
            <BrowserRouter>
                <TopModalComponent/>
                    <Routes>
                        <Route path='/' element={<HeaderComponent/>}>
                            <Route index element={<SignUpComponent/>}/>

                            <Route path='/회원가입' element={<SignUpComponent/>}/>
                            <Route path='/로그인' element={<Sub1PageComponent/>}/>
                            <Route path='/고객센터' element={<Sub2PageComponent/>}/>

                        </Route>
                    </Routes>
                 <FooterComponent/>
            </BrowserRouter>
                           
                          
        </div>
    );
};
