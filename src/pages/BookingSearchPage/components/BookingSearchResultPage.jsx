import React, { useEffect, useState } from "react";
import { List, Avatar, Tabs } from "antd"; // Import useNavigate
import "react-phone-input-2/lib/style.css";
import { apiGetAll, apiPost } from "../../../API/APIService";
import VNA from "../img/logo-vna.svg";
import VJ from "../img/logo-vietjet.svg";
import JS from "../img/logo-jetstar.svg";
import BAA from "../img/logo-bamboo-airways.svg";

const BookingSearchResultPage = ({ resultSearch }) => {
  const handleAvatar = () => {
    switch (resultSearch?.objectType) {
      case "hotel":
        return resultSearch?.objectId?.imgHotel?.avatar;
      case "tour":
        return resultSearch?.objectId?.imgTour?.avatar;
      case "flight":
        return getLogo(resultSearch?.objectId?.airlineName);
    }
  };

  const getLogo = (xxx) => {
    console.log(xxx);
    switch (xxx) {
      case "Vietnam Airlines":
        return VNA;
      case "VietJet":
        return VJ;
      case "Jetstar Pacific":
        return JS;
      case "Bamboo Airways":
        return BAA;
    }
  };

  return Object.keys(resultSearch).length !== 0 ? (
    <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Avatar src={handleAvatar()} size={64} className="rounded-md" />
        <div>
          <h4 className="text-lg font-semibold text-gray-900">
            {/* {item.objectId.hotelName || "Hotel Name"} */}
            Hotel Name
          </h4>
          <p className="text-sm text-gray-500">
            {resultSearch?.bookingStartDate?.slice(0, 10)} -{" "}
            {resultSearch?.bookingEndDate?.slice(0, 10)}
          </p>
          <p
            className={`text-sm ${
              resultSearch?.status === "completed"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {resultSearch?.status || "Pending"}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="text-right flex flex-col items-end">
        <p className="text-xl font-bold text-gray-800">
          ${Number(resultSearch?.totalAmount || 0).toLocaleString("en-US")}
        </p>
        <button
          className="mt-2 bg-[#07689F] text-white px-4 py-2 rounded-md hover:bg-[#055770] transition"
          onClick={() =>
            window.open(
              `/booking-${resultSearch?.objectType}-detail/${resultSearch?._id}`,
              "_blank"
            )
          }
        >
          View Details
        </button>
      </div>
    </div>
  ) : (
    <div className="text-center">No result!</div>
  );
};

export default BookingSearchResultPage;
