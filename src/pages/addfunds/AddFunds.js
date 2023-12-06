import React from "react";
import "./addfunds.css";
import BankTransferImg from "../../assets/images/Group 259.svg";
import PayStackImg from "../../assets/images/Group 263.svg";
import { Link } from "react-router-dom";

const AddFunds = () => {
  return (
    <div className="rounded-card-container">
      <div className="rounded-card">
        <div className="addFundDiv">
          <div className="addFundsText">
            <h2>Add Funds</h2>
          </div>
          <div className="addFundsBottom">
            <Link to="/wallet/addfunds/banktransfer">
              <div className="bankTransferCard">
                <img src={BankTransferImg} alt="BankTransfer" />
                <a href="#">Bank Transfer</a>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Cursus amet leo eget
                  lacus. Etiam mauris.
                </p>
              </div>
            </Link>
            <div className="payStackCard">
              <img src={PayStackImg} alt="Pay stack" />
              <p>
                Lorem ipsum dolor sit amet consectetur. Cursus amet leo eget
                lacus. Etiam mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunds;
