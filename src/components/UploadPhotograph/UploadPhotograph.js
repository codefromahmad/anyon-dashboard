import React from 'react'
import './uploadphotograph.css'
import DocumentUpload from "../../assets/images/document-upload.svg";

const UploadPhotograph = () => {
  return (
    // <div className="rounded-card">
      <div className="proofIdCard">
        <div className="proofCard">
          <div className="proofIdHeading">
            <h3>Upload Photograph</h3>
          </div>
          <div className="proofIdMid">
            <div className="uploadText">
              <h4>
               Upload a photograph
              </h4>
            </div>
            <div className="uploadBrowser">
              <p>Browse to upload</p>
              <img src={DocumentUpload} alt="DocumentUpload" />
            </div>
            <p>( Maximum upload size: 5MB)</p>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default UploadPhotograph