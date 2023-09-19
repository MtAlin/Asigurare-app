import React from "react";

const FormSelectInput = ({ id, label, options, formik, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      {...formik.getFieldProps(id)}
      onChange={(e) => {
        formik.handleChange(e);
        if (onChange) onChange(e); // Custom onChange callback
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {/* {formik.touched[id] && formik.errors[id] ? (
      <div className="text-danger">{formik.errors[id]}</div>
    ) : null} */}
  </div>
);

export default FormSelectInput;
