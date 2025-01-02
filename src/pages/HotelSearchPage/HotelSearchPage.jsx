import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelSearchBody from "./components/HotelSearchBody";

function HotelSearchPage() {
  return (
    <div className="center-gov">
      <Navbar />
      <HotelSearchBody />
      <Footer />
    </div>
  );
}

export default HotelSearchPage;
