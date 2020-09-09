import React, { useState } from 'react';
import './App.css';
import Phinput from './components/PhoneInput/PhoneInput';
import ScrollLock from 'react-scrolllock';
//import { TouchScrollable } from 'react-scrolllock';
import FormPage from './pages/FormPage/FormPage';
import HomePage from './pages/HomePage/HomePage';
import Otpinput from './components/OtpValidate/OtpValidate';
import { Switch, Route, Redirect } from "react-router-dom";
import ThankYou from "./pages/ThankYou/ThankYou";



function App() {

  const [currentPhone, setCurrentPhone] = useState(null);
  //state = { lockScroll: false }

  return (
    <div className="App">
      <ScrollLock>
      <header className="App-header">
      <Switch>
          <Route exact path='/' render={() => <Phinput setCurrentPhone={setCurrentPhone}></Phinput>}></Route>
          <Route path='/validate' render={() => currentPhone === null ? <Redirect to='/'></Redirect> :<Otpinput currentPhone={currentPhone}></Otpinput>}></Route>
          <Route path='/home' render={() => currentPhone === null ? <Redirect to='/'></Redirect> :<HomePage></HomePage>}></Route>
          <Route path='/rating' render={() => currentPhone === null ? <Redirect to='/'></Redirect> :<FormPage setCurrentPhone = {setCurrentPhone} currentPhone = {currentPhone}></FormPage>}></Route>
          <Route path='/thankyou' render={() => currentPhone === null ? <Redirect to='/'></Redirect> : <ThankYou setCurrentPhone={setCurrentPhone} currentPhone={currentPhone}></ThankYou>}></Route>
      </Switch>   
      </header>
      </ScrollLock>
    </div>
  );
}

export default App;
