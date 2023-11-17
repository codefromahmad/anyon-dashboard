import React from "react";
import "./myaccount.css";
import ArrowDownImg from "../../assets/images/arrow-down.svg";

const MyAccount = () => {
  return (
    <div className="rounded-card">
      <div className="myAccountCard">
        <div className="accountCard">
          <div className="accountCardLeft">
            <div className="circleDiv">
              <div className="circle"></div>
              <div className="circleText">
                <p>Eidt</p>
              </div>
            </div>
          </div>
          <div className="accountCardRight">
            <div className="accountCardHeader">
              <div className="firstName">
                <p>First Name</p>
                <input type="text" placeholder="" />
              </div>
              <div className="lastName">
                <p>Last Name</p>
                <input type="text" placeholder="" />
              </div>
            </div>
            <div className="accountCardMid">
              <div className="emailDiv">
                <p>Email</p>
                <input type="text" placeholder="" />
              </div>
              <div className="phoneNo">
                <p>Phone no</p>
                <input type="text" placeholder="" />
              </div>
            </div>
            <div className="accountCardBottom">
              <div className="address">
                <p>Address</p>
                <input type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bankInformationCard">
          <div className="bankInformationHeading">
            <h3>Bank Information</h3>
          </div>
          <div className="bankInformationMid">
            <div className="bank-name">
              <p>NGN Bank Name</p>
              <div className="selectDiv">
               <select>
               <option value="volvo">Select bank</option>
               </select>

              </div>
            </div>
            <div className="account-no">
              <p>Account Number</p>
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="buttonSave">
            <p>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
