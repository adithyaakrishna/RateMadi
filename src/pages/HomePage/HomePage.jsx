import React from "react";
import { Paper } from "@material-ui/core";
import Phinput from "../../components/PhoneInput/PhoneInput";
import BottomNavBar from "../../components/BottomNavbar/BottomNavBar";

const HomePage = () => {
  return (
    <section>
      <img src={require("../../assets/img/qr.png")} />
      <Phinput></Phinput>
      {/* <Paper elevation={3}> </Paper> */}

      {/* <BottomNavBar></BottomNavBar> */}
    </section>
  );
};
export default HomePage;