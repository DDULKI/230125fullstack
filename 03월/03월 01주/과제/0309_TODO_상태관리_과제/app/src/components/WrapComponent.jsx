import React, { Component } from 'react';
import '../scss/wrap.scss';

class WrapComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            아이디:'',
            비밀번호:'',
            비밀번호확인:'',
            이름:'',
            이메일:'',
            휴대폰:''
        }
    }

    

    onChange1=(e)=>{
       this.setState({
        아이디:e.target.value
       })
    }

    onChange2=(e)=>{
        this.setState({
            비밀번호:e.target.value
        })
    }

    onChange3=(e)=>{
        this.setState({
            비밀번호확인:e.target.value
        })
    }

    onChange4=(e)=>{
        this.setState({
            이름:e.target.value
        })
    }
    
    onChange5=(e)=>{
        this.setState({
            이메일:e.target.value
        })
    }
    onChange6=(e)=>{
        this.setState({
            휴대폰:e.target.value
        })
    }

    onClickSave=(e)=>{
        e.preventDefault();
        this.setState({
            아이디:'',
            비밀번호:'',
            비밀번호확인:'',
            이름:'',
            이메일:'',
            휴대폰:''
        })
    }


    render() {
        return (
            <div id="todo">
                <div className="container">
                    <div className="title">
                        <h1>TO DO</h1>
                    </div>
                    <form name='todo' id='todo' method='post' action="./todo/php">
                        <ul className="input-box">

                            <li>
                                <h2>아이디</h2>
                                <input 
                                    type="text" 
                                    name='input2'
                                    id ='아이디'
                                    placeholder='아이디를 입력해주세요'
                                    onChange={this.onChange1}
                                    value={this.state.아이디}    
                                />
                                <button>중복확인</button>
                            </li>
                            <li>
                                <h2>비밀번호</h2>
                                <input 
                                    type="text" 
                                    name='input3' 
                                    id='비밀번호' 
                                    placeholder='비밀번호를 입력해주세요' 
                                    onChange={this.onChange2}
                                    value={this.state.비밀번호}
                                />
                            </li>
                            <li>
                                <h2>비밀번호확인</h2>
                                <input 
                                    type="text" 
                                    name='input4'
                                    id='비밀번호확인'
                                    placeholder='비밀번호를 한번 더 입력해주세요'
                                    onChange={this.onChange3}
                                    value={this.state.비밀번호확인}
                                />
                            </li>
                            <li>
                                <h2>이름</h2>
                                <input 
                                    type="text" 
                                    name='input5'
                                    id='이름'
                                    placeholder='이름을 입력해 주세요'
                                    onChange={this.onChange4}
                                    value={this.state.이름}    
                                />
                            </li>
                            <li>
                                <h2>이메일</h2>
                                <input 
                                    type="text" 
                                    name='input6'
                                    id='이메일'
                                    placeholder='예:marketkurly@kurly.com'
                                    onChange={this.onChange5}    
                                    value={this.state.이메일}
                                />
                                <button>중복확인</button>
                            </li>
                            <li>
                                <h2>휴대폰</h2>
                                <input 
                                    type="text" 
                                    name='input7'
                                    id='휴대폰'
                                    placeholder='숫자만 입력해주세요.'
                                    onChange={this.onChange6}   
                                    value={this.state.휴대폰} 
                                />
                            </li>
                            <li>
                                <h2>주소</h2>
                                <button>주소 검색</button>
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={this.onClickSave}>배열저장</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default WrapComponent;