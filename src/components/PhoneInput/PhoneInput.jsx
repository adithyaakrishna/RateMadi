import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
//import '../PhoneInput/phoneinput.min.scss';
import { Button, InputGroup, FormControl, Dropdown, DropdownButton } from "react-bootstrap";

function Phinput() {
    const [value, setValue] = useState()
    return (
      <section>
        {/* <PhoneInput
          defaultCountry="IN"
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        /> */}
        <InputGroup size="sm" className="mb-3">
          {/* <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Phone Number
            </InputGroup.Text>
          </InputGroup.Prepend> */}
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">
              India +91
          </InputGroup.Text>
          </InputGroup.Prepend>
          {/* <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Countries"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">India +91</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Others</Dropdown.Item>
          </DropdownButton> */}
          
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <div className="Custom-Buttons">
          <Button
            variant="outline-primary"
            as="input"
            type="reset"
            size="sm"
            value="Reset"
          />{" "}
          <Button
            variant="outline-primary"
            as="input"
            type="submit"
            size="sm"
            value="Submit"
          />
        </div>
      </section>
    );
}
export default Phinput;