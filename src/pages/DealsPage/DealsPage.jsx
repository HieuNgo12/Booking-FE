import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselHeader from "./components/Carousel";
import FlightPromotion from "./components/FlightPromotions";
import HeaderPromotionPageBody from "./components/HeaderPromotionPageBody";
import ChatBox from "../ChatPage/ChatBox";

function DealsPage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center z-10">
        <Navbar />
      </div>
      <div className="max-w-[1224px]">
        <HeaderPromotionPageBody />
        <CarouselHeader />
        <FlightPromotion />
      </div>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default DealsPage;
