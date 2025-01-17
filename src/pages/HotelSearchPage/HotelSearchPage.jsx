import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelSearchBody from "./components/HotelSearchBody";
import ChatBox from "../ChatPage/ChatBox";

function HotelSearchPage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center z-10">
        <Navbar />
      </div>
      <div className="max-w-[1224px]">
        <HotelSearchBody />
      </div>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default HotelSearchPage;
