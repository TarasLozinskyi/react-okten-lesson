import React from 'react';
import './App.css';
import {useToggle} from "./customHooks/useToggle";

function App() {
   const {toggle,isToggled} = useToggle()
  return (
    <div className="App">
        <h2>{toggle.toString()}</h2>
        <button onClick={isToggled}>Click</button>
    </div>
  );
}

export default App;
