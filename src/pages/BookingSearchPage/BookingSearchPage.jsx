import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderFlightPageBody from "../FlightHomePage/components/HeaderFlightPageBody";
import ChatBox from "../ChatPage/ChatBox";
import BookingSearchBodyPage from "./components/BookingSearchBodyPage";

function BookingSearchPage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center z-10">
        <Navbar />
      </div>
      <div className="min-w-[1224px] mt-10 mb-10">
        <BookingSearchBodyPage />
      </div>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default BookingSearchPage;
