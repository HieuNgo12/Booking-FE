import React, { useEffect, useState } from "react";
import "./FlightCard.css";
import center from "../img/Center.png";
import { Button } from "antd";
import VNA from "../img/logo-vna.svg";
import VJ from "../img/logo-vietjet.svg";
import JS from "../img/logo-jetstar.svg";
import BAA from "../img/logo-bamboo-airways.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function FlightCard({ dataSource }) {
  const navigate = useNavigate();
  const [getInfo, setGetInfo] = useState();
  const logoAirPlane = () => {
    if (dataSource.airlineName === "Bamboo Airways") {
      return BAA;
    } else if (dataSource.airlineName === "Vietnam Airlines") {
      return VNA;
    } else if (dataSource.airlineName === "Jetstar Pacific") {
      return JS;
    } else if (dataSource.airlineName === "VietJet") {
      return VJ;
    }
  };

  const { searchData } = useSelector((state) => state?.searchSlice);

  useEffect(() => {
    if (dataSource) {
      setGetInfo(getPrice());
    }
  }, [dataSource]);

  const getPrice = () => {
    const getPrice = dataSource.classFlight.find(
      (item) => item.type === searchData.classFlight
    );
    return getPrice ? getPrice : "Type not found";
  };

  console.log(getInfo);

  return (
    <div className="grid grid-cols-4 gap-4 w-full border-4 rounded border-[#F9F9F9] border-solid p-2">
      {/* img */}
      <div className="col-span-1 flex items-center justify-center">
        <img src={logoAirPlane()} alt="Flight Logo" />
      </div>

      {/* Thông Tin Chi Tiết */}
      <div className="col-span-3 flex flex-col gap-4 justify-between">
        {/* From - To */}
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="bg-[#F9F9F9] font-bold text-lg text-center p-2">
            From{" "}
            <span className="text-[#07689F]">{dataSource.departurePlace}</span>
          </div>
          <div className="text-center">
            <img src={center} alt="center" className="mx-auto mb-1" />
          </div>
          <div className="bg-[#F9F9F9] font-bold text-lg text-center p-2">
            To{" "}
            <span className="text-[#07689F]">
              {dataSource.destinationPlace}
            </span>
          </div>
        </div>

        {/* Time */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-bold text-lg">
              {dataSource?.departureDate?.slice(0, 10)}
            </div>
            <div className="font-bold text-lg">
              {dataSource?.departureDate?.slice(11, 19)}
            </div>
          </div>
          <div>
            <div className="text-lg font-bold">Trip Duration:</div>
            <div className="text-lg font-bold">
              {dataSource?.departureDate && dataSource?.destinationDate
                ? (() => {
                    const diffMs = Math.abs(
                      new Date(dataSource?.destinationDate) -
                        new Date(dataSource?.departureDate)
                    );
                    const hours = Math.floor(diffMs / (1000 * 60 * 60));
                    const minutes = Math.floor(
                      (diffMs % (1000 * 60 * 60)) / (1000 * 60)
                    );

                    return `${hours} hours ${minutes} minutes`;
                  })()
                : "N/A"}
            </div>{" "}
          </div>

          <div>
            <div className="font-bold text-lg">
              {dataSource?.destinationDate?.slice(0, 10)}
            </div>
            <div className="font-bold text-lg">
              {dataSource?.destinationDate?.slice(11, 19)}
            </div>
          </div>
        </div>

        {/* Name Airport */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 p-2 rounded font-bold">
            {dataSource.departureAirport}
          </div>
          <div className="bg-gray-100 p-2 rounded font-bold">Fly Straight</div>
          <div className="bg-gray-100 p-2 rounded font-bold">
            {dataSource.destinationAirport}
          </div>
        </div>

        {/* Price and More Info */}
        <div className="grid grid-cols-3 gap-4 items-center text-center">
          <div className="flex flex-col justify-between">
            <div className="text-green-600 text-2xl font-bold bg-[#E8F5E4]">
              {getInfo?.price} VND
            </div>
            <div className=" text-sm rounded text-[#4C9839] p-2">
              {getInfo?.seats} vacant seats
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded">
            <div className="font-bold text-base"> {getInfo?.type}</div>
            <div> ( Personal items, hand luggage )</div>
          </div>
          <div>
            <Button
              type="primary"
              className="bg-[#07689F] w-full h-[40px] font-bold"
              onClick={() => navigate(`/flight-detail-page/${dataSource._id}`)}
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
