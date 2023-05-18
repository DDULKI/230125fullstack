import React from 'react';

export default function ConfirmModal({confirmMsg, comfirmModalClose}) {

    const onClickConfirmModalClose=(e)=>{
        e.preventDefault();
        comfirmModalClose(); // 닫기 함수를 호출 실행하는 것 
    }


    return (
        <div id="confirmModal">
            <div className="wrap">
                <div className="container">
                    <div className="content">
                        <div className="title-box">
                            {/* <h1>{props.confirmMsg}</h1> 먼저 만들어놓은 props에서 전달 받을 때는 이렇게 사용한다. */}
                            <h1>{confirmMsg}</h1>
                        </div>
                        <div className="button-box">
                            <button onClick={(onClickConfirmModalClose)}>확인</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

