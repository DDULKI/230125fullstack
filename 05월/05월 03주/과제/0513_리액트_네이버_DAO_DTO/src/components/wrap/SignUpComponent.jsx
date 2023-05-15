import React from 'react';
import axios from 'axios';
import $ from 'jquery';


export default function SignUpComponent({회원가입}){

    const [state, setState] = React.useState(회원가입);



    // 1. 아이디 입력상자 onChange 이벤트 
    const onChangeUserId=(e)=>{
        setState({
            ...state, 
            아이디: e.target.value
           
        })
    }

    // 2. 비밀번호 입력 상자 onChange 이벤트 
   

    const onChangeUserPw1=(e)=>{
        setState({
            ...state,
            비밀번호: e.target.value
        })
        

    }


    // 3. 비밀번호확인  입력상자  onChange 이벤트

    const onChangeUserPw2=(e)=>{
        setState({
            ...state, 
          
            비밀번호확인: e.target.value
        })

    }

    // 4. 이름  입력상자 onChange 이벤트
    // 입력제한조건
    // 1) 특수문자 입력과 동시에 삭제
    // 2) 공백이면 이름을 입력해 주세요.
    const onChangeName=(e)=>{
        setState({
            ...state,
           
            이름:e.target.value
        })
    }



    // 생년월일 
    


    const onChangeBirth=(e)=>{
        setState({
          ...state,
          생년월일: e.target.value // 생년월일 (8자리)

        });
    };

    // 생년 입력상자 onchange() 이벤트 상태관리자 연결 변수 만들어 줍니다.
    const onChangeYear = onChangeBirth;

    // 생월 입력상자 onchange() 이벤트 상태관리자 연결 변수 만들어 줍니다.
    const onChangeMonth = onChangeBirth;

    // 생일 입력상자 onchange() 이벤트 상태관리자 연결 변수 만들어 줍니다.
    const onChangeDate = onChangeBirth;


    // 성별 
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        })
    }

    //이메일 
   
    const onChangeUserEmail=(e)=>{
        setState({
            ...state,
            이메일: e.target.value
        })

    }

    // 휴대폰
  
    const onChangeHp=(e)=>{
        setState({
            ...state,
            휴대폰: e.target.value
            
        });

    }


    const onChangeNation=(e)=>{
        setState({
            ...state, 
            나라: e.target.value
        })
    }
 


     // 최종 유효성 검사 
    const onSubmitSignupEvent=(e)=>{
        e.preventDefault();
// id, pw, name, birth, gender, email, nation, hp
       

        if(state.아이디===''){
            setState({
                ...state,
                confirmMsg: '아이디를 입력하세요'
            })
        }
        else if(state.비밀번호===''){
            setState({
                ...state,
                confirmMsg: '비밀번호를 입력하세요'
            })
        }
        else if(state.이름===''){
            setState({
                ...state,
                confirmMsg: '이름을 입력하세요'
            })
        }
        else if(state.생년월일===''){
            setState({
                ...state,
                confirmMsg: '생년월일을 입력하세요'
            })
        }
        else if(state.성별===''){
            setState({
                ...state,
                confirmMsg: '성별을 선택하세요'
            })
        }
        else if(state.이메일===''){
            setState({
                ...state,
                confirmMsg: '이메일을 입력하세요'
            })
        }
        else if(state.나라===''){
            setState({
                ...state,
                confirmMsg: '나라를 선택하세요'
            })
        }
        else if(state.휴대폰===''){
            setState({
                ...state,
                confirmMsg: '휴대폰번호를 입력하세요'
            })
        }
        else {

            // AJAX 전송하기 
            

            // id, pw, name, birth, gender, email, nation, hp
            const formData = {
                "id" : state.아이디,
                "pw" : state.비밀번호,
                "name" : state.이름,
                "birth" : state.생년월일,
                "gender" : state.성별,
                "email" : state.이메일,
                "nation" : state.나라,
                "hp" : state.휴대폰
            }

            console.log(formData);
            // 맥으로할때 
            // /usr/local/Cellar/tomcat/10.1.8/bin
            // ./catalina start 
            $.ajax({
                url:'http://127.0.0.1:8080/0513네이버MVC/회원가입_로그인_수정_삭제_네이버/signup_action_test_parameter.jsp',
                type : 'post',
                data: formData,
                success(res){
                    console.log('AJAX 성공!');
                    console.log(res);
                    console.log(JSON.parse(res));
                    setState({
                        ...state,
                        confirmMsg: '네이버 회원가입을 축하드립니다.'
                    });
                },
                error(err){
                    console.log(`AJAX 실패! + ${err}`);
                }
            });
            console.log('데이터 전송 후 아래 내용입니다. ')
        }
    
        
    } // 폼 서브밋 가입하기 버튼 클릭 이벤트 끝 


    return (
    <>   
        <div id="wrap">
        <div className="title">
            <a href="http://www.naver.com"></a>
        </div>
        <form onSubmit={onSubmitSignupEvent} name="sign_up" id="signUp" method="post" action="./sign_up.php">
            <label for="id">아이디</label>
            <div>
                <input 
                    type="text" 
                    name="id" 
                    id="id"
                    onChange={onChangeUserId}
                    value={state.아이디}
                />
                <span>@naver.com</span>
            </div>
            <p className={`error-msg${state.isIdError?' on':''}`}>{state.isIdMsg}</p>
            <label for="pw">비밀번호</label>
            <div>
                <input 
                    type="text" 
                    name="pw" 
                    id="pw"
                    onChange={onChangeUserPw1}
                    value={state.비밀번호}    
                />
            </div>
            <p className={`error-msg${state.isPwError?' on':''}`}>{state.isPwMsg}</p>
            <label for="pw2">비밀번호 확인</label>
            <div>
                <input 
                    type="text" 
                    name="pw2" 
                    id="pw2"
                    onChange={onChangeUserPw2}
                    value={state.비밀번호확인}    
                />
            </div>
            <label for="name">이름</label>
            <div>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={onChangeName}
                    value={state.이름}
                />
            </div>
            <p className={`error-msg${state.isNameError?' on':''}`}>이름 메시지 텍스트{state.isNameMsg}</p>
            <label for="birth_year">생년월일</label>
            <span>
                <div className="birth">
                    <input 
                        className="year" 
                        type="text" 
                        name="birth" 
                        id="birthYear" 
                        placeholder="년(4자)"
                        onChange={onChangeYear}
                        value={state.생년월일}    
                    />
                </div>
                <div className="birth">
                    <select onChange={onChangeMonth} className="month" name="birth" id="birthMonth">
                        <option onChange={onChangeMonth} value="월">월</option>
                        <option onChange={onChangeMonth} value={"1"}>1</option>
                        <option onChange={onChangeMonth} value={"2"}>2</option>
                        <option onChange={onChangeMonth} value={"3"}>3</option>
                        <option onChange={onChangeMonth} value={"4"}>4</option>
                        <option onChange={onChangeMonth} value={"5"}>5</option>
                        <option onChange={onChangeMonth} value={"6"}>6</option>
                        <option onChange={onChangeMonth} value={"7"}>7</option>
                        <option onChange={onChangeMonth} value={"8"}>8</option>
                        <option onChange={onChangeMonth} value={"9"}>9</option>
                        <option onChange={onChangeMonth}  value={"10"}>10</option>
                        <option onChange={onChangeMonth}  value={"11"}>11</option>
                        <option onChange={onChangeMonth}  value={"12"}>12</option>
                    </select>
                </div>
                <div class="birth">
                    <input 
                        className="day" 
                        type="text" 
                        name="birth" 
                        id="birthDay" 
                        placeholder="일"
                        onChange={onChangeDate}
                        value={state.생년월일}
                    />
                </div>
            </span>
            <label for="gender">성별</label>
            <div>
                <select onChange={onChangeGender} name="gender" id="Gender">
                    <option value={"성별"}>성별</option>
                    <option onChange={onChangeGender} value={state.성별("남자")}>남자</option>
                    <option onChange={onChangeGender} value={state.성별("여자")}>여자</option>
                    <option onChange={onChangeGender}  value={state.성별("선택안함")}>선택안함</option>
                </select>
            </div>
            <label for="email">본인 확인 이메일<span>(선택)</span></label>
            <div>
                <input 
                    type="text" 
                    name="email" 
                    id="Email" 
                    placeholder="선택 입력"
                    onChange={onChangeUserEmail}
                    value={state.이메일}
                    />
            </div>
            <label for="hp">휴대전화</label>
            <div>
                <select onChange={onChangeNation} name="nation" id="nation">
                    <option onChange={onChangeNation} value={"대한민국 +82"}>대한민국 +82</option>
                    <option onChange={onChangeNation} value={"그리스 +30"}>그리스 +30</option>
                    <option onChange={onChangeNation} value={"나이지리아 +234"}>나이지리아 +234</option>
                    <option onChange={onChangeNation} value={"노르웨이 +47"}>노르웨이 +47</option>
                    <option onChange={onChangeNation} value={"독일 +49"}>독일 +49</option>
                </select>
            </div>
            <label for="hp"></label>
            <div className="hp">
                <input 
                    type="text" 
                    className="hp" 
                    name="hp" 
                    id="hp" 
                    placeholder="전화번호 입력"
                    onChange={onChangeHp}
                    value={state.휴대폰}
                />
                <button className="certification">인증번호 받기</button>
            </div>
            <button className="signup" type="submit">가입하기</button>
        </form>
    </div>


    </>
    );
};
SignUpComponent.defaultProps ={
    회원가입 : {
    // id, pw, name, birth, gender, email, nation, hp
    // 1-1. 아이디
    아이디: '',     

    // 2. 비밀번호
    비밀번호:'',


    // 3. 이름
    이름:'',


    // 4. 생년월일
    생년월일:'',
   

    // 5-1. 이메일
    이메일:'',
   
    // 6. 성별
    성별: '선택안함', // String

    // 7-1. 휴대폰
    휴대폰:'', 

    confirmMsg: '사용가능한 아이디 입니다. 아이디는 16자이하로 사용가능합니다.'



    }
}
