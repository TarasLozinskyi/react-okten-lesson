import React, {useState} from 'react';
import './App.css';
import {usePrevious} from "./customHooks/usePrevious";


function App() {
    const [current, setCurrent] = useState<number>(0)
    const ref = usePrevious(current);
    const change = () => {
        setCurrent(prevState => prevState += 1);
    }
    return (
        <div className="App">
            <h2>useRef: {ref}</h2>
            <h2>useState: {current}</h2>
            <button onClick={change}>click</button>
        </div>
    );
}

export default App;
