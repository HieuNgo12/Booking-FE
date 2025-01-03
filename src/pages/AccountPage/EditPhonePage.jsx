import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Space } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import auth from "../FireBase/fireBase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const EditPhonePage = ({ dataUser }) => {
  const navigate = useNavigate();
  const [formPhone] = Form.useForm();
  const [phone, setPhone] = useState(dataUser?.phone || "");
  const [changeBtn, setChangeBtn] = useState(true);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const formatPhone = `+${phone}`;

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "sign-in-button",
          { size: "normal" },
          auth
        );
        console.log(
          "Recaptcha initialized successfully:",
          window.recaptchaVerifier
        );
      } catch (error) {
        console.error("Error initializing Recaptcha:", error.message);
      }
    } else {
      console.log("Recaptcha already initialized:", window.recaptchaVerifier);
    }

    return window.recaptchaVerifier;
  };

  const handlePhoneSignIn = async () => {
    try {
      const recaptchaVerifier = setupRecaptcha();
      const confirmation = await signInWithPhoneNumber(
        auth,
        formatPhone,
        recaptchaVerifier
      );
      console.log(confirmation);
      setConfirmationResult(confirmation);
      console.log("OTP sent to phone:", phone);
      toast.success(`OTP sent to phone: ${phone}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error sending OTP:", error.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      if (!confirmationResult) {
        throw new Error("No OTP request found");
      }
      const result = await confirmationResult.confirm(otp);
      console.log(result);
      console.log("Phone authentication successful:", result.user);
      try {
        let req1 = await fetch(`${import.meta.env.VITE_URL_API}/change-phone`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            phone: phone,
          }),
        });
        if (req1.status === 401) {
          const req2 = await fetch(
            `${import.meta.env.VITE_URL_API}/refresh-token`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }
          );
          if (req2.ok) {
            let req1 = await fetch(
              `${import.meta.env.VITE_URL_API}/change-phone`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                  phone: phone,
                }),
              }
            );
            let res1 = await req1.json();
            if (req1.ok) {
              toast.success(res1.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } else if (req1.status === 400) {
              toast.warn(res1.message, {
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
          }
        }
        let res1 = await req1.json();
        if (req1.ok) {
          toast.success(res1.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (req1.status === 400) {
          toast.warn(res1.message, {
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
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
    }
  };

  useEffect(() => {
    if (dataUser?.phone) {
      setPhone(dataUser.phone);
    }
  }, [dataUser]);

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Edit Phone</h2>
        <Button
          type="default"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          Back
        </Button>
      </div>

      <p className="text-gray-600 mb-5">Keep your phone number current.</p>

      {dataUser ? (
        <>
          <Form
            form={formPhone}
            layout="vertical"
            className="mt-5 mb-5"
            initialValues={{ phone: dataUser?.phone || "" }}
          >
            <Form.Item
              name="phone"
              label={
                <div className="flex items-end gap-2">
                  <h3 className="text-lg font-bold">Phone</h3>
                  {dataUser?.verificationStatus?.phoneVerified ? (
                    <small style={{ color: "green" }}> - Verified</small>
                  ) : (
                    <small style={{ color: "red" }}> - Not Verified</small>
                  )}
                </div>
              }
              className="mb-4"
            >
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
                    Change Phone
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    className="w-1/4"
                    style={{
                      whiteSpace: "nowrap",
                      backgroundColor: "green",
                    }}
                    onClick={() => handlePhoneSignIn()}
                  >
                    Send OTP to Phone
                  </Button>
                )}
              </Space.Compact>
            </Form.Item>
            {!changeBtn ? (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded relative shadow-md mt-3">
                <strong className="font-bold">Notice: </strong>
                <span className="block sm:inline">
                  We will send a verification link to the new phone. Please
                  check your phone.
                </span>
              </div>
            ) : (
              <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded relative shadow-md mt-3">
                <strong className="font-bold">Warning: </strong>
                <span className="block sm:inline">
                  Don't change your phone unnecessarily!
                </span>
              </div>
            )}
          </Form>

          <Space.Compact style={{ width: "100%" }}>
            <Input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-3/4"
            />

            <Button
              type="primary"
              className="w-1/4 bg-[#07689F]"
              onClick={handleVerifyOtp}
            >
              Submit
            </Button>
          </Space.Compact>
          <div id="sign-in-button"></div>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <ToastContainer />
    </div>
  );
};

export default EditPhonePage;
