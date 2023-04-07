import React from 'react';
import Section01Component from './main/Section01Component.jsx';
import Section02Component from './main/Section02Component.jsx';
import Section03Component from './main/Section03Component.jsx';
import Section04Component from './main/Section04Component.jsx';

function MainComponent(){
    return (
        <main id="main">
            <Section01Component/>
            <Section02Component/>
            <Section03Component/>
            <Section04Component/>
        </main>
    );
};

export default MainComponent;