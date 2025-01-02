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

const HeaderFlightPageBody = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const [departureOptions, setDepartureOptions] = useState(suggestions);
  const [destinationOptions, setDestinationOptions] = useState(suggestions);
  const navigate = useNavigate();

  console.log(location);
  const onFinish = (values) => {
    if (location.pathname === "/flight-home-page") {
      navigate("/flight-search-page", {
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
          label={<div className="font-bold text-base">From</div>}
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

        {/* To */}
        <Form.Item
          name="destinationAirport"
          label={<div className="font-bold text-base">To</div>}
          className="flex-1 min-w-[200px]"
          rules={[{ required: true, message: "Please enter To" }]}
        >
          <AutoComplete
            options={destinationOptions}
            onSearch={handleDestinationSearch}
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

        {/* Trip */}
        <Form.Item
          name="trip"
          label={<div className="font-bold text-base">Trip</div>}
          className="w-[100px] rounded-none"
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
          rules={[{ required: true, message: "Please select type!" }]}
        >
          <Select
            className="w-full h-10"
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <Select.Option value="one">One Way</Select.Option>
            <Select.Option value="two">Two Way</Select.Option>
          </Select>
        </Form.Item>

        {/* Flight Class */}
        <Form.Item
          name="classFlight"
          label={<div className="font-bold text-base">Class</div>}
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            width: "110px",
          }}
          rules={[{ required: true, message: "Please select Class!" }]}
        >
          <Select
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              height: "40px",
            }}
            placeholder="Select class"
          >
            <Select.Option value="economy">Economy</Select.Option>
            <Select.Option value="business ">Business</Select.Option>
            <Select.Option value="first">First</Select.Option>
            <Select.Option value="premium ">Premium</Select.Option>
          </Select>
        </Form.Item>

        {/* Departure  */}
        <Form.Item
          name="departureDate"
          label={<div className="font-bold text-base">Departure</div>}
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            width: "120px",
          }}
          rules={[{ required: true, message: "Please select dates!" }]}
        >
          <DatePicker
            className="w-full"
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "4px",
              height: "40px",
            }}
          />
        </Form.Item>

        {/* Return  */}
        <Form.Item
          name="destinationDate"
          label={<div className="font-bold text-base">Return</div>}
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            width: "120px",
          }}
          rules={[{ required: true, message: "Please select dates!" }]}
        >
          <DatePicker
            className="w-full"
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "4px",
              height: "40px",
            }}
          />
        </Form.Item>

        {/* Passengers*/}
        <Form.Item
          name="passengers"
          label={<div className="font-bold text-base">Passengers</div>}
          rules={[{ required: true, message: "Please fill Passengers!" }]}
        >
          <InputNumber
            min={0}
            style={{ width: "120px", height: "40px", padding: "5px" }}
          />
        </Form.Item>

        {/* Children */}
        <Form.Item
          name="children"
          label={<div className="font-bold text-base">Children</div>}
          // rules={[{ required: true, message: "Please fill Children!" }]}
        >
          <InputNumber
            min={0}
            style={{ height: "40px", padding: "5px", width: "100px" }}
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

export default HeaderFlightPageBody;
