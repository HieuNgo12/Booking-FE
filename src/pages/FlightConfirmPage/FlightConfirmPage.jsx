import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FlightConfirmBody from "./components/FlightConfirmBody";

function FlightConfirmPage() {
  return (
    <div className="center-gov content-center">
      <Navbar />
      <FlightConfirmBody />
      <Footer />
    </div>
  );
}

export default FlightConfirmPage;
