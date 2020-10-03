import React from 'react';
import PhinputLogin from "../../components/PhoneInput/PhoneInputLogin";

const HomePage = (props) => {
  return (
    <section>

      <PhinputLogin setCurrentPhone = {props.setCurrentPhone}></PhinputLogin>
    </section>
  );
};
export default HomePage;
