import React from "react";
import "./HotelListingCard.css";
import ReactPaginate from "react-paginate";

function HotelListingCard({ hotel, ...props }) {
  return (
    <div style={{ width: "820px" }} className="card flex mb-2 pt-2">
      <div style={{ width: "30%", padding: "4px" }}>
        <img src={hotel.imgHotel.avatar} />
      </div>
      <div style={{ width: "40%",marginLeft: "10px" }}>
        <div className="head-card-title ml-2">{hotel.hotelName}</div>
        <div className="flex mt-2">
          <div>
            <img src="/detailPage/loc.png" className="mr-2 ml-2" />
          </div>
          <div>
            {
            hotel.address.street +
            " " +
            hotel.address.ward +
            hotel.address.city +
              " " +
              hotel.address.country +
              " " +
              hotel.address.district +
              " " 
              }
          </div>
        </div>
        <div className="flex">
        {hotel.amenities.map((amenity) => {
          return (
            <div className="breakfast  mt-2 flex">
              <div>
                <img src="/listpage/cup-four.png" className="mr-2 ml-2" />
              </div>
              <div>{amenity}</div>
            </div>
          );
        })}
        </div>
        <div className="breakfast">Breakfast included</div>
        <div>
          <div className="flex">
            <div className="flex">
              <div>
                <img src="/listpage/people-right.png" />
              </div>
              <div className="ml-2">{hotel.maxOccupancy} Adult, 2 Children,</div>
            </div>
            <div className="flex">
              <div>
                <img src="/listpage/time.png" />
              </div>
              <div>4 nights</div>
            </div>
          </div>
          <div className="experience mr-2 ml-2">
            Experience Unique Oportunities
          </div>
          <div className="mr-2 ml-2">Standard hotels</div>
          <div className="flex mr-2 ml-2">
            <div className="head-card-title">Very Good</div>
            <div className="review ml-4">
              {hotel.reviewId.length} reviews
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex">
            <div className="discount">10% off</div>
            <div className="ml-6 money black-price">${hotel.roomId[0].pricePerNight}</div>
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
            <div className="ml-2">We have 2 left at 8% off</div>
          </div>
          <div className="mt-2">
            <a
              className="see-availability"
              href={`/hotel-detail/${hotel._id}`}
            >
              See availability {">"}
            </a>
          </div>
          <div className="see-availability">See availability {">"}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HotelListingCard;
