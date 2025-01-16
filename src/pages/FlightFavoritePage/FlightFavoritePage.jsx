import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightFavoritePageBody from "./components/FlightFavoritePageBody";
import ChatBox from "../ChatPage/ChatBox";

function FlightFavoritePage() {
  return (
    <div className="center-gov content-center">
      <Navbar />
      <FlightFavoritePageBody />
      <Footer />
      <ChatBox />
    </div>
  );
}

export default FlightFavoritePage;
