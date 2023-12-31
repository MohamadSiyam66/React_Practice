import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Components/Result';
const secNum = Math.floor(Math.random() * 10) + 1

function App() {
  const [term, setTerm] = useState("");
  const handleChange = (e)=>{
    setTerm(e.target.value)
  }

  return (
    <div className="container">
      <div className="head">
        <label htmlFor='term'>Guess the number between 1 to 10</label>
      </div>
        <input type='text' name='term' id='term' onChange={handleChange}></input>
      <Result secNum={secNum} term={term}/>
    </div>
  );
}

export default App;
