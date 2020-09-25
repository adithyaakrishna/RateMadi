import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
//import Axios from "axios";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function Phinput(props) {
  const classes = useStyles();
  // useEffect (({
  //   Axios.get()
  // }))
  const [phone, setPhone] = useState("");
  var history = useHistory();
  var url = "http://rating.reapit.in?id=" + localStorage.getItem("user_id");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    setPhone("");
    await Axios.get(
      `${proxyurl}` +
        "https://api.msg91.com/api/sendhttp.php?authkey=130764Adagc1lyUY5f54c6bbP1&mobiles=" +
        phone +
        "&country=91&message=Spare 10 seconds to leave your Executive some feedback or a tip! A little goes a long way, be it in tips or compliments. Visit this link to rate the executive: " +
        url +
        " Thank you for using RateMadi! &sender=SMSIND&route=4"
    ).then((res) => {
      console.log(res);
    });
  };
  return (
    <section>
      {/* <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{ marginTop: "0px", fontStyle:"Roboto" }}>
        Zuink
      </Typography> */}
      <form
        className={classes.root}
        noValidate={true}
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            error
            id="Phonenumber"
            name="Phonenumber"
            label="Phone Number"
            placeholder="Phone Number"
            variant="outlined"
            color="secondary"
            autoComplete="Phone"
            pattern="[0-9]{10}"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <Button type="submit" variant="contained" color="secondary">
          Send feedback link
        </Button>
      </form>
    </section>
  );
}

export default Phinput;
