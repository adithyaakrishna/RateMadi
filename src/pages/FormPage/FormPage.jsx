import React, { useState } from "react";
import FormField from "../../components/Form/Form";
import CustomizedRatings from "../../components/Rating/Rating";
//import BottomNavBar from "../../components/BottomNavbar/BottomNavBar";

const FormPage = (props) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  return (
    <section>
      <CustomizedRatings rating = {rating} setRating = {setRating}></CustomizedRatings>

      <FormField message = {message} setMessage = {setMessage} rating = {rating} currentPhone = {props.currentPhone} setCurrentPhone = {props.setCurrentPhone}></FormField>

      {/* <BottomNavBar></BottomNavBar> */}

    </section>
  );
};
export default FormPage;
