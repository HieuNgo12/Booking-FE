import React from "react";
import "./PaymentPageBody.css"
function PaymentPageBody() {
  return (
    <div className="side-card mt-8">
      {" "}
      <div style={{ width: "50%" }}>
        <div>
          <div style={{ width: "30%" }}></div>
          <div style={{ width: "70%" }}>
            <div>First Hotel G</div>
            <div>Modern Hotel at Gothenburg Central Station</div>
            <div>More than 4325 views</div>
            <div>9.2</div>
            <div>Location Information</div>
            <ul>
              <li>0 m to City Centre</li>
              <li>24km to Lavender Airport</li>
              <li>2.5km to Liseberg Amusement Park</li>
              <li>0m to Gothenburg Central Station</li>
            </ul>
            <div>
              <div>Breakfast Included</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div style={{ width: "50%" }}></div>
    </div>
  );
}

export default PaymentPageBody;
