import React from 'react';
import axios from 'axios';
import Sub4ComponentChild from './Sub4ComponentChild';

export default function Sub4Component () {

    const [state, setState] = React.useState({
        특가혜택 : []
    });


     // 특가혜택 가져오기 
     const gettgProduct=()=>{
        axios({
            url:'./data/product.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                특가혜택: res.data.특가혜택
            })
        })
        .catch((err)=>{
            console.log("AXIOS 오류"+ err);
        });
    }

    React.useEffect(()=>{
        gettgProduct();
    },[]);

    return (
        <main id='sub4'>
             <Sub4ComponentChild 특가혜택={state.특가혜택}/>
        </main>
    );
};

