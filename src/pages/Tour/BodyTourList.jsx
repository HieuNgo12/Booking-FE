import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BodyTourList = () => {
  const [tours, setTours] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('https://booking-be-z8l2.onrender.com/api/v1/get-all-tour')
      .then(response => {
        //console.log("Dữ liệu từ API:", response.data);
        setTours(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Có lỗi xảy ra khi tải danh sách tour:", error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-8">Danh sách các tour</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Kiểm tra trạng thái tải và có dữ liệu hay không */}
        {loading ? (
          <p className="text-center text-lg text-gray-500">Đang tải dữ liệu...</p> // Khi dữ liệu đang tải
        ) : tours.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Không có tour nào!</p> // Khi không có tour nào
        ) : (
          tours.map(tour => (
            <div key={tour._id} className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={tour.imgTour.avatar
              } alt={tour.tourName} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{tour.tourName}</h3>
                <p className="text-gray-600"><strong>Mã tour:</strong> {tour.tourCode}</p>
                <p className="text-gray-600"><strong>Thời gian khởi hành:</strong> {new Date(tour.startDateBooking).toLocaleDateString()}</p>
                <p className="text-gray-600"><strong>Thời gian chuyến đi:</strong> {tour.duration}</p>
                <p className="text-gray-600"><strong>Điểm khởi hành:</strong> {tour.inforLocation.endDestination}</p>
                <p className="text-gray-600"><strong>Phương tiện di chuyển:</strong> {tour.transportationMethod[0]}</p>

                <Link to={`/tour/${tour._id}`} className="inline-block px-6 py-2 bg-custom-blue text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BodyTourList;
