import React, { useEffect, useState } from "react";
import "./FavoriteCard.css";
import { apiGetAll } from "../../../API/APIService";
import VNA from "../img/logo-vna.svg";
import VJ from "../img/logo-vietjet.svg";
import JS from "../img/logo-jetstar.svg";
import BAA from "../img/logo-bamboo-airways.svg";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

function FavoriteFlightCard({ flight, callListFavFlight }) {
  const [dataflight, setDataFlight] = useState();
  const [getType, setGetType] = useState({});

  const callApi = async () => {
    try {
      const response = await apiGetAll(`get-flight-by-id/${flight.productId}`);
      setDataFlight(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPrice = () => {
    const result = dataflight?.classFlight?.find(
      (item) => item?.type === flight?.searchData?.classFlight
    );
    setGetType(result);
  };

  const logoAirPlane = () => {
    if (dataflight?.airlineName === "Bamboo Airways") {
      return BAA;
    } else if (dataflight?.airlineName === "Vietnam Airlines") {
      return VNA;
    } else if (dataflight?.airlineName === "Jetstar Pacific") {
      return JS;
    } else if (dataflight?.airlineName === "VietJet") {
      return VJ;
    }
  };

  const handleUnlike = () => {
    const getLike = localStorage.getItem("fav") || [];

    const test = JSON.parse(getLike);

    const filterData = test.filter((item) => item.productId !== dataflight._id);

    const newData = JSON.stringify(filterData);
    localStorage.setItem("fav", newData);

    callListFavFlight();
  };

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    if (dataflight && Object.keys(dataflight).length !== 0) {
      getPrice();
    }
  }, [dataflight]);

  return (
    <div className="favorite-card flex mr-6 mb-6 mt-6">
      <div className="relative w-1/2">
        <Button
          className="absolute top-2 left-2 z-10"
          type="primary"
          style={{ backgroundColor: "#07689F" }}
          icon={<HeartOutlined style={{ color: "white" }} />}
          onClick={handleUnlike}
        ></Button>

        <img src={logoAirPlane()} className="w-[176px] h-[232px]" />
      </div>

      <div className="w-1/2">
        <div className="flex font-bold text-lg">
          From :{" "}
          <span className="text-[#07689F]">{dataflight?.departurePlace}</span>
        </div>
        <div className="flex font-bold text-lg mb-1">
          To :{" "}
          <span className="text-[#07689F]">{dataflight?.destinationPlace}</span>
        </div>
        <div className="border-2 mb-1"></div>
        <div className="flex ">
          <div className="black-price ">{getType?.price} VND</div>
        </div>
        <div className="flex">
          <div className="black-price ">{getType?.type}</div>
        </div>
        <div>
          <div className="font-bold">
            {" "}
            Number flight :<span>{dataflight?.flightNumber}</span>{" "}
          </div>
          <div className="font-bold">
            Date : <span>{dataflight?.departureDate.slice(0, 10)}</span>{" "}
          </div>
          <div className="font-bold">
            Take off : <span>{dataflight?.departureDate.slice(11, 19)}</span>{" "}
          </div>
          <div className="font-bold">
            Arrive : <span>{dataflight?.destinationDate.slice(11, 19)}</span>{" "}
          </div>

          <div className="see-availability">
            <a
              href={`/flight-detail-page?flightId=${
                flight.productId
              }&flightreturnId=${""}`}
            >
              See Availability {">"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteFlightCard;
