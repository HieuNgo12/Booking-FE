import React from "react";
import "./FavoriteCard.css";
function FavoriteCard({ hotel, ...props }) {
  return (
    <div className="favorite-card flex mr-6 mb-6 mt-6">
      <div className="fav-card-info">
        <img
          src={hotel.imgHotel.avatar}
          style={{ width: "176px", height: "232px" }}
        />
      </div>
      <div className="fav-card-info ">
        <div className="black-price mb-6">{hotel.hotelName}</div>
        <div className="flex">
          <div>
            {" "}
            <img src="/detailPage/loc.png" />
          </div>
          <div className="location">
            {hotel.address.street +
              hotel.address.ward +
              hotel.address.district +
              hotel.address.city +
              hotel.address.country}
          </div>
        </div>
        <div className="flex mt-6 ">
          <div className="black-price ">${hotel.priceAveragePerNight}</div>
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
          <div className="see-availability">
            <a href={`/hotel-detail/${hotel._id}`}>See Availability {">"}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
