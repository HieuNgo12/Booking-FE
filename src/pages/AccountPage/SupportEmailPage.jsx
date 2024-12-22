import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message, Image, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";

const { TextArea } = Input;

const SupportEmailPage = ({ dataUser }) => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const onFinish = async (values) => {
    console.log(fileList);
    const formData = new FormData();
    formData.append("message", values.message);
    formData.append("subject", values.subject);
    formData.append("email", values.email);
    formData.append("name", values.name);
    fileList.forEach((file) => {
      formData.append("files", file.originFileObj);
    });

    try {
      let req1 = await fetch(
        `${import.meta.env.VITE_URL_API}/sent-email-support`,
        {
          method: "POST",
          credentials: "include",
          body: formData,
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
            `${import.meta.env.VITE_URL_API}/sent-email-support`,
            {
              method: "POST",
              credentials: "include",
              body: formData,
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
  };

  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4"> Support Email Form</h2>
        <Button
          type="default"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          Back
        </Button>
      </div>
      <p className="text-gray-600 mb-4 font-[Subtitle]">
        Have questions or feedback for us? We're listening.
      </p>
      {dataUser ? (
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            name: `${dataUser?.firstName || ""} ${
              dataUser?.lastName || ""
            }`.trim(),
            email: dataUser?.email || "",
            subject: "",
            message: "",
          }}
        >
          {/* Name Field */}
          <Form.Item
            label="Your Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input placeholder="Enter your name" disabled />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label="Your Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input placeholder="Enter your email" disabled />
          </Form.Item>

          {/* Subject Field */}
          <Form.Item
            label="Subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please enter the subject!",
              },
            ]}
          >
            <Input placeholder="Enter the subject" />
          </Form.Item>

          {/* Message Field */}
          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please enter your message!",
              },
            ]}
          >
            <TextArea rows={5} placeholder="Enter your message" />
          </Form.Item>

          {/* Picture Field */}
          <Form.Item label="Picture" name="picture">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={({ fileList: newFileList }) => setFileList(newFileList)}
              beforeUpload={(file) => {
                setFileList([...fileList, file]);
                return false;
              }}
            >
              {fileList.length >= 5 ? null : uploadButton}
            </Upload>
          </Form.Item>

          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              style={{ backgroundColor: "#07689F" }}
            >
              Send Email
            </Button>
          </Form.Item>
          <ToastContainer />
        </Form>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default SupportEmailPage;
