import React from "react";
import "./FlightCard.css";
function FlightCard() {
  return (
    <div className="flight-card flex">
      <div className="flight-card-image">
        {" "}
        <img src="/flight-list/turkish.png" />
      </div>
      <div className="flight-card-section">
        <div className="top-head-line">From Stockholm</div>
        <div className="flex">
          <div>12:00</div> <div className="pm">PM</div>
        </div>
        <div className="blue-card">Departure</div>
        <div className="grey-card">ARN Stockholm</div>
        <div className="flex">
          <div className="price-tag">75$</div>
          <div className="mt-3">
            <div className="vacant-seat">25 vacant seats</div>
          </div>
        </div>
      </div>
      <div className="flight-card-section">
        <div>Trip Duration: 9h45m</div>
        <div className="flex">
          <div>18:00</div>
          <div>PM</div>
          <div>20:00</div> <div>PM</div>
        </div>
        <div className="blue-card">One Stop, 3h Between</div>
        <div className="grey-card">FCO Rome Fiumicino</div>
        <div className="grey-card">31% less carbondioxide</div>
      </div>
      <div className="flight-card-section">
        <div className="top-head-line">To Istanbul</div>
        <div>
          <div></div>10:00<div></div>AM
        </div>
        <div className="blue-card">Landing</div>

        <div className="grey-card">Saw Istanbul Sabina</div>
        <div className="view-detail text-center mt-6">
          <a href="/flight-search-page">View Detail</a>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
