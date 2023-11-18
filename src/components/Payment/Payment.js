import React from "react";
import "./payment.css";
import BankIcon from "../../assets/images/bank.svg";
import EditIcon from "../../assets/images/edit-2.svg";
import AddIcon from "../../assets/images/add.svg";
import { IoIosArrowForward } from "react-icons/io";

const Payment = () => {
  return (
    <div>
      <div className="profilePaymentCard">
        <div className="addressForPayment">
          <div className="bankAddressLeft">
            <img src={BankIcon} alt="BankIcon" />
            <p>Adefarasin Jonah</p>
          </div>
          <div className="bankAddressRight">
            <p>5463215499....</p>
            <img src={EditIcon} alt="EditIcon" />
          </div>
        </div>
        <div className="bankAccountDetailCard">
          <div className="bankAccountDetailLeft">
            <img src={AddIcon} alt="AddIcon" />
            <p>Add Bank account details</p>
          </div>
          <div className="bankAccountDetailRight">
            <IoIosArrowForward/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
