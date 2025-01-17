import React, { useEffect, useState } from "react";
import { Input, Button, Checkbox, Select, InputNumber, Form } from "antd";
import {
  PhoneOutlined,
  GiftOutlined,
  CreditCardOutlined,
  LockOutlined,
  CalendarOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./FlightPaymentBody.css";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { apiGet, apiGetAll, apiPost } from "../../../API/APIService";
import VNA from "../img/logo-vna.svg";
import VJ from "../img/logo-vietjet.svg";
import JS from "../img/logo-jetstar.svg";
import BAA from "../img/logo-bamboo-airways.svg";
import { useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaypal, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import zaloPayLogo from "../img/zalo-pay-logo-inkythuatso.svg";
import VNPayLogo from "../img/vnpay-logo-inkythuatso.svg";
import momoLogo from "../img/logo-momo.svg.svg";

function FlightPaymentBody() {
  const [form] = Form.useForm();
  const [searchParams] = useSearchParams();
  const flightId = searchParams.get("flightId");
  const flightReturnId = searchParams.get("flightreturnId");
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [dataReturn, setDataReturn] = useState({});
  const [type, setType] = useState({});
  const [typeReturn, setTypeReturn] = useState({});
  const [handleMethod, setHandleMethod] = useState("ZaloPay" || "VNPay");
  const [expiryDate, setExpiryDate] = useState("");
  const [terms, setTerms] = useState(false);
  const [code, setCode] = useState("");
  const [promotion, setPromotion] = useState("");
  const [dataLocal, setDataLocal] = useState("");

  const { searchData } = useSelector((state) => state?.searchSlice);

  const compareLocalAndData = () => {
    const getLocalSS = localStorage.getItem("fav");
    const loop = JSON.parse(getLocalSS).find(
      (item) => item.searchData.productId === data._id
    );
    setDataLocal(loop);
    console.log(loop);
  };

  useEffect(() => {
    compareLocalAndData();
  }, []);

  const callApi = async () => {
    try {
      const response = await apiGet(`get-flight-by-id/${flightId}`);
      setData(response.data);
      if (flightReturnId) {
        const responseReturn = await apiGet(
          `get-flight-by-id/${flightReturnId}`
        );
        setDataReturn(responseReturn.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    if (searchData && data?.classFlight) {
      setType(getPrice());
    }
  });

  useEffect(() => {
    if (searchData && dataReturn?.classFlight) {
      setTypeReturn(getPriceReturn());
    }
  });

  const getPrice = () => {
    const price = data?.classFlight?.find(
      (item) =>
        item.type === searchData?.classFlight ||
        dataLocal?.searchData?.classFlight
    );
    return price ? price : "No type";
  };

  const getPriceReturn = () => {
    const price = dataReturn?.classFlight?.find(
      (item) => item.type === searchData?.classFlight
    );
    return price ? price : "No type";
  };

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
      if (terms === false) {
        return toast.warn("You must agree to the terms before booking!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      if (!validator.isEmail(values.email)) {
        return toast.warn("Email is not valid! Please check again!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

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

      if (responseBooking && values.paymentMethod === "ZaloPay") {
        const responsePayment = await apiPost(
          `create-payment-zalo/${responseBooking.data._id}`,
          { paymentMethod: values.paymentMethod }
        );

        if (responsePayment) {
          window.open(responsePayment.data.orderurl, "noopener,noreferrer");
          navigate("/");
        }
      } else if (responseBooking && values.paymentMethod === "VNPay") {
        const responsePayment = await apiPost(
          `create-payment-vnpay/${responseBooking.data._id}`,
          { paymentMethod: values.paymentMethod }
        );

        if (responsePayment) {
          window.open(responsePayment.data, "noopener,noreferrer");
          navigate("/");
        }
      } else if (responseBooking && values.paymentMethod === "Momo") {
        console.log("Momo");
        const responsePayment = await apiPost(
          `create-payment-momo/${responseBooking.data._id}`,
          { paymentMethod: values.paymentMethod }
        );

        if (responsePayment) {
          window.open(responsePayment.data, "noopener,noreferrer");
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckPromotion = async () => {
    setPromotion({});
    try {
      if (code) {
        const response = await apiGetAll(`check-code/flight/${code}`);

        if (response.data) {
          const promotion = response.data;

          if (promotion.status === "inactive") {
            toast.warn("This promotion is currently inactive!", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
            });
          } else {
            setPromotion(promotion);
            toast.success("Promotion applied successfully!", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
            });
          }
        } else {
          toast.warn("Unexpected server response!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.warn(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handlePriceAdults = () => {
    if (Object.keys(typeReturn).length === 0) {
      const totalPriceAdults =
        Object.keys(searchData).length !== 0
          ? type?.price * searchData?.passengers
          : type?.price * dataLocal?.searchData?.passengers;
      return totalPriceAdults;
    }

    const totalPriceAdults =
      type?.price * searchData?.passengers +
      typeReturn?.price * searchData?.passengers;
    return totalPriceAdults;
  };

  const handlePriceChildren = () => {
    if (Object.keys(typeReturn).length === 0) {
      if (Object.keys(searchData).length !== 0) {
        const childrenCount = Number(searchData?.children) || 0;
        const totalPriceAdults = (type?.price / 2) * childrenCount;
        return totalPriceAdults;
      } else {
        const childrenCount = Number(dataLocal?.searchData?.children) || 0;
        const totalPriceAdults = (type?.price / 2) * childrenCount;
        return totalPriceAdults;
      }
    }

    const childrenCount = Number(searchData?.children) || 0;
    const totalPriceAdults =
      (type?.price / 2) * childrenCount +
      (typeReturn?.price / 2) * childrenCount;
    return totalPriceAdults;
  };

  const handleTotalAmount = () => {
    if (promotion && Object.keys(promotion).length !== 0) {
      if (promotion.discountType === "fixed") {
        const total =
          handlePriceAdults() +
          handlePriceChildren() -
          promotion?.discountValue;
        return total;
      } else if (promotion.discountType === "percentage") {
        const total =
          ((handlePriceAdults() + handlePriceChildren()) *
            (100 - promotion?.discountValue)) /
          100;
        return total;
      }
    } else {
      const total = handlePriceAdults() + handlePriceChildren();
      return total;
    }
  };

  const handlePriceBefore = () => {
    const total = handlePriceAdults() + handlePriceChildren();
    return total;
  };

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    setExpiryDate(value);
    form.setFieldsValue({ expDate: value });
  };

  return (
    <div className="flex max-w-[1224px] shadow-lg rounded-lg mb-5">
      <div className="w-1/2 mx-auto bg-white  p-6 space-y-6">
        <div className="head-title">Information You need to pay attention.</div>
        <div className="passengers-are-divided">
          Passengers are divided according to age categories .
        </div>
        <div className="please-check-category">Please Check Categories</div>

        <div className="flex flex-col gap-5">
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
              <p className="text-sm text-gray-600">
                Flight Class: <span className="font-medium">{type?.type}</span>
              </p>
              <p className="text-sm text-gray-600">
                Date:{" "}
                <span className="font-medium">
                  {data?.destinationDate?.slice(0, 10)}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Time:{" "}
                <span className="font-medium">
                  {data?.destinationDate?.slice(11, 19)}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Price: <span className="font-medium">{type?.price}</span> VND
              </p>
              <p className="text-sm text-gray-600">
                Adults:{" "}
                <span className="font-medium">
                  {" "}
                  {Object.keys(searchData).length !== 0
                    ? searchData?.passengers
                    : dataLocal?.searchData?.passengers}
                </span>{" "}
              </p>
              <p className="text-sm text-gray-600">
                Children:{" "}
                <span className="font-medium">
                  {" "}
                  {searchData?.children
                    ? `For ${searchData?.children} Children`
                    : "No Children"}{" "}
                </span>{" "}
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

          {flightReturnId && (
            <div className="flex flex-col md:flex-row items-center gap-4 border-b pb-4">
              <div className="flex-1">
                <h3 className="text-md font-bold text-gray-800">
                  Return Flight No
                </h3>
                <p className="text-sm text-gray-600">
                  From:{" "}
                  <span className="font-medium">
                    {" "}
                    {dataReturn?.departureAirport}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  To:{" "}
                  <span className="font-medium">
                    {" "}
                    {dataReturn?.destinationAirport}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Flight Code:{" "}
                  <span className="font-medium">
                    {dataReturn?.flightNumber}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Flight Class:{" "}
                  <span className="font-medium">{type?.type}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Date:{" "}
                  <span className="font-medium">
                    {dataReturn?.destinationDate?.slice(0, 10)}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Time:{" "}
                  <span className="font-medium">
                    {dataReturn?.destinationDate?.slice(11, 19)}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Price:{" "}
                  <span className="font-medium">{typeReturn?.price}</span> VND
                </p>
                <p className="text-sm text-gray-600">
                  Adults:{" "}
                  <span className="font-medium"> {searchData?.passengers}</span>{" "}
                </p>
                <p className="text-sm text-gray-600">
                  Children:{" "}
                  <span className="font-medium">
                    {" "}
                    {searchData?.children
                      ? `For ${searchData?.children} Children`
                      : "No Children"}{" "}
                  </span>{" "}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={logoAirPlane()}
                  alt="Delta Airlines"
                  className="h-20 object-contain"
                />
                <p className="text-gray-700 font-medium text-lg">
                  {dataReturn?.airlineName}
                </p>
              </div>
            </div>
          )}
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
            <span className="text-red-500 font-bold text-sm">Price :</span>
            <span className="text-lg font-bold">{handlePriceBefore()}</span>
          </div>

          <div className="flex justify-between border-t pt-2 font-bold text-sm">
            <span className="text-red-500">Promotion Type :</span>
            <span>
              {Object.keys(promotion).length !== 0
                ? promotion?.discountType === "fixed"
                  ? "fixed"
                  : "percentage"
                : "NO"}
            </span>
          </div>
          <div className="flex justify-between  font-bold text-sm">
            <span className="text-red-500">Discount :</span>
            <span>
              {Object.keys(promotion).length !== 0
                ? promotion?.discountType === "fixed"
                  ? `${promotion?.discountValue} VND`
                  : `${promotion?.discountValue} %`
                : "0"}
            </span>
          </div>
          <div className="flex justify-between border-t pt-2 font-bold text-lg">
            <span className="text-red-500">Total</span>
            <span className=" text-red-500">VND {handleTotalAmount()}</span>
          </div>
        </div>

        {/* Payment Details */}
        <Form
          form={form}
          initialValues={{
            paymentMethod: "ZaloPay",
          }}
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
              <Select.Option value="ZaloPay">
                <div className="flex items-center gap-3 px-2 py-1">
                  <img
                    src={zaloPayLogo}
                    alt="ZaloPay Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <div className="w-px h-6 bg-gray-200"></div>
                  <span className="text-sm font-medium text-gray-700">
                    ZaloPay
                  </span>
                </div>
              </Select.Option>

              <Select.Option value="VNPay">
                <div className="flex items-center gap-3 px-2 py-1">
                  <img
                    src={VNPayLogo}
                    alt="VNPay Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <div className="w-px h-6 bg-gray-200"></div>
                  <span className="text-sm font-medium text-gray-700">
                    VNPay
                  </span>
                </div>
              </Select.Option>

              <Select.Option value="Momo">
                <div className="flex items-center gap-3 px-2 py-1">
                  <img
                    src={momoLogo}
                    alt="VNPay Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <div className="w-px h-6 bg-gray-200"></div>
                  <span className="text-sm font-medium text-gray-700">
                    VNPay
                  </span>
                </div>
              </Select.Option>

              <Select.Option value="PayPal">
                <div className="flex items-center gap-3 px-2 py-1">
                  <FaPaypal className="w-8 h-8 object-contain" />
                  <div className="w-px h-6 bg-gray-200"></div>
                  <span className="text-sm font-medium text-gray-700">
                    PayPal
                  </span>
                </div>
              </Select.Option>
              <Select.Option value="CreditCard">
                <div className="flex items-center gap-3 px-2 py-1">
                  <CreditCardOutlined className="w-8 h-8 object-contain" />
                  <div className="w-px h-6 bg-gray-200"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Credit Card
                  </span>
                </div>
              </Select.Option>
            </Select>
          </Form.Item>

          {/* Card Number */}
          <Form.Item
            name="cardNumber"
            label="Card Number *"
            rules={[
              {
                required:
                  handleMethod === "ZaloPay" ||
                  handleMethod === "VNPay" ||
                  handleMethod === "Momo"
                    ? false
                    : true,
                message: "Please enter your card number!",
              },
            ]}
            className="md:col-span-2"
          >
            <Input
              placeholder="Card Number"
              className="h-10 rounded-none"
              prefix={<CreditCardOutlined />}
              disabled={
                handleMethod === "ZaloPay" ||
                handleMethod === "VNPay" ||
                handleMethod === "Momo"
                  ? true
                  : false
              }
            />
          </Form.Item>

          {/* CVC */}
          <Form.Item
            name="cvc"
            label="CVC"
            rules={[
              {
                required:
                  handleMethod === "ZaloPay" ||
                  handleMethod === "VNPay" ||
                  handleMethod === "Momo"
                    ? false
                    : true,
                message: "Please enter your CVC!",
              },
            ]}
            className="col-span-1"
          >
            <Input
              placeholder="CVC"
              className="h-10 rounded-none"
              prefix={<LockOutlined />}
              disabled={
                handleMethod === "ZaloPay" ||
                handleMethod === "VNPay" ||
                handleMethod === "Momo"
                  ? true
                  : false
              }
            />
          </Form.Item>

          {/* EXP Date */}
          <Form.Item
            label="Exp Date (MM/YY)"
            name="expDate"
            rules={[
              {
                required:
                  handleMethod === "ZaloPay" ||
                  handleMethod === "VNPay" ||
                  handleMethod === "Momo"
                    ? false
                    : true,
                message:
                  handleMethod === "ZaloPay" || "VNPay"
                    ? false
                    : "Please enter the expiry date!",
              },
              {
                pattern:
                  handleMethod === "ZaloPay" ||
                  handleMethod === "VNPay" ||
                  handleMethod === "Momo"
                    ? false
                    : /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                message:
                  handleMethod === "ZaloPay" ||
                  handleMethod === "VNPay" ||
                  handleMethod === "Momo"
                    ? false
                    : "Please enter a valid expiry date in MM/YY format!",
              },
            ]}
            className="col-span-1"
          >
            <Input
              value={expiryDate}
              onChange={handleInputChange}
              maxLength={5} // Giới hạn độ dài tối đa (MM/YY)
              placeholder="MM/YY"
              disabled={
                handleMethod === "ZaloPay" ||
                handleMethod === "VNPay" ||
                handleMethod === "Momo"
                  ? true
                  : false
              }
              className="h-10 rounded-none"
              prefix={<CalendarOutlined />}
            />
          </Form.Item>

          {/* Promotion */}
          <Form.Item name="code" label="Promotion" className="col-span-1">
            <Input
              placeholder="Promotion"
              className="h-10 rounded-none"
              prefix={<GiftOutlined />}
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="checkPromotion"
            label="Check and Apply"
            className="col-span-1"
          >
            <Button
              onClick={handleCheckPromotion}
              size="large"
              className="font-bold text-[#07689F] border-[#07689F] w-full"
            >
              Check and Apply
            </Button>
          </Form.Item>

          <div className="col-span-3">
            <h3 className="text-xl font-bold">Cancellation Policy</h3>
            <p className="text-gray-600 text-sm">
              Get A Full Refund If You Cancel By Jun 23 (PDT).{" "}
              <a href="#" className="text-[#07689F] hover:underline">
                Read More...
              </a>
            </p>
            <Checkbox checked={terms} onChange={() => setTerms(!terms)}>
              I have read the terms and agree to them.
            </Checkbox>
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
      <ToastContainer />
    </div>
  );
}

export default FlightPaymentBody;
