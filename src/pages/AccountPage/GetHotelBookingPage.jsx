import React, { useEffect, useState } from "react";
import { List, Avatar, Tabs } from "antd"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import { apiGetAll, apiPost } from "../../API/APIService";

const GetHotelBookingPage = () => {
  const [dataBooking, setdDataBooking] = useState(null);

  const callApi = async () => {
    try {
      const response = await apiGetAll(`get-booking-by-userId/hotel`);
      setdDataBooking(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return dataBooking ? (
    <div className="bg-white rounded-lg shadow-md">
      <List
        itemLayout="horizontal"
        dataSource={dataBooking}
        pagination={{
          pageSize: 5,
        }}
        // style={{zIndex : 10}}
        renderItem={(item) => (
          <List.Item
            className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg hover:shadow-lg cursor-pointer"
            onClick={() =>
              window.open(`/booking-hotel-detail/${item._id}`, "_blank")
            } // Mở tab mới
          >
            <div className="flex items-center gap-4 m-2">
              <Avatar
                src={item?.objectId?.imgHotel?.avatar}
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
              {item.userId.currency === "usd" && "USD"} {item.totalAmount}
            </div>
          </List.Item>
        )}
      />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default GetHotelBookingPage;
