import React, { useEffect, useState } from "react";
import { Divider } from "antd";
import { useLocation, useParams } from "react-router-dom";
import { apiGet } from "../../../API/APIService";
import VNA from "../img/logo-vna.svg";
import VJ from "../img/logo-vietjet.svg";
import JS from "../img/logo-jetstar.svg";
import BAA from "../img/logo-bamboo-airways.svg";
// import QRCode from "qrcode.react";
import { QRCodeSVG } from "qrcode.react";

function FlightConfirmBodyPage() {
  const location = useParams();
  const test = useLocation();
  const [booking, setBooking] = useState({});
  const [qrData, setQrData] = useState("https://example.com");

  const callApi = async () => {
    try {
      const response = await apiGet(`get-booking/${location.bookingId}`);
      setBooking(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const logoAirPlane = () => {
    if (booking?.objectId?.airlineName === "Bamboo Airways") {
      return BAA;
    } else if (booking?.objectId?.airlineName === "Vietnam Airlines") {
      return VNA;
    } else if (booking?.objectId?.airlineName === "Jetstar Pacific") {
      return JS;
    } else if (booking?.objectId?.airlineName === "VietJet") {
      return VJ;
    }
  };

  console.log(location);
  console.log(test.search);
  return (
    <div className="max-w-5xl mx-auto p-5 bg-white shadow-lg rounded-lg overflow-hidden border-2 border-[#F9F9F9]">
      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Digital Ticket</h2>
        <p className="text-sm font-semibold">
          It Is Not Necessary To Print Your Ticket
        </p>
      </div>

      <div className="flex gap-3 justify-between">
        {/* Table Header */}
        <div>
          <div className="grid grid-cols-7 text-center bg-[#A6A6A6] font-bold text-white ">
            <div className="col-span-2 py-3 border-r text-lg">✈️ Flight</div>
            <div className="col-span-2 py-3 border-r text-lg">🛫 From</div>
            <div className="col-span-2 py-3 border-r text-lg">🛬 To</div>
            <div className="py-3 border-r text-lg">Duration</div>
            {/* <div className="col-span-2 py-3 border-r text-lg">QR Code</div> */}
          </div>

          {/* Flight Details - First Flight */}
          <div className="grid grid-cols-7 text-sm border-2 ">
            {/* Airline Info */}
            <div className="col-span-2 flex flex-col items-center justify-center p-4 border-r">
              <img
                src={logoAirPlane()}
                alt="Airline Logo"
                className="h-16 mb-2"
              />
              <h3 className="text-lg font-bold text-gray-700">
                {booking?.objectId?.airlineName}
              </h3>
              <p className="text-gray-500">
                {" "}
                {booking?.objectId?.flightNumber}
              </p>
              <p className="text-[#07689F]">Economy Class</p>
            </div>

            {/* From */}
            <div className="col-span-2 flex flex-col justify-center p-4 border-r">
              <p className="text-[#07689F] font-bold text-lg">
                {booking?.objectId?.departureDate.slice(11, 19)}
              </p>
              <p className="text-green-600 font-semibold">
                {" "}
                {booking?.objectId?.departureDate.slice(0, 10)}
              </p>
              <p className="font-bold">{booking?.objectId?.departurePlace}</p>
              <p className="text-gray-500 text-sm">
                {booking?.objectId?.departureAirport}
              </p>
            </div>

            {/* To */}
            <div className="col-span-2 flex flex-col justify-center p-4 border-r">
              <p className="text-[#07689F] font-bold text-lg">
                {" "}
                {booking?.objectId?.destinationDate.slice(11, 19)}
              </p>
              <p className="text-green-600 font-semibold">
                {" "}
                {booking?.objectId?.destinationDate.slice(0, 10)}
              </p>
              <p className="font-bold">{booking?.objectId?.destinationPlace}</p>
              <p className="text-gray-500 text-sm">
                {" "}
                {booking?.objectId?.destinationAirport}
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-center p-4 border-r">
              <p className="font-bold text-xl text-gray-700">
                {" "}
                {booking?.objectId?.departureDate &&
                booking?.objectId?.destinationDate
                  ? (() => {
                      const diffMs = Math.abs(
                        new Date(booking?.objectId?.destinationDate) -
                          new Date(booking?.objectId?.departureDate)
                      );
                      const hours = Math.floor(diffMs / (1000 * 60 * 60));
                      const minutes = Math.floor(
                        (diffMs % (1000 * 60 * 60)) / (1000 * 60)
                      );

                      return (
                        <div className="flex flex-col items-center gap-2">
                          <div className="text-xl font-bold text-[#07689F] flex items-center gap-2">
                            <span>{hours}</span>
                            <span className="text-sm font-normal text-black">
                              hours
                            </span>
                          </div>
                          <div className="text-xl font-bold text-[#07689F] flex items-center gap-2">
                            <span>{minutes} </span>
                            <span className="text-sm font-normal text-black">
                              minutes
                            </span>
                          </div>
                        </div>
                      );
                    })()
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-r-2 border-black border-dashed"></div>

        <div className="flex flex-col justify-between">
          <div className=" py-3 border-r text-lg w-40 text-center bg-[#A6A6A6] font-bold text-white ">
            QR Code
          </div>
          <div className="flex items-center justify-center">
            <QRCodeSVG value="https://reactjs.org/" size={160} />
          </div>
        </div>
      </div>

      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">
          Terms and Conditions
        </h2>
        <p className="text-sm font-semibold">Payments</p>
        <p className="text-xs">
          - If you are purchasing your ticket using a debit or credit card via
          the Website, we will process these payments via the automated secure
          common payment gateway which will be subject to fraud screening
          purposes.{" "}
        </p>
        <p className="text-xs">
          - If you do not supply the correct card billing address and/or
          cardholder information, your booking will not be confirmed and the
          overall cost may increase. We reserve the right to cancel your booking
          if payment is declined for any reason or if you have supplied
          incorrect card information. If we become aware of, or is notified of,
          any fraud or illegal activity associated with the payment for the
          booking, the booking will be cancelled and you will be liable for all
          costs and expenses arising from such cancellation, without prejudice
          to any action that may be taken against us.
        </p>
        <p className="text-xs">
          - Golobe may require the card holder to provide additional payment
          verification upon request by either submitting an online form or
          visiting the nearest Golobe office, or at the airport at the time of
          check-in. Golobe reserves the right to deny boarding or to collect a
          guarantee payment (in cash or from another credit card) if the card
          originally used for the purchase cannot be presented by the cardholder
          at check-in or when collecting the tickets, or in the case the
          original payment has been withheld or disputed by the card issuing
          bank. Credit card details are held in a secured environment and
          transferred through an internationally accepted system.
        </p>
      </div>
    </div>
  );
}

export default FlightConfirmBodyPage;
