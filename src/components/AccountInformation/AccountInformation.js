import React, { useState } from "react";
import "./accountinformation.css";
import TickMark from "../../assets/images/tick-circle.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Information from "../../assets/images/information.svg";
import { FaChevronRight } from "react-icons/fa";
import { ProofOfID, ProofOfAddress, UploadPhotograph } from "../../components";
import { Link } from "react-router-dom";

const AccountInformation = ({
  accountInformation,
  setAccountInformation,
  handleAccountInformation,
}) => {

  return (
    <>
      <div className="accountInformationContainer">
        {accountInformation === "" && (
          <div>
            <div className="accountInformationCard">
              <a>Personal information</a>
              <div className="accountRight">
                <div className="completeText">
                  <img src={TickMark} />
                  <p>Completed</p>
                </div>
                <FaChevronRight color={"black"} />
              </div>
            </div>
            <Link
              to="/accountinformation/proofofid"
              onClick={() => handleAccountInformation("ProofOfID")}
              className="accountInformationCard"
            >
              <a>Proof of ID</a>
              <div className="accountRight">
                <div className="incompleteText">
                  <img src={Information} />
                  <p>Incomplete</p>
                </div>
                <FaChevronRight color={"black"} />
              </div>
            </Link>
            <Link
              to="/accountinformation/proofofaddress"
              onClick={() => handleAccountInformation("ProofOfAddress")}
              className="accountInformationCard"
            >
              <a>Proof of address</a>
              <div className="accountRight">
                <div className="incompleteText">
                  <img src={Information} />
                  <p>Incomplete</p>
                </div>
                <FaChevronRight color={"black"} />
              </div>
            </Link>
            <Link
              to="/accountinformation/uploadphotograph"
              onClick={() => handleAccountInformation("UploadPhotograph")}
              className="accountInformationCard"
            >
              <a>Upload Photograph</a>
              <div className="accountRight">
                <div className="incompleteText">
                  <img src={Information} />
                  <p>Incomplete</p>
                </div>
                <FaChevronRight color={"black"} />
              </div>
            </Link>
            <div className="completeAccountInformation">
              <p>
                Complete your account information to trade and make profits!
              </p>
            </div>
          </div>
        )}
      </div>
      {accountInformation === "ProofOfID" && <ProofOfID />}
      {accountInformation === "ProofOfAddress" && <ProofOfAddress />}
      {accountInformation === "UploadPhotograph" && <UploadPhotograph />}
    </>
  );
};

export default AccountInformation;
