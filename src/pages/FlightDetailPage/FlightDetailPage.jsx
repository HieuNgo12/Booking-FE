import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightDetailBody from "./components/FlightDetailBody";

function FlightDetailPage() {
  return (
    <div className="center-gov content-center">
      <Navbar />
      <FlightDetailBody />
      <Footer />
    </div>
  );
}

export default FlightDetailPage;
