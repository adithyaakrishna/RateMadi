import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import CustomizedRatings from "../Rating/Rating";

const FormField = () => {
  return (
    <section>
      <form noValidate autoComplete="on">
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            required
            rows={4}
            placeholder="Message"
            variant="outlined"
          />
          <br />
        </div>

        <Button type="submit" variant="contained" color="secondary" style={{marginTop:"20px"}}>
          Submit
        </Button>
      </form>
    </section>
  );
};

export default FormField;
