import React from "react";
import "./HotelInfo.css";
function HotelInfo() {
  return (
    <div className="flex">
      <div className="section">
        <div className="head-line">What's Nearby</div>
        <div></div>
      </div>
      <div className="section">
        <div className="head-line">Top Attraction</div>
      </div>
      <div className="section">
        <div className="head-line">Public Transit</div>
      </div>
      <div className="section">
        <div className="head-line">Closest Airport</div>
      </div>
      <div className="section">
        <div className="head-line">Restaurant & Cafes</div>
      </div>
      <div className="section">
        <div className="head-line">Natural Beauty</div>
      </div>
    </div>
  );
}

export default HotelInfo;
