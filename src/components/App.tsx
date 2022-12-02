import Counter from "./Counter";

import { propsCounter } from "./Counter";

const App = ({inc, dec, rnd, counter}:propsCounter) => {
    return <Counter inc={inc} dec={dec} rnd={rnd} counter={counter}/>
}

export default App