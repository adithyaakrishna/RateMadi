import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { render } from "@testing-library/react";
//import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Otpinput(props) {
  const classes = useStyles();
  // useEffect (({
  //   Axios.get()
  // }))
  const [otp, setOtp] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    await Axios.post(
      `${proxyurl}` +
        "https://api.msg91.com/api/v5/otp/verify?mobile= " +
        `${props.currentPhone}` +
        "&otp=" +
        `${otp}` +
        "&authkey=" +
        "130764Adagc1lyUY5f54c6bbP1"
    ).then((res) => {
      console.log(res);
      if (res.data.type == "success") {
        Axios.post(
          "http://https://ratingbackend.reapit.in/delivery_gods/add_user/",
          {
            phone_number: props.currentPhone,
          }
        ).then((res) => {
          localStorage.setItem("user_id", res.data.data.id);
          localStorage.setItem("phone_number", props.currentPhone);
          console.log(res, localStorage.getItem("user_id"));
          history.push("/home");
        });
      } else alert(res.data.message);
    });
  };

  return (
    <section>
      <h5>We've sent you a one-time login. Enter your OTP number here.</h5>
      <form
        className={classes.root}
        noValidate={true}
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            error
            id="otp"
            name="OTP"
            label="OTP"
            placeholder="OTP"
            variant="outlined"
            color="secondary"
            autoComplete="Phone"
            pattern="[0-9]{10}"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <Button type="submit" variant="contained" color="secondary">
          Verify
        </Button>
      </form>
    </section>
  );
}
