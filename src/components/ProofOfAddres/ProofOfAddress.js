import React from 'react'
import './proofofaddress.css'
import DocumentUpload from "../../assets/images/document-upload.svg";

const ProofOfAddress = () => {
  return (
    <div className="rounded-card">
      <div className="proofAddressCard">
      <div className="proofAddress">
        <div className="proofIdHeading">
          <h3>Proof of Address</h3>
        </div>
        <div className="proofIdMid">
        <div className="proofIdText1">
              <h4>
              Upload a utility bill (Must not be older than 3 months)
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
  )
}

export default ProofOfAddress