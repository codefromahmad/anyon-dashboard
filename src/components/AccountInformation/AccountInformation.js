import React from "react";
import "./accountinformation.css";
import TickMark from "../../assets/images/tick-circle.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";
import Information from "../../assets/images/information.svg";
import { FaChevronRight } from "react-icons/fa";

const AccountInformation = () => {
  return (
    <div className="rounded-card">
      <div className="accountInformationCards">
        <div className="accountInformationCard">
          <a>Personal information</a>
          <div className="accountRight">
            <div className="completeText">
              <img src={TickMark} />
              <p>Completed</p>
            </div>
            <FaChevronRight />
          </div>
        </div>
        <div className="accountInformationCard">
          <a>Proof of ID</a>
          <div className="accountRight">
            <div className="incompleteText">
              <img src={Information} />
              <p>Incomplete</p>
            </div>
            <FaChevronRight />
          </div>
        </div>
        <div className="accountInformationCard">
          <a>Proof of address</a>
          <div className="accountRight">
            <div className="incompleteText">
              <img src={Information} />
              <p>Incomplete</p>
            </div>
              <FaChevronRight />
          </div>
        </div>
        <div className="accountInformationCard">
          <a>Upload Photograph</a>
          <div className="accountRight">
            <div className="incompleteText">
              <img src={Information} />
              <p>Incomplete</p>
            </div>
              <FaChevronRight />
          </div>
        </div>
        <div className="completeAccountInformation">
          <p>Complete your account information to trade and make profits!</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
