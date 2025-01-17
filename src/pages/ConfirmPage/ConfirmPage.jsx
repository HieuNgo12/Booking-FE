import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ConfirmPage.css";
import ConfirmTable from "./components/ConfirmTable";
import { services } from "../Services/services";
import { useParams } from "react-router-dom";
function ConfirmPage() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    const getBookingById = async () => {
      const data = await services.getBookingById(bookingId);
      console.log(data.data.data);
      setBooking([data.data.data]);
    };
    getBookingById();
  }, []);
  return (
    <div className="container">
      <Navbar />
      <div className="confirm-page-container ">
        <div className="top-header p-6">
          <div className="flex">
            <div className="your-hotel-reservation mt-3 ">
              Your Hotel Reservation
            </div>
            <div className="confirmed ml-6">
              {booking[0]?.status.toUpperCase()}
            </div>
          </div>

          <div className="sub-head-title mt-6 mb-6">
            Contact EasySet24 If You Need To Change In Basic Information With
            Your Bookings now.
          </div>
          <div className="mt-6">
            <div className="booking-no">
              Booking ID: {booking[0]?.bookedRoomId} Details
            </div>
            <div className="check-your mt-6">Check your information here !</div>
            <div className="hotel-roles mt-6 mb-6">Hotel Roles</div>
            <div className="flex">
              <div>Check In At 14:00 Every Day</div>
              <div>Check Out At 12:00, Every Day</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <ConfirmTable booking={booking} />
        </div>
        <div className="flex mt-6 mb-6 confirm-page-container">
          <div style={{ width: "25%" }} className="sub-title">
            Adults: {booking[0]?.totalPersons}
          </div>
          <div style={{ width: "25%" }} className="sub-title flex">
            Total Amount: {booking[0]?.totalAmount} VND
          </div>
          <div style={{ width: "25%" }} className="sub-title">
            Additional Services Quantity: {booking[0]?.specialRequests}
          </div>
          <div style={{ width: "25%" }} className="sub-title">
            Meal Plan Allergic:
          </div>
        </div>
        <div className="">
          <div className="cancellation-policy">Cancellation Policy</div>
          <div className="mb-6 mt-6 pay-attention">Pay Attention</div>
          <div>{booking[0]?.cancellationPolicy}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmPage;
