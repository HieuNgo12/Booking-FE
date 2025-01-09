import React, { useEffect, useState } from "react";
import "./FlightDetailBody.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import backGround from "../img/background.jpg";
import { apiGet } from "../../../API/APIService";
import VNA from "../img/logo-vna.svg";
import VJ from "../img/logo-vietjet.svg";
import JS from "../img/logo-jetstar.svg";
import BAA from "../img/logo-bamboo-airways.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import {
  faSuitcase,
  faCat,
  faTemperatureHigh,
  faBan,
  faShareAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function FlightDetailBody() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const flightId = searchParams.get("flightId");
  const flightReturnId = searchParams.get("flightreturnId");
  const [data, setData] = useState({});
  const [dataReturn, setDataReturn] = useState({});
  const [dataPrice, setDataPrice] = useState("N/A");
  const [dataPriceReturn, setDataPriceReturn] = useState("N/A");
  const [localSS, setLocalSS] = useState({});

  const { searchData } = useSelector((state) => state?.searchSlice);

  const getSearch = JSON.parse(localStorage.getItem("fav"));
  console.log(flightReturnId);

  const handleLocalSS = () => {
    const findItem = getSearch.find((item) => item.productId === flightId);
    setLocalSS(findItem);
  };

  useEffect(() => {
    handleLocalSS();
  }, []);

  const callApi = async () => {
    try {
      const response = await apiGet(`get-flight-by-id/${flightId}`);
      setData(response.data);
      if (flightReturnId) {
        const responserReturn = await apiGet(
          `get-flight-by-id/${flightReturnId}`
        );
        setDataReturn(responserReturn.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const logoAirPlane = () => {
    if (data?.airlineName === "Bamboo Airways") {
      return BAA;
    } else if (data?.airlineName === "Vietnam Airlines") {
      return VNA;
    } else if (data?.airlineName === "Jetstar Pacific") {
      return JS;
    } else if (data?.airlineName === "VietJet") {
      return VJ;
    }
  };

  console.log(localSS);

  useEffect(() => {
    if (
      (data?.classFlight && searchData?.classFlight) ||
      (localSS && localSS?.searchData?.classFlight)
    ) {
      setDataPrice(getPrice());
    }
  }, [data, searchData]);

  const getPrice = () => {
    const getPrice = data?.classFlight.find(
      (item) =>
        item.type === searchData?.classFlight ||
        localSS?.searchData?.classFlight
    );
    return getPrice ? getPrice.price : "Type not found";
  };

  useEffect(() => {
    if (dataReturn?.classFlight && dataReturn?.classFlight) {
      setDataPriceReturn(getPriceReturn());
    }
  }, [dataReturn, searchData]);

  const getPriceReturn = () => {
    const getPrice = dataReturn?.classFlight.find(
      (item) =>
        item.type === searchData?.classFlight ||
        localSS?.searchData?.classFlight
    );
    return getPrice ? getPrice.price : "Type not found";
  };

  return (
    <div className="flex items-center justify-center min-w-[1224px] bg-[#F9F9F9]">
      <div className="max-w-2xl rounded-xl overflow-hidden mt-10 mb-10 w-full h-auto border-[#D9D9D9] border-4">
        {/* thông tin chuyến bay */}
        <div className="bg-[#07689F] flex items-center justify-center h-20">
          <div className="ml-2 text-white text-xl font-bold">
            Information Flight
          </div>
        </div>

        {/* thông tin chi tiết */}

        <img
          src={backGround}
          alt=""
          style={{ maxHeight: "300px", width: "100%", backgroundSize: "cover" }}
        />

        {/* go info */}
        <div>
          <div className="bg-white shadow-md rounded-lg p-4 max-w-3xl mx-auto">
            {/* Header: Logo và Tên Hãng */}
            <div className="flex items-center gap-4 mb-4 border-b pb-4">
              <img
                src={logoAirPlane()}
                alt="Airline Logo"
                className="h-32 object-contain w-1/3"
              />
              <div className="text-3xl font-bold text-[#07689F] w-2/3">
                {data?.airlineName || "Airline Name"}
              </div>
            </div>

            {/* Body: Thông Tin Chi Tiết */}
            <div className="flex justify-between items-center text-lg">
              <div>
                <span className="font-semibold text-gray-600">Flight No:</span>{" "}
                <span className="font-bold text-lg text-[#07689F]">
                  {data?.flightNumber || "N/A"}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-600">Class:</span>{" "}
                <span className="font-bold text-lg text-[#07689F]">
                  {searchData?.classFlight
                    ? searchData?.classFlight
                    : localSS?.searchData?.classFlight}
                </span>
                <span className="font-bold"></span>
              </div>
              <div>
                <span className="font-semibold text-gray-600">Price:</span>{" "}
                <span className="font-bold text-lg text-[#07689F]">
                  {dataPrice ? `${dataPrice} VND` : "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* thông tin sân bay tới và đi */}
          <div className="flex justify-between p-5">
            {/* cột 1 */}
            <div className="max-w-36 bg-[#F9F9F9]">
              <div className="blue-title">{data?.departureAirport}</div>
              <div className="text-base font-bold">
                {data?.departurePlace || "N/A"}
              </div>
              <div>CET : {data?.departureDate?.slice(11, 19)}</div>
              <div className="flex items-center">
                <div className="gate">GATE : </div>
                <div className="big-grey-text">{"14D"}</div>
              </div>
            </div>

            {/* cột 2  */}
            <div className="text-center flex flex-col justify-center items-center">
              <div className="font-bold text-xl text-[#07689F]">
                Flight Duration
              </div>
              <div className="text-lg">
                {data?.departureDate && data?.destinationDate
                  ? (() => {
                      const diffMs = Math.abs(
                        new Date(data?.destinationDate) -
                          new Date(data?.departureDate)
                      );
                      const hours = Math.floor(diffMs / (1000 * 60 * 60));
                      const minutes = Math.floor(
                        (diffMs % (1000 * 60 * 60)) / (1000 * 60)
                      );

                      return `${hours} hours ${minutes} minutes`;
                    })()
                  : "N/A"}
              </div>
            </div>

            {/* cột 3  */}
            <div className="max-w-36">
              <div className="blue-title">{data?.destinationAirport}</div>
              <div className="text-base font-bold">
                {data?.destinationPlace || "N/A"}
              </div>
              <div>CET : {data?.destinationDate?.slice(11, 19)}</div>
              <div className="flex items-center">
                <div className="gate">GATE : </div>
                <div className="big-grey-text">{"3L"}</div>
              </div>
            </div>
          </div>

          {/* img máy bay */}
          <div>
            <img src="/flight-detail-page/Airplane.png" />
          </div>

          {/* thông tin di chuyến */}
          <div className="flex w-full justify-between">
            <div className="p-3 w-1/2 flex flex-col gap-3">
              <div className="flex justify-between items-center p-5 bg-[#D9D9D9]">
                <div className="medium-text-grey">Fly Straight</div>
              </div>

              <div className="flex justify-between items-center p-5 bg-[#D9D9D9]">
                <div className="medium-text-grey">Entrance C- Gate 23 A</div>
              </div>
            </div>

            <div className="p-3 w-1/2 flex flex-col gap-3">
              <div className="flex justify-between items-center p-5 bg-[#D9D9D9]">
                <div className="medium-text-grey ">{searchData?.trip} trip</div>
              </div>

              <div className="flex justify-between items-center p-5 bg-[#D9D9D9]">
                <div className="medium-text-grey"> Exit - Gate 3 L</div>
              </div>
            </div>
          </div>

          {/* thông tin thêm */}
          <div className="flex justify-between p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faTemperatureHigh}
                  style={{ fontSize: "18px", color: "#07689F" }}
                />
                <div className="font-bold text-base">
                  28° - {data?.departurePlace}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faSuitcase}
                  style={{ fontSize: "18px", color: "#07689F" }}
                />
                <div className="font-bold text-base">15 kg</div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faCat}
                  style={{ fontSize: "18px", color: "#07689F" }}
                />
                <div className="font-bold text-base">Pets are not allowed</div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faBan}
                  style={{ fontSize: "18px", color: "#07689F" }}
                />
                <div className="font-bold text-base">
                  Weapons are not allowed
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faTemperatureHigh}
                  style={{ fontSize: "18px", color: "#07689F" }}
                />
                <div className="font-bold text-base">
                  28° - {data?.destinationPlace}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faSuitcase}
                  style={{ fontSize: "18px", color: "#07689F" }}
                />
                <div className="font-bold text-base">15 kg</div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faCat}
                  style={{ fontSize: "18px", color: "#07689F" }}
                />
                <div className="font-bold text-base">Pets are not allowed</div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faBan}
                  style={{ fontSize: "18px", color: "#07689F" }}
                />
                <div className="font-bold text-base">
                  Weapons are not allowed
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 mt-5"></div>

        {/* return info */}
        {Object.keys(dataReturn).length !== 0 && (
          <div>
            <div className="bg-white shadow-md rounded-lg p-4 max-w-3xl mx-auto">
              {/* Header: Logo và Tên Hãng */}
              <div className="flex items-center gap-4 mb-4 border-b pb-4">
                <img
                  src={logoAirPlane()}
                  alt="Airline Logo"
                  className="h-32 object-contain w-1/3"
                />
                <div className="text-3xl font-bold text-[#07689F] w-2/3">
                  {data?.airlineName || "Airline Name"}
                </div>
              </div>

              {/* Body: Thông Tin Chi Tiết */}
              <div className="flex justify-between items-center text-lg">
                <div>
                  <span className="font-semibold text-gray-600">
                    Flight No:
                  </span>{" "}
                  <span className="font-bold text-lg text-[#07689F]">
                    {dataReturn?.flightNumber || "N/A"}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Class:</span>{" "}
                  <span className="font-bold text-lg text-[#07689F]">
                    {searchData?.classFlight}
                  </span>
                  <span className="font-bold"></span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Price:</span>{" "}
                  <span className="font-bold text-lg text-[#07689F]">
                    {dataPriceReturn ? `${dataPriceReturn} VND` : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* thông tin sân bay tới và đi */}
            <div className="flex justify-between p-5">
              {/* cột 1 */}
              <div className="max-w-36 bg-[#F9F9F9]">
                <div className="blue-title">{dataReturn?.departureAirport}</div>
                <div className="text-base font-bold">
                  {dataReturn?.departurePlace || "N/A"}
                </div>
                <div>CET : {dataReturn?.departureDate?.slice(11, 19)}</div>
                <div className="flex items-center">
                  <div className="gate">GATE : </div>
                  <div className="big-grey-text">{"14D"}</div>
                </div>
              </div>

              {/* cột 2  */}
              <div className="text-center flex flex-col justify-center items-center">
                <div className="font-bold text-xl text-[#07689F]">
                  Flight Duration
                </div>
                <div className="text-lg">
                  {dataReturn?.departureDate && dataReturn?.destinationDate
                    ? (() => {
                        const diffMs = Math.abs(
                          new Date(dataReturn?.destinationDate) -
                            new Date(dataReturn?.departureDate)
                        );
                        const hours = Math.floor(diffMs / (1000 * 60 * 60));
                        const minutes = Math.floor(
                          (diffMs % (1000 * 60 * 60)) / (1000 * 60)
                        );

                        return `${hours} hours ${minutes} minutes`;
                      })()
                    : "N/A"}
                </div>
              </div>

              {/* cột 3  */}
              <div className="max-w-36">
                <div className="blue-title">
                  {dataReturn?.destinationAirport}
                </div>
                <div className="text-base font-bold">
                  {dataReturn?.destinationPlace || "N/A"}
                </div>
                <div>CET : {dataReturn?.destinationDate?.slice(11, 19)}</div>
                <div className="flex items-center">
                  <div className="gate">GATE : </div>
                  <div className="big-grey-text">{"3L"}</div>
                </div>
              </div>
            </div>

            {/* img máy bay */}
            <div>
              <img
                src="/flight-detail-page/Airplane.png"
                alt="Airplane"
                style={{ transform: "rotate(180deg)" }}
              />
            </div>

            {/* thông tin di chuyến */}
            <div className="flex w-full justify-between">
              <div className="p-3 w-1/2 flex flex-col gap-3">
                <div className="flex justify-between items-center p-5 bg-[#D9D9D9]">
                  <div className="medium-text-grey">Fly Straight</div>
                </div>

                <div className="flex justify-between items-center p-5 bg-[#D9D9D9]">
                  <div className="medium-text-grey">Entrance C- Gate 23 A</div>
                </div>
              </div>

              <div className="p-3 w-1/2 flex flex-col gap-3">
                <div className="flex justify-between items-center p-5 bg-[#D9D9D9]">
                  <div className="medium-text-grey ">
                    {searchData?.trip} trip
                  </div>
                </div>

                <div className="flex justify-between items-center p-5 bg-[#D9D9D9]">
                  <div className="medium-text-grey"> Exit - Gate 3 L</div>
                </div>
              </div>
            </div>

            {/* thông tin thêm */}
            <div className="flex justify-between p-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faTemperatureHigh}
                    style={{ fontSize: "18px", color: "#07689F" }}
                  />
                  <div className="font-bold text-base">
                    28° - {data?.departurePlace}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    style={{ fontSize: "18px", color: "#07689F" }}
                  />
                  <div className="font-bold text-base">15 kg</div>
                </div>

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCat}
                    style={{ fontSize: "18px", color: "#07689F" }}
                  />
                  <div className="font-bold text-base">
                    Pets are not allowed
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faBan}
                    style={{ fontSize: "18px", color: "#07689F" }}
                  />
                  <div className="font-bold text-base">
                    Weapons are not allowed
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faTemperatureHigh}
                    style={{ fontSize: "18px", color: "#07689F" }}
                  />
                  <div className="font-bold text-base">
                    28° - {data?.destinationPlace}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    style={{ fontSize: "18px", color: "#07689F" }}
                  />
                  <div className="font-bold text-base">15 kg</div>
                </div>

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCat}
                    style={{ fontSize: "18px", color: "#07689F" }}
                  />
                  <div className="font-bold text-base">
                    Pets are not allowed
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faBan}
                    style={{ fontSize: "18px", color: "#07689F" }}
                  />
                  <div className="font-bold text-base">
                    Weapons are not allowed
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 "></div>
          </div>
        )}

        {/* thông tin thanh toán */}
        <div className="flex mt-6 mb-6 w-full">
          <div className="w-1/3 flex  flex-col justify-center items-center">
            <div className="price">
              {flightReturnId
                ? isNaN(dataPrice) || isNaN(dataPriceReturn)
                  ? "Invalid Price"
                  : `${Number(dataPrice) + Number(dataPriceReturn)} VND`
                : isNaN(dataPrice)
                ? "N/A"
                : `${Number(dataPrice)} VND`}
            </div>
            <div className="text-red-500 font-bold">Taxes Included</div>
          </div>

          <div className="w-2/3 flex flex-col justify-center items-center">
            <img src="/flight-detail-page/Icons.png" />
            <div>Transactions are encrypted By EsaySet24</div>
          </div>
        </div>

        {/* bottom */}
        <div className="bg-[#565656] p-5 flex justify-between items-center gap-6">
          <div className="flex w-1/2">
            <div className="w-1/2 flex flex-col justify-center items-center cursor-pointer">
              <FontAwesomeIcon
                icon={faShareAlt}
                style={{ fontSize: "40px", color: "white" }}
              />
              <div className="font-bold text-[white]">Share</div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center cursor-pointer">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                style={{ fontSize: "40px", color: "white" }}
              />
              <div className="font-bold text-[white]">Help</div>
            </div>
          </div>

          <Button
            type="pramiry"
            className="bg-[#07689F] text-[white] font-bold p-7 w-1/2 text-xl"
            onClick={() =>
              navigate(
                `/flight-payment-page?flightId=${flightId}&flightreturnId=${flightReturnId}`
              )
            }
          >
            Purchase The Flight
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FlightDetailBody;
