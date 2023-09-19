import React from "react";
import { Link } from "react-router-dom";
const Button = ({ children, path, className, onClick }) => {
  return (
    <Link to={path}>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
