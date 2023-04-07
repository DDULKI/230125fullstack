import React from 'react';
import '../../scss/main.scss';

export default function MainComponent({공지사항}){


    // 공지사항.map((item,idx)=>{
    //     for (let i=0; i<공지사항.length; i++){
    //         console.log(`${공지사항[i].제목}`)
    //     }
    // })

    공지사항.map((item, idx)=>{
        console.log(idx, item.NO + item.제목);
    })


    return (
        <div id='main'> 
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h1>공지사항</h1>
                        </div>
                        <div className="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>제목</th>
                                        <th>날짜</th>
                                        <th>조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        공지사항.map((item, idx)=>{
                                            return(
                                                <tr key={item.NO}>
                                                    <td>{item.NO}</td>
                                                    <td>{item.제목}</td>
                                                    <td>{item.날짜}</td>
                                                    <td>{item.조회수}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};
