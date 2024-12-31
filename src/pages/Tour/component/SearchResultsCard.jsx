import React from "react";
import { Link } from "react-router-dom";

const SearchResultsCard = ({ tour }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
      {/* Hình ảnh đại diện */}
      <img
        src={tour.imgTour?.avatar}
        alt={tour.tourName}
        className="w-full md:w-1/4 h-48 object-cover rounded-lg"
      />

      {/* Nội dung thông tin tour */}
      <div className="flex flex-col justify-between flex-1">
        {/* Tên tour */}
        <h2 className="text-lg font-bold text-blue-800">{tour.tourName}</h2>

        {/* Mã tour và địa điểm */}
        <div className="text-gray-500 text-sm">
          <p>
            <strong>Mã tour:</strong> {tour.tourCode}
          </p>
          <p>
            <strong>Điểm đến:</strong> {tour.inforLocation.endDestination}
          </p>
        </div>

        {/* Ngày khởi hành */}
        <p className="text-sm text-gray-600">
          <strong>Ngày khởi hành:</strong>{" "}
          {new Date(tour.startDateBooking).toLocaleDateString("vi-VN")}
        </p>

        {/* Thời gian tour */}
        <p className="text-sm text-gray-600">
          <strong>Thời gian:</strong> {tour.duration}
        </p>

        {/* Phương tiện */}
        <p className="text-sm text-gray-600">
          <strong>Phương tiện:</strong> {tour.transportationMethod.join(", ")}
        </p>

        {/* Giá tiền */}
        <div className="mt-2">
          <span className="text-red-600 font-bold text-lg">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(tour.price * 1000)}
          </span>
        </div>

        {/* Nút xem chi tiết */}
        <div className="mt-4">

          <Link to={`/tour/${tour._id}`} className="inline-block px-6 py-2 bg-custom-blue text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1">
            Xem chi tiết
          </Link>

        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
