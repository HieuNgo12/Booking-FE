import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightHomePageBody from "./components/FlightHomePageBody";
import HeaderFlightPageBody from "./components/HeaderFlightPageBody";
import CarouselHeader from "./components/Carousel";
import TravelSection from "./components/TravelSection";
import FlightPromotion from "./components/FlightPromotions";
import { CommentOutlined } from "@ant-design/icons";
import ChatPageBody from "../ChatPage/ChatPageBody";
import { Button } from "antd";
import ChatBox from "../ChatPage/ChatBox";

function FlightHomePage() {
  const [chatBox, setChatBox] = useState(true);
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center z-10">
        <Navbar />
      </div>
      <div className="max-w-[1224px]">
        <HeaderFlightPageBody />
        <CarouselHeader />
        <FlightPromotion />
        <TravelSection />
        <FlightHomePageBody />
      </div>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default FlightHomePage;
