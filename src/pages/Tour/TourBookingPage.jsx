import React from 'react'
import TourBooking from './TourBooking';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TourBookingPage() {
  return (
    <div className='ml-12'>
      <Navbar />
      <div className="space-y-6 mt-2 pt-20">
        <TourBooking />
      </div>
      <Footer />
    </div>
  );

}

export default TourBookingPage