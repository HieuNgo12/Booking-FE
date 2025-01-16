import React, { useEffect, useState } from "react";
import { List, Avatar, Tabs } from "antd"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import { apiGetAll } from "../../API/APIService";
import VNA from "../../img/logo-vna.svg";
import VJ from "../../img/logo-vietjet.svg";
import JS from "../../img/logo-jetstar.svg";
import BAA from "../../img/logo-bamboo-airways.svg";
import ReviewModalPage from "./ReviewModalPage";

const ReviewFlightPage = () => {
  const [dataBooking, setdDataBooking] = useState(null);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(false);

  const callApi = async () => {
    try {
      const response = await apiGetAll(`get-booking-by-userId/flight`);
      setdDataBooking(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const countStar = (xxx) => {
    switch (xxx) {
      case "5":
        return "⭐⭐⭐⭐⭐";
      case "4":
        return "⭐⭐⭐⭐";
      case "3":
        return "⭐⭐⭐";
      case "2":
        return "⭐⭐";
      case "1":
        return "⭐";
      default:
        return "You have not reviewed yet";
    }
  };

  const handleOpenModal = (xxx) => {
    setModal(true);
    setSelected(xxx);
  };

  useEffect(() => {
    callApi();
  }, []);

  const getLogo = (xxx) => {
    switch (xxx) {
      case "Vietnam Airlines":
        return VNA;
      case "VietJet":
        return VJ;
      case "Jetstar Pacific":
        return JS;
      case "Bamboo Airways":
        return BAA;
    }
  };

  return dataBooking ? (
    <div className="bg-white rounded-lg shadow-md">
      <List
        itemLayout="horizontal"
        dataSource={dataBooking}
        pagination={{
          pageSize: 5,
        }}
        renderItem={(item) => (
          <List.Item
            className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg hover:shadow-lg cursor-pointer"
            onClick={() => handleOpenModal(item)}
          >
            <div className="flex items-center gap-4 m-2">
              <Avatar
                src={getLogo(item?.objectId?.airlineName)}
                size={64}
                className="rounded-md"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.objectId.airlineName}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.bookingStartDate.slice(0, 10)} -{" "}
                  {item.bookingEndDate.slice(0, 10)}{" "}
                </p>
                <p className="text-sm text-green-600">{item.status}</p>
              </div>
            </div>
            <div className="text-right flex items-center gap-4 mr-3 font-bold">
              {countStar(item?.reviewId?.rating)}
            </div>
          </List.Item>
        )}
      />
      {modal && (
        <ReviewModalPage isOpenModal={setModal} selectedData={selected} />
      )}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default ReviewFlightPage;
