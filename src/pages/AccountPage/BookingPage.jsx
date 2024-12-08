import React, { useEffect, useState } from "react";
import { List, Avatar } from "antd";// Import useNavigate
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";

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
        {dataBooking && (
          <div className="bg-white rounded-lg shadow-md">
            <List
              itemLayout="horizontal"
              dataSource={dataBooking}
              renderItem={(item) => (
                <List.Item
                  className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    window.open(`/booking-detail/${item._id}`, "_blank")
                  } // Mở tab mới
                >
                  <div className="flex items-center gap-4 m-2">
                    <Avatar
                      src={item.avatar}
                      size={64}
                      className="rounded-md"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.objectId.hotelName}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.bookingStartDate.slice(0, 10)} -{" "}
                        {item.bookingEndDate.slice(0, 10)}{" "}
                      </p>
                      <p className="text-sm text-green-600">{item.status}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-4 mr-3 font-bold">
                    {item.totalAmount}
                  </div>
                </List.Item>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
