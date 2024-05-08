import React, {useState} from 'react';
import './App.css';
import {useStorage} from "./customHooks/useStorage";

function App() {
    const {save, isSave} = useStorage()
    // @ts-ignore
    let getSave = JSON.parse(localStorage.getItem('table')) || save
    getSave = save
    localStorage.setItem('table', JSON.stringify(getSave));

    return (
        <div className="App">
            <h2>{getSave}</h2>
            <button onClick={()=>{isSave()}}>click</button>
        </div>
    );
}

export default App;
