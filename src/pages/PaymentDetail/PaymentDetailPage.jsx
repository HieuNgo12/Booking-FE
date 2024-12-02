import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PaymentPageBody from "./components/PaymentPageBody";

function PaymentDetailPage() {
  return (
    <div>
      <Navbar />
      <PaymentPageBody />
      <Footer />
    </div>
  );
}

export default PaymentDetailPage;
