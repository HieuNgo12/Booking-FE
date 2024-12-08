import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Space,
  DatePicker,
  Upload,
  message,
} from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  LogoutOutlined,
  RightOutlined,
} from "@ant-design/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import ImgCrop from "antd-img-crop";
import { useNavigate } from "react-router-dom";

const EditIDCardPage = ({ dataUser }) => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  //upload
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return Upload.LIST_IGNORE;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList.slice(-1));
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <Typography.Title level={2}>Edit ID Card</Typography.Title>
        <Button
          type="default"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          Back
        </Button>
      </div>

      <p className="text-gray-600 mb-5">
        Keep your account safe with a secure password and by signing out of
        devices you're not actively using.
      </p>

      {dataUser ? (
        <>
          {/* Verify ID Card Section */}
          <h3 className="text-lg font-bold mt-5">Verify ID Card</h3>
          <Form layout="vertical" className="mt-5">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                name="idCard"
                label="ID Card"
                rules={[{ required: true, message: "ID Card is required" }]}
                style={{ width: "48%" }}
              >
                <Input placeholder="ID Card" />
              </Form.Item>

              <Form.Item
                name="DOI"
                label="Date of Issue"
                rules={[
                  { required: true, message: "Date of Issue is required" },
                ]}
                style={{ width: "48%" }}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[{ required: true, message: "Full Name is required" }]}
                style={{ width: "48%" }}
              >
                <Input placeholder="Full Name" />
              </Form.Item>

              <Form.Item
                name="POI"
                label="Place of Issue"
                rules={[
                  { required: true, message: "Place of Issue is required" },
                ]}
                style={{ width: "48%" }}
              >
                <Input placeholder="Place of Issue" />
              </Form.Item>
            </div>
            <div className="flex justify-around">
              <div>
                <div className="font-bold">Front ID Card</div>
                <Form.Item>
                  <ImgCrop
                    rotationSlider
                    rotate
                    aspect={85.6 / 54} // Tỉ lệ ID Card
                    modalWidth={600}
                    grid
                  >
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      fileList={fileList} // Chỉ giữ 1 file
                      beforeUpload={beforeUpload}
                      onChange={handleChange} // Cập nhật danh sách file
                      onPreview={onPreview}
                    >
                      {fileList.length < 1 && uploadButton}
                    </Upload>
                  </ImgCrop>
                </Form.Item>
              </div>
              <div>
                <div className="font-bold">Back ID Card</div>
                <Form.Item>
                  <ImgCrop
                    rotationSlider
                    rotate
                    aspect={85.6 / 54} // Tỉ lệ ID Card
                    modalWidth={600}
                    grid
                  >
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      fileList={fileList} // Chỉ giữ 1 file
                      beforeUpload={beforeUpload}
                      onChange={handleChange} // Cập nhật danh sách file
                      onPreview={onPreview}
                    >
                      {fileList.length < 1 && uploadButton}
                    </Upload>
                  </ImgCrop>
                </Form.Item>
              </div>
            </div>
          </Form>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <ToastContainer />
    </div>
  );
};

export default EditIDCardPage;
