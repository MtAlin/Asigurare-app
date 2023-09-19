import React from "react";
import "./Modal.scss";
import Button from "../Button";
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Please login if You Want to Continue?</h1>
        </div>
        <div className="footer">
          <button
            className="btn btn-danger"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
          <Button path="/login" className="btn btn-primary">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
