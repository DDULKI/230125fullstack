import React from 'react';
import './scss/notice_write.scss'
import $ from 'jquery';
import { Link,useLocation } from 'react-router-dom';

export default function NoticeWriteFormPageComponent(props) {

    const [state, setState] = React.useState({
        subject:'',
        content:''
    })
    const location = useLocation();
    
    const onChangeSubject =(e)=>{
        let 제목 = e.target.value;
        setState({
            ...state,
            subject: 제목
        })
       
    }

    const onChangeContent =(e)=>{
        let 내용 = e.target.value;
        setState({
            ...state,
            content: 내용
        })
    }

    const onClickSubmit=(e)=>{
        e.preventDefault();
        console.log('클릭');
        onSubmitWrite();
    }


     const onSubmitWrite =()=>{
         const formData = {
            "user_email":sessionStorage.getItem("user_email"),
            "subject":state.subject,
            "content":state.content
         }
         $.ajax({
            url:'http://localhost:8080/vivienne/bbs_post_action.jsp',
            type:'post',
            data:formData,
            success(res){
                console.log('AJAX 성공');
                console.log(res);
                if(!state.subject || !state.content){
                    alert('모든 항목을 입력해주세요!');
                }
                else {
                    window.location.href = '/';
                }
            },
            error(err){
                console.log('AJAX 실패' +err);
            }
         })
    }



        
   
    return (
        <div id='noticeWrite'>
            <div className="container">
                <div className="gap">
                <div className="content">
                    <form action="" onSubmit={onSubmitWrite}>
                        <div className="top">
                                <div className="online-box">
                                    <ul>
                                        <li><h2 className='notice-title'>온라인 고객센터</h2></li>
                                        <li><h4 className='small-hand-writing'>비비안웨스트우드 공식스토어 고객센터입니다.</h4></li>
                                        <li><h4 className='small-hand-writing'>온라인판매 서비스에 대해서 궁금하신 사항을 질문하시면 신속하게 답변드리겠습니다. </h4></li>
                                    </ul>
                                </div>
                                <div className="cs-box">
                                    <ul>
                                        <li>
                                            <h2 className='notice-title'>고객센터 : 1899-6407</h2>
                                        </li>
                                        <li><h4 className='small-hand-writing'>월요일 ~ 금요일 10:00 ~ 18:00</h4></li>
                                        <li><h4 className='small-hand-writing'>점심시간 12:30 ~ 13:30</h4></li>
                                    </ul>
                                </div>
                                <div className="cs-bottom-box">
                                    <ul>
                                        <li><h4 className='small-hand-writing'>시계 고객센터는 별도운영 031-737-4626</h4></li>
                                        <li><h4 className='small-hand-writing'>*선글라스의 경우 모든 상담업무가 불가.(수입품목에 해당하지 않음)</h4></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="bottom">
                                <div className="left">
                                    <ul>
                                        <li><Link to="/*">Home</Link></li>
                                        <li><Link to="/mypage">회원정보</Link></li>
                                        <li><Link to="/inquiry" className={location.pathname==='/notice'?'on':''}>1:1문의</Link></li>
                                        <li><Link to="/notice">공지사항</Link></li>
                                        <li><a href="!#">주소록</a></li>
                                        <li><a href="!#">주문배송 조회</a></li>
                                        <li><a href="!#">마일리지</a></li>
                                        <li><a href="!#">쿠폰</a></li>
                                        <li><a href="!#">위시리스트</a></li>
                                    </ul>
                                </div>
                            <div className="right">
                                <div className="title">
                                    <h2>1:1문의</h2>
                                </div>
                                <div className="notice-box">
                                <ul>
                                    <li>
                                        <label htmlFor="subject">제목<i>*</i></label>
                                        <input 
                                            onChange={onChangeSubject}
                                            type="text" 
                                            name='subject' 
                                            id='subject' 
                                            value={state.subject} 
                                            placeholder='제목을 입력해 주세요.'
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="contents">내용<i>*</i></label>
                                        <textarea 
                                            onChange={onChangeContent}
                                            name="content" 
                                            id="content"
                                            value={state.content} 
                                        >
                                        </textarea>
                                    </li>
                                </ul>
                                </div>
                                <div className="btn-box">
                                    <button onClick={onClickSubmit}><a href="!#">문의하기</a></button>
                                    <button ><a href="!#">취소</a></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}

