import React from "react";

const TourBooking = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className=" text-black py-4">
        <div className="container mx-auto text-center text-xl font-bold">
          Booking Confirmation
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Booking Details */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">TÓM TẮT CHUYẾN ĐI</h2>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <strong>Diểm Đến:</strong> Đà Nẵng
            </p>
            <p>
              <strong>Ngày Xuất Phát </strong> Wed Dec 13 2025
            </p>
            <p>
              <strong>Ngày kết Thúc</strong> Sat Dec 16 2025
            </p>
            <p>
              <strong>Thời Gian Tour</strong> 4 Ngày, 5 Đêm
            </p>
            <p>
              <strong>Số Lượng Vé</strong> 2 adults & 0 children
            </p>
          </div>
        </section>

        {/* Confirmation Details */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">XÁC NHẬN THÔNG TIN CỦA BẠN</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e2e_test_firstName"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e2e_test_lastName"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="1@1.com"
              />
            </div>

            <div>
              <h3 className="text-md font-medium mt-4">TỔNG TIỀN</h3>
              <p className="bg-blue-100 text-blue-700 p-3 rounded-md mt-2">
                <strong>Tổng Tiền</strong> 10.750.000 đ <br />
               
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card number
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="MM / YY CVC"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Xác Nhận Đặt Tour
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default TourBooking;
