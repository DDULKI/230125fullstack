import React from 'react';

const Section04Component = () => {
    return (
        <section id="section4">
        {/* <!-- div.container>div.gap>div.content --> */}
        <div className="container">
            <div className="gap">
                <div className="title">
                    <h2>EVENT & PARTIES</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            {/* <!-- div.col-gap --> */}
                            <div className="col-gap">
                                <div className="box">
                                    {/* <!-- div.box-gap --> */}
                                    <div className="box-gap">
                                        {/* <!-- <h2><i className="fa fa-apple"></i></h2> --> */}
                                        <h2><i className="icon-wine"></i></h2>
                                        <h3>COCKTAIL PARTY</h3>
                                        <hr/>
                                        <p>SEPTEMBER 19TH, 2015</p>
                                        <h4>11:00 PM – 01:00 PM</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            {/* <!-- div.col-gap --> */}
                            <div className="col-gap">
                                <div className="box">
                                    {/* <!-- div.box-gap --> */}
                                    <div className="box-gap">
                                        {/* <!-- <h2><i className="glyphicon glyphicon-camera"></i></h2> --> */}
                                        <h2><i className="icon-heart"></i></h2>
                                        <h3>WEDDING CEREMONY</h3>
                                        <hr/>
                                        <p>SEPTEMBER 20TH, 2015</p>
                                        <h4>12:00 PM – 16:00 PM</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            {/* <!-- div.col-gap --> */}
                            <div className="col-gap">
                                <div className="box">
                                    {/* <!-- div.box-gap --> */}
                                    <div className="box-gap">
                                        {/* <!-- <h2><i className="fa fa-cutlery"></i></h2> -->
                                        <!-- <h2><i className="material-icons">airline_seat_flat</i></h2> --> */}
                                        <h2><i className="icon-gift"></i></h2>
                                        <h3>WEDDING PARTY</h3>
                                        <hr/>
                                        <p>SEPTEMBER 20TH, 2015</p>
                                        <h4>118:00 PM – 07:00 AM</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Section04Component;