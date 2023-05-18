import React from 'react';
import './scss/section2.scss';

export default function Section2Component () {

    return (
        <section id='section2'>
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        <h2>섹션탑배너</h2>
                    </div>
                    <div className="content">
                        <a href="!#">
                            <img src="./images/intro/section_top_baaner.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
    </section>
    );
};