import React from 'react';
import { Link } from 'react-router-dom';


export default function NoticeRightListComponent({notice}){

    const [list] = React.useState(6); // 한 화면에 보여질 목록 개수
    const [pageNumber, setPageNumber] = React.useState(1); // 페이지번호 
    const [groupPage] = React.useState(7); // 페이지번호 그룹1 (1(1~5) 그룹2(6~10) 그룹3(11~15) 그룹4(16~20))
    const [cnt, setCnt] = React.useState(1); // 페이지번호 그룹 1 

    const [startNum, setStartNum] = React.useState(); // 그룹 시작 번호
    const [endNum, setEndNum] = React.useState(); //  그룹 끝 번호




    // 페이지번호 클릭 이벤트 
    const onClickPageNum =(e, num)=>{
        e.preventDefault();
        setPageNumber(num);

    }
    
    // 그룹페이지 클릭 다음카운트 이벤트  
    const onClickNextGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
    }
    // 그룹페이지 클릭 이전카운트 이벤트  
    const onClickPrevGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
    }


    // 그룹 시작번호 설정 => cnt 또는 groupPage 값 변경이 있거나 설정되었다면 시작번호 설정 실행 
    React.useEffect(()=>{
        setStartNum((cnt-1) * groupPage);
    },[cnt, groupPage]);

    // 끝번호 설정 
    React.useEffect(()=>{
        setEndNum(startNum + groupPage);
    },[startNum, groupPage])

    React.useEffect(()=>{
        setPageNumber(startNum+1);
    },[endNum, startNum]);

    
    return (
        <div id='noticRight'>
            <div className="container">
                <div className="title">
                    <h3>공지사항<span>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</span></h3>
                </div>
                <div className="content">
                    <dl>
                        <dt>
                            <span>NO</span>
                            <span>제목</span>
                            <span>작성일</span>
                            <span>조회수</span>
                        </dt>

                        {
                            notice.map((item, idx)=>{
                                if( Math.ceil((idx+1)/list) === pageNumber ) { // 클릭버튼 번호 전달 1(100~86) 2(85~70)
                                    return(
                                        <dd key={item.NO}>
                                            <Link to={`/view_page?listNum=${item.NO}`}>
                                                <span>{item.NO}</span>
                                                <span>{item.제목}</span>
                                                <span>{item.날짜}</span>
                                                <span>{item.조회수}</span>
                                            </Link>
                                        </dd>
                                    )
                                }
                            })
                        }

                    </dl>
                        
                    <div className="page-button-box">

                        {
                           cnt > 1 && <a href='!#' className='prev-btn' onClick={onClickPrevGroup}>&lt;</a>

                        }

                        {
                            (()=>{
                                
                                let arr = []; // 페이지번호와 a 태그 모두 저장된 배열변수
                                for (let i=startNum; i<endNum; i++){
                                    if(i<Math.ceil(notice.length/list) ){ 
                                        arr = [...arr, <a className={ pageNumber===(i+1)?'on':''} href='!#' onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a>]
                                    }
                                }
                                return arr
                            })()
                        }

                        {cnt < Math.ceil(notice.length/list/groupPage) && <a href='!#' className='next-btn' onClick={onClickNextGroup}>&gt;</a>}
                    </div>
                </div>
            </div>
        </div>
    );
};
