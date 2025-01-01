import React, { useEffect, useState } from "react";
import { List, Avatar, Tabs } from "antd"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import GetHotelBookingPage from "./GetHotelBookingPage";
import { apiGetAll } from "../../API/APIService";
import GetFlightBookingPage from "./GetFlightBookingPage";
import GetTourBookingPage from "./GetTourBookingPage";

const BookingPage = ({ dataUser }) => {
  const nameHearder = [
    {
      name: "Hotel",
      component: <GetHotelBookingPage />,
    },
    {
      name: "Flight",
      component: <GetFlightBookingPage />,
    },
    {
      name: "Tour",
      component: <GetTourBookingPage />,
    },
  ];

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Booking</h2>
        </div>

        <Tabs
          defaultActiveKey="1"
          type="card"
          size="large"
          tabBarStyle={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          items={nameHearder.map((item, i) => {
            const id = String(i + 1);
            return {
              label: (
                <div
                  style={{
                    flex: 1, // Chia đều mỗi tab
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </div>
              ),
              key: id,
              children: item.component,
            };
          })}
        />
      </div>
    </div>
  );
};

export default BookingPage;
