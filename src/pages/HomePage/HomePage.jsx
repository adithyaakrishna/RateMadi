import React from "react";
//import { Paper } from "@material-ui/core";
import Phinput from "../../components/PhoneInput/PhoneInput";
import BottomNavBar from "../../components/BottomNavbar/BottomNavBar";
import { Button } from "@material-ui/core"
import TextField from "@material-ui/core/TextField";
import {useHistory} from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  return (
    <section>
      <img src={require("../../assets/img/qr.png")} />
      <Phinput></Phinput>
      <br />
      <Button type="submit" variant="contained" color="secondary" onClick={() => history.push("/rating")}>Give Rating</Button>
      {/* <Paper elevation={3}> </Paper> */}

      {/* <BottomNavBar></BottomNavBar> */}
    </section>
  );
};
export default HomePage;