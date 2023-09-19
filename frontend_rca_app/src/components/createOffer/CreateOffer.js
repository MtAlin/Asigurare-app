import React from "react";
import CreateOfferForm from "../../components/forms/OfferForm/CreateOfferForm";
import FormOffer from "../../components/forms/OfferForm/FormOffer";
function CreateOffer() {
  return (
    <div>
      <h1 className="py-3 text-center">CreateOffer</h1>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-8 col-lg-6 ">
            <FormOffer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOffer;
