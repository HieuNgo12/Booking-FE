import React, { useEffect, useState } from "react";
import {
  Modal,
  Input,
  Select,
  Form,
  InputNumber,
  Upload,
  Image,
  Button,
} from "antd";

const ModalPromotionPage = ({ openModal, selected }) => {
  const handleCancel = () => {
    openModal(false);
  };
  return (
    <Modal
      open={true}
      onCancel={handleCancel}
      width={600}
      bodyStyle={{ maxHeight: "60vh", overflowY: "auto" }}
      footer={null}
    >
      <div className="p-6 m-3 rounded-lg border-2 shadow-xl flex flex-col md:flex-row gap-6 items-center">
        {/* Nội dung bên trái */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{selected.description}</h3>
          <p className="text-2xl font-bold mb-2 text-[#07689F]">
            {selected.discountValue}{" "}
            {selected.discountType === "fixed" ? "VNĐ" : "%"}
          </p>
          <p className="text-gray-600 mb-4">On Domestic Flights</p>

          <div className="mr-2 rounded border-2 border-dashed border-[#07689F] p-3 text-[#07689F] font-bold inline-block text-2xl">
            {selected.code}
          </div>

          <div className="mt-5 text-sm text-gray-500">
            {selected?.startDate?.slice(0, 10)} -{" "}
            {selected?.endDate?.slice(0, 10)}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src={selected?.imgPromotion}
            alt="Promotion"
            className="max-w-full max-h-50 rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalPromotionPage;
