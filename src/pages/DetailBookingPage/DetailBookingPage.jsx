import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
const DetailBookingPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [dataBooking, setdDataBooking] = useState(null);
  console.log(dataBooking);

  const callApi = async () => {
    try {
      let req1 = await fetch(
        `${import.meta.env.VITE_URL_API}/get-booking/${params.bookingId}`,
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
            `${import.meta.env.VITE_URL_API}/get-booking/${params.bookingId}`,
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

  useEffect(() => {
    callApi();
  }, []);

  const getDayOfWeek = (dateString) => {
    const days = [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ];
    const date = new Date(dateString); // Chuyển chuỗi ngày thành Date
    return days[date.getDay()]; // Trả về tên ngày trong tuần
  };

  const countDate = () => {
    const startDate = new Date(dataBooking.bookingStartDate); // Chuyển thành đối tượng Date
    const endDate = new Date(dataBooking.bookingEndDate); // Chuyển thành đối tượng Date
    const count = (endDate - startDate) / (1000 * 60 * 60 * 24); // Tính số ngày
    return count;
  };

  return (
    <div>
      <Navbar />
      {dataBooking ? (
        <div className="flex flex-col items-center">
          <div className="p-3 bg-gray-100 border-black min-w-[1200px] flex flex-col justify-between mt-6">
            {/* Header */}

            {/* Id Info */}
            <div className="bg-white p-6 shadow rounded-lg flex justify-between mb-6 mt-6">
              <div className="flex gap-6">
                <img
                  src="/log.png"
                  alt="Hotel"
                  className="w-full h-24 rounded-md object-cover"
                />
              </div>

              <div className="text-right">
                <p className="text-gray-600 text-sm font-bold">
                  Booking confirmation
                </p>
                <div className="text-gray-500 text-sm">
                  Confirmation code :
                  <span className="text-blue-600 font-bold text-lg">
                    {" "}
                    {dataBooking._id}
                  </span>
                </div>
                <div className="text-gray-500 text-sm">
                  PIN code:{" "}
                  <span className="text-blue-600 font-bold text-lg">
                    {dataBooking.pin}
                  </span>
                </div>
              </div>
            </div>

            {/* Hotel Info */}
            <div className="bg-white p-6 shadow rounded-lg mb-6 flex justify-between">
              <div className="flex gap-6">
                {/* Hotel Image */}
                <img
                  src={dataBooking.objectId.imgHotel}
                  alt="Hotel"
                  className="w-24 h-24 rounded-md object-cover"
                />
                {/* Hotel Details */}
                <div>
                  <h2 className="text-xl font-bold">
                    {dataBooking.objectId.hotelName}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Address: {dataBooking.objectId.address.street} Street ,{" "}
                    {dataBooking.objectId.address.ward} Ward ,{" "}
                    {dataBooking.objectId.address.district} District ,{" "}
                    {dataBooking.objectId.address.city} City ,{" "}
                    {dataBooking.objectId.address.country}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Phone Number: +{dataBooking.objectId.phone}
                  </p>
                  <p className="text-gray-500 text-sm">
                    GPS: N 10° 56.538, E 108° 6.995
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-white p-6 shadow rounded-lg mb-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-bold">
                    CHECK IN DATE
                  </p>
                  <p className="font-bold text-lg">
                    {dataBooking.bookingStartDate.slice(0, 10)}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {getDayOfWeek(dataBooking.bookingStartDate)}
                  </p>
                  <p className="text-gray-500 text-sm">12:00 - 12:00</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-bold">
                    CHECK OUT DATE
                  </p>
                  <p className="font-bold text-lg">
                    {dataBooking.bookingEndDate.slice(0, 10)}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {getDayOfWeek(dataBooking.bookingEndDate)}
                  </p>
                  <p className="text-gray-500 text-sm">12:00 - 12:00</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-bold">CĂN / ĐÊM</p>
                  <p className="font-bold text-lg">
                    {dataBooking?.bookedRoomId.length} /{" "}
                    {Math.round(countDate())}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-bold">PRICE</p>
                  <p className="font-bold text-xl text-blue-600">
                    {dataBooking?.userId?.currency === "usd" && "USD"}{" "}
                    {dataBooking.totalAmount}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white p-6 shadow rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-2">Price</h3>
              <p className="text-gray-500 text-sm">
                - Giá cuối cùng được hiển thị là số tiền bạn sẽ thanh toán cho
                chỗ nghỉ.
              </p>
              <p className="text-gray-500 text-sm">
                - Booking.com không thu phí khách cho bất kỳ đặt phòng, phí hành
                chính hay bất kỳ chi phí nào khác.
              </p>
              <p className="text-gray-500 text-sm">
                - Đơn vị phát hành thẻ của bạn có thể tính phí giao dịch ngoại
                hối
              </p>
              <h3 className="text-lg font-bold mt-6 mb-2">
                Thông tin thanh toán
              </h3>
              <p className="text-gray-500 text-sm">
                - {dataBooking.objectId.hotelName} sẽ xử lý tất cả thanh toán.
              </p>
              <h3 className="text-lg font-bold mt-6 mb-2">Thông tin bổ sung</h3>
              <p className="text-gray-500 text-sm">
                -{" "}
                <span className="text-gray-600 text-sm font-bold">Lưu ý :</span>{" "}
                các khoản phí phụ (nếu có) như giường phụ không được tính trong
                giá tổng cộng này.
              </p>
            </div>

            {/* Room Details */}
            {dataBooking?.bookedRoomId?.map((item, index) => {
              return (
                <div
                  className="bg-white p-6 shadow rounded-lg mb-6"
                  key={index}
                >
                  <h3 className="text-lg font-bold mb-4">{item.roomName}</h3>
                  <p className="text-gray-500 text-sm">
                    <span className="text-gray-600 text-sm font-bold">
                      Customer Name :
                    </span>{" "}
                    {dataBooking.userId.firstName} {dataBooking.userId.lastName}
                  </p>
                  <p className="text-gray-500 text-sm">
                    <span className="text-gray-600 text-sm font-bold">
                      Services :
                    </span>{" "}
                    {dataBooking?.services}
                  </p>
                  <p className="text-gray-500 text-sm">
                    <span className="text-gray-600 text-sm font-bold">
                      Amenities :
                    </span>{" "}
                    {item.amenities.map((item2, index2) => {
                      return <span key={index2}>{item2} , </span>;
                    })}
                  </p>
                </div>
              );
            })}

            {/* Map */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-bold mb-4">Vị trí</h3>
              <div className="w-full h-64">
                <iframe
                  src="https://maps.google.com/maps?q=10.942339,108.11653&z=15&output=embed"
                  className="w-full h-full rounded-lg border"
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DetailBookingPage;
