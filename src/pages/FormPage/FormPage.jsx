import React from "react";
import FormField from "../../components/Form/Form";
import CustomizedRatings from "../../components/Rating/Rating";
//import BottomNavBar from "../../components/BottomNavbar/BottomNavBar";

const FormPage = () => {
  return (
    <section>

      <CustomizedRatings></CustomizedRatings>
      
      <FormField></FormField>

      {/* <BottomNavBar></BottomNavBar> */}

    </section>
  );
};
export default FormPage;