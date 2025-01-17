import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderFlightPageBody from "../FlightHomePage/components/HeaderFlightPageBody";
import FlightConfirmBodyPage from "./components/FlightConfirmBodyPage";
import ChatBox from "../ChatPage/ChatBox";

function FlightConfirmPgae() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center z-10">
        <Navbar />
      </div>
      <div className="min-w-[1224px] mb-10">
        <HeaderFlightPageBody />
        <FlightConfirmBodyPage />
      </div>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default FlightConfirmPgae;
