import React,{useState}  from 'react';
import { BrowserRouter } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import Menu from "./Menu";



function App() {
  const [currentForm,setCurrentForm]=useState('login');

  const toogleForm = (formName)=>{
    setCurrentForm(formName);
  }

  return (
    <div className="App">
    {
     currentForm==="login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />
    }
    </div>
  );
}

export default App;
