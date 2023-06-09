import React from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import EmailComponent from './wrap/EmailComponent';
import IntroComponent from './wrap/IntroComponent';
import SigninComponent from './wrap/SigninComponent'
import SignUpComponent from './wrap/SignUpComponent';
import UploadPhotoComponent from './wrap/mypage/UploadPhotoComponent';



export default function WrapComponent () {

  React.useEffect(() => {
    console.log(`                                                                        ,,
                                                                           /  ,
                                                                          /   /
                                                                         /   /
                                                                        /   /
         __________________________                                    /   /
        ⎢                         ⎥                                   /   /
        ⎢  누구나 예쁜 집에 살 수 있어  ⎥                                  /   /
        ⎢____    _________________⎥                                 /   /
              \\/    ,      ,,                                      /   /
                   /@\\____/@ \\                                ____/   /
                  /           \\                         _____/        /_
            /" \\ / •    •      \\                     __/             /  @@\\"\\
            \\    @@  ㅅ  @@     /___             ___/                /    _/
           /" \\   \\                 \\__________/                    |__/ "\\
           \\   \\                                                   /      /
            \\    \\  __                                                  _/
             \\                                                       __/
               \\_                                             ______/
                  \\ ___                                    __/
                        \\__                             __/
                            \\_____                _____/
                                  \\______________/
                                  `);
    console.log("");

  }, [])

  return (
    <div id="wrap">

         <BrowserRouter>
            <Routes>
                    <Route path='/*' element={<IntroComponent />} />
                    <Route path="/로그인" element={<SigninComponent />}/>
                    <Route path="/회원가입" element={<SignUpComponent />}/>
                    <Route path="/비밀번호재설정" element={<EmailComponent />}/>
                    <Route path="/사진업로드" element={<UploadPhotoComponent />}/>
            </Routes>
         </BrowserRouter>

    </div>
  );
};

