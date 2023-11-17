import React from "react";
import "./proofofid.css";
import DocumentUpload from "../../assets/images/document-upload.svg";

const ProofOfID = () => {
  return (
    <div className="rounded-card">
      <div className="proofIdCard">
        <div className="proofCard">
          <div className="proofIdHeading">
            <h3>Proof of ID</h3>
          </div>
          <div className="proofIdMid">
            <div className="proofIdText1">
              <h4>
                Upload your ID (Driver’s License, International Passport, or
                National ID)
              </h4>
            </div>
            <div className="proofIdText2">
              <h4>
               Upload document
              </h4>
            </div>
            <div className="uploadBrowser">
              <p>Browse to upload</p>
              <img src={DocumentUpload} alt="DocumentUpload" />
            </div>
            <p>( Maximum upload size: 5MB)</p>
          </div>
          <div className="proofIdBottom">
            <h3>Follow these steps:</h3>
            <p>1. Ensure that your views are accurate</p>
            <p>2. Ensure the lighting is good</p>
            <p>3. Make sure you capture all the edges in the frame </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofOfID;
