import React, { useState } from 'react';
import './App.css';
import Phinput from './components/PhoneInput/PhoneInput';

import FormPage from './pages/FormPage/FormPage';
import HomePage from './pages/HomePage/HomePage';
import Otpinput from './components/OtpValidate/OtpValidate';
import { Switch, Route, Redirect } from "react-router-dom";



function App() {

  const [currentPhone, setCurrentPhone] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
      <Switch>
          <Route exact path='/' render={() => <Phinput setCurrentPhone={setCurrentPhone}></Phinput>}></Route>
          <Route path='/validate' render={() => currentPhone === null ? <Redirect to='/'></Redirect> :<Otpinput currentPhone={currentPhone}></Otpinput>}></Route>
          <Route path='/home' render={() => currentPhone === null ? <Redirect to='/'></Redirect> :<HomePage></HomePage>}></Route>
          <Route path='/rating' render={() => currentPhone === null ? <Redirect to='/'></Redirect> :<FormPage setCurrentPhone = {setCurrentPhone} currentPhone = {currentPhone}></FormPage>}></Route>
      </Switch>   
      </header>
    </div>
  );
}

export default App;
