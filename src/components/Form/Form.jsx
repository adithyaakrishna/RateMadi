import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
// import Razorpay from "razorpay";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FormField = (props) => {
  const history = useHistory();
  var [tip, setTip] = useState("");
  var x = new URLSearchParams(window.location.search).get("id");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(tip);
    var options = {
      key: "rzp_test_Yojq3daI9BFR0J", // Enter the Key ID generated from the Dashboard
      amount: parseInt(tip) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Zuink",
      description: "Test Transaction",
      // "image": "https://example.com/your_logo",
      // "order_id": "SO1222", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(
          "Payment successful, payment id: " + response.razorpay_payment_id
        );
        history.push("/thankyou");
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#F37254",
      },
    };
    const rzp1 = new window.Razorpay(options);

    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    await Axios.post(
      "http://13.232.41.160:3050/delivery_gods/add_feedback",
      JSON.stringify({
        phone_number: x,
        feedback_text: props.message,
        rating: props.rating,
      }),
      {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
      if (tip > 0) {
        rzp1.open();
      } else history.push("/thankyou");
    });
  };

  return (
    <section>
      <form noValidate autoComplete="on" onSubmit={handleSubmit}>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Praise your executive here"
            multiline
            required
            rows={3}
            style={{ width: 225 }}
            placeholder="Praise your executive here"
            variant="outlined"
            value={props.message}
            onChange={(e) => {
              props.setMessage(e.target.value);
            }}
            onSubmit={handleSubmit}
          />
          <br />
        </div>
        <TextField
          error
          id="standard-error"
          onChange={(event) => setTip(event.target.value)}
          label="Enter a Tip Amount"
          style={{ marginBottom: "20px", marginTop: "10px" }}
        />
        <div style={{ fontSize: "13px" }}>
          You don't have to. But a little goes a long way!
        </div>
        <br />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          style={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default FormField;
