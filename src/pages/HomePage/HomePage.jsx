import React from "react";
//import { Paper } from "@material-ui/core";
import Phinput from "../../components/PhoneInput/PhoneInput";
//import BottomNavBar from "../../components/BottomNavbar/BottomNavBar";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
//import "../HomePage/homepage.min.scss";
//import AmountSlider from "../../components/AmountSlider/AmountSlider";
var QRCode = require("qrcode.react");

const HomePage = () => {
  const history = useHistory();
  return (
    <section>
      <QRCode value="http://facebook.github.io/react/" />
      <br />
      {/* <AmountSlider></AmountSlider> */}
      <TextField
        error
        id="standard-error"
        label="Enter a Tip Amount"
        defaultValue="Rs. 10"
        style={{ marginBottom: "10px" }}
      />
      <br />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px" }}
      >
        Tip
      </Button>
      <Phinput></Phinput>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => history.push("/rating")}
        style={{ marginTop: "10px" }}
      >
        Give Rating
      </Button>
      {/* <Paper elevation={3}> </Paper> */}
      {/* <BottomNavBar></BottomNavBar> */}
    </section>
  );
};
export default HomePage;
