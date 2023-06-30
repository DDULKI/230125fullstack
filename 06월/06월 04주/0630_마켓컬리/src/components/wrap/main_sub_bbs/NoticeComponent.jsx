import React from 'react';
import NoticeLeftNavComponent from './NoticeComponent/NoticeLeftNavComponent';
import NoticeRightListComponent from './NoticeComponent/NoticeRightListComponent';
import './notice_scss/notice.scss'
import {GlobalContext} from '../../../context/GlobalContext'
import axios from 'axios';


export default function NoticeComponent () {
    
    // 관리자 로그인하면 글쓰기 가능 
    const {isAdmin} = React.useContext(GlobalContext);
  
    const [notice, setNotice] = React.useState([]);

    const onClickWrite=(e)=>{
        window.location.pathname = '/notice_write';
    }

    // 공지사항 JSON 파일 로딩 
    React.useEffect(()=>{
        axios({
            // url:'./data/notice_page/board.json',
            url:'/bbs/bbsNoticeJSON.jsp',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                // setNotice(res.data.notice);
                setNotice(res.data);
                setNotice(res.data.공지사항);

                console.log(res.data.공지사항);
            }
        })
        .catch((err)=>{
            console.log(err);
        });  
    },[]);



    return (
        <div id='notice'>
            <div id="container">
                <NoticeLeftNavComponent />
                <NoticeRightListComponent notice={notice}/>
                {
                    isAdmin && (
                    <div className="button-box">
                        <button onClick={onClickWrite}>글쓰기</button>
                    </div>
                    )
                }
            </div>
            
        </div>  
    );
};

