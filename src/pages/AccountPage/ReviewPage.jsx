import React, { useEffect, useState } from "react";
import { List, Avatar, Tabs } from "antd"; // Import useNavigate
import "react-phone-input-2/lib/style.css";
import ReviewFlightPage from "./ReviewFlightPage";
import ReviewHotelPage from "./ReviewHotelPage";
import ReviewTourPage from "./ReviewTourPage";

const ReviewPage = ({ dataUser }) => {
  const nameHearder = [
    {
      name: "Hotel",
      component: <ReviewHotelPage />,
    },
    {
      name: "Flight",
      component: <ReviewFlightPage />,
    },
    {
      name: "Tour",
      component: <ReviewTourPage />,
    },
  ];

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Reviews</h2>
        </div>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Please rate and review your recent trips to receive discount codes and
          vouchers from EasySet24
        </p>
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

export default ReviewPage;
