import * as Yup from "yup";
import axios from "axios";
const token = localStorage.getItem("token");
console.log(token);
// FormValues.js
export const initialValues = {
  firstName: "",
  lastName: "",
  date: "",
  insuranceType: "Assurance", // Default value
  carType: "",
  manufacture: "",
  registration: "",
  chassis: "",
  kilometers: "",
};

export const validateSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  date: Yup.date()
    .required("Required")
    .test("valid-date", "Invalid date of birth", (value) => {
      const currentYear = new Date().getFullYear();
      const year = new Date(value).getFullYear();
      return year >= 1900 && year <= currentYear;
    }),
  insuranceType: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  carType: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  manufacture: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  chassis: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  registration: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  kilometers: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});
export const onSubmit = async (values, { resetForm }) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/offers/create",
      values,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response.data.message);
  } catch (error) {
    console.error(error);
  }
  resetForm();
  console.log("values", values);
};

export const formFields = [
  { id: "firstName", label: "First Name", type: "text" },
  { id: "lastName", label: "Last Name", type: "text" },
  { id: "date", label: "Date", type: "date" },
  { id: "carType", label: "Car Type", type: "text" },
  { id: "manufacture", label: "Manufacture", type: "text" },
  // Add more fields here as needed
];
