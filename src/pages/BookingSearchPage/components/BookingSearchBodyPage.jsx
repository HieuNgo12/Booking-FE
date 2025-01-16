import React, { useState } from "react";
import { Input, Button, Checkbox } from "antd";
import GuideSearch from "../img/guide.png";
import { apiGetAll } from "../../../API/APIService";
import BookingSearchResultPage from "./BookingSearchResultPage";

function BookingSearchBodyPage() {
  const [pinCode, setPinCode] = useState("");
  const [bookingCode, setBookingCode] = useState("");
  const [selectedType, setSelectedType] = useState("hotel");
  const [booking, setBooking] = useState({});

  const handleSearch = async () => {
    setBooking({})
    try {
      const response = await apiGetAll(
        `search-booking/${bookingCode}/${pinCode}/${selectedType}`
      );
      setBooking(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 max-w-[1224px] mx-auto bg-[#F9F9F9] rounded-lg shadow-md flex flex-col gap-6">
      <div className="flex gap-6">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Map with Pins"
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-1/2 flex flex-col">
          <h1 className="text-2xl font-bold mb-3">Input PIN</h1>
          <div className="flex gap-4 mb-2">
            <p className="text-base mb-2 w-1/2 text-justify">
              This Page Displays All Your Bookings. If You've Previously Made A
              Booking And It's Not Visible Here, You Can Conveniently Access It
              Again By Entering The Tracking Code.
            </p>
            <img src={GuideSearch} alt="" className="w-1/2" />
          </div>

          <div className="flex gap-2 mt-3 mb-2">
            <div className="w-2/3">
              <label className="text-lg font-bold text-gray-700 mb-2">
                Booking Code:
              </label>
              <Input
                value={bookingCode}
                onChange={(e) => setBookingCode(e.target.value)}
                placeholder="Enter your tracking code"
                className="mb-4"
              />
            </div>

            <div className="w-1/3">
              <label className="text-lg font-bold text-gray-700 mb-2">
                PIN Code:
              </label>
              <Input
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="Enter your PIN code"
                className="mb-4"
              />
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center gap-4 mb-5">
            <Checkbox
              checked={selectedType === "hotel"}
              onChange={() => setSelectedType("hotel")}
              className="font-bold text-[#07689F] border rounded p-3 border-[#07689F]"
            >
              Hotel
            </Checkbox>
            <Checkbox
              checked={selectedType === "flight"}
              onChange={() => setSelectedType("flight")}
              className="font-bold text-[#07689F] border rounded p-3 border-[#07689F]"
            >
              Flight
            </Checkbox>
            <Checkbox
              checked={selectedType === "tour"}
              onChange={() => setSelectedType("tour")}
              className="font-bold text-[#07689F] border rounded p-3 border-[#07689F]"
            >
              Tour
            </Checkbox>
            <Checkbox
              checked={selectedType === "cab"}
              onChange={() => setSelectedType("cab")}
              className="font-bold text-[#07689F] border rounded p-3 border-[#07689F]"
            >
              Cab
            </Checkbox>
          </div>

          {/* Search Button */}
          <Button
            type="primary"
            onClick={handleSearch}
            style={{
              backgroundColor: "#07689F",
              borderColor: "#07689F",
              height: "40px",
            }}
            className="hover:bg-[#055770] transition font-bold text-base"
          >
            Search
          </Button>
        </div>
      </div>

      <div className="border-b-4 border-[F9F9F9] rounded"></div>

      <div>
        <h1 className="text-2xl font-bold mb-3">Information Booking</h1>
        <BookingSearchResultPage resultSearch={booking} />
      </div>
    </div>
  );
}

export default BookingSearchBodyPage;
