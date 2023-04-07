import React from 'react';
import '../../../scss/modal.scss';



export default function ModalComponent() {
    return (
        <div id='modal'>
            <div className="wrap">
                <div className="container">
                    <div className="content">
                        <div className="msg-box">
                            <p>
                            휴대폰인증번호 999878 입니다.
                            </p>                            
                        </div>
                        <div className="btn-box">
                            <button>확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};