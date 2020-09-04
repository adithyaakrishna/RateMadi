import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
//import '../PhoneInput/phoneinput.min.scss';
import { Button, InputGroup, Form, Col} from "react-bootstrap";

function Phinput() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return (
      <section>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row >

          <InputGroup.Prepend >
            <InputGroup.Text id="basic-addon3" style={{height:'39px'}}>
              India +91
            </InputGroup.Text>
          </InputGroup.Prepend>
          
            <Form.Group as={Col} md="20" controlId="validationCustom01">
              <Form.Control required type="text" placeholder="Phone Number" pattern="[0-9]{10}"/>

              <Form.Control.Feedback type="invalid"> Please Enter The Phone Number.</Form.Control.Feedback>
              
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
          
          </Form.Row>
          <Button type="reset">Reset</Button>{" "}
          <Button type="submit">Submit</Button>

        </Form>

        {/* <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">
              India +91
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FormControl aria-label="Small" required type="text" aria-describedby="inputGroup-sizing-sm" />
          </Form>
        </InputGroup>
        <div className="Custom-Buttons">
          <Button variant="outline-primary" as="input" type="reset" size="sm" value="Reset" />{" "}
          <Button variant="outline-primary" as="input" type="submit" size="sm" value="Submit" />
        </div> */}
      </section>
    );
}
export default Phinput;