import React, {useEffect, useState} from 'react';
import SignUpComponent from './wrap/SignUpComponent';

export default function WrapComponent(){

    // const [] = React.useState();
    const [state, setState] = useState({
        seconds: 59, 
        minutes: 2,
        setId: 0
    });


    return (
        <div id='wrap'>
            <SignUpComponent/>
        </div>
    );
};

