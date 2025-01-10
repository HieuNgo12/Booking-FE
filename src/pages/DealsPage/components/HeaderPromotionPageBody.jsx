import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const HeaderPromotionPageBody = () => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold text-[#07689F] mb-4">
        Ready to Explore? Exclusive Deals Await You!
      </h1>
      <div className="text-[#07689F] text-lg mb-5">
        Join now to unlock amazing promotions and make your travel dreams come
        true!
      </div>
      <div className="text-[#07689F] text-sm mb-3">
        Register to enter promotion information as soon as possible!
      </div>
      <div className="flex mb-5">
        <Input
          type="email"
          placeholder="Enter your email to get promotions"
          className="mr-2"
          style={{ flex: 1 }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          className="bg-[#07689F] text-white"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default HeaderPromotionPageBody;
