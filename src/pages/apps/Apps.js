import React from "react";
import "./apps.css";
import GroupImg from "../../assets/images/OBJECTS.svg";

const Apps = () => {
  return (
    <div className="rounded-card">
      <div className="appsCard">
        <div className="appsCardHeading">
          <h3>Most used apps</h3>
        </div>
        <div className="financeCard">
          <img src={GroupImg} />
          <div className="financeCardBottom">
            <h4>Finance news</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse amet arcu
              bibendum rhoncus
            </p>
          </div>
        </div>
        <div className="appsCardFooter">
          <h2>All apps</h2>
        </div>
      </div>
    </div>
  );
};

export default Apps;
