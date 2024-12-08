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

  const bookings = [
    { id: "1", name: "Booking 1", date: "2024-12-01" },
    { id: "2", name: "Booking 2", date: "2024-12-02" },
  ];
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="p-3 bg-gray-100 border-black border-2 min-w-[1200px] flex flex-col justify-between mt-6">
          {/* Header */}

          {/* Id Info */}
          <div className="bg-white p-6 shadow rounded-lg flex justify-between mb-6 mt-6">
            <div className="flex gap-6">
              {/* Hotel Image */}
              <img
                src="/log.png"
                alt="Hotel"
                className="w-full h-24 rounded-md object-cover"
              />
            </div>

            <div className="text-right">
              <p className="text-gray-600 text-sm">Xác nhận đặt phòng</p>
              <p className="text-blue-600 font-bold text-lg">
                Mã số xác nhận: 3367.383.821
              </p>
              <p className="text-gray-500 text-sm">Mã PIN: 3395</p>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="bg-white p-6 shadow rounded-lg mb-6 flex justify-between">
            <div className="flex gap-6">
              {/* Hotel Image */}
              <img
                src="https://via.placeholder.com/100x100"
                alt="Hotel"
                className="w-24 h-24 rounded-md object-cover"
              />
              {/* Hotel Details */}
              <div>
                <h2 className="text-xl font-bold">P'House Hotel</h2>
                <p className="text-gray-500 text-sm">
                  Địa chỉ: B3 Nguyễn Gia Tự, Phường Phú Thủy, Phan Thiết, Việt
                  Nam
                </p>
                <p className="text-gray-500 text-sm">
                  Điện thoại: +84 908 853 979
                </p>
                <p className="text-gray-500 text-sm">
                  Tọa độ GPS: N 10° 56.538, E 108° 6.995
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-gray-600 text-sm">Rating</p>
              <p className="text-gray-500 text-sm">Mã PIN: 3395</p>
            </div>
          </div>

          {/* Booking Info */}
          <div className="bg-white p-6 shadow rounded-lg mb-6">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-600 text-sm">NHẬN PHÒNG</p>
                <p className="font-bold text-lg">24 THÁNG 10</p>
                <p className="text-gray-500 text-sm">Thứ 7</p>
                <p className="text-gray-500 text-sm">12:00 - 12:00</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">TRẢ PHÒNG</p>
                <p className="font-bold text-lg">25 THÁNG 10</p>
                <p className="text-gray-500 text-sm">Chủ Nhật</p>
                <p className="text-gray-500 text-sm">12:00 - 12:00</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">CĂN / ĐÊM</p>
                <p className="font-bold text-lg">1 / 1</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">GIÁ</p>
                <p className="font-bold text-xl text-blue-600">VND 311.500</p>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white p-6 shadow rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">GIÁ</h3>
            <p className="text-gray-500 text-sm">
              Giá cuối cùng được hiển thị là số tiền bạn sẽ thanh toán cho chỗ
              nghỉ.
            </p>
            <h3 className="text-lg font-bold mt-6 mb-2">
              Thông tin thanh toán
            </h3>
            <p className="text-gray-500 text-sm">
              P'House Hotel sẽ xử lý tất cả thanh toán.
            </p>
            <h3 className="text-lg font-bold mt-6 mb-2">Thông tin bổ sung</h3>
            <p className="text-gray-500 text-sm">
              Lưu ý: các khoản phí phụ (nếu có) như giường phụ không được tính
              trong giá tổng cộng này.
            </p>
          </div>

          {/* Room Details */}
          <div className="bg-white p-6 shadow rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">
              Phòng Tiêu Chuẩn Giường Đôi
            </h3>
            <p className="text-gray-500 text-sm">
              Tên khách: Điền đầy đủ họ và tên tối đa 2 người.
            </p>
            <p className="text-gray-500 text-sm">
              Kết hợp Bữa ăn: Giá của phòng này không bao gồm bữa ăn nào.
            </p>
            <p className="text-gray-500 text-sm">
              Tiện nghi: Bàn làm việc, Giá treo đồ, Máy điều hòa, và nhiều hơn
              nữa.
            </p>
          </div>

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
      <div className="flex flex-col items-center">
        <div className="p-3 bg-gray-100 border-black border-2 min-w-[1200px] flex flex-col justify-between mt-6">
          {/* Header */}

          {/* Id Info */}
          <div className="bg-white p-6 shadow rounded-lg flex justify-between mb-6 mt-6">
            <div className="flex gap-6">
              {/* Hotel Image */}
              <img
                src="/log.png"
                alt="Hotel"
                className="w-full h-24 rounded-md object-cover"
              />
            </div>

            <div className="text-right">
              <p className="text-gray-600 text-sm">Xác nhận đặt phòng</p>
              <p className="text-blue-600 font-bold text-lg">Mã số xác nhận:</p>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="bg-white p-6 shadow rounded-lg mb-6 flex justify-between">
            <div className="flex gap-6">
              {/* Hotel Image */}
              <img
                src="https://via.placeholder.com/100x100"
                alt="Hotel"
                className="w-24 h-24 rounded-md object-cover"
              />
              {/* Hotel Details */}
              <div>
                <h2 className="text-xl font-bold">P'House Hotel</h2>
                <p className="text-gray-500 text-sm">
                  Địa chỉ: B3 Nguyễn Gia Tự, Phường Phú Thủy, Phan Thiết, Việt
                  Nam
                </p>
                <p className="text-gray-500 text-sm">
                  Điện thoại: +84 908 853 979
                </p>
                <p className="text-gray-500 text-sm">
                  Tọa độ GPS: N 10° 56.538, E 108° 6.995
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-gray-600 text-sm">Rating</p>
              <p className="text-gray-500 text-sm">Mã PIN: 3395</p>
            </div>
          </div>

          {/* Booking Info */}
          <div className="bg-white p-6 shadow rounded-lg mb-6">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-600 text-sm">NHẬN PHÒNG</p>
                <p className="font-bold text-lg">24 THÁNG 10</p>
                <p className="text-gray-500 text-sm">Thứ 7</p>
                <p className="text-gray-500 text-sm">12:00 - 12:00</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">TRẢ PHÒNG</p>
                <p className="font-bold text-lg">25 THÁNG 10</p>
                <p className="text-gray-500 text-sm">Chủ Nhật</p>
                <p className="text-gray-500 text-sm">12:00 - 12:00</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">CĂN / ĐÊM</p>
                <p className="font-bold text-lg">1 / 1</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">GIÁ</p>
                <p className="font-bold text-xl text-blue-600">VND 311.500</p>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white p-6 shadow rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">GIÁ</h3>
            <p className="text-gray-500 text-sm">
              Giá cuối cùng được hiển thị là số tiền bạn sẽ thanh toán cho chỗ
              nghỉ.
            </p>
            <h3 className="text-lg font-bold mt-6 mb-2">
              Thông tin thanh toán
            </h3>
            <p className="text-gray-500 text-sm">
              P'House Hotel sẽ xử lý tất cả thanh toán.
            </p>
            <h3 className="text-lg font-bold mt-6 mb-2">Thông tin bổ sung</h3>
            <p className="text-gray-500 text-sm">
              Lưu ý: các khoản phí phụ (nếu có) như giường phụ không được tính
              trong giá tổng cộng này.
            </p>
          </div>

          {/* Room Details */}
          <div className="bg-white p-6 shadow rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">
              Phòng Tiêu Chuẩn Giường Đôi
            </h3>
            <p className="text-gray-500 text-sm">
              Tên khách: Điền đầy đủ họ và tên tối đa 2 người.
            </p>
            <p className="text-gray-500 text-sm">
              Kết hợp Bữa ăn: Giá của phòng này không bao gồm bữa ăn nào.
            </p>
            <p className="text-gray-500 text-sm">
              Tiện nghi: Bàn làm việc, Giá treo đồ, Máy điều hòa, và nhiều hơn
              nữa.
            </p>
          </div>

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

      <Footer />
    </div>
  );
};

export default DetailBookingPage;
