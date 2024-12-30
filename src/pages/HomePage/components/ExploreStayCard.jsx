import React from "react";
import "./ExploreStayCard.css";
import { redirect, useNavigate } from "react-router-dom";
import { addDefaultSrc } from "../../Services/defaultImage";
function ExploreStayCard({ hotel, ...props }) {
  let navigate = useNavigate();


  return (
    <div className="explore-stay-card m-2 p-2">
      <img
        className="profile-image"
        onError={(ev) =>  addDefaultSrc(ev) }
        src={hotel?.imgHotel?.avatar || "https://example.com/hotel1.jpg"}

      />
      <div className="title-explore-stay">{hotel?.hotelName}</div>
      <div className="side">SIDE</div>
      <div className="date-explore-stay">Wed 25 Jan-fri</div>
      <div className="description">{hotel?.detailHotel}</div>
      <button
        onClick={() => {
          navigate(`/hotel-detail/${hotel._id}`);
        }}
        style={{ color: "blue" }}
      >
        {" "}
        Check for more detail
      </button>
    </div>
  );
}

export default ExploreStayCard;
