import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
//import Axios from "axios";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function PhinputLogin(props) {
  const classes = useStyles();
  const [phone, setPhone] = useState("");
  var history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    await Axios.get(
      `${proxyurl}` +
        "https://api.msg91.com/api/v5/otp?authkey=130764Adagc1lyUY5f54c6bbP1&template_id=5e713062d6fc052d9b0abeb4&mobile=" +
        `${phone}` +
        "&invisible=1"
    )
      .then((res) => props.setCurrentPhone(phone))
      .then(() => history.push("/validate"));
  };

  return (
    <section>
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
          Submit
        </Button>
      </form>
    </section>
  );
}
export default PhinputLogin;
