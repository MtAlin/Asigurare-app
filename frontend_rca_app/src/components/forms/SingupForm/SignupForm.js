import "../SingupForm/SignupForm.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const SignupForm = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        values
      );
      setMessage(response.data.message);
      console.log(response.data.message);
      resetForm(); // Reset the form after a successful submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("Required")
          .matches(
            /^(?=(.*\d){2})(?=.*[a-zA-Z]){2}(?=(.*[\W]){2}).{5,}$/,
            " Must be alt least 5 caracter, 2 letter, 2 number, 2 symbol"
          ),
      })}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className="flex">
            <Field name="name" type="text" placeholder="Enter your name" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>

          <div className="flex">
            <Field name="email" type="email" placeholder="Enter your email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="flex">
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <p>{message}</p>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
