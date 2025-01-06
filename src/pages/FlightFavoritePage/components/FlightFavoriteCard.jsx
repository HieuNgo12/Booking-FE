import React from "react";
import "./FlightFavoriteCard.css";
function FlightFavoriteCard({ flight, ...props }) {
  return (
    <div className="favorite-card flex mr-6 mb-6 mt-6">
      <div className="fav-card-info">
        <img src="" style={{ width: "176px", height: "232px" }} />
      </div>
      <div className="fav-card-info ">
        <div className="black-price mb-6"> ChikChak</div>
        <div className="flex">
          <div>
            {" "}
            <img src="/detailPage/loc.png" />
          </div>
          <div className="location">address</div>
        </div>
        <div className="flex mt-6 ">
          <div className="black-price ">$110</div>
        </div>
        <div className="flex">
          <div>
            {" "}
            <img src="/flight-favorite-page/baggage-delay.png" />
          </div>
          <div className="ml-2"> SAW Istanbul Sabiha</div>
        </div>
        <div className="flex">
          <div>
            {" "}
            <img src="/flight-favorite-page/rotation.png" />
          </div>
          <div className="ml-2">FCO Rome Fiuminico</div>
        </div>
        <div className="flex">
          <div>
            <img src="/flight-favorite-page/baggage-delay.png" />
          </div>
          <div className="ml-2">SAW Istanbul Sabiha</div>
       
        </div>
        <div className="see-availability">
            <a href={`/hotel-detail/123`}>See Availability {">"}</a>
          </div>
      </div>
    </div>
  );
}

export default FlightFavoriteCard;
