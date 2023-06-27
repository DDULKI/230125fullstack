import React from 'react';
import './scss/confirm_modal.scss'
import { ConfirmContext } from '../../context/ConfirmContext';

export default function ConfirmOkCancel() {

    const {ConfirmOkCancelModalClose,msg} = React.useContext(ConfirmContext);

    // 삭제 모달창 취소 & 확인 번튼 클릭이벤트 구현
    const onClickConfirmModalClose=(e, value)=>{
        e.preventDefault();
        ConfirmOkCancelModalClose(value);
    }

    return (
        <div id="confirmModal2" className='confirm'>
            <div className="wrap2">
                <div className="container">
                    <div className="content">
                        <div className="title-box">
                            <h1>{msg}</h1>
                        </div>
                        <div className="button-box">
                            <button onClick={(e)=>onClickConfirmModalClose(e, "취소")}>취소</button>
                            <button onClick={(e)=>onClickConfirmModalClose(e, "확인")}>확인</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
        

};
