import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightPaymentBody from "./components/FlightPaymentBody";

function FlightPaymentPage() {
  return (
    <div className="center-gov">
      <Navbar />
      <FlightPaymentBody />
      <Footer />
    </div>
  );
}

export default FlightPaymentPage;
