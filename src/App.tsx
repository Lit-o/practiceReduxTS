interface Props {
    inc: () => void;
    dec: () => void;
    rnd: () => void;
}


function App(props:Props) {

    const hi:string = "Hello. I'm React 17.0.2 with TS template..."

    return (
        <div className="App">
            <div className="appWrapper" style={{textAlign: "center", fontSize: 22}}>
                <h1>{hi}</h1>
                <h2 id="counter">0</h2>
                <button id='dec' onClick={props.dec}>DEC</button>
                {/* onClick={() => props.changeCharSelected(el.id)} */}
                <span> </span>
                <button id='inc' onClick={() => props.inc()}>INC</button>
                <span> </span>
                <button id='rnd' onClick={() => props.rnd()}>RND</button>
            </div>
        </div>
    );
}

export default App;
