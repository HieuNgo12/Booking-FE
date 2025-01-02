import React from "react";
import "./FlightCard.css";
function FlightCard() {
  return (
    <div className="flight-card flex ">
      <div className="flight-card-image">
        {" "}
        <img src="/flight-list/turkish.png" />
      </div>
      <div className="flight-card-section pl-6">
        <div className="top-head-line flex">
          <div className="sub-title">From</div>{" "}
          <div className="ml-3 country">Stockholm</div>
        </div>
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
      <div className="flight-card-section pt-10">
        <div className="mt-10">Trip Duration: 9h45m</div>
        <div className="flex">
          <div className="o-clock">18:00</div>
          <div className="ml-3 mr-3">PM</div>
          <div className="mr-3 o-clock">20:00</div> <div>PM</div>
        </div>
        <div className="blue-card">One Stop, 3h Between</div>
        <div className="grey-card">FCO Rome Fiumicino</div>
        <div className="grey-card">31% less carbondioxide</div>
      </div>
      <div className="flight-card-section">
        <div className="top-head-line flex">
          <div className="sub-title">To</div>
          <div className="ml-3 country">Istanbul</div>{" "}
        </div>
        <div>
          <div className="o-clock">10:00</div>
          <div>AM</div>
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
