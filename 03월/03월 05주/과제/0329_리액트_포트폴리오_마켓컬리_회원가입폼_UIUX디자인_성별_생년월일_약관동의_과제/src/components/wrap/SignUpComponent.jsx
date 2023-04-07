import React from 'react';
import axios from 'axios';

export default function SignUpComponent({회원가입, timer, timerCounterfn, mapAddressFn}) {

    // 상위컴포넌트(WrapComponent) 프롭스(Props) 변수들 가져오기. 
    const {setId, minutes, seconds, msg, isEnd} = timer ; 

    // 회원가입 상태변수 
    const [state, setState] = React.useState(회원가입);
   
    // 유즈 Ref 
    // const createRef = React.createRef(); // 입력상자 태그요소 휴대폰을 선택함.(참조함)
    const createRef = React.useRef(); 
    // let cnt = React.useRef(1000); // 새로고침해야만 증가 값 보인다. 유지시킨다. 

    // useRef는 새로고침해야만 증가값 보인다. 
    // useRef는 새로고침해도 값이 유지된다. 


    // state 는 새로고침하면 새로 시작 초기화 
    // state 는 변경되면 화면이 다시 그려진다. 마운트된다. 

  
    
        // console.log(cnt.current);
       


    // console.log(createRef);
    // console.log(createRef);



    // 타이머 카운트 점검 : 유효시간 만료
    React.useEffect(()=>{

        setState({
            ...state,
            isConfirmModal: isEnd,// 모달 오픈 변수
            confirmMsg: msg   // 모달 메시지 변수  
        })

    },[isEnd]) // false => true 시점에 실행... 



    // 1. 아이디 입력상자 onChange 이벤트
    const onChangeUserId=(e)=>{
        // 입력제한 조건 => 정규표현식 만들기
        // 1. 특수문자 입력 즉시 삭제  => \-  \]  \\  이스케이프 문자 처리  replace()     
        // 2. 6 ~ 16 이하  test()
        // 3. 한굴 사용 안됨     test()   
        // 4. 영문필수, 숫자선택  => 1가지 이상 영문, 숫자 조합 test()
        // 5. 공백 사용 안됨 test()
        const {value} = e.target;  // 비구조화 === 구조분할할당
        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;   //특수문자
        const regExp2 = /^(.){6,16}$/g;   //6자 이상 16자 이하
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;   // 한글 
        const regExp4 = /[A-Za-z]+[0-9]*/g;   // 영문필수 1자이상 +,  숫자선택 0자이상 *
        const regExp5 = /\s/g;   // 공백
        

        let 아이디 = ''; 
        let isIdError = false; 
        let isIdMsg = ''; 

        // 1) 문자열.replace(정규식, ''); // 특수문자를 공백으로 치환
        아이디 = value.replace(regExp1, '');

        // 2) 정규식.test(문자열) {6,16} 범위이면 true 아니면 false
        // 3) 정규식.test(문자열) 한글 사용 하면 true 아니면 false
        // 4) 영문필수 1자이상 +,  숫자선택 0자이상 * 이면 true  아니면 false
        if( regExp2.test(value)===false || regExp3.test(value)===true || regExp4.test(value)===false || regExp5.test(value)===true ){
            isIdError = true;
            isIdMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
        }        
        else {
            isIdError = false;
            isIdMsg = '';
        }

        setState({
            ...state,
            아이디: 아이디,
            isIdError: isIdError,
            isIdMsg: isIdMsg
        })

    }

    // 2. 아이디 중복확인 onClick 이벤트
    const onClickUserIdOk=(e)=>{
        e.preventDefault();
        const value = state.아이디;  // 상태관리 값 변수에 대입
        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;   //특수문자
        const regExp2 = /^.{6,16}$/g;   //6자 이상 16자 이하
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;   // 한글 
        const regExp4 = /[A-Za-z]+[0-9]*/g;   // 영문필수 1자이상 +,  숫자선택 0자이상 *
        const regExp5 = /\s/g;   // 공백


        if( regExp2.test(value)===false  || regExp3.test(value)===true || regExp4.test(value)===false  ||  regExp5.test(value)===true ){
            
            setState({
                ...state,
                isConfirmModal: true,
                confirmMsg: '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합'
            });

        }
        else {
            // 아이디 중복검사 실시
            // 가져오는 방법은 REST API 사용 AJAX 또는 AXIOS JSON 데이터처리에 가장 좋은 패키지
            // 서버에서 DB(데이터베이스) 저장된 아이디 데이터를 가져온다
            // 서버사이드 스크립트언어가 MYSQL SQL 명령문을 이용 가져온다.
            // 그리고 비교한다. 입력된 아이디랑
            // axios({}).then(()=>{}).catch(()=>{}); 
            // 정보요청 Request   
            axios({
                url:'http://ddulki4994.dothome.co.kr/signup_db/select.php',
                method: 'GET'
            })
            .then((res)=>{
                
                console.log( res );
                console.log( res.data );

                // 맵함수이용 화살표함수 중괄호 빼고 사용하면
                // 비교 결과 true, false 배열로 곧바로 리턴 값

                const result = res.data.map((item)=>item.아이디===state.아이디);
                console.log( result );
                // result[false, false, false, true, ......]
                if( result.includes(true) ){
                    setState({
                        ...state,
                        isIdOk: false,
                        isConfirmModal: true,
                        confirmMsg:'사용 불가능한 아이디 입니다.' 
                    })
                }
                else{
                    setState({
                        ...state,
                        isIdOk: true,
                        isConfirmModal: true,
                        confirmMsg:'사용 가능한 아이디 입니다.' 
                    })
                }
            })
            .catch((err)=>{
                console.log(`AXIOS 실패! ${err} `)
            });    


        }

    }

    // 3. 비밀번호 입력상자 onChange 이벤트
    // *  입력제한조건
    // 1) 10자이상 ~ 16자이하
    // 2) ([영문+(1자이상)]+[숫자+(1자이상)]+)+   2가지이상 조합 그룹1 이거나  |, 
    //    ([영문+(1자이상)]+[특수문자+(1자이상)]+)+ 2가지이상조함 그룹2 이거나
    //    ([숫자+(1자이상)]+[특수문자+(1자이상)]+)+ 2가지이상조함 그룹3 이거나
    // 3) 한글 사용 안됨.
    // 4) 공백 사용 안됨.
    // 5) 동일한 숫자 3개 이상 연속 사용 불가
    const onChangeUserPw1=(e)=>{
        const {value} = e.target;
        let isPwError = false;
        let isPwMsg = '';
        // [] 범위  문자, 숫자, 특수문자 등의 범위
        // () 그룹
        // | 또는 or
        // + 1자이상 반드시
        // * 0자이상
        // 특수문자는 \-   \]     \\  이세가지는 반드시 이스케이프(Escaped) 문자 처리
        // const regExp1 = /.{10,16}/g;  // true 이면 정상 헐렁한 수량자
        const regExp1 = /^.{10,16}$/g;  // true 이면 정상 엄격한 수량자 
        // const regExp2 = /()()()/g;     3그룹
        // const regExp2 = /()+|()+|()+/g;  3그룹 셋중에 한그룹 반드시
        // const regExp2 = /([]+[]+)+|([]+[]+)+|([]+[]+)+/g;  2가지 이상 조함
        // (영문숫자)+(숫자영문)+(영문특수문자)+(특수문자영문)+(숫자특수문자)+(특수문자숫자)+
        // const regExp2 = /([영문]+[숫자]+)+|([숫자]+[영문]+)+|([영문]+[특수문자]+)+|([특수문자]+[영문]+)+|([숫자]+[특수문자]+)+([특수문자]+[숫자]+)+/g;
        const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[0-9]+)+/g;   // true 정상
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;   // 한글 false 이면 정상
        const regExp4 = /\s/g;   // 공백 false 이면 정상
        const regExp5 = /(\d)\1\1/g;  // false 이면 정상   // 동일한 숫자 연속 3자이상
        // const regExp6 = /(.)\1\1/g;     // 동일한 문자숫자 연속 3자이상

        console.log(` 비밀번호 ${value.length} ${regExp1.test(value)}` )
        
        
        if(regExp1.test(value)===false){
            isPwError = true;
            isPwMsg = '최소 10자 이상 입력';
        }
        else if(regExp2.test(value)===false || regExp3.test(value)===true  || regExp4.test(value)===true){
            isPwError = true;
            isPwMsg = '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합';
        }
        else if(regExp5.test(value)===true){
            isPwError = true;
            isPwMsg = '동일한 숫자 3개 이상 연속 사용 불가';
        }
        else {
            isPwError = false;
            isPwMsg = '';
        }

        setState({
            ...state,
            isPwError: isPwError,
            isPwMsg: isPwMsg,
            비밀번호: value
        })

    }

    // 3. 비밀번호확인 입력상자 onChange 이벤트 
    // 입력제한조건
    // 공백이면 : 비밀번호를 한번 더 입력해 주세요. 
    // 비밀번호와 비밀번호확인 입력상자 입력값 

    const onChangeUserPw2=(e)=>{
        const {value} = e.target; 
        let isPw2Error = false; 
        let isPw2Msg = 'false'; 

        // 현재 입력값과 이전에 입력된 비밀번호를 비교한다. 
        if(value===''){
            isPw2Error = true;
            isPw2Msg = '비밀번호를 한번 더 입력해 주세요';
        }
        else if(value!==state.비밀번호){
            isPw2Error = true;
            isPw2Msg = '동일한 비밀번호를 입력';
        }
        else {
            isPw2Error = false;
            isPw2Msg ='';
        }

        setState({
            ...state,
            isPw2Error: isPw2Error,
            isPw2Msg: isPw2Msg,
            비밀번호확인: value
        })
    }

    // 4. 이름 입력상자 onChange 이벤트 
    // 입력제한조건 
    // 1) 특수문자 입력과 동시에 삭제 
    // 2) 공백이면 이름을 입력해 주세요. 

    const onChangeName=(e)=>{
        const {value} = e.target;
        let isNameError = false;
        let isNameMsg = '';
        let 이름 = '';
        const regExp = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;

        이름 = value.replace(regExp, '');
        if(이름===''){
            isNameError = true;
            isNameMsg = '이름을 입력해 주세요';
        }
        else {
            isNameError = false;
            isNameMsg = '';
        }


        setState({
            ...state,
            isNameError : isNameError,
            isNameMsg : isNameMsg,
            이름 : 이름
        })
    }

    // 5-1. 이메일 입력상자 onChange 이벤트 
    // 입력제한조건 
    // 예시
    // . - _ 특수문자 사용
    // 공백안됨 
    // seulki4994@naver.com
    // seulki4994@naver.com
    // seulki-4994@naver.co.kr
    // seulki.4994@naver.co.kr
    // seulki3_4994@na4ver.co.kr
    // seulki_4994@naver.co.kr
    // seulki..4994@naver.co.kr . 1회사용 두개 사용 안됨. 
    // seulki..4994@naver.co.kr . / 사용 안됨 
    // 대한민국email4994@naver.co.kr . / 한글 사용 가능....ㄷㄷㄷㄷ 
    // ? 1자 또는 없음 
    // (\.)? 닷(dot) 1자 아니면 또는 0자  
    // ^ 시작
    // [^0-9] 숫자가 아닌것 곽괄호안에는 부정 
    // $ 끝 
    // 맨앞 (영문숫자한글)필수(.)?(영문숫자한글)선택@ (영문숫자한글-_.)필수 \.영문만 {2,3} 맨뒤
    // 제외하는 특수문자:  @ ( ) \ [ ] " ; : , < >
    // 사용가능 특수문자: `~!#$%^&*\-_=+{}|'/\.? 
    // /^ []+ (\.)? []* @ []+ \.[] {2,3} $/gi; ignore 이그노 영문대소문자 구별없음 

    
    const onChangeUserEmail=(e)=>{
        const {value} = e.target; 

        let isEmailError = false;
        let isEmailMsg = '';
        const regExp = /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+\.[a-z]{2,3}$/gi ;
        // 골뱅이 앞에 마침표가 한개만 있어야한다. 두개는 절대 x


        // 밸류가 공백이면 이메일을 입력해 주세요. 이메일 형식으로 안적었다면 이메일 형식으로 입력해 주세요. 
        if (value===''){
            isEmailError=true;
            isEmailMsg='이메일을 입력해 주세요.';
        }   
        else if (regExp.test(value)===false){
            isEmailError=true;
            isEmailMsg='이메일 형식으로 입력해 주세요.';
        }   
        else {
            isEmailError=false;
            isEmailMsg='';
        }


        setState({
            ...state,
            isEmailError : isEmailError,
            isEmailMsg : isEmailMsg,
            이메일: value
            
        })
    }


    //5-2. 이메일 중복 검사 

    const onClickUserEmailOk=(e)=>{
        e.preventDefault();
        const value = state.이메일; 
        const regExp = /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+\.[a-z]{2,3}$/gi ;
        // 골뱅이 앞에 마침표가 한개만 있어야한다. 두개는 절대 x


        // 밸류가 공백이면 이메일을 입력해 주세요. 이메일 형식으로 안적었다면 이메일 형식으로 입력해 주세요. 
        if (value===''){
            setState({
                ...state,
                isConfirmModal:true,
                confirmMsg:'이메일을 입력해 주세요.'
            })
         
        }   
        else if (regExp.test(value)===false){
            setState({
                ...state,
                isConfirmModal:true,
                confirmMsg:'이메일을 형식으로 입력해 주세요.'
            });

           
        }   
        else {
            // 정상인 이메일인 경우
            // 이메일 중복검사 
            axios({ // 웹서버 & DB 서버에서 데이터 가져오기
                url:'http://ddulki4994.dothome.co.kr/signup_db/select.php',
                method:'GET' // 대문자 가능 
            })
            .then((res)=>{
                console.log(res);
                console.log(res.data.이메일);
                console.log(res.data);
                console.log(res.data[0].이메일);
                console.log(res.data[1].이메일);
                console.log(res.data[2].이메일);
                console.log(res.data[3].이메일);
                // 만약에 오류나면 어떻하쥐 ?????
                // 예외처리 
                try{

                    const result = res.data.map((item)=>item.이메일===state.이메일);
                    
                    if(result.includes(true)){
                       
                        setState({
                            ...state,
                            isEmailOk: false,
                            isConfirmModal:true,
                            confirmMsg:'사용 불가능한 이메일입니다.'
                        })
                    }
                    else{
                        
                        setState({
                            ...state,
                            isEmailOk: true,
                            isConfirmModal:true,
                            confirmMsg:'사용 가능한 이메일입니다.'

                        })
                    }

                }
                catch(err){
                    console.log(`AXIOS 오류 메세지! ${err}`);
                }

                

            })
            .catch((err)=>{
                console.log(`AXIOS 실패 메세지! ${err}`) // 데이터 베이스 접근을 못한 것. 
            });

        }

    }

    // 11. 이용약관동의 
    // 11-1 전체동의 체크박스 onChang() 이벤트 
    // 개별체크해서 이용약관동의 항목이 7개이면 체크한다. 
    // 7개미만이면 체크해제 

    const onChangeUserServiceAll=(e)=>{
        let 이용약관동의 = [];

        if(e.target.checked===true){ // 전체동의를 체크했다면, 
           이용약관동의 = state.이용약관  // 이용약관 배열 7개의 항목 모두 = > 이용약관동의 배열에 저장한다. 
        }
        else{
            이용약관동의 = [];
        }

        setState({
            ...state,
            이용약관동의:이용약관동의

        })
    }

    // 개별 체크박스 

    const onChangeUserService=(e)=>{
       
        if(e.target.checked){ // 개별체크 선택항목 value 값을 이용약관동의 배열에 저장시킨다. 
           
            // 무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택) 선택 체크되면 

            if(e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)' && state.이용약관동의.includes('SNS')===false && state.이용약관동의.includes('이메일')===false){
                setState({
                    ...state, 
                    이용약관동의:[...state.이용약관동의, e.target.value, 'SNS', '이메일']
                })
    
            }
            else if(e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)' && state.이용약관동의.includes('SNS')===false && state.이용약관동의.includes('이메일')===true){
                setState({
                    ...state,
                    이용약관동의:[...state.이용약관동의, e.target.value,'SNS'] // 이메일은 있다. 넣지마세요. 

                })
            }
            else if(e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)' && state.이용약관동의.includes('SNS')===true && state.이용약관동의.includes('이메일')===false){
                setState({
                    ...state,
                    이용약관동의:[...state.이용약관동의, e.target.value,'이메일' ] //SNS는 있어요 넣지마세요. 
                })
            }
            else if(e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)' && state.이용약관동의.includes('SNS')===true && state.이용약관동의.includes('이메일')===true){
                setState ({
                    ...state,
                    이용약관동의:[...state.이용약관동의, e.target.value] // 이메일, SNS는 있어요 넣지마세요.. 
                })
            }
            // 현재 SNS를 체크했는데 이메일 체크가 되어있고, 그리고 무료배송, 할인쿠폰 등 혜택/정보 수신동의선택이 안되어있다면. 
            else if (e.target.value==='SNS' && state.이용약관동의.includes('이메일')===true && state.이용약관동의.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')===false){
                setState ({
                    ...state,
                    이용약관동의:[...state.이용약관동의, e.target.value, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)']
                })
            }
            // 현재 이메일을 체크했는데 SNS 체크가 되어있고, 그리고 무료배송, 할인쿠폰 등 혜택/정보 수신동의선택이 안되어있다면, 
            else if (e.target.value==='이메일' && state.이용약관동의.includes('SNS')===true && state.이용약관동의.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')===false){
                setState({
                    ...state,
                    이용약관동의:[...state.이용약관동의, e.target.value, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)']
                })
            }
            else {
                setState({
                    ...state,
                    이용약관동의: [...state.이용약관동의, e.target.value]
                })
            }

        }
        else {// 개별체크 선택항목 value 값을 이용약관동의 배열에서 삭제시킨다. 

            let 이용약관동의 = []; // 임시변수 만들어주기. 
           
            // 1. 무료배송, 할인쿠폰 등 혜택/정보 수신 동의 

            //      삭제1[state.이용약관동의] : 무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택) => state.이용약관동의 제거 후 결과=> 임시배열에 저장한다. 
            //      삭제2[이용약관동의] : SNS
            //      삭제3[이용약관동의] : 이메일

            if(e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'){
                이용약관동의 = state.이용약관동의.filter((item)=>item!==e.target.value);
                이용약관동의 = 이용약관동의.filter((item)=>item!=='SNS');
                이용약관동의 = 이용약관동의.filter((item)=>item!=='이메일');
                setState({
                    ...state,
                    이용약관동의:이용약관동의
                })
            }
            else if (e.target.value==='SNS' && state.이용약관동의.includes('이메일')===true){
                이용약관동의 = state.이용약관동의.filter((item)=>item!==e.target.value);
                이용약관동의 = 이용약관동의.filter((item)=>item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
                setState({
                    ...state,
                    이용약관동의:이용약관동의
                })
            }
            else if(e.target.value==='이메일' && state.이용약관동의.includes('SNS')===true){
                이용약관동의 = state.이용약관동의.filter((item)=>item!==e.target.value);
                이용약관동의 = 이용약관동의.filter((item)=>item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')
                setState({
                    ...state,
                    이용약관동의:이용약관동의
                })
            }

            else {
                setState({
                    ...state, 
                    이용약관동의:state.이용약관동의.filter((item)=>item!==e.target.value)
                })
            }
            
        }
    }






    // 컨펌모달 닫기 이벤트
    const onClickConfirmModalClose=(e)=>{
        e.preventDefault();

        // console.log(state.confirmMsg.includes('발송인증번호')); // 찾으면 true, 못찾으면 false
        // console.log(state.confirmMsg.indexOf('발송인증번호')); // -1 찾지 못함 / 찾으면 >= 0
        // console.log(state.confirmMsg.search('발송인증번호')); // -1 찾지 못함 / 찾으면 >= 0

        if(state.confirmMsg.includes('발송인증번호')){
            // 모달 닫기 그리고 함수 실행
            // 타이머함수 호출 실행
            timerCounterfn();
            
        }
        setState({
            ...state, 
            isConfirmModal : false
        })
    }

    // 6. 휴대폰 
    // 입력 제한 조건 
    // 1) 숫자만 입력 (이외는 모두 삭제 )
    // 휴대폰: '',
    // isHpError: false,
    // isHpMsg: '',



    const onChangeUserHp =(e)=>{
        const regExp = /[^0-9]/g; // 숫자가 아닌 것 .
        const {value} = e.target; // 비구조화 
        let 휴대폰 ='';
        let isHpError = false;
        let isHpMsg = '';
        let isHpdisabled = true;

        // 숫자가 아니면 삭제 
        휴대폰 = value.replace(regExp, '');

        if(휴대폰===''){ // 휴대폰이 공백이면 .. 
            isHpError=true;
            isHpMsg='휴대폰 번호를 입력해 주세요'
        }
        else{
            isHpError=false;
            isHpMsg=''
            // 길이가 한 글자 이상이면, 
            if(휴대폰.length >= 1 ){
                isHpdisabled = false;
            }
            else {
                isHpdisabled = true;
            }
        }


        setState({ // 저장하는 곳 
            ...state,
            휴대폰: 휴대폰,
            isHpError: isHpError,
            isHpMsg:isHpMsg,
            isHpdisabled:isHpdisabled
        });
    }

    // 6-1 휴대폰 발송인증번호 받기 클릭 이벤트 
    
    const onClickHpNum=(e)=>{
        e.preventDefault();
        // 휴대폰 번호가 정확한지 정규표현식 유효성검사
        // ^010-7771-6035$
        // 010-348-6441
        // 010-7897-4561
        // . . . . . . . .........
        // 010 011.......... 

        // const regExp = /^01[0|1|2|3|4|5|6|7|8|9]+[0-9]{3,4}[0-9]{4}$/; 이렇게도 사용가넝 
        const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/;
        let isConfirmModal = false;
        let confirmMsg = '';
        let num = 0; // 발송인증번호 상태관리변수 등록 
        let 발송인증번호 = 0;

        if(regExp.test(state.휴대폰)===false) {
          
             isConfirmModal = true;
             confirmMsg = '잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.';
        }
        else {
            

            // 발송인증번호 전송 타이밍 
            num = Math.floor(Math.random()*900000+100000); // 발송인증번호: 6자리의 난수 발생 소수점 자리 안나오게,,, 

            // 상태관리 변수에 발송인증번호 저장
            발송인증번호 = num;
            isConfirmModal = true;
            confirmMsg = `발송인증번호가 발송되었습니다. ${num}`;


        }
        setState({
            ...state,
            isConfirmModal :isConfirmModal, 
            confirmMsg: confirmMsg, // 리터럴 방식.. 
            발송인증번호: 발송인증번호
            
        })
    
    }

    // 6-2 휴대폰 발송인증번호 확인 입력상자 onChange() 이벤트 
    const onChangeUserHp2=(e)=>{
        const {value} = e.target;
        let isHpdisabled2 = true; // 처음에 사용못하니까 트루 
    

        if(value.length >=1){
            isHpdisabled2 = false;

        }
        else {
            isHpdisabled2 = true;
        }


        setState({
            ...state,
            입력인증번호: value,
            isHpdisabled2: isHpdisabled2
        })
        
    }
    
    // 6-3 휴대폰 발송인증번호 확인 버튼 onChange() 이벤트 


    const onClickHpNum2=(e)=>{
        e.preventDefault();
       
        let isConfirmModal = false;
        let confirmMsg = '';
        let isHp3 = true;
        let 발송인증번호 = state.발송인증번호;
        let isHpdisabled = true;

        // 입력인증번호(문자)와 발송인증번호(숫자) 비교하기 
        isConfirmModal = true;
        if (state.발송인증번호===Number(state.입력인증번호)){
            confirmMsg =  "인증에 성공 하였습니다.";
            isHp3 = false;
            발송인증번호= '';
            isHpdisabled = true;

            //타이머 정지 
            console.log(timer.setId);
            clearInterval(timer.setId)

        }
        else {
            confirmMsg =  "잘못된 인증 코드입니다.";
            isHp3 = true;
            발송인증번호 = state.발송인증번호;
            isHpdisabled = false;
        }

        setState({
            ...state,
            isConfirmModal: isConfirmModal,
            confirmMsg: confirmMsg,
            isHp3: isHp3,
            발송인증번호: 발송인증번호,
            isHpdisabled: isHpdisabled
            
        })

    }

    // 6-4 다른번호 인증 
    const onClickHpNum3=(e)=>{
        e.preventDefault();

        setState({
            ...state,
            isHp3:true,
            휴대폰:'',
            입력인증번호:'',
            발송인증번호:'',
        })

        // 1. 맨위. 루트영억에 ref 를 생성한다. 
        // 2. 생성된 createRef 변수를 태그요소 휴대폰 입력상자에 ref={createRef}
        // 3. 이벤트 수행시 휴대폰 입력자에 커서를 포커스 시킨다.   createRef.current.focus();
        createRef.current.focus(); // 커서를 휴대폰 입력상자에 맞춘다. 커서가 깜빡깜빡 거린다. 

    }

    // 7-1 주소검색 API : 팝업창 구현 
    // public 정적요소 위치에 
    // pupup.html 
    const openPopupDaumPostApi=()=>{ // 등록해주기 
        const popupFile = './popup.html';
        const popupName = '_popupAddressApi';
        const popupWidth = 530;
        const popupHeight = 570;
        const popupTop = (window.innerHeight-popupHeight)/2; /* (윈도우창높이 - 팝업창 높이)/2 ; */
        const popupLeft = (window.innerWidth-popupWidth)/2/* (윈도우창너비 - 팝업창너비)/2 ; */



        // window.open(팝업창.html, 팝업창.이름, 'width=530, height=570, top=50%, left=50%')
        window.open(popupFile, popupName, `width=${popupWidth},height=${popupHeight},top=${popupTop},left=${popupLeft}`)
    }

    
    const onClickAddrPopupOpenApi=(e)=>{
        e.preventDefault();
        openPopupDaumPostApi(); // 팝업창 열기 

    }

    // 7-2 세션 스토레이지 이벤트 
    // 함수는 언제 실행된다???? => 화면이 마운트 되고 난 후, 실행!!! 
    // 1. 부모창에서 세션스토레이지 키('SKADDRESS')를 ckwsmsek 
    // 2. 만약 있다면 가져오기 getItem(키)
    // 3. 빈값이면 리턴 
    // 4. 값이 있다면 문자형 객체를 JSON.parse() 형식으로 변환한다. 
    // 5. 속성값 주소1, 주소2를 주소입력창에 바인딩 시킨다. 
    
    
    const getSessionStorage=()=>{
        const key = 'SKADDRESS';
        let 주소1 = '';
        let 주소2 = '';
        let isAddress = false; 

        // 스토레이지 가져오기 데이터 없으면 null 반환
        let result = sessionStorage.getItem(key)
        if(result!==null){ // 데이터가 있다면,,, 가져와라 ! 
            result = JSON.parse(sessionStorage.getItem(key)); // 문자로 있던 변수가 객체로 변환하게 됨. 
            주소1 = result.주소1;
            주소2 = result.주소2;
            isAddress = true; 
            
            mapAddressFn(`${result.주소1} ${result.주소2}`, false);
        }

        setState({
            ...state,
            주소1:주소1,
            주소2:주소2,
            isAddress: isAddress
        })


    }
  

    React.useEffect(()=>{ // 특징 스테이트먼트에 변화가 있으면 실행하는 아이 
        getSessionStorage();
        
    },[state.주소1]); // 로딩시 한번 실행될 때 [] 써주면 된다. 




    // 7-3. 주소 1 입력상자 onChangeAddr1() 이벤트 
    const onChangeAddr1=(e)=>{
        setState({
            ...state, 
            주소1: e.target.value

        })
    }



    // 7-4 주소 2 입력상자 onChangeAddr2() 이벤트 
    const onChangeAddr2=(e)=>{
        setState({
            ...state,
            주소2: e.target.value
        })
    }

    // 7-5. 주소검색 => 재검색 버튼 클릭 이벤트 

    const onClickResearchBtn=(e)=>{
        e.preventDefault();
        openPopupDaumPostApi(); // 팝업창 열기 
       
    }



    // 8. 성별 : 라디오버튼 이벤트
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        })
    }
    
    
        // 9. 생년월일
        // 입력상자 입력제한조건 분석하기 
        // 0. 숫자만 입력 나머지 모두 제거 
        
        // 함수 제작 그리고 생년, 생월, 생일 연결 => 유즈이펙트를 활용해야한다. 
        // useEffect()는 상태관리 변수 변경되면 즉각 실행
        // 1. 모든 칸이 빈칸이면 오류없음 초기화 
        // 2. 년(100세이하) 채워지면 => 월 입력 요구 
        // 2. 년(14세미만 ) 불가 
        // 2. 년(미래는 안됨) 
        // 3. 월(1-12) 채워지면 => 일 입력 요구 
        // 4. 일(1-31)이 채워지고 오류가 없다면 완료. 

        // 생년월일 입력제한조건및 이벤트 수행 메인함수 
        const birthCheckFn=()=>{
            const nowYear =  new Date().getFullYear();
            let isBirth = false;
            let isBirthMsg = '';

            if(state.생년===''&& state.생월==='' && state.생일===''){
                isBirth = false;
                isBirthMsg = '';
               
            }
            else {
                // 생년 제한조건 디버깅 큰숫자 > 중간 > 작은 
                // 1) 년(미래는 안됨) = > 월 입력 요구 큰숫자  
                // 2) 년(14세미만 ) 불가 => 월 입력 요구 중간숫자
                // 3) 년(100세이하) 채워지면 => 월 입력 요구 낮은 숫자  
                
               
                //  2023-100  1923 1922 안된다. 
                if( state.생년.length < 4 ){ // 생년(4자리 숫자)
                    isBirth= true;
                    isBirthMsg = '태어난 년도 4자리를 정확하게 입력해주세요.'
                  
                    
                }
                else if(Number(state.생년) >= nowYear ){ // 생년(미래년도) > 로 썼었는데, 23년 미래년도가 나와서. >=로 바꿔주니까. 
                    isBirth=true;
                    isBirthMsg='생년월일 확인하세요(미래년도)';
                }
                else if( Number(state.생년) >= (nowYear-14)){ // 년(14세미만 ) 어린 나이 / 생년이 높아가 어리지. 
                    isBirth=true;
                    isBirthMsg='생년월일 확인하세요(14세미만)';
                   
                }
                else if( Number(state.생년) < (nowYear-100) ){ // 년(100세이하) 
                    isBirth=true;
                    isBirthMsg='생년월일 확인하세요(100세초과)';
                    
                }
    

                else {
                    // 생월 체크 
                    if( Number(state.생월) < 1 || Number(state.생월) > 12 ){ // 1 ~ 12 
                        isBirth=true;
                        isBirthMsg='생월 확인하세요'

                       
                    } 
                    else {
                        // 생일체크 
                        if( Number(state.생일) < 1 || Number(state.생일) > 31 ){ // 1-31

                            isBirth=true;
                            isBirthMsg='생일 확인하세요'
                         
                        }   
                        else {
                            isBirth=false;
                            isBirthMsg='생년월일 입력완료';

                          

                            // 생년월일 모두 이상없다 오류메세지 삭제 입력 완료 
                            // 생월 
                            // 생일 
                        }
                    }
                }

            }

            setState({
                ...state,
                isBirth: isBirth,
                isBirthMsg:isBirthMsg
            })
        }
        
        React.useEffect(()=>{
            birthCheckFn()
        },[state.생년, state.생월, state.생일])

        


       

        // 1) 생년 입력상자 onchange() 이벤트 상태관리자 연결 변수 만들어 줘야함. 
        const onChangeYYYY=(e)=>{
           
            
            // 정규표현식
            // 문자열.replace(정규표현식,'')
            // 숫자만 입력되도록 
            let 생년='';
            const regExp = /[^0-9]/g; // 숫자가 아닌 것 
            const {value} = e.target;

            생년 = value.replace(regExp, '')
            // 생년 = e.target.value.replace(regExp, ''); 도 가능. const {value} 로 지정하지 않을 경우, 

            setState({
                ...state,
                생년: 생년
            })
        }

        // 2) 생월 입력상자 onchange() 이벤트 상태관리자 연결 변수 만들어 줘야함. 
        const onChangeMM=(e)=>{
            const regExp = /[^0-9]/g; // 숫자가 아닌 것 
            const {value} = e.target;
            let 생월='';

            생월 = value.replace(regExp, '')
            
            setState({
                ...state,
                생월: 생월
            })
        }

         // 3) 생일 입력상자 onchange() 이벤트 상태관리자 연결 변수 만들어 줘야함. 
        const onChangeDD=(e)=>{
            const regExp = /[^0-9]/g;
            const {value} = e.target;
        
            let 생일='';

            생일 = value.replace(regExp,'')

            setState({
                ...state,
                생일:생일
            })
        }

    
    
        // 10. 추가입력사항
        const onChangeUserChooga=(e)=>{
            let 추가입력사항='';
            let isChooga1=false;
            let isChooga2=false;


           if(e.target.checked===true) {
                추가입력사항 = e.target.value; 
               if (e.target.id==='userChooga1'){ // 선택: 라디오1, 라디오2 
                    isChooga1 = true; 
                    isChooga2 = false; 
                   
               }
               else {
                    isChooga1 = false; 
                    isChooga2 = true; 
                  
               }

           }

           setState({
                ...state,
                추가입력사항: 추가입력사항,
                isChooga1 : isChooga1, 
                isChooga2 : isChooga2
           })
        }


        // 10-2. 추천인아이디 입력상자 onChange() 이벤트 
        const onChangeUserChoogaId=(e)=>{

            let isChoogaIdokBtn =false; // 사용가능 
            let isChoogaIdokBtnDisabled = true // 사용불가 
            
            // 추천인아이디 글자 입력 1자이상이면 우측 아이디확인버튼 사용 가능하도록 설정(setter)
            if(e.target.value.length > 1) {
                isChoogaIdokBtn = true;
                isChoogaIdokBtnDisabled = false; // 사용가능 
            }

            else{
                isChoogaIdokBtn =false;
                isChoogaIdokBtnDisabled = true; // 사용불가능
            }

            setState({
                ...state,
                추천인아이디: e.target.value
                
            })
        }

        // 10-3. 참여 이벤트  입력상자 onChange() 이벤트 
        const onChangeUserChoogaEvent=(e)=>{
            setState({
                ...state,
                참여이벤트명: e.target.vlaue
            })

        }

        // 10-4 추천인 아이디 확인 
        // 서버에서 DB 정보와 비교 아이디가 있다면 이벤트 참여 가능 
        // 버튼 클릭 이벤트 

        const onClickchoogaIdokBtn=(e)=> {
            e.preventDefault();
            // 웹서버에 접근해서 데이터베이스 접근 조회 서버사이드 스크립트언어 

            let isConfirmModal = false;
            let confirmMsg = '';
            // let isChoogaIdokBtn = false;

           
            axios({
                url:'http://ddulki4994.dothome.co.kr/signup_db/select.php',
                method: 'GET'
            })
            .then((res)=>{ // Success
               
                const result = res.data.map((item)=>item.아이디===state.추천인아이디);

                if (result.includes(true)===(true)){// 추천인이 있다면 모달창 띄우고, 버튼 사용불가, 색상 연하게함  
                    // 존재하는 아이디 입니다.

                     isConfirmModal = true;
                     confirmMsg = '존재하는 아이디 입니다. 친구초대 이벤트에 참여 가능해요';
                //      isChoogaIdokBtn = false; 
                }

                else {
                    // 존재하지 않는 아이디 입니다.
                    isConfirmModal = true;
                    confirmMsg ='존재하지 않는 아이디 입니다.'; 
                    // isChoogaIdokBtn = false;
                }

                setState({
                    ...state, 
                    isConfirmModal: isConfirmModal, 
                    confirmMsg: confirmMsg,
                    // isChoogaIdokBtn:isChoogaIdokBtn 

                });

            })
            .catch((err)=>{ // Error
                console.log(`AXIOS 실패! ${err}`);
            })
        }


    return (
        <>
        <main id='signUp'>
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>회원가입</h2>
                            <p><span><i>*</i>필수입력사항</span></p>
                        </div>
                        <div className="content">
                            <form name='sign_up_form' id='signUpForm' method='post' action="./sign_up.php">
                                <ul>
                                    <li>
                                        <div>
                                            <label htmlFor="userId">아이디<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                    type='text' 
                                                    maxLength={16} 
                                                    name='user_id' 
                                                    id='userId' 
                                                    placeholder='아이디를 입력해주세요' 
                                                    onChange={onChangeUserId}
                                                    value={state.아이디}
                                                />
                                            </div>
                                            <button  
                                                type='button'
                                                onClick={onClickUserIdOk}
                                            >중복확인</button>
                                            <p className={`error-msg${state.isIdError?' on':''}`}>{state.isIdMsg}</p>
                                        </div>
                                        
                                        
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userPw1">비밀번호<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                    type="password"  
                                                    maxLength={16} 
                                                    name='user_pw1' 
                                                    id='userPw1' 
                                                    placeholder='비밀번호를 입력해주세요' 
                                                    onChange={onChangeUserPw1}
                                                    value={state.비밀번호}
                                                />
                                            </div>
                                            <p className={`error-msg${state.isPwError?' on':''}`}>{state.isPwMsg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userPw2">비밀번호확인<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                    type='password'  
                                                    maxLength={16} 
                                                    name='user_pw2' 
                                                    id='userPw2' 
                                                    placeholder='비밀번호를 한번 더 입력해주세요' 
                                                    onChange={onChangeUserPw2}   
                                                    value={state.비밀번호확인}
                                                />
                                            </div>
                                            <p className={`error-msg${state.isPw2Error?' on':''}`}>{state.isPw2Msg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userName">이름<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                    type='text' 
                                                    name='user_name' 
                                                    id='userName' 
                                                    placeholder='이름을 입력해주세요' 
                                                    onChange={onChangeName}
                                                    value={state.이름}
                                                />
                                            </div>
                                            <p className={`error-msg${state.isNameError?' on':''}`}>{state.isNameMsg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userEmail">이메일<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                    type='email' 
                                                    name='user_email' 
                                                    id='userEmail' 
                                                    placeholder='이메일을 입력해주세요'
                                                    onChange={onChangeUserEmail}
                                                    value={state.이메일} 
                                                />
                                            </div>
                                            <button  
                                                type='button'
                                                onClick={onClickUserEmailOk}
                                                >중복확인</button>
                                            <p className={`error-msg${state.isEmailError?' on':''}`}> {state.isEmailMsg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userHp">휴대폰<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                    type='text'  
                                                    maxLength={11} 
                                                    name='user_hp' 
                                                    id='userHp' 
                                                    placeholder='숫자만 입력해주세요' 
                                                    onChange={onChangeUserHp}
                                                    value={state.휴대폰}
                                                    ref={createRef} // 레퍼런스 참조. 
                                                    />
                                            </div>
                                            <button className={`hp-num-btn ${state.isHpdisabled? '':' on'}`} onClick={onClickHpNum} disabled={state.isHpdisabled} type='button'>인증번호 받기</button>
                                            <button className={`hp-num-btn hp-num-btn3${state.isHp3?'':' on'}`} onClick={onClickHpNum3} type='button'>다른번호 인증</button>
                                            <p className={`error-msg${state.isHpError?' on':''}`}>{state.isHpMsg}</p>
                                        </div>
                                    </li>

                                    {
                                        state.발송인증번호!=='' && (// 공백이 아니면 보이지말고 공백이 아니면 보여라. 
                                            <li>
                                                <div>
                                                    <div className="center-box">
                                                        <input 
                                                            type='text'  
                                                            maxLength={6} 
                                                            name='user_hp2' 
                                                            id='userHp2' 
                                                            placeholder='발송인증번호를 입력하세요' 
                                                            onChange={onChangeUserHp2}
                                                            value={state.휴대폰발송인증번호}
                                                        /> 
                                                        <span className='hp-timer-counter'>{minutes<10?`${minutes}`:minutes}:{seconds<10?`${seconds}`:seconds}</span>
                                                    </div>
                                                    <button className={`hp-num-btn${state.isHpdisabled2?'':' on'}`} onClick={onClickHpNum2} disabled={state.isHpdisabled2} type='button'>인증번호 확인</button>
                                                    
                                                </div>
                                            </li>
                                        )
                                    }

                                    <li>
                                        <div>
                                            <label htmlFor="userAddress1">주소<i>*</i></label>
                                            <div className="center-box">
                                                <button className={`addr-search-btn${state.isAddress?' on':''}`} onClick={onClickAddrPopupOpenApi}  type='button'>주소검색</button>
                                                <input 
                                                    onChange={onChangeAddr1} 
                                                    onFocus={onChangeAddr1} 
                                                    type='text' 
                                                    className={`${state.isAddress?'on':''}`} 
                                                    name='user_address1' id='userAddress1' 
                                                    placeholder='검색   주소1' 
                                                    value={state.주소1}/>
                                                <input 
                                                    onChange={onChangeAddr2} 
                                                    type='text' 
                                                    className={`${state.isAddress?'on':''}`} 
                                                    name='user_address2' 
                                                    id='userAddress2' 
                                                    placeholder='나머지 주소2' 
                                                    value={state.주소2}/>
                                                <h5>샛별배송</h5>


                                                <h6>배송지에 따라 상품 정보가 달라질 수 있습니다.</h6>
                                            </div>
                                            
                                            <button 
                                                onClick={onClickResearchBtn} 
                                                className={`addr-research-btn${state.isAddress?' on':''}`} 
                                                type='button'
                                                >재검색</button>
                                        
                                        </div>
                                    </li>                                 
                                    <li>
                                        <div>
                                            <label>성별</label>
                                            <div className="center-box gender">
                                                {/* <label htmlFor="userMale"><input onChange={onChangeGender} type='radio' name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')===true?true:false} />남자</label> */}
                                                <label><input onChange={onChangeGender} type='radio' name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')} />남자</label>
                                                <label><input onChange={onChangeGender} type='radio' name='user_gender' id='userFemale' value={'여자'} checked={state.성별.includes('여자')} />여자</label>
                                                <label><input onChange={onChangeGender} type='radio' name='user_gender' id='userNone' value={'선택안함'} checked={state.성별.includes('선택안함')} />선택안함</label>
                                            </div>                                            
                                        </div>
                                    </li>

                                    <li>
                                    <div>
                                            <label>생년월일</label>
                                            <div className="center-box birth">
                                                <div className="birth-box">
                                                    <ul>
                                                        <li><input onChange={onChangeYYYY} type="text" maxLength={4} name='user_birth_year' id='userBirthYear' placeholder='YYYY' value={state.생년}/></li>
                                                        <li><i>/</i></li>
                                                        <li><input onChange={onChangeMM} type="text" maxLength={2} name='user_birth_month' id='userBirthMonth' placeholder='MM' value={state.생월}/></li>
                                                        <li><i>/</i></li>
                                                        <li><input onChange={onChangeDD} type="text" maxLength={2} name='user_birth_date' id='userBirthDate' placeholder='DD' value={state.생일}/></li>
                                                    </ul>
                                                </div>
                                            </div>  
                                            <p className={`error-msg${state.isBirth?' on':''}`}>{state.isBirthMsg}</p>                         
                                        </div>
                                    </li>    

                                    <li>
                                        <div>
                                            <label>추가입력사항</label>
                                            <div className="center-box chooga">
                                                {/* <label htmlFor="userMale"><input onChange={onChangeGender} type='radio' name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')===true?true:false} />남자</label> */}
                                                <label>
                                                    <input 
                                                        type='radio' 
                                                        name='user_chooga' 
                                                        id='userChooga1' 
                                                        value={'친구초대 추천인 아이디'} 
                                                        onChange={onChangeUserChooga}
                                                        checked={state.추가입력사항.includes('친구초대 추천인 아이디')}
                                                       
                                                        />친구초대 추천인 아이디</label>
                                                <label>
                                                    <input 
                                                        type='radio' 
                                                        name='user_chooga' 
                                                        id='userChooga2' 
                                                        value={'참여 이벤트명'} 
                                                        onChange={onChangeUserChooga}
                                                        checked={state.추가입력사항.includes('참여 이벤트명')}
                                                        />참여 이벤트명</label> 


                                            </div> 


                                            <div className="chooga-box">
                                                {
                                                    state.isChooga1 && (
                                                        <>
                                                            <input 
                                                                type="text" 
                                                                name='user_chooga_id' 
                                                                id='userChoogaId' 
                                                                placeholder='추천인 아이디를 입력해 주세요.'
                                                                onChange={onChangeUserChoogaId}
                                                                value={state.추천인아이디}
                                                            />
                                                            <h6>가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.</h6>
                                                        </>
                                                    )
                                                }

                                                {
                                                    state.isChooga2 && (
                                                        <>
                                                            <input 
                                                                type="text" 
                                                                name='user_chooga_event' 
                                                                id='userChoogaEvent' 
                                                                placeholder='참여 이벤트명을 입력해 주세요.'
                                                                onChange={onChangeUserChoogaEvent}    
                                                                value={state.참여이벤트명}
                                                                
                                                            />
                                                            <h6>
                                                                추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br/>
                                                                가입 이후는 수정이 불가능 합니다.<br/>
                                                                대소문자 및 띄어쓰기에 유의해주세요.
                                                            </h6>
                                                        </>
                                                    )
                                                }
                                               

                                            </div>  {/* chooga-box */}

                                            {
                                                    state.isChooga1 && (
                                                        <button 
                                                            className={`chooga-idok-btn${state.isChoogaIdokBtn===true?' on':''}`}
                                                            onClick={onClickchoogaIdokBtn}
                                                            disabled= {state.isChoogaIdokBtnDisabled}
                                                            type='button'
                                                            >아이디 확인</button>
                                                    )
                                            }
                                        </div>
                                    </li>


                                    <li className='hr'>
                                        <hr />
                                    </li>  

                                    <li className='service-box'>
                                        <div>
                                            <label>이용약관동의<i>*</i></label>
                                            <div className="center-box service">
                                                {/* <label htmlFor="userMale"><input onChange={onChangeGender} type='radio' name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')===true?true:false} />남자</label> */}
                                               <ul>
                                                    <li>
                                                        <label>
                                                            <input 
                                                                onChange={onChangeUserServiceAll} 
                                                                type='checkbox' 
                                                                name='user_service_all' 
                                                                id='userServiceAll' 
                                                                value={'전체 동의합니다.'} 
                                                                // checked={state.이용약관동의.length===7?true:false}
                                                                checked={state.이용약관동의.length===7}
                                                                />전체 동의합니다.</label>                                                
                                                        <h5>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</h5>
                                                    </li>
                                                    
                                                    <li>
                                                        <label>
                                                            <input 
                                                                type='checkbox' 
                                                                name='user_service_1' 
                                                                id='userService1' 
                                                                value={'이용약관 동의(필수)'} 
                                                                checked={state.이용약관동의.includes('이용약관 동의(필수)')}
                                                                onChange={onChangeUserService}
                                                            />이용약관 동의</label><span>필수</span>                                                       
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input 
                                                                type='checkbox' 
                                                                name='user_service_2' 
                                                                id='userService2' 
                                                                value={'개인정보 수집∙이용 동의(필수)'} 
                                                                checked={state.이용약관동의.includes('개인정보 수집∙이용 동의(필수)')}
                                                                onChange={onChangeUserService}
                                                                />개인정보 수집∙이용 동의</label><span>필수</span>                                                       
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input 
                                                                type='checkbox' 
                                                                name='user_service_3' 
                                                                id='userService3' 
                                                                value={'개인정보 수집∙이용 동의(선택)'} 
                                                                checked={state.이용약관동의.includes('개인정보 수집∙이용 동의(선택)')}
                                                                onChange={onChangeUserService}
                                                                />개인정보 수집∙이용 동의</label><span>선택</span>                                                       
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input 
                                                                type='checkbox' 
                                                                name='user_service_4' 
                                                                id='userService4' 
                                                                value={'무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'} 
                                                                checked={state.이용약관동의.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')}
                                                                onChange={onChangeUserService}
                                                                />무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label><span>선택</span>                                                       
                                                    </li>
                                                    <li className='service56'>
                                                        <label>
                                                            <input 
                                                                type='checkbox' 
                                                                name='user_service_5' 
                                                                id='userService5' 
                                                                value={'SNS'} 
                                                                checked={state.이용약관동의.includes('SNS')}
                                                                onChange={onChangeUserService}
                                                                />SNS</label>                                                    
                                                        <label>
                                                            <input 
                                                            type='checkbox' 
                                                            name='user_service_6' 
                                                            id='userService6' 
                                                            value={'이메일'} 
                                                            checked={state.이용약관동의.includes('이메일')}
                                                            onChange={onChangeUserService}
                                                            />이메일</label>
                                                        <h6>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</h6>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input 
                                                                type='checkbox' 
                                                                name='user_service_7' 
                                                                id='userService7' 
                                                                value={'본인은 만 14세 이상입니다.(필수)'} 
                                                                checked={state.이용약관동의.includes('본인은 만 14세 이상입니다.(필수)')}
                                                                onChange={onChangeUserService}
                                                                />본인은 만 14세 이상입니다.</label><span>본인은 만 14세 이상입니다.</span>                                                       
                                                    </li>

                                               </ul> 

                                            </div>                                            
                                        </div>
                                    </li>

                                    <li>
                                        <button type='submit'>가입하기</button>
                                    </li>

                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        {
            state.isConfirmModal && (
                <div id="confirmModal">
                    <div className="wrap">
                        <div className="container">
                            <div className="content">
                                <div className="title-box">
                                    <h1>{state.confirmMsg}</h1>
                                </div>
                                    <div className="button-box">
                                        <button onClick={onClickConfirmModalClose}>확인</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
    
            )
        }

        
        </>
    );
};

SignUpComponent.defaultProps = {
    회원가입: {
        // id, pw, irum, email, hp, addr, gender, birth, chooga, service, gaib_date
        // 1. 아이디
        아이디: '',         // String(VARCHAR) 입력상자 아이디 저장  
        isIdError: false,  // 입력상자 아이디 유효성 검사 오류 여부
        isIdMsg: '',


        // 1-2. 아이디 중복확인 : 모달창
        
        isIdOk: false,
        


        // 2. 비밀번호
        비밀번호:'',
        isPwError: false,
        isPwMsg: false,



        // 3. 비밀번호확인
        비밀번호확인:'',
        isPw2Error: false,
        isPw2Msg: false,

        // 4. 이름 
        이름: '',
        isNameError: false, 
        isNameMsg: '',

        // 5. 이메일
        이메일: '',
        isEmailError: false,
        isEmailMsg: '',


        // 5-2 이메일 중복확인 // 모달창
        isEmailOk: false,

        // 6-1. 휴대폰 
        휴대폰: '',
        isHpError: false,
        isHpMsg: '',
        
        // 6-2. 휴대폰 발송인증번호 받기 버튼 disabled 
        isHpdisabled: true, // 휴대폰 발송인증번호 받기 버튼 사용불가(true)
        발송인증번호: '',
        
        // 6-3. 휴대폰 입력인증번호 확인 입력상자 버튼
        입력인증번호: '',
        isHpdisabled2: true, // 휴대폰 인증번호 확인 버튼 사용불가(true)
        
        // 6-4 휴대폰 입력인증번호 확인 클릭 이벤트 


        // 6-5 다른번호 인증: 인증번호 성공하면 보임  
        isHp3 : true,





       // 주소
       isAddress: false,  // Boolean
       isAddress1: true,  // Boolean
       isAddress2: false,  // Boolean
       주소1 :'',
       주소2 :'',




       // 성별
       성별: '선택안함', // String


       // 추가입력사항
       추가입력사항:'',
       참여이벤트명:'',
       추천인아이디:'',
       isChooga1: false,
       isChooga2: false,
       isChoogaIdokBtn: false,
       isChoogaIdokBtnDisabled: true,

       // 생일 
        생년:'',
        생월:'',
        생일:'',
        isBirth: false,
        isBirthMsg:'',

        // 이용약관
        이용약관:[
            "이용약관 동의(필수)",
            "개인정보 수집∙이용 동의(필수)",
            "개인정보 수집∙이용 동의(선택)",
            "무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)",
            "SNS",
            "이메일",
            "본인은 만 14세 이상입니다.(필수)"

        ],

        // 이용약관동의 : 내용이 체크박스 VALUE 값과 같다면 체크된다. 
        이용약관동의: [], // 배열로 만든다 항목이 많아서.


       confirmMsg: '사용가능한 아이디입니다.',
       isConfirmModal: false, // true 모달열기 false 모달닫기
     

    }
}
