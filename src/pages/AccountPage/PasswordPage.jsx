import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import { Form, Input, Button, Radio, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { apiPatch } from "../../API/APIService";

const PasswordPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await apiPatch("change-password", {
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword,
      });
      toast.success(response.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => navigate(-1),
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

  // const onFinish = async (values) => {
  //   try {
  //     let req1 = await fetch(
  //       `${import.meta.env.VITE_URL_API}/change-password`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //         body: JSON.stringify({
  //           currentPassword: values.currentPassword,
  //           newPassword: values.newPassword,
  //           confirmNewPassword: values.confirmNewPassword,
  //         }),
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
  //         let req1 = await fetch(`${import.meta.env.VITE_URL_API}/profile`, {
  //           method: "PATCH",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //           body: JSON.stringify({
  //             currentPassword: values.currentPassword,
  //             newPassword: values.newPassword,
  //             confirmNewPassword: values.confirmNewPassword,
  //           }),
  //         });
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

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Password</h2>
      </div>
      <p className="text-gray-600 mb-4 font-[Subtitle]">
        Manage your password.
      </p>
      <Form form={form} onFinish={onFinish} layout="vertical">
        {/* UserName Section */}

        <Form.Item
          name="currentPassword"
          label="Current Password"
          rules={[
            {
              required: true,
              type: "string",
              message: "Current Password is required",
            },
          ]}
        >
          <Input.Password placeholder="Current Password" />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            {
              required: true,
              type: "string",
              message: "New Password is required",
            },
          ]}
        >
          <Input.Password placeholder="New Password" />
        </Form.Item>
        <Form.Item
          name="confirmNewPassword"
          label="Confirm Password"
          rules={[
            {
              required: true,
              type: "string",
              message: "Confirm Password is required",
            },
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            visibilityToggle={false}
          />
        </Form.Item>

        {/* Buttons for  Phone */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            type="primary"
            style={{ width: "100%", backgroundColor: "#07689F" }}
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default PasswordPage;
