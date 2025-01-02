import React from "react";
import "./FlightCard.css";
import center from "../img/Center.png";
import { Button } from "antd";
function FlightCard() {
  return (
    <div className="grid grid-cols-4 gap-4 w-full cursor-pointer border-4 rounded border-[#F9F9F9] border-solid p-2">
      {/* img */}
      <div className="col-span-1 flex items-center justify-center">
        <img src="/flight-list/turkish.png" alt="Flight Logo" />
      </div>

      {/* Thông Tin Chi Tiết */}
      <div className="col-span-3 flex flex-col gap-4">
        {/* From - To */}
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="bg-[#F9F9F9] font-bold text-lg text-center p-2">
            From <span className="text-[#07689F]">Stockholm</span>
          </div>
          <div className="text-center">
            <img src={center} alt="center" className="mx-auto mb-1" />
            <div>Trip Duration: 9h45m</div>
          </div>
          <div className="bg-[#F9F9F9] font-bold text-lg text-center p-2">
            To <span className="text-[#07689F]">Istanbul</span>
          </div>
        </div>

        {/* Time */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-bold text-lg">12:00 PM</div>
            <div className="text-blue-500">Departure</div>
          </div>
          <div>
            <div className="font-bold text-lg">18:00 PM - 20:00 PM</div>
            <div className="text-blue-500">One Stop, 3h Between</div>
          </div>
          <div>
            <div className="font-bold text-lg">10:00 AM</div>
            <div className="text-blue-500">Landing</div>
          </div>
        </div>

        {/* Name Airport */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 p-2 rounded font-bold">ARN Stockholm</div>
          <div className="bg-gray-100 p-2 rounded">FCO Rome Fiumicino</div>
          <div className="bg-gray-100 p-2 rounded font-bold">
            SAW Istanbul Sabiha
          </div>
        </div>

        {/* Price and More Info */}
        <div className="grid grid-cols-3 gap-4 items-center text-center">
          <div className="flex justify-between">
            <div className="text-green-600 text-2xl font-bold">$75</div>
            <div className="bg-[#E8F5E4] text-sm rounded text-[#4C9839] p-2">
              25 vacant seats
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded">31% less carbon dioxide</div>
          <div>
            <Button
              type="primary"
              className="bg-[#07689F] w-full h-[40px] font-bold"
            >
              View Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
