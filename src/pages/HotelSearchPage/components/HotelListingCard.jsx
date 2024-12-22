import React from "react";
import "./HotelListingCard.css";
import ReactPaginate from "react-paginate";

function HotelListingCard() {
  return (
    <div style={{ width: "820px" }} className="card flex">
      <div style={{ width: "30%", padding: "4px" }}>
        <img src="/listpage/Picture.png" />
      </div>
      <div style={{ width: "40%" }}>
        <div className="head-card-title">Title</div>
        <div className="flex">
          <div>
            <img src="/detailPage/loc.png" />
          </div>
          <div>Location</div>
        </div>
        <div className="breakfast">Breakfast included</div>
        <div>
          <div className="flex">
            <div className="flex">
              <div>
                <img src="/listpage/people-right.png" />
              </div>
              <div></div>1 Adult, 2 Children,
            </div>
            <div className="flex">
              <div>
                <img src="/listpage/time.png" />
              </div>
              <div>4 nights</div>
            </div>
          </div>
          <div className="experience">Experience Unique Oportunities</div>
          <div>Standard rooms</div>
          <div className="flex">
            <div className="head-card-title">Very Good</div>
            <div className="review ml-4">2259 reviews</div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex">
            <div className="discount">10% off</div>
            <div className="ml-6 money">$130</div>
          </div>
          <div>Included taxes and charges</div>
          <div className="sustainable-level flex">
            <div>
              <img src="/listpage/leaves-2.png" />
            </div>
            <div>Trip Sustainable level 5</div>
          </div>
          <div className="available flex">
            {" "}
            <div>
              <img src="/listpage/attention.png" />
            </div>
            <div>We have 2 left at 8% off</div>
          </div>
          <div className="see-availability">See availability {">"}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HotelListingCard;
