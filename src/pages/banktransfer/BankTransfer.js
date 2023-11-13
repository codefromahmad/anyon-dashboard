import React from "react";
import "./banktransfer.css";
import Icon from "../../assets/images/document-copy.svg";

const BankTransfer = () => {
  return (
    <div className="rounded-card">
      <div className="bankTransferContainer">
        <div className="bankTransferHeading">
          <h4>Bank Transfer</h4>
        </div>
        <div className="bankTransferText">
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus amet leo eget lacus.
            Etiam mauris.
          </p>
        </div>
        <div className="detailCard">
          <div className="bankCard">
            <p>Bank name</p>
            <div className="bankName">
              <p>AccessBank PLC</p>
              <img src={Icon} />
            </div>
          </div>
          <div className="accountNoCard">
            <p>Account Number</p>
            <div className="accountNo">
              <p>4563214587</p>
              <img src={Icon} />
            </div>
          </div>
          <div className="accountNameCard">
            <p>Account name</p>
            <div className="accountName">
              <p>9ja Stocks</p>
              <img src={Icon} />
            </div>
          </div>
        </div>
        <div className="paymentButton">
          <p>Upload Proof of payment</p>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
