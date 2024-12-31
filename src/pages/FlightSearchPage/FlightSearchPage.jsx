import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightSearchBody from "./components/FlightSearchBody";

function FlightSearchPage() {
  return (
    <div className="center-gov">
      <Navbar />
    <FlightSearchBody />
      <Footer />
    </div>
  );
}

export default FlightSearchPage;
