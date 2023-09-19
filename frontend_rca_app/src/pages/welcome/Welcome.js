import "./Welcome.scss";
import Button from "../../components/Button";
import { useState } from "react";
import Modal from "../../components/modal/Modal";

function Welcome() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="welcome">
      <div className="align_center">
        <h1>Welcome</h1>
        <div className="buttons_align">
          <Button path="/login" className="btn btn-light">
            Login
          </Button>
          <Button
            className="btn btn-primary"
            onClick={() => setModalOpen(true)}
          >
            Create Offer
          </Button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
