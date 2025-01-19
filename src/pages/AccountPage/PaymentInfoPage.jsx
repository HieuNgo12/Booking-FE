import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Space } from "antd";
import momoLogo from "./img/logo-momo.svg.svg";
import zaloLogo from "./img/zalo-pay-logo-inkythuatso.svg";
import vnpayLogo from "./img/vnpay-logo-inkythuatso.svg";
import techcomLogo from "./img/logo-techcombank-inkythuatso.svg";
import tpLogo from "./img/logo-tpbank-inkythuatso.svg";
import PhoneInput from "react-phone-input-2";
import { CreditCardOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import { apiPatch } from "../../API/APIService";

const { Title } = Typography;

const PaymentInfoPage = ({ dataUser }) => {
  const [form] = Form.useForm();
  const [formPhone] = Form.useForm();
  const [changeBtn, setChangeBtn] = useState(true);
  const [changeBtnBank, setChangeBtnBank] = useState(true);
  const [phone, setPhone] = useState(
    dataUser?.paymentMethods?.onlineWallet?.phone || ""
  );
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {
    if (dataUser) {
      setPhone(dataUser?.paymentMethods?.onlineWallet?.phone);
    }
  }, [dataUser]);

  const listBank = [
    {
      name: "Vietcombank",
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Vietcombank_logo_fixed.svg",
    },
    {
      name: "Techcombank",
      src: techcomLogo,
    },
    {
      name: "TPBank",
      src: tpLogo,
    },
    {
      name: "Visa",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    },
    {
      name: "MasterCard",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    },
    {
      name: "PayPal",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
  ];

  const onFinish = async () => {
    const values = await form.validateFields();
    try {
      const resonse = await apiPatch("update-payment-method", values);
      toast.success(resonse.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => setChangeBtnBank(true),
      });
    } catch (error) {
      console.log(error);
      toast.error("Error internal", {
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

  // const onFinish = async () => {
  //   const values = await form.validateFields();
  //   console.log(values);
  //   try {
  //     let req1 = await fetch(
  //       `${import.meta.env.VITE_URL_API}/update-payment-method`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //         body: JSON.stringify(values),
  //       }
  //     );
  //     if (req1.status === 401) {
  //       const req2 = await fetch(
  //         `${import.meta.env.VITE_URL_API}/refresh-token`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //         }
  //       );
  //       if (req2.ok) {
  //         let req1 = await fetch(
  //           `${import.meta.env.VITE_URL_API}/update-payment-method`,
  //           {
  //             method: "PATCH",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             credentials: "include",
  //             body: JSON.stringify(values),
  //           }
  //         );
  //         let res1 = await req1.json();
  //         if (req1.ok) {
  //           toast.success(res1.message, {
  //             position: "top-center",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //             onClose: () => setChangeBtnBank(true),
  //           });
  //         } else if (req1.status === 400) {
  //           toast.warn(res1.message, {
  //             position: "top-center",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //         }
  //       }
  //     }
  //     let res1 = await req1.json();
  //     if (req1.ok) {
  //       toast.success(res1.message, {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         onClose: () => setChangeBtnBank(true),
  //       });
  //     } else if (req1.status === 400) {
  //       toast.warn(res1.message, {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error internal", {
  //       position: "top-center",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };

  const handleOnlineWallet = async () => {
    try {
      const resonse = await apiPatch("update-online-wallet", { phone: phone });
      toast.success(resonse.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => setChangeBtn(true),
      });
    } catch (error) {
      console.log(error);
      toast.error("Error internal", {
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

  // const handleOnlineWallet = async () => {
  //   try {
  //     let req1 = await fetch(
  //       `${import.meta.env.VITE_URL_API}/update-online-wallet`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //         body: JSON.stringify({ phone: phone }),
  //       }
  //     );
  //     if (req1.status === 401) {
  //       const req2 = await fetch(
  //         `${import.meta.env.VITE_URL_API}/refresh-token`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //         }
  //       );
  //       if (req2.ok) {
  //         let req1 = await fetch(
  //           `${import.meta.env.VITE_URL_API}/update-online-wallet`,
  //           {
  //             method: "PATCH",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             credentials: "include",
  //             body: JSON.stringify({ phone: phone }),
  //           }
  //         );
  //         let res1 = await req1.json();
  //         if (req1.ok) {
  //           toast.success(res1.message, {
  //             position: "top-center",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //             onClose: () => setChangeBtn(true),
  //           });
  //         } else if (req1.status === 400) {
  //           toast.warn(res1.message, {
  //             position: "top-center",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //           });
  //         }
  //       }
  //     }
  //     let res1 = await req1.json();
  //     if (req1.ok) {
  //       toast.success(res1.message, {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         onClose: () => setChangeBtn(true),
  //       });
  //     } else if (req1.status === 400) {
  //       toast.warn(res1.message, {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error internal", {
  //       position: "top-center",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };

  const handleNameUpperCase = (e) => {
    const value = e.target.value.toUpperCase();
    form.setFieldsValue({ nameOnCard: value });
  };

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // Loại bỏ ký tự không phải số
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`; // Thêm dấu '/' sau 2 ký tự
    }
    setExpiryDate(value);
    form.setFieldsValue({ expDate: value });
  };

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      {dataUser ? (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <Title level={2}>Payment</Title>
          </div>
          <p className="text-gray-600 mb-4 font-[Subtitle]">
            Securely Add Or Remove Payment Methods To Make It Easier When You
            Book.
          </p>

          <div className="mb-5">
            <Title level={4} className="mb-4">
              Payment Methods
            </Title>
            <div className="flex space-x-4 mb-6">
              {listBank.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={item.name}
                  className="w-16 h-8 rounded cursor-pointer bg-[#D9D9D9] p-2"
                />
              ))}
            </div>

            {/* Form for Card Info */}
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                nameOnCard: dataUser?.paymentMethods?.card?.nameOnCard || "",
                cardNumber: dataUser?.paymentMethods?.card?.cardNumber || "",
                expDate: dataUser?.paymentMethods?.card?.expDate || "",
              }}
            >
              <Form.Item
                label="Name On The Card"
                name="nameOnCard"
                rules={[
                  {
                    required: true,
                    message: "Please enter the name on the card!",
                  },
                ]}
              >
                <Input
                  placeholder="Name on the card"
                  onChange={handleNameUpperCase}
                  disabled={changeBtnBank}
                />
              </Form.Item>

              <Form.Item
                label="Card Number"
                name="cardNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter the card number!",
                  },
                  {
                    pattern: /^[0-9]+$/,
                    message: "Card number must be numeric!",
                  },
                ]}
              >
                <Input
                  placeholder="Card number"
                  prefix={<CreditCardOutlined />}
                  maxLength={16}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    form.setFieldsValue({ card: value });
                  }}
                  disabled={changeBtnBank}
                />
              </Form.Item>

              <Form.Item
                label="Exp Date (MM/YY)"
                name="expDate"
                rules={[
                  {
                    required: true,
                    message: "Please enter the expiry date!",
                  },
                  {
                    pattern: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                    message:
                      "Please enter a valid expiry date in MM/YY format!",
                  },
                ]}
              >
                <Input
                  value={expiryDate}
                  onChange={handleInputChange}
                  maxLength={5} // Giới hạn độ dài tối đa (MM/YY)
                  placeholder="MM/YY"
                  disabled={changeBtnBank}
                />
              </Form.Item>

              {changeBtnBank ? (
                <Button
                  type="primary"
                  htmlType="button"
                  className="w-full bg-[#07689F]"
                  style={{
                    whiteSpace: "nowrap",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setChangeBtnBank(false);
                  }}
                >
                  CHANGE
                </Button>
              ) : (
                <Button
                  htmlType="submit"
                  type="primary"
                  className="w-full"
                  style={{
                    whiteSpace: "nowrap",
                    backgroundColor: "green",
                  }}
                  // onClick={() => setChangeBtnBank(true)}
                >
                  SAVE
                </Button>
              )}
            </Form>
          </div>

          <div>
            <Title level={4} className="mb-4">
              Online Wallet
            </Title>
            <div className="flex space-x-4 mb-6">
              <img
                src={vnpayLogo}
                alt="VNPay"
                className="w-16 h-8 rounded cursor-pointer bg-[#D9D9D9]"
              />
              <img
                src={momoLogo}
                alt="Momo"
                className="w-16 h-8 rounded cursor-pointer bg-[#D9D9D9] p-2"
              />
              <img
                src={zaloLogo}
                alt="Zalo"
                className="w-16 h-8 rounded cursor-pointer bg-[#D9D9D9] p-2"
              />
            </div>

            {/* Form for Online Wallet */}
            <Form form={formPhone} layout="vertical" className="mt-5 mb-5">
              <Form.Item label="Online Wallet" className="mb-4">
                <Space.Compact style={{ width: "100%" }}>
                  <div className="w-3/4">
                    <PhoneInput
                      country={"vn"}
                      inputStyle={{
                        width: "100%",
                        backgroundColor: changeBtn ? "#f5f5f5" : "white",
                        color: changeBtn ? "#b0b0b0" : "black",
                        cursor: changeBtn ? "not-allowed" : "text",
                      }}
                      value={phone}
                      onChange={setPhone}
                      disabled={changeBtn}
                    />
                  </div>

                  {changeBtn ? (
                    <Button
                      type="primary"
                      className="w-1/4 bg-[#07689F]"
                      style={{
                        whiteSpace: "nowrap",
                      }}
                      onClick={() => setChangeBtn(false)}
                    >
                      CHANGE
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      className="w-1/4"
                      style={{
                        whiteSpace: "nowrap",
                        backgroundColor: "green",
                      }}
                      onClick={handleOnlineWallet}
                    >
                      SAVE
                    </Button>
                  )}
                </Space.Compact>
              </Form.Item>
            </Form>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PaymentInfoPage;
