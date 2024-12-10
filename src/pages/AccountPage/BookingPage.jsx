import React, { useEffect, useState } from "react";
import { List, Avatar, Tabs } from "antd"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import GetHotelBookingPage from "./GetHotelBookingPage";

const BookingPage = ({ dataUser }) => {
  const [dataBooking, setdDataBooking] = useState(null);
  const callApi = async () => {
    try {
      let req1 = await fetch(
        `${import.meta.env.VITE_URL_API}/get-booking-by-userId`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (req1.status === 401) {
        const req2 = await fetch(
          `${import.meta.env.VITE_URL_API}/refresh-token`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (req2.ok) {
          let req1 = await fetch(
            `${import.meta.env.VITE_URL_API}/get-booking-by-userId`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }
          );
          let res1 = await req1.json();
          if (req1.ok) {
            setdDataBooking(res1.data);
          }
        }
      }
      let res1 = await req1.json();
      if (req1.ok) {
        setdDataBooking(res1.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error internal", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const nameHearder = [
    {
      name: "All",
      component: dataBooking ? (
        <GetHotelBookingPage dataBooking={dataBooking} />
      ) : (
        <div>Loading...</div>
      ),
    },
    {
      name: "Hotel",
      component: dataBooking ? (
        <GetHotelBookingPage dataBooking={dataBooking} />
      ) : (
        <div>Loading...</div>
      ),
    },
    {
      name: "Flight",
      component: dataBooking ? (
        <GetHotelBookingPage dataBooking={dataBooking} />
      ) : (
        <div>Loading...</div>
      ),
    },
    {
      name: "Tour",
      component: dataBooking ? (
        <GetHotelBookingPage dataBooking={dataBooking} />
      ) : (
        <div>Loading...</div>
      ),
    },
  ];
  console.log(dataBooking);
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Booking</h2>
        </div>
        <h2 className="text-lg font-bold">Hotel</h2>
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
