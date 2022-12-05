import React from 'react';
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
import './index.css';
import App from './components/App';
import * as actions from './actions'

const store = createStore(reducer);
const {getState, dispatch, subscribe} = store
const {incA, decA, rndA} = bindActionCreators(actions, dispatch)

let rndValue = Math.ceil(Math.random() * 10)

const reactRender = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App inc={incA} dec={decA} rnd={() => rndA(rndValue)} counter={getState().val}/>
        </Provider>,
    document.getElementById('root')
);
}

subscribe(() => {    
    rndValue = Math.ceil(Math.random() * 10)

    document.title = `store ${getState().val}`
    reactRender()
    
    console.log(getState()) 
    console.log('render')
})

reactRender()


























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
// const {incA, decA, rndA} = bindActionCreators(actions, dispatch)