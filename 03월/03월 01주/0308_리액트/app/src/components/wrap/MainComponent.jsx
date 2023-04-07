import React from 'react';
import '../../scss/main.scss';

export default function MainComponent({성적}){


   // React.useEffect(()=>{
      
    //     // for(let i=0; i<성적.length; i++){
    //     //     console.log(`${성적[i].수학} ${성적[i].국어} ${성적[i].영어} ${성적[i].수학 + 성적[i].국어 + 성적[i].영어}`);
            
            
    //     // }

    //     성적.map((item, index)=>{
    //         console.log(index, item.국어 + item.영어 + item.수학);
    //     })
      
    // },[])

    const grade = 성적.map((item, idx)=>{
        return(
            <tr key={item.번호}>
                <td>{item.번호}</td>
                <td>{item.이름}</td>
                <td>{item.영어}</td>
                <td>{item.국어}</td>
                <td>{item.수학}</td>
            </tr>
        )
    })



    return (
        <div id='main'>
           <section id="section1" className="section">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>중간고사 성적표</h2>
                        </div>
                        <div className="content">
                        <table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>이름</th>
                                        <th>영어</th>
                                        <th>국어</th>
                                        <th>수학</th>
                                    </tr>
                                </thead>
                                    
                                <tbody> 

                                {
                                    성적.map((item, idx)=>{
                                        return(
                                            <tr key={item.번호}>
                                                <td>{item.번호}</td>
                                                <td>{item.이름}</td>
                                                <td>{item.영어}</td>
                                                <td>{item.국어}</td>
                                                <td>{item.수학}</td>
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
           <section id="section2" className="section">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>기말고사 성적표</h2>
                        </div>
                        <div className="content">
                        <table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>이름</th>
                                        <th>영어</th>
                                        <th>국어</th>
                                        <th>수학</th>
                                    </tr>
                                </thead>
                                    
                                <tbody> 

                                {
                                    grade
                                }

                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                    

                </div>
           </section>

        </div>
    )
}



