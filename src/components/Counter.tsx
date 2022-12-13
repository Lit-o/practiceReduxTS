import { connect } from "react-redux";
import { ICounterState } from "../reducer";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

export interface propsCounter {
    incA: () => void;
    decA: () => void;
    rndA: (val:number) => void;
    counter: number | null;
}

// станет пропсами для компонента
const mstp = (state: ICounterState) => {
    return {
        counter: state.val
    }
}

// const mdtp = (dispatch:any) => {
//     const {incA, decA, rndA} = bindActionCreators(actions, dispatch)
//     return {
//         inc: () => dispatch(incA()), 
//         dec: () => dispatch(decA()),
//         rnd: rndA
//     }
// }

const mdtp = (dispatch:any) => {
    return bindActionCreators(actions, dispatch)
}


function Counter({incA, decA, rndA, counter}:propsCounter) {
    const hi:string = "Hello. I'm React 17.0.2 with TS template..."

    return (
        <div className="App">
            <div className="appWrapper" style={{textAlign: "center", fontSize: 22}}>
                <h1>{hi}</h1>
                <h2 id="counter">{counter}</h2>
                <button id='dec' onClick={decA}>DEC</button>
                {/* onClick={() => props.changeCharSelected(el.id)} */}
                <span> </span>
                <button id='inc' onClick={incA}>INC</button>
                <span> </span>
                <button id='rnd' onClick={() => {
                    const rndValue = Math.ceil(Math.random() * 10)
                    rndA(rndValue)
                    }}>RND</button>
            </div>
        </div>
    );
}
// export default Counter

export default connect(mstp, mdtp)(Counter);