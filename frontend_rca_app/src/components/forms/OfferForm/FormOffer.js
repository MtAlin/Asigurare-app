import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "../field/FormInput";
import FormSelectInput from "../field/FormSelectInput";
import { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [openModal, setOpenModal] = useState("");
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const handlePost = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/offer/create",
        values,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      insuranceType: "",
      carType: "",
      chassis: "",
      manufacture: "",
      kilometers: "",
      registration: "",
    },
    onSubmit: (values, { resetForm }) => {
      handlePost(values);
      resetForm();
    },
  });

  // Event handler for the insuranceType field's onChange event
  const handleInsuranceTypeChange = (e) => {
    const selectedValue = e.target.value;
    setOpenModal(selectedValue);
  };
  console.log(message);
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput id="firstName" label="FirstName" type="text" formik={formik} />
      <FormInput id="lastName" label="LastName" type="text" formik={formik} />
      <FormInput id="email" label="Email" type="email" formik={formik} />
      <FormInput id="date" label="Date" type="text" formik={formik} />

      <FormSelectInput
        id="insuranceType"
        label="Insurance Type"
        options={[
          { label: "Assurance", value: "" },
          { label: "RCA", value: "RCA" },
          { label: "CASCO", value: "CASCO" },
        ]}
        formik={formik}
        onChange={handleInsuranceTypeChange} // Pass your custom onChange handler
      />

      {openModal === "CASCO" && (
        <div>
          <FormInput
            id="carType"
            label="Car Type"
            type="text"
            formik={formik}
          />
          <FormInput
            id="manufacture"
            label="Manufacture"
            type="text"
            formik={formik}
          />
          <FormInput
            id="registration"
            label="Registration"
            type="text"
            formik={formik}
          />
        </div>
      )}

      {openModal === "RCA" && (
        <div>
          <FormInput id="chassis" label="Chassis" type="text" formik={formik} />
          <FormInput
            id="kilometers"
            label="Kilometers"
            type="text"
            formik={formik}
          />
        </div>
      )}

      <div className="text-center py-2">
        {message && (
          <div>
            <h6>{message}</h6>
          </div>
        )}
        <button type="submit" className="btn btn-primary w-50">
          Submit
        </button>
      </div>
    </form>
  );
};
export default SignupForm;
