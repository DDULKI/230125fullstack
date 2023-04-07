import React from 'react';
import HeaderComponent from './wrap/HeaderComponent.jsx';
import MainComponent from './wrap/MainComponent.jsx';
import FooterComponent from './wrap/FooterComponent.jsx';
import '../scss/style.scss';

export default function WrapComponent(props){

    const [state, setState] = React.useState (props)

    React.useEffect(()=>{
        // console.log(state.과일);
        // console.log(state.자동차);
        // console.log(state.성적);
    },[]);



    return (
        <div id='wrap'>
            <HeaderComponent/>
            <MainComponent 성적={state.성적}/> {/* 프롭스로도 내릴 수 있고, 컴포넌트에서도 가능하다 */}
            <FooterComponent/>
        </div>

            
    );
};

WrapComponent.defaultProps={
    과일:['딸기', '바나나', '사과', '포도', '망고'],
    자동차:['지프','쏘렌토','벤츠','니로','싼타페'],
    성적:[
        {번호: 1, 이름: '아이유',국어: 100, 영어: 50, 수학: 30},
        {번호: 2, 이름: '정슬기',국어: 90, 영어: 90, 수학: 90},
        {번호: 3, 이름: '이동희',국어: 55, 영어: 80, 수학: 60},
        {번호: 4, 이름: '박희진',국어: 70, 영어: 20, 수학: 30},
        {번호: 5, 이름: '김은아',국어: 60, 영어: 10, 수학: 20},
    ]
}