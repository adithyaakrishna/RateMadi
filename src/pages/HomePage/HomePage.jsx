import React from "react";
import Phinput from "../../components/PhoneInput/PhoneInput";
import QRCode from "qrcode.react";

const HomePage = () => {
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
