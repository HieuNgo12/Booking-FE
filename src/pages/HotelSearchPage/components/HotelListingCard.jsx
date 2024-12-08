import React from "react";
import "./HotelListingCard.css";
import ReactPaginate from "react-paginate";

function HotelListingCard() {
  
  return (
    <div style={{width:"820px"}} className="card flex">
      <div style={{ width: "30%" }}>
        <img src="/right2.png" />
      </div>
      <div style={{ width: "40%" }}>
        <div className="head-card-title">Title</div>
        <div>Location</div>
        <div>Breakfast included</div>
        <div>
          <div> 1 Adult, 2 Children, 4 nights</div>
          <div>Experience Unique Oportunities</div>
          <div>Standard rooms</div>
          <div className="flex">
            <div className="head-card-title">Very Good</div>
            <div className="ml-4">2259 reviews</div>
          </div>
        </div>
      </div>
      
      <div >
        <div>
          <div className="flex">
            <div className="discount">10% off</div>
            <div className="ml-6 money">$130</div>
          </div>
          <div>Included taxes and charges</div>
          <div className="sustainable-level">Trip Sustainable level 5</div>
          <div className="available">We have 2 left at 8% off</div>
          <div className="see-availability">See availability {">"}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HotelListingCard;
