import React, { Component } from 'react';

class MainComponent extends Component {
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
                                <input 
                                    type="text" 
                                    name='input1' 
                                    id='input1' 
                                    placeholder='할일을 입력하세요.'
                                   />
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={this.onClickTodoListAdd}>배열저장</button>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default MainComponent;