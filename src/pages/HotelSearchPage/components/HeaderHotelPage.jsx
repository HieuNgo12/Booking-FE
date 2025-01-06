import React, { useState } from "react";
import {
  Input,
  Button,
  DatePicker,
  Select,
  Form,
  AutoComplete,
  InputNumber,
} from "antd";
import { SendOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

const suggestions = [
  { value: "Da Nang International Airport" },
  { value: "Cam Ranh International Airport" },
  { value: "Noi Bai International Airport" },
  { value: "Tan Son Nhat International Airport" },
  { value: "Phu Bai International Airport" },
  { value: "Can Tho International Airport" },
];

const HeaderHotelPage = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const [departureOptions, setDepartureOptions] = useState(suggestions);
  const [destinationOptions, setDestinationOptions] = useState(suggestions);
  const navigate = useNavigate();

  console.log(location);
  const onFinish = (values) => {
    alert("hello world")
    if (location.pathname === "/flight-home-page") {
      navigate("/hotel-search", {
        state: { findFlight: values },
      });
    }
    console.log("Form Values:", values);
  };

  const handleDepartureSearch = (value) => {
    setDepartureOptions(
      suggestions.filter((item) =>
        item.value.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleDestinationSearch = (value) => {
    setDestinationOptions(
      suggestions.filter((item) =>
        item.value.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold text-[#07689F] mb-4">
        Which Exciting Place Is Your Next Adventure Taking You?
      </h1>
      <div className="text-[#07689F] text-lg mb-10">
        Discover exclusive Genius rewards wherever your journey takes you!
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="flex flex-wrap md:flex-nowrap items-end justify-center"
      >
        {/* From */}
        <Form.Item
          name="departureAirport"
          label={<div className="font-bold text-base">Place</div>}
          className="flex-1 min-w-[200px]"
          rules={[{ required: true, message: "Please enter From" }]}
        >
          <AutoComplete
            options={departureOptions}
            onSearch={handleDepartureSearch}
            placeholder="Type your destination"
            prefix={
              <FontAwesomeIcon
                icon={faPlane}
                style={{
                  fontSize: "24px",
                  color: "#07689F",
                  marginRight: "7px",
                }}
              />
            }
            className=" h-10"
          />
        </Form.Item>



        {/* Search Button */}
        <Form.Item className="flex items-end">
          <Button
            type="primary"
            htmlType="submit"
            className="h-[40px] w-[80px] bg-[#07689F] "
    
          >
            Find
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HeaderHotelPage;
