import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightPaymentBody from "./components/FlightPaymentBody";
import HeaderFlightPageBody from "../FlightHomePage/components/HeaderFlightPageBody";

function FlightPaymentPage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center z-10">
        <Navbar />
      </div>
      <div className="max-w-[1224px]">
        <HeaderFlightPageBody />
        <FlightPaymentBody />
      </div>
      <Footer />
    </div>
  );
}

export default FlightPaymentPage;
