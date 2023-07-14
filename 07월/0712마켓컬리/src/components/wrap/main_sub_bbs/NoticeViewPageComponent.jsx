import React from 'react';
import './notice_scss/notice_view.scss';
import { ConfirmContext } from '../../../context/ConfirmContext';
// 쿼리 스트링 => 키(번호)와 키값(item.NO)
// 파라미터 => 보내온 파라미터 데이터를 추출(검색)
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';


export default function NoticeViewPageComponent () {

    const [param, setParam] = useSearchParams();
    const 번호   = param.get('번호'); // 보내온 키를 이용 키값을 가져온다.
    const 제목   = param.get('제목'); // 보내온 키를 이용 키값을 가져온다.
    const 내용   = param.get('내용'); // 보내온 키를 이용 키값을 가져온다.
    const 조회수 = param.get('조회수'); // 보내온 키를 이용 키값을 가져온다.
    const 작성일 = param.get('작성일'); // 보내온 키를 이용 키값을 가져온다.

    console.log(param);
    console.log(번호);
    console.log(제목);
    console.log(내용);
    console.log(조회수);
    console.log(작성일);

    const {ConfirmModalOkCancelOpen, isConfirmModalOkCancelResult} = React.useContext(ConfirmContext);
    
    React.useEffect(()=>{

        if(isConfirmModalOkCancelResult==='확인'){
           sessionStorage.removeItem('NOTICE_UPDATE')

           // 삭제하고자하는 키
           let formData = new FormData();
           formData.append('bbsId', 번호);

           axios({
                url:'/bbs/viewAction.jsp',
                method:'POST',
                //method:'POST',
                data: {}, // => 해당하는 글번호 키 
                params : JSON.stringify(formData)
            })
            .then((res)=>{
                if(res.status===200){
                    alert('삭제되었습니다.');
                    window.location.pathname = '/notice';    
                }

            })
            .catch((err)=>{
                console.log('AXIOS 실패!' + err );
            });
        }
        
    },[isConfirmModalOkCancelResult])

    const [state,setState] = React.useState({
        notice: {}
    });

    const {공지사항} = state;

    // React.useEffect(()=>{
    //     let formData = new FormData();
    //     formData.append('idx', 번호);

    //     axios({
    //         url:'/bbs/bbsNoticeJSON.jsp',
    //         method:'GET',
    //         //method:'POST',
    //         data: formData // => 해당하는 글번호 키 
    //     })
    //     .then((res)=>{
    //         if(res.status===200){
    //             console.log( res.data.notice );
                
    //             let result = res.data.notice.filter((item) => item.NO===Number(번호) );
    //             console.log( result[0] );

    //             res.data.notice.map((item) => {
    //                 if(item.NO===Number(번호)){ //파라미터값이 문자로 전송받은거 변환
    //                     console.log( item.NO, item.제목 );
    //                 }
    //             })
                
    //             setState({
    //                 공지사항: result[0] //배열[0]
    //             })
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log('AXIOS 실패!' + err );
    //     });
    // },[]);



   

   


    // 글목록으로 이동
    const onClickNoticeList=(e)=>{
        e.preventDefault();
        window.location.pathname = '/notice';
    }

    // 글삭제
    const onClickDelete=(e)=>{
        e.preventDefault();
        ConfirmModalOkCancelOpen('공지사항 글을 삭제 하시겠습니까?');        
    }

    // 글수정
    const onClickUpdate=(e)=>{
        e.preventDefault();
        // 수정페이지로 이동
        window.location.pathname = '/notice_update';
    }

    return (
        <div id='noticeView'>
            <div className="container">
                <div className="title">
                    <h2>공지사항</h2>
                    <p>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</p>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <div className="left">제목</div>
                            <div className="right">{제목}</div>
                        </li>
                        <li>
                            <div className="left">조회수</div>
                            <div className="right">{조회수}</div>  
                        </li>
                        <li>
                            <div className="left">작성일</div>
                            <div className="right">{작성일}</div>  
                        </li>
                        <li>
                            <div className="contents">
                                {내용}                               
                            </div>
                        </li>
                    </ul>
                    <div className="button-box">
                        <div className="left">
                            <button onClick={onClickUpdate}>수정</button>
                            <button onClick={onClickDelete}>삭제</button>
                        </div>
                        <div className="right">
                            <button onClick={onClickNoticeList}>목록</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
};