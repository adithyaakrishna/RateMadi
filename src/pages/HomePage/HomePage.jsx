import React from "react";
//import { Paper } from "@material-ui/core";
import Phinput from "../../components/PhoneInput/PhoneInput";
//import BottomNavBar from "../../components/BottomNavbar/BottomNavBar";
import { Button } from "@material-ui/core";
//import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
//import "../HomePage/homepage.min.scss";
//import AmountSlider from "../../components/AmountSlider/AmountSlider";
import QRCode from "qrcode.react";

const HomePage = () => {
  const history = useHistory();
  var url = "http://rating.reapit.in?id=" + localStorage.getItem("user_id");
  return (
    <section>
      <h5>Scan this QR code to rate me in under 10 seconds</h5>
      <br />
      <QRCode value={url} />
      <br />
      <br />
      <br />
      <Phinput></Phinput>
    </section>
  );
};
export default HomePage;
