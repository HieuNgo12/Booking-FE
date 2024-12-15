import React from "react";
import "./FavoriteCard.css"
function FavoriteCard() {
  return (
    <div className="favorite-card flex">
      <div className="fav-card-image ">
        <img src="" />
      </div>
      <div className="fav-card-info ">
        <div>Radisson Blu</div>
        <div className="flex">
          <div>
            {" "}
            <img src="/detailPage/loc.png" />
          </div>
          <div className="location">La Kalsa, Palermo</div>
        </div>
        <div className="flex">
          <div className="black-price">$140</div>
          <div className="discount">16% off</div>
        </div>
        <div className="taxes-charges">Include Taxes and Charges</div>
        <div>
          <div></div>
          <div className="trip-sustainable">Trip Sustainable Level, 5.</div>
        </div>
        <div>
          <div>
            <img />
          </div>
          <div className="available">We have 8 left at 12% off</div>
          <div className="see-availability">See Availability</div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
