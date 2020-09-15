import React, { useState } from 'react';
//import { Paper } from "@material-ui/core";
import PhinputLogin from "../../components/PhoneInput/PhoneInputLogin";
//import BottomNavBar from "../../components/BottomNavbar/BottomNavBar";
import { Button } from "@material-ui/core";
//import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
//import "../HomePage/homepage.min.scss";
//import AmountSlider from "../../components/AmountSlider/AmountSlider";
var QRCode = require("qrcode.react");

const HomePage = (props) => {
  const history = useHistory();

  return (
    <section>

      <PhinputLogin setCurrentPhone = {props.setCurrentPhone}></PhinputLogin>
    </section>
  );
};
export default HomePage;
