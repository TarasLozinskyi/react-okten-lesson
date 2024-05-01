import React from 'react';
import './App.css';
import Characters from "./components/characters/Characters";
import Recipes from "./components/recipes/Recipes";

function App() {
  return (
    <div className="App">
        <Characters/>
        <Recipes/>;
    </div>
  );
}

export default App;
