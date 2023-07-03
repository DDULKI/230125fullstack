import React from 'react';
import './notice_scss/notice_write.scss'
import NoticeLeftNavComponent from './NoticeComponent/NoticeLeftNavComponent';

export default function NoticeWriteFormPageComponent () {

    const [state, setState] = React.useState({
        subject:'',
        contents:''
    })

    // 비구조화
    const {subject, contents} = state;

    const onSubmitWrite = (e)=>{
        e.preventDefault();
        // axios()
    }
    
    const onChangeSubject =(e)=>{
        setState({
            ...state,
            subject: e.target.value
        })
       
    }

    const onChangeContents =(e)=>{
        setState({
            ...state,
            contents: e.target.value
        })
        
    }

    return (
       
        <div id="notice">
            <div id="container">

            <NoticeLeftNavComponent/>
            <div id='noticeWrite'>
                
                <div className="container">
                    <div className="title">
                        <h2>공지사항 문의</h2>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitWrite}>
                                <ul>
                                    <li>
                                        <label htmlFor="subject">제목<i>*</i></label>
                                        <input 
                                            onChange={onChangeSubject}
                                            type="text" 
                                            name='subject' 
                                            id='subject' 
                                            value={subject} 
                                            placeholder='제목을 입력해 주세요.'
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="contents">내용<i>*</i></label>
                                        <textarea 
                                            onChange={onChangeContents}
                                            name="contents" 
                                            id="contents"
                                            value={contents} 
                                        >
                                        </textarea>
                                    </li>
                                </ul>
                            <div className="button-box">
                                <button type='submit'>등록</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       
            </div>
        </div>
    );
};

