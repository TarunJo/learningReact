import { Component } from 'react';
import './App.css';
import { Section1, Section2, Heading } from './components';
import Fruits from "./components/Fruits";

function App() {
  const fruits = ["Apple", "Banana", "Orange", "kiwi", "pineapple"];
  return (
    <div className="App">
      <Heading />
      <Section1 />
      <Section2 />
      <p>These are all the fruits we have available with us</p>
      <Fruits items={fruits} />
    </div>
  );
}

export default App;
