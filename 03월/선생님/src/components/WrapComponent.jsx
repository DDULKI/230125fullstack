import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent() {

    const [state, setState] = React.useState({
        minutes: 2,
        seconds: 59
    });

    

    return (
        <div id='wrap'>
                <TopModalComponent/>
                <HeaderComponent/>
                <SignUpComponent timer={state}  />
                <FooterComponent/>                
        </div>
    );
};