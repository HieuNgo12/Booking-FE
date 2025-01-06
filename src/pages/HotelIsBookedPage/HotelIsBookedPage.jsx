import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./HotelIsBookedPage.css"
function HotelIsBookedPage() {
  return (
    <div className="center-gov content-center">
      <Navbar />
      <div className="container-center">
        <div className="is-booked-card">
          <div className="our-hotel">Our Hotel Is Currently Booked</div>
          <div className="we-apologize">We apologize for any inconvenience</div>
          <div className="thank-you">Thank you for understanding!</div>
          <div className="checking-back">
            Checking back with us in a few days as our availability can change
            quickly{" "}
          </div>
          <div className="subscribe-for">Subscribe For Receiving Room availability Notification</div>
          <div className="during-your">During your Time expectations.</div>
          <div className="room-availability">
            <button>Room Availability Notification</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HotelIsBookedPage;
