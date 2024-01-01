import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Components/Result';
import Home from './Components/Routing/Home';
import About from './Components/Routing/About';
import Contact from './Components/Routing/Contact';
import User from './Components/User';
//const secNum = Math.floor(Math.random() * 10) + 1

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  // const [term, setTerm] = useState("");
  // const handleChange = (e)=>{
  //   setTerm(e.target.value)
  // }

  return (
    // <div className="container">
    //   <div className="head">
    //     <label htmlFor='term'>Guess the number between 1 to 10</label>
    //   </div>
    //     <input type='text' name='term' id='term' onChange={handleChange}></input>
    //   <Result secNum={secNum} term={term}/>
    // </div>

    <div className='App'>
      
      <BrowserRouter>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/contact-us'>Contact Details</Link></li>
        <li><Link to='/user/1'>User 1</Link></li>
        <li><Link to='/user/2'>User 2</Link></li>
      </ul>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/user/:id' element={<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
