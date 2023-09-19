import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.date) {
    errors.date = "Required";
  } else {
    const currentYear = new Date().getFullYear();
    const year = new Date(values.date).getFullYear();
    if (year < 1900 || year > currentYear) {
      errors.date = "Invalid date of birth";
    }
  }

  if (!values.insuranceType) {
    errors.insuranceType = "Required";
  } else if (values.insuranceType.length > 15) {
    errors.insuranceType = "Must be 15 characters or less";
  }

  if (!values.carType) {
    errors.carType = "Required";
  } else if (values.carType.length > 15) {
    errors.carType = "Must be 15 characters or less";
  }

  if (!values.manufacture) {
    errors.manufacture = "Required";
  } else if (values.manufacture.length > 15) {
    errors.manufacture = "Must be 15 characters or less";
  }

  if (!values.chassis) {
    errors.chassis = "Required";
  } else if (values.chassis.length > 15) {
    errors.chassis = "Must be 15 characters or less";
  }

  if (!values.registration) {
    errors.registration = "Required";
  } else if (values.registration.length > 15) {
    errors.registration = "Must be 15 characters or less";
  }

  if (!values.kilometers) {
    errors.kilometers = "Required";
  } else if (values.kilometers.length > 15) {
    errors.kilometers = "Must be 15 characters or less";
  }

  return errors;
};

const SignupForm = () => {
  const [openModal, setOpenModal] = useState();
  const token = localStorage.getItem("token");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      date: "",
      insuranceType: "Assurance", // Default value
      carType: "",
      chassis: "",
      manufacture: 0,
      registration: "",
      kilometers: 0,
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/offer/create",
          values,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response.data.message);
      } catch (error) {
        console.error(error);
      }
      resetForm();
      console.log("valiues", values);
    },
  });
  // Event handler for the insuranceType field's onChange event
  const handleInsuranceTypeChange = (e) => {
    const selectedValue = e.target.value;
    setOpenModal(selectedValue);
    formik.handleChange(e); // Update Formik's state
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="date">Date</label>
      <input id="date" type="date" {...formik.getFieldProps("date")} />
      {formik.touched.date && formik.errors.date ? (
        <div>{formik.errors.date}</div>
      ) : null}

      <label htmlFor="insuranceType">Insurance Type</label>
      <select
        id="insuranceType"
        {...formik.getFieldProps("insuranceType")}
        onChange={handleInsuranceTypeChange}
      >
        <option value="">Assurance</option>
        <option value="RCA">RCA</option>
        <option value="CASCO">CASCO</option>
      </select>
      {formik.touched.insuranceType && formik.errors.insuranceType ? (
        <div>{formik.errors.insuranceType}</div>
      ) : null}
      {openModal === "RCA" ? (
        <div>
          <label htmlFor="carType">CarType</label>
          <input type="text" {...formik.getFieldProps("carType")} />
          {formik.touched.carType && formik.errors.carType ? (
            <div>{formik.errors.carType}</div>
          ) : null}
          <label htmlFor="manufacture">Year of manufacture</label>
          <input type="text" {...formik.getFieldProps("manufacture")} />
          {formik.touched.manufacture && formik.errors.manufacture ? (
            <div>{formik.errors.manufacture}</div>
          ) : null}
          <label htmlFor="registration">Registration number</label>
          <input type="text" {...formik.getFieldProps("registration")} />
          {formik.touched.registration && formik.errors.registration ? (
            <div>{formik.errors.registration}</div>
          ) : null}
        </div>
      ) : openModal === "CASCO" ? (
        <div>
          <label htmlFor="chassis">Chassis</label>
          <input type="text" {...formik.getFieldProps("chassis")} />
          {formik.touched.chassis && formik.errors.chassis ? (
            <div>{formik.errors.chassis}</div>
          ) : null}
          <label htmlFor="kilometers">Kilometers</label>
          <input type="number" {...formik.getFieldProps("kilometers")} />
          {formik.touched.kilometers && formik.errors.kilometers ? (
            <div>{formik.errors.kilometers}</div>
          ) : null}
        </div>
      ) : (
        ""
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
