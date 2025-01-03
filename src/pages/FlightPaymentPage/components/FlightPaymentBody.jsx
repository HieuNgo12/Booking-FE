import React, { useEffect, useState } from "react";
import { Input, Button, Checkbox, Select, InputNumber, Form } from "antd";
import {
  PhoneOutlined,
  CreditCardOutlined,
  LockOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import "./FlightPaymentBody.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { apiGet, apiPost } from "../../../API/APIService";
import VNA from "../img/logo-vna.svg";
import VJ from "../img/logo-vietjet.svg";
import JS from "../img/logo-jetstar.svg";
import BAA from "../img/logo-bamboo-airways.svg";
import { useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";

function FlightPaymentBody() {
  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [handleMethod, setHandleMethod] = useState("ZaloPay");

  const { searchData } = useSelector((state) => state?.searchSlice);

  const callApi = async () => {
    try {
      const response = await apiGet(`get-flight-by-id/${params.flightId}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const logoAirPlane = () => {
    if (data?.airlineName === "Bamboo Airways") {
      return BAA;
    } else if (data?.airlineName === "Vietnam Airlines") {
      return VNA;
    } else if (data?.airlineName === "Jetstar Pacific") {
      return JS;
    } else if (data?.airlineName === "VietJet") {
      return VJ;
    }
  };

  const onFinish = async (values) => {
    try {
      console.log(validator.isEmail(values.email));
      if (searchData?.trip === "one") {
        const handleData = {
          ...values,
          objectType: "flight",
          objectId: data?._id,
          totalPersons:
            searchData?.passengers + (Number(searchData?.children) || 0),
          totalAmount: handleTotalAmount(),
          bookingStartDate: data?.departureDate,
          bookingEndDate: data?.departureDate,
        };
        const responseBooking = await apiPost("create-booking", handleData);
        console.log(responseBooking);
        if (responseBooking) {
          console.log(responseBooking.data._id);
          const responsePayment = await apiPost(
            `create-payment-zalo/${responseBooking.data._id}`,
            { amount: handleTotalAmount() }
          );

          if (responsePayment) {
            window.open(responsePayment.data.orderurl, "noopener,noreferrer");
            navigate("/");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePriceAdults = () => {
    const totalPriceAdults = data?.price * searchData?.passengers;
    return totalPriceAdults;
  };

  const handlePriceChildren = () => {
    const childrenCount = Number(searchData?.children) || 0;
    const totalPriceAdults = (data?.price / 2) * childrenCount;
    return totalPriceAdults;
  };

  const handleTotalAmount = () => {
    const total = handlePriceAdults() + handlePriceChildren();
    return total;
  };

  return (
    <div className="flex max-w-[1224px] shadow-lg rounded-lg">
      <div className="w-1/2 mx-auto bg-white  p-6 space-y-6">
        <div className="head-title">Information You need to pay attention.</div>
        <div className="passengers-are-divided">
          Passengers are divided according to age categories .
        </div>
        <div className="please-check-category">Please Check Categories</div>

        <div className="">
          {/* Thông tin Tổng Quan */}
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <div className="text-lg font-semibold text-gray-700">
              Fly Straight
            </div>
            <div className="text-lg font-semibold text-gray-700">
              Flight Duration:{" "}
              <span className="text-[#07689F]">
                {" "}
                {data?.departureDate && data?.destinationDate
                  ? (() => {
                      const diffMs = Math.abs(
                        new Date(data?.destinationDate) -
                          new Date(data?.departureDate)
                      );
                      const hours = Math.floor(diffMs / (1000 * 60 * 60));
                      const minutes = Math.floor(
                        (diffMs % (1000 * 60 * 60)) / (1000 * 60)
                      );

                      return `${hours} hours ${minutes} minutes`;
                    })()
                  : "N/A"}
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 border-b pb-4">
            <div className="flex-1">
              <h3 className="text-md font-bold text-gray-800">
                First Flight No
              </h3>
              <p className="text-sm text-gray-600">
                From:{" "}
                <span className="font-medium"> {data?.departureAirport}</span>
              </p>
              <p className="text-sm text-gray-600">
                To:{" "}
                <span className="font-medium"> {data?.destinationAirport}</span>
              </p>
              <p className="text-sm text-gray-600">
                Flight Code:{" "}
                <span className="font-medium">{data?.flightNumber}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={logoAirPlane()}
                alt="Delta Airlines"
                className="h-20 object-contain"
              />
              <p className="text-gray-700 font-medium text-lg">
                {data?.airlineName}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="head-title">Your Trip Summary</div>
          <div className="text-base">
            Your flight take off from ARN Gate 23A , you Enter through C
            Entrance. In FCO Airport in Rome You will stay 3h &45m then Exit
            through Gate D14 . Final Destination will be SABIHA Airport and You
            can Exit Through L Door .
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="head-card-title">Very Good</div>
          <div className="review ml-6">2259 Reviews</div>
          <div className="flex ml-6">
            <div>
              <img src="/flight-payment-page/leaves-2.png" />
            </div>
            <div className="sustainability-level">Sustainability Level</div>
          </div>
        </div>
      </div>

      <div className="w-1/2 mx-auto bg-white  p-6 space-y-6">
        {/* Header */}
        <h2 className="text-2xl font-bold">Payment Methods And Information</h2>

        {/* Price Details */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Price Details</h3>
          <div className="flex justify-between text-gray-600">
            <div>
              <span className="text-lg font-bold text-red-500">
                $ {handlePriceAdults() ? handlePriceAdults() : ""}
              </span>
              <span className="text-sm font-bold">
                {" "}
                For {searchData?.passengers} Adults{" "}
                {`( This price includes 10% tax )`}
              </span>
            </div>
            <div>
              <span className="text-lg font-bold text-red-500">
                $ {handlePriceChildren()}
              </span>
              <span className="text-sm">
                {searchData?.children ? searchData?.children : "No"} Children
              </span>
            </div>
          </div>
          <div className="flex justify-between border-t pt-2 font-bold text-lg">
            <span>Total (USD)</span>
            <span className="text-green-600">$ {handleTotalAmount()}</span>
          </div>
        </div>

        {/* Booking Options */}
        <div className="flex items-center space-x-2">
          <Checkbox />
          <span className="font-bold text-lg">Booking For Work</span>
        </div>

        {/* Payment Details */}

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="grid grid-cols-1 md:grid-cols-3 gap-2"
        >
          {/* First Name */}
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}
            className="col-span-1"
          >
            <Input placeholder="First Name" className="h-10 rounded-none" />
          </Form.Item>

          {/* Last Name */}
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
            className="col-span-1"
          >
            <Input placeholder="Last Name" className="h-10 rounded-none" />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
            className="col-span-1"
          >
            <PhoneInput
              country={"vn"}
              placeholder="phone number"
              inputStyle={{
                height: "40px",
                borderRadius: "0px",
                border: "1px solid #ccc",
                width: "100%",
              }}
              buttonStyle={{
                borderRadius: "0px",
              }}
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
            className="col-span-2"
          >
            <Input placeholder="Last Name" className="h-10 rounded-none" />
          </Form.Item>

          {/* Payment Method */}
          <Form.Item
            name="paymentMethod"
            label="Payment Method"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please enter the expiration date!",
            //   },
            // ]}
            className="h-10 col-span-1"
          >
            <Select
              defaultValue="ZaloPay"
              className="h-10 w-32 border-2 border-gray-200 rounded-none focus:ring-0 focus:outline-none !important"
              bordered={false}
              style={{
                borderRadius: "0px",
                height: "40px",
                width: "100%",
              }}
              onChange={(value) => setHandleMethod(value)}
            >
              <Select.Option value="ZaloPay">ZaloPay</Select.Option>
              <Select.Option value="PayPal">PayPal</Select.Option>
              <Select.Option value="CreditCard">Credit Card</Select.Option>
            </Select>
          </Form.Item>

          {/* Card Number */}
          <Form.Item
            name="cardNumber"
            label="Card Number *"
            rules={[
              {
                required: handleMethod === "ZaloPay" ? false : true,
                message: "Please enter your card number!",
              },
            ]}
            className="md:col-span-2"
          >
            <Input
              placeholder="Card Number"
              className="h-10 rounded-none"
              prefix={<CreditCardOutlined />}
              disabled={handleMethod === "ZaloPay" ? true : false}
            />
          </Form.Item>

          {/* CVC */}
          <Form.Item
            name="cvc"
            label="CVC"
            rules={[
              {
                required: handleMethod === "ZaloPay" ? false : true,
                message: "Please enter your CVC!",
              },
            ]}
            className="col-span-1"
          >
            <Input
              placeholder="CVC"
              className="h-10 rounded-none"
              prefix={<LockOutlined />}
              disabled={handleMethod === "ZaloPay" ? true : false}
            />
          </Form.Item>

          {/* EXP Date */}
          <Form.Item
            name="expDate"
            label="EXP Date"
            rules={[
              {
                required: handleMethod === "ZaloPay" ? false : true,
                message: "Please enter the expiration date!",
              },
            ]}
            className="col-span-1"
          >
            <Input
              placeholder="MM/YY"
              className="h-10 rounded-none"
              prefix={<CalendarOutlined />}
              disabled={handleMethod === "ZaloPay" ? true : false}
            />
          </Form.Item>

          <div className="col-span-3">
            <h3 className="text-xl font-bold">Cancellation Policy</h3>
            <p className="text-gray-600 text-sm">
              Get A Full Refund If You Cancel By Jun 23 (PDT).{" "}
              <a href="#" className="text-[#07689F] hover:underline">
                Read More...
              </a>
            </p>
          </div>

          <Form.Item className="col-span-3">
            <div className="flex gap-4">
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                className="font-bold bg-[#07689F] w-1/2"
              >
                Confirm And Pay
              </Button>
              <Button
                size="large"
                className="font-bold text-[#07689F] border-[#07689F] w-1/2"
                onClick={() => navigate("/flight-confirm-page")}
              >
                Save If You Like It
              </Button>
            </div>

            <div className="flex justify-around gap-4">
              <div className="text-gray-400 text-xs text-center">
                Check your information before submitting.
              </div>
              <div className="text-gray-400 text-xs text-center">
                Save your flight info, find it through Shortcut.
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FlightPaymentBody;
