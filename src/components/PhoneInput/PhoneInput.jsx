import React from "react";
import {Button} from "@material-ui/core"
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    },
  },
}));

export default function Phinput() {
  const classes = useStyles();
  
  return (
    <section>
      <form className={classes.root} noValidate autoComplete="on">
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
            pattern="[0-9]{10}" required
          />
        </div>
        
        <Button type="submit" variant="contained" color="secondary">Submit</Button>
      </form>
    </section>
  );
}
