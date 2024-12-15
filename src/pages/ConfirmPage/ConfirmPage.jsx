import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ConfirmPage.css";
import ConfirmTable from "./components/ConfirmTable";
function ConfirmPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="confirm-page-container">
        <div className="flex">
          <div className="your-hotel-reservation ">Your Hotel Reservation</div>
          <div className="confirmed ml-6">Confirmed</div>
        </div>

        <div className="sub-head-title mt-6 mb-6">
          Contact EasySet24 If You Need To Change In Basic Information With 1385
          Bookings now.
        </div>
        <div className="mt-6">
          <div className="booking-no">Booking No.1385 Details</div>
          <div className="check-your">Check your information here !</div>
          <div className="hotel-roles mt-6">Hotel Roles</div>
          <div className="flex">
            <div>Check In At 14:00 Every Day</div>
            <div>Check Out At 12:00, Every Day</div>
          </div>
        </div>
        <div className="mt-6">
          <ConfirmTable />
        </div>
        <div className="flex mt-6">

          <div style={{width: "30%"}} className="sub-title">
            Adults 2, Children 3, Infant 0
          </div>
          <div style={{width: "30%"}} className="sub-title">
            Additional Services Quantity None
          </div>
          <div style={{width: "30%"}} className="sub-title">
            Meal Plan Allergic
          </div>
        </div>
        <div>
          <div className="cancellation-policy">Cancellation Policy</div>
          <div className="mb-6 mt-6 pay-attention">Pay Attention</div>
          <div>
            This booking represents the conclusive step in the hotel reservation
            process. It is considered final and may only be canceled by the
            hotel in the event of unforeseen circumstances or natural disasters.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmPage;
