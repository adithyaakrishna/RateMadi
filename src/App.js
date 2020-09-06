import React from 'react';
import './App.css';
import Phinput from './components/PhoneInput/PhoneInput';
import { Form } from 'react-bootstrap';
import FormPage from './pages/FormPage/FormPage';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route, Redirect } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FormPage></FormPage> */}
        {/* <HomePage></HomePage> */}
        <Phinput></Phinput>
      </header>
    </div>
  );
}

export default App;
