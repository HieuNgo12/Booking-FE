import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightHomePageBody from "./components/FlightHomePageBody";
import HeaderFlightPageBody from "./components/HeaderFlightPageBody";
import CarouselHeader from "./components/Carousel";
import TravelSection from "./components/TravelSection";

function FlightHomePage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center z-10">
        <Navbar />
      </div>
      <div className="max-w-[1224px]">
        <HeaderFlightPageBody />
        <CarouselHeader />
        <TravelSection />
        <FlightHomePageBody />
      </div>
      <Footer />
    </div>
  );
}

export default FlightHomePage;
