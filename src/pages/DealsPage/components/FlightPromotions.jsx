import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { apiGet } from "../../../API/APIService";
import ModalPromotionPage from "./ModalPromotionPage";

function FlightPromotion() {
  const [dataPromotion, setDataPromotion] = useState([]);
  const [dataPromotionHotel, setDataPromotionHotel] = useState([]);
  const [dataPromotionTour, setDataPromotionTour] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [selected, setSelected] = useState({});

  const callApi = async () => {
    try {
      const response1 = await apiGet("get-promotion/flight");
      const response2 = await apiGet("get-promotion/hotel");
      const response3 = await apiGet("get-promotion/tour");
      setDataPromotion(response1.data);
      setDataPromotionHotel(response2.data);
      setDataPromotionTour(response3.data);
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
    <div className="w-full mt-10 mb-10 flex flex-col gap-5">
      <h2 className="text-4xl font-bold text-red-500">
        🌸 EasySet 24 open deal to welcome Tet:
      </h2>
      <div>
        <h2 className="text-2xl font-bold mb-6">Flight Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dataPromotion.map((offer, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 shadow-xl`}>
              <h3 className="text-lg font-semibold mb-2 ">
                {offer.description}
              </h3>
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

      <div>
        <h2 className="text-2xl font-bold mb-6">Hotel Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dataPromotionHotel.map((offer, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 shadow-xl`}>
              <h3 className="text-lg font-semibold mb-2 ">
                {offer.description}
              </h3>
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

      <div>
        <h2 className="text-2xl font-bold mb-6">Tour Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dataPromotionTour.map((offer, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 shadow-xl`}>
              <h3 className="text-lg font-semibold mb-2 ">
                {offer.description}
              </h3>
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

      <h2 className="text-2xl font-bold mb-6">Discover Deals</h2>
      <div className="grid grid-cols-3 gap-4">
        <img
          src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/07/1736209747946-d28caefca37b7a4946cf32e1d2251320.jpeg?tr=q-75,w-427"
          alt="Promotion 1"
          className="w-full h-auto rounded-lg shadow-md cursor-pointer"
        />
        <img
          src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/06/1736172823707-54d9872585114c7a069274a4a74a5727.jpeg?tr=q-75,w-427"
          alt="Promotion 2"
          className="w-full h-auto rounded-lg shadow-md cursor-pointer"
        />
        <img
          src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/06/1736182898380-8ed23fc5d6f31d2f71b65caa827e59f1.jpeg?tr=q-75,w-427"
          alt="Promotion 3"
          className="w-full h-auto rounded-lg shadow-md cursor-pointer"
        />
      </div>

      <div className="flex justify-center">
        <Button className="text-[#07689F] font-bold border-[#07689F] p-3">
          See All Deals
          <ArrowRightOutlined />
        </Button>
      </div>

      <img
        src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/07/1736217531258-be5166ef88c64ac8891e0260160f18ab.jpeg?tr=q-75"
        alt=""
        className="mt-6"
      />
    </div>
  );
}

export default FlightPromotion;
