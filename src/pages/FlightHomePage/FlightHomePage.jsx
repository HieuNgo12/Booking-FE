import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightHomePageBody from "./components/FlightHomePageBody";

function FlightHomePage() {
  return (
    <div className="center-gov content-center">
      <Navbar />
      <FlightHomePageBody />
      <Footer />
    </div>
  );
}

export default FlightHomePage;
