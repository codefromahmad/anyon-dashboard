import React from "react";
import "./addbankdetail.css";

const AddBankDetail = () => {
  return (
    // <div className="rounded-card">
      <div className="addBankDetailCard">
      <div className="addBankDetail">
        <div className="bankDetailHeader">
          <h3>Add bank details</h3>
          <p>Lorem ipsum dolor sit amet consectetur uspendisse amet arcu.</p>
        </div>
        <div className="chooseBank">
          <p>Bank</p>
          <select>
            <option value="volvo">Choose bank...</option>
          </select>
        </div>
        <div className="chooseAccountNo">
          <p>Account number</p>
          <input type="text" />
        </div>
        <div className="buttonToSave">
          <p>Save</p>
        </div>
        </div>
      </div>
    // </div>
  );
};

export default AddBankDetail;
