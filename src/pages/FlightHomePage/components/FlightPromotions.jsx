import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { apiGet } from "../../../API/APIService";
import ModalPromotionPage from "./ModalPromotionPage";

function FlightPromotion() {
  const [dataPromotion, setDataPromotion] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [selected, setSelected] = useState({});

  const callApi = async () => {
    try {
      const response = await apiGet("get-promotion/flight");
      setDataPromotion(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (xxx) => {
    setIsModal(true);
    setSelected(xxx);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="w-full mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dataPromotion.map((offer, index) => (
          <div key={index} className={`p-6 rounded-lg border-2 shadow-xl`}>
            <h3 className="text-lg font-semibold mb-2 ">{offer.description}</h3>
            <p className="text-2xl font-bold mb-2 text-[#07689F]">
              {offer.discountValue}{" "}
              {offer.discountType === "fixed" ? "VNĐ" : "%"}
            </p>
            <p className="text-gray-600 mb-4">On Domestic Flights</p>
            <div className="flex items-center justify-between">
              <div className="mr-2 rounded border-2 border-dashed border-[#07689F] p-3 text-[#07689F] font-bold inline-block text-xl">
                {offer.code}
              </div>
              <Button
                shape="circle"
                type="primary"
                style={{ backgroundColor: "#07689F" }}
                icon={<ArrowRightOutlined />}
                onClick={() => openModal(offer)}
              />
            </div>
          </div>
        ))}
      </div>
      {isModal && (
        <ModalPromotionPage openModal={setIsModal} selected={selected} />
      )}
    </div>
  );
}

export default FlightPromotion;
