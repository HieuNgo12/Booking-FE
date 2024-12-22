import React from "react";
import "./HotelListingCard.css";
import ReactPaginate from "react-paginate";

function HotelListingCard({ room, ...props }) {
  return (
    <div style={{ width: "820px" }} className="card flex">
      <div style={{ width: "30%", padding: "4px" }}>
        <img src={room.imgRoom.avatar} />
      </div>
      <div style={{ width: "40%" }}>
        <div className="head-card-title">{room.roomName}</div>
        <div className="flex mt-2">
          <div>
            <img src="/detailPage/loc.png" className="mr-2 ml-2" />
          </div>
          <div>
            {
            room.hotelId.address.street +
            " " +
            room.hotelId.address.ward +
            room.hotelId.address.city +
              " " +
              room.hotelId.address.country +
              " " +
              room.hotelId.address.district +
              " " 
              }
          </div>
        </div>
        <div className="flex">
        {room.amenities.map((amenity) => {
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
   
        <div>
          <div className="flex  mt-2 mr-2 ml-2">
            <div className="flex">
              <div>
                <img src="/listpage/people-right.png" />
              </div>
              <div className="ml-2">{room.maxOccupancy} Adult, 2 Children,</div>
            </div>
            <div className="flex ">
              <div>
                <img className="ml-2" src="/listpage/time.png" />
              </div>
              <div className="ml-2 ">4 nights</div>
            </div>
          </div>
          <div className="experience mr-2 ml-2">
            Experience Unique Oportunities
          </div>
          <div className="mr-2 ml-2">Standard rooms</div>
          <div className="flex mr-2 ml-2">
            <div className="head-card-title">Very Good</div>
            <div className="review ml-4">
              {room.hotelId.reviewId.length} reviews
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex">
            <div className="discount">10% off</div>
            <div className="ml-6 money black-price">${room.pricePerNight}</div>
          </div>
          <div className="mt-2">Included taxes and charges</div>
          <div className="sustainable-level flex mt-2">
            <div>
              <img src="/listpage/leaves-2.png" />
            </div>
            <div className="trip-sustainable ml-2">
              Trip Sustainable level 5
            </div>
          </div>
          <div className="available flex mt-2">
            {" "}
            <div>
              <img src="/listpage/attention.png" />
            </div>
            <div className="ml-2">We have 2 left at 8% off</div>
          </div>
          <div className="mt-2">
            <a
              className="see-availability"
              href={`/hotel-detail/${room.hotelId._id}`}
            >
              See availability {">"}
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HotelListingCard;
