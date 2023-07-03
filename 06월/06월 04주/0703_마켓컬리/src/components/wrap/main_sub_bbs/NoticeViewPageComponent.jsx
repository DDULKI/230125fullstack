import React from 'react';
import './notice_scss/notice_view.scss'
import { ConfirmContext } from '../../../context/ConfirmContext';

export default function NoticeViewPageComponent () {

    const {ConfirmOkCancelModalOpen, isConfirmOkCancelModalResult} = React.useContext(ConfirmContext);

    React.useEffect(()=>{
        if (isConfirmOkCancelModalResult==='확인'){
            alert('삭제합니다.')
        }
    },[isConfirmOkCancelModalResult])



    // 글목록으로 이동 
    const onClickNoticeList = (e)=>{
        e.preventDefault();
        window.location.pathname = '/notice'
    }

    // 글삭제 
    const onClickDelete = (e)=>{
        e.preventDefaul();
        ConfirmOkCancelModalOpen('공지사항 글을 삭제 하시겠습니까? ');
        if (isConfirmOkCancelModalResult==='확인'){
            alert('정말 삭제하겠습니까?')
        }
        
      
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
                            <div className="right">[안내] SKT 휴대폰결제 서비스 점검 안내 (2023.06.11)</div>
                        </li>
                        <li>
                            <div className="left">작성자</div>
                            <div className="right">컬리</div>
                        </li>
                        <li>
                            <div className="left">작성일</div>
                            <div className="right">2023.06.08</div>
                        </li>
                        <li>
                            <div className="contents">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima vero, eum cum sint cupiditate autem sunt incidunt molestiae quo praesentium aliquid accusamus, molestias dignissimos? Nostrum voluptate cumque dolor harum assumenda!</p>
                                <p>Officiis inventore, similique eum repudiandae vel dolorem soluta rerum omnis velit necessitatibus ducimus, doloribus ad voluptas reprehenderit pariatur ipsa. Earum itaque a laudantium corrupti vitae aut, esse fugit similique repellendus!</p>
                                <p>Dicta ex voluptatum asperiores deserunt, ut minus dolore, sequi perspiciatis repellat iste eveniet magni quidem, fugit dolorum id? Quia corrupti facere nihil? Suscipit sint alias dolor. Possimus optio omnis beatae?</p>
                                <p>Corrupti, unde quod qui, molestiae dolorum cumque sunt culpa doloribus quasi, impedit rem in eum magni eos laboriosam ipsum. Suscipit beatae dicta saepe necessitatibus officia, odio est libero labore iste?</p>
                                <p>Quam tempora nobis blanditiis nihil nam inventore illo neque corrupti beatae perferendis, provident dolor voluptates quos, quibusdam incidunt debitis repellat at veniam adipisci eius nemo! Earum et dolore minima eveniet.</p>
                                <p>Cumque sequi nobis excepturi necessitatibus quidem dicta temporibus modi quia qui, dolor provident ex rerum non laudantium harum asperiores dolore quibusdam recusandae perferendis aspernatur fuga nam doloribus nostrum! Aliquam, earum.</p>
                                <p>Voluptate suscipit amet cum temporibus alias commodi consectetur sed aperiam laudantium excepturi labore ducimus nihil porro nam vero odio quisquam praesentium, aliquid assumenda qui error facere cupiditate adipisci incidunt. Ad!</p>
                                <p>Est omnis perspiciatis cum vero hic quo, vel nulla sed neque quae ratione impedit ducimus, vitae temporibus quos voluptatum autem repudiandae quam ipsa accusamus! Non, at a? Hic, sapiente perferendis.</p>
                                <p>Accusamus amet pariatur nihil ipsa nemo. Delectus molestias repellendus laborum amet, quia eaque culpa quis reprehenderit vitae porro exercitationem nobis repellat! Quis aliquam praesentium vitae sint vel ad eveniet et.</p>
                                <p>Delectus adipisci quod vel architecto sint facere nam. Aliquid deleniti quasi expedita dolorem veritatis reiciendis dolore in quo, vero atque maiores debitis ab consequuntur dolores nemo quas. Sapiente, doloribus quasi!</p>
                                <p>Nisi sed tempora optio quas fugiat laudantium velit suscipit corrupti ipsam autem consequatur, maiores, quia cupiditate rerum sapiente? Adipisci, aliquam alias! Maiores dolores aut similique iure dicta quae iusto neque!</p>
                                <p>Dolorum maiores temporibus enim, architecto ratione cupiditate cumque omnis quas error libero doloremque quis officia voluptate? Deserunt porro provident iure pariatur in cum possimus quae quibusdam, eligendi, odio deleniti aspernatur.</p>
                                <p>Ullam sit, unde tempore excepturi eligendi natus ex quod molestiae minima odio ea architecto nulla ducimus ab? Commodi molestias dolore suscipit rem nostrum provident quasi, explicabo odit? Sed, quae ab?</p>
                                <p>Sapiente tenetur culpa repudiandae deleniti sint exercitationem, voluptas praesentium voluptates deserunt cupiditate corporis illum aspernatur voluptate quos mollitia ratione soluta rerum sed nam nostrum in! Eveniet illum iste sunt pariatur!</p>
                                <p>Qui exercitationem numquam a odio magni, consequuntur nihil non obcaecati repellat aperiam culpa fuga laudantium neque ut, velit dolor itaque dolore placeat optio assumenda omnis. Repellendus voluptatibus unde eaque possimus.</p>
                                <p>Laborum dolorum voluptas vitae repellendus et blanditiis alias ducimus, impedit eius tenetur tempora nisi doloremque delectus maiores aliquam perspiciatis, maxime animi ab magni ipsum? Numquam iste sit consectetur eveniet laboriosam.</p>
                                <p>Eius dolorum molestiae a, numquam voluptas magni nisi, doloremque cum officiis ab iure voluptate ut quaerat mollitia culpa est vel suscipit quae distinctio? Dicta, modi. Excepturi alias unde fuga optio.</p>
                                <p>Quaerat ea molestiae distinctio accusamus, rerum impedit, ex esse officiis incidunt quasi non ducimus soluta fuga doloribus consequuntur minus minima. Nemo, ducimus temporibus ipsam dolores provident nulla itaque magnam animi.</p>
                                <p>Provident repellat necessitatibus accusantium saepe possimus praesentium. Fugiat vel rem at veritatis optio exercitationem qui libero molestias quas voluptatibus, amet, odit, provident eveniet suscipit. Temporibus pariatur eveniet repudiandae voluptates voluptatem.</p>
                                <p>Optio veniam eius consequatur quaerat facere nisi, culpa assumenda suscipit molestiae mollitia in dignissimos praesentium aliquid ullam architecto similique id magni? Perferendis adipisci quibusdam facere suscipit corrupti incidunt tenetur debitis.</p>

                            </div>
                        </li>
                        <li></li>
                    </ul>
                    <div className="button-box">
                        <div className="left">
                            <button>수정</button>
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

