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
  var user_id = localStorage.getItem("user_id");
  console.log("logged in",  localStorage.getItem("user_id"));
  //state = { lockScroll: false }

  return (
    <div className="App">
      <img className="Zuink-Logo" src={require('./assets/img/Name-L.png')} alt="Zuink-Text-Logo" />
      <ScrollLock>
      <header className="App-header">
      <Switch>
          <Route exact path='/' render={() => user_id != null ? <Redirect to='/home'></Redirect> :<Phinput setCurrentPhone={setCurrentPhone}></Phinput>}></Route>
          <Route path='/validate' render={() => <Otpinput currentPhone={currentPhone}></Otpinput>}></Route>
          <Route path='/home' render={() => user_id === null ? <Redirect to='/'></Redirect> :<HomePage></HomePage>}></Route>
          <Route path='/rating' render={() => <FormPage setCurrentPhone = {setCurrentPhone} currentPhone = {currentPhone}></FormPage>}></Route>
          <Route path='/thankyou' render={() =>  <ThankYou setCurrentPhone={setCurrentPhone} currentPhone={currentPhone}></ThankYou>}></Route>
      </Switch>
      </header>
      </ScrollLock>
    </div>
  );
}

export default App;
