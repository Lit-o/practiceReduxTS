export interface propsCounter {
    inc: () => void;
    dec: () => void;
    rnd: () => void;
    counter?: number | null;
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
                <button id='inc' onClick={() => inc()}>INC</button>
                <span> </span>
                <button id='rnd' onClick={() => rnd()}>RND</button>
            </div>
        </div>
    );
}

export default Counter;