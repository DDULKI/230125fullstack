import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import './scss/notice.scss';
import axios from 'axios';


export default function NoticeComponent(){
    const [state, setState] = React.useState({
        subject : '',
        content : ''
    }) 

    const [notice, setNotice] = React.useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const location = useLocation();

    React.useEffect(() => {
        axios({
            url: './data/notice_page/board.json',
            method:'GET'
        })
          .then((res) => {
            if (res.status === 200) {
              setNotice(res.data.notice);
            }
          })
          .catch((err) => {
            console.log(err+"AXIOS 오류!");
          });
      }, []);

      // 페이지별로 공지사항 데이터를 분할하는 함수
      const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return notice.slice(startIndex, endIndex);
    };

    // 페이지 변경 시 호출되는 함수
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

   
    return (
        <div id='notice'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <form action="" name='notice_form' id='noticeForm'>
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
                                        <h2>공지사항</h2>
                                    </div>
                                    <div className="notice-box">
                                    <h3>문의하신 내용에 대한 답변은 이메일로도 전송됩니다.</h3>
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
                                                {getPaginatedData().map((item) => (
                                                    <tr key={item.NO}>
                                                    <td>{item.NO}</td>
                                                    <td className="board_tit">
                                                        <Link to={`/공지사항글내용/?listNum=${item.NO}`}>
                                                        <strong>{item.제목}</strong>
                                                        </Link>
                                                    </td>
                                                    <td>{item.날짜}</td>
                                                    <td>{item.조회수}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                    </table>
                                    </div>
                                    <div className="btn-box">
                                        <button><Link to='/notice_form' className={location.pathname==='/notice_form'}>온라인 고객센터 문의</Link> </button>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="pagination">
                                    <div className="page-button-box">
                                    {Array.from({ length: Math.ceil(notice.length / itemsPerPage) }).map((_, index) => (
                                        <button
                                        key={index + 1}
                                        className={currentPage === index + 1 ? 'active' : ''}
                                        onClick={() => handlePageChange(index + 1)}
                                        >
                                        {index + 1}
                                        </button>
                                    ))}
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
