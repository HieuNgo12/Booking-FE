import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Space } from "antd";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditEmailPage = ({ dataUser }) => {
  const [formEmail] = Form.useForm();
  const [otp, setOtp] = useState("");
  const [changeBtn, setChanegBtn] = useState(true);
  const [newEmail, setNewEmail] = useState(dataUser?.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataUser) {
      setNewEmail(dataUser?.email);
    }
  }, [dataUser, formEmail]);

  const handleSenOTPtoCurrentEmail = async () => {
    try {
      let req1 = await fetch(
        `${import.meta.env.VITE_URL_API}/sent-otp-to-current-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            newEmail: newEmail,
          }),
        }
      );
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
            `${import.meta.env.VITE_URL_API}/sent-otp-to-current-email`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({
                newEmail: newEmail,
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
              onClose: () => setChanegBtn(true),
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
              onClose: () => setChanegBtn(true),
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
          onClose: () => setChanegBtn(true),
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
          onClose: () => setChanegBtn(true),
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
  };

  const handleChangeEmail = async () => {
    try {
      let req1 = await fetch(`${import.meta.env.VITE_URL_API}/change-email`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          newEmail: newEmail,
          otp: otp,
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
            `${import.meta.env.VITE_URL_API}/change-email`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({
                newEmail: newEmail,
                otp: otp,
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
              onClose: () => navigate("/login"),
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
          onClose: () => navigate("/login"),
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
  };

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Edit Email</h2>
        <Button
          type="default"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          Back
        </Button>
      </div>

      <p className="text-gray-600 mb-5">
        Secure your email, secure your account.
      </p>

      {dataUser ? (
        <>
          {/* Email Section */}
          <Form form={formEmail} layout="vertical" className="mt-5 mb-5">
            <Form.Item
              name="email"
              label={
                <div className="flex items-end gap-2">
                  <h3 className="text-lg font-bold">Email</h3>
                  {dataUser?.verificationStatus?.emailVerified ? (
                    <small style={{ color: "green" }}> - Verified</small>
                  ) : (
                    <small style={{ color: "red" }}> - Not Verified</small>
                  )}
                </div>
              }
              className="mb-4"
              rules={[
                {
                  required: true,
                  message: "Email is required",
                },
                {
                  type: "email",
                  message: "Email is not valid.",
                },
              ]}
            >
              <Space.Compact style={{ width: "100%" }}>
                <Input
                  value={newEmail}
                  disabled={changeBtn}
                  className="flex-1"
                  placeholder="Your email address"
                  style={{ width: "3/4" }}
                  onChange={(value) => setNewEmail(value.target.value)}
                />
                {changeBtn ? (
                  <Button
                    type="primary"
                    className="w-1/4 bg-[#07689F]"
                    style={{
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => setChanegBtn(false)}
                  >
                    Change Email
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    className="w-1/4"
                    style={{
                      whiteSpace: "nowrap",
                      backgroundColor: "green",
                    }}
                    onClick={() => handleSenOTPtoCurrentEmail()}
                  >
                    Sent OTP
                  </Button>
                )}
              </Space.Compact>
            </Form.Item>
            {!changeBtn ? (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded relative shadow-md mt-3">
                <strong className="font-bold">Notice: </strong>
                <span className="block sm:inline">
                  We will send a verification link to the new email. Please
                  check your mailbox.
                </span>
              </div>
            ) : (
              <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded relative shadow-md mt-3">
                <strong className="font-bold">Warning: </strong>
                <span className="block sm:inline">
                  Don't change your email unnecessarily!
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
              onClick={handleChangeEmail}
            >
              Submit
            </Button>
          </Space.Compact>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <ToastContainer />
    </div>
  );
};

export default EditEmailPage;
