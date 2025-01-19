import React from "react";
import "./HotelListingCard.css";
import ReactPaginate from "react-paginate";
import { utils } from "../../Services/utils";

function HotelListingCard({ hotel, ...props }) {
  const amenitiesSeprate = (amenities) => {
    console.log(amenities);
    let amenitySeperator = [];
    let amenityList = [];
    for (let i = 0; i < amenities.length; i++) {
      let amenity = amenities[i];
      if (i % 3 === 0 && i !== 0) {
        amenityList.push(amenitySeperator);
        amenitySeperator = [];
      } else {
        amenitySeperator.push(amenity);
      }
    }
    amenities.forEach((amenity, index) => {});
    const list = amenityList.map((amenity) => {
      console.log(amenity);

      for (let i = 0; i < amenity.length; i++) {
        amenity;
      }
      amenity.map((amen) => {
        return (
          <div className="breakfast  mt-2 flex">
            <div>
              <img src="/listpage/cup-four.png" className="mr-2 ml-2" />
            </div>
            <div>{amen}</div>
          </div>
        );
      });
      return amenity;
    });
    console.log(list);
    return list;
  };
  return (
    <div
      style={{ width: "820px" }}
      className="hotel-listing-card  flex mb-2 pt-2"
    >
      <div style={{ width: "30%", padding: "4px" }}>
        <img
          src={hotel.imgHotel.avatar}
          style={{ width: "100%", height: "225px" }}
        />
      </div>
      <div style={{ width: "40%" }}>
        <div className="head-card-title ml-2">{hotel.hotelName}</div>
        <div className="flex mt-2">
          <div>
            <img src="/detailPage/loc.png" className="mr-2 ml-2" />
          </div>
          <div>
            {hotel.address.street +
              " " +
              hotel.address.ward +
              hotel.address.city +
              " " +
              hotel.address.country +
              " " +
              hotel.address.district +
              " "}
          </div>
        </div>
        <div className="flex">
          {hotel.amenities.map((amen) => {
            return (
              <div className="breakfast  mt-2 flex">
                <div>
                  <img src={utils.returnAmenities(amen)}className="mr-2 ml-2" />
                </div>
                <div>{amen || "No Amenities yet"}</div>
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
              <div className="ml-2">
                {hotel.maxOccupancy} Adult, 2 Children,
              </div>
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
          <div className="mr-2 ml-2">Standard hotels</div>
          <div className="flex mr-2 ml-2">
            <div className="head-card-title">Very Good</div>
            <div className="review ml-4 mt-2">
              {hotel.reviewId.length} reviews
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex" style={{ marginTop: "20%", marginLeft: "0px" }}>
            <div className="discount">10% off</div>
            <div className="ml-6 money black-price">
              {utils.numberWithCommas(
                (Number(hotel?.roomId[0]?.pricePerNight  * 23000) || Number(hotel?.priceAveragePerNight))
              ) || "Free"}{" "}
              VND
            </div>
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
            <a className="see-availability" href={`/hotel-detail/${hotel._id}`}>
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
