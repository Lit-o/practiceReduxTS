import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions'

const store = createStore(reducer);
const {getState, dispatch, subscribe} = store

let rndValue = Math.ceil(Math.random() * 10)

const update = () => {
    let data:string = getState().val.toString()
    const counterDiv = document.getElementById('counter')
    counterDiv!.textContent = data
}

subscribe(() => {
    document.title = `store ${getState().val}`
    update()
    console.log(getState()) 
    console.log('render')
    rndValue = Math.ceil(Math.random() * 10)
})

// first generation actions
// const inc = () => dispatch(incA()) 
// const dec = () => dispatch(decA()) 
// const rnd = (value:number) => dispatch(rndA(value)) 
// --------------------------------------------------
// bindActionCreators from Redux 
// const bindActionCreator = (actionCreator:any, dispatch:any) => {
//     return (...args:any[]) => {
//         dispatch(actionCreator(...args))
//     }
// }
// --------------------------------------------------
// const inc = bindActionCreators(incA,dispatch)
// const dec = bindActionCreators(decA,dispatch)
// const rnd = bindActionCreators(rndA,dispatch) 
// --------------------------------------------------
// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
//     incDispatch: incA,
//     decDispatch: decA,
//     rndDispatch: rndA
// },dispatch)

// каждый АС после этой строчки становится обернутым dispatch
const {incA, decA, rndA} = bindActionCreators(actions, dispatch)


ReactDOM.render(
        <App inc={incA} dec={decA} rnd={() => rndA(rndValue)}/>,
    document.getElementById('root')
);