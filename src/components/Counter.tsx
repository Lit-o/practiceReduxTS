import { connect } from "react-redux";
import { ICounterState } from "../reducer";

export interface propsCounter {
    inc: () => void;
    dec: () => void;
    rnd: (val:number) => void;
    counter: number | null;
}



// станет пропсами для компонента
const mstp = (state: ICounterState) => {
    return {
        counter: state.val
    }
}

const mdtp = (dispatch:any) => {
    return {
        inc: () => dispatch({type: 'INC'}),
        dec: () => dispatch({type: 'DEC'}),
        rnd: (val:number) => dispatch({type: 'RND', valueR: val}),
    }
}

function Counter({inc, dec, rnd, counter}:propsCounter) {
    const hi:string = "Hello. I'm React 17.0.2 with TS template..."

    return (
        <div className="App">
            <div className="appWrapper" style={{textAlign: "center", fontSize: 22}}>
                <h1>{hi}</h1>
                <h2 id="counter">{counter}</h2>
                <button id='dec' onClick={dec}>DEC</button>
                {/* onClick={() => props.changeCharSelected(el.id)} */}
                <span> </span>
                <button id='inc' onClick={inc}>INC</button>
                <span> </span>
                <button id='rnd' onClick={() => {
                    const rndValue = Math.ceil(Math.random() * 10)
                    rnd(rndValue)
                    }}>RND</button>
            </div>
        </div>
    );
}
// export default Counter

export default connect(mstp, mdtp)(Counter);