import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header';
import reportWebVitals from './reportWebVitals';
// import Car from './Components/Car';
import Garage from './Components/Garage';
import Fcolor from './Components/state/Fcolor';
import Fcolor2 from './Components/state/Fcolor2';
import Bike from './Components/Multi state/Ms_Bike';
import MyForm from './Forms/MyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Garage /> */}
    {/* <Header/> */}
    {/* <App/> */}
    {/* <Fcolor/>
    <Fcolor2/>
    <Bike/> */}
    <MyForm/>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();