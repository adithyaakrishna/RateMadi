import React, { useState } from 'react';
import './App.css';
import Phinput from './components/PhoneInput/PhoneInput';

import FormPage from './pages/FormPage/FormPage';
import HomePage from './pages/HomePage/HomePage';
import Otpinput from './components/OtpValidate/OtpValidate';
//import { Switch, Route, Redirect } from "react-router-dom";



function App() {

  const [currentPhone, setCurrentPhone] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        {/* <FormPage></FormPage> */}
        {/* <HomePage></HomePage> */}
        {currentPhone === null ? <Phinput setCurrentPhone={setCurrentPhone}></Phinput> : 
        <Otpinput currentPhone={currentPhone}></Otpinput>}

      </header>
    </div>
  );
}

export default App;
