// src/contexts/TourSearchContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Tạo context
const TourSearchContext = createContext();

// Tạo provider cho context
export const TourSearchContextProvider = ({ children }) => {
  // Khởi tạo các giá trị từ sessionStorage nếu có
  const [endDestination, setEndDestination] = useState(sessionStorage.getItem('endDestination') || '');
  const [startDateBooking, setStartDateBooking] = useState(
    sessionStorage.getItem('startDateBooking') ? new Date(sessionStorage.getItem('startDateBooking')) : new Date()
  );
  const [budget, setBudget] = useState(sessionStorage.getItem('budget') || '');

  // Hàm lưu dữ liệu vào context và sessionStorage
  const saveSearchValues = (endDestination, startDateBooking, budget) => {
    setEndDestination(endDestination);
    setStartDateBooking(startDateBooking);
    setBudget(budget);

    // Lưu vào sessionStorage
    sessionStorage.setItem('endDestination', endDestination);
    sessionStorage.setItem('startDateBooking', startDateBooking.toISOString()); // Lưu startDate dưới dạng chuỗi ISO
    sessionStorage.setItem('budget', budget);
  };

  // Hook này sẽ giúp cập nhật context khi sessionStorage thay đổi
  useEffect(() => {
    // Lấy dữ liệu từ sessionStorage khi ứng dụng khởi động lại
    const storedEndDestination = sessionStorage.getItem('endDestination');
    const storedStartDateBooking = sessionStorage.getItem('startDateBooking');
    const storedBudget = sessionStorage.getItem('budget');

    if (storedEndDestination) setEndDestination(storedEndDestination);
    if (storedStartDateBooking) setStartDateBooking(new Date(storedStartDateBooking));
    if (storedBudget) setBudget(storedBudget);
  }, []);

  return (
    <TourSearchContext.Provider value={{ endDestination, startDateBooking, budget, saveSearchValues }}>
      {children}
    </TourSearchContext.Provider>
  );
};

// Hook để sử dụng context
export const useTourSearchContext = () => useContext(TourSearchContext);
