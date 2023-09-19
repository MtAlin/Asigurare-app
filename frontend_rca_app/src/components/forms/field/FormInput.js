import React from "react";

const FormInput = ({ id, label, type, formik }) => (
  <div className="py-2">
    {/* <label htmlFor={id}>{label}</label>  /optional */}
    <input
      id={id}
      type={type}
      {...formik.getFieldProps(id)}
      placeholder={label}
      className="w-100 py-2"
      style={{ border: "none", borderBottom: "1px solid grey" }}
    />
    {/* {formik.touched[id] && formik.errors[id] ? (
      <div className="text-danger">{formik.errors[id]}</div>
    ) : null} */}
  </div>
);

export default FormInput;
