import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Upload,
  Avatar,
  Typography,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import citiesInVietnam from "./listCity";
const { Title, Text } = Typography;
const { Option } = Select;
const EditInfoPage = () => {
  const [form] = Form.useForm();
  const [avatar, setAvatar] = useState("");
  const [newImage, setNewImage] = useState("");
  const userData = [];

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
    };
    setNewImage(file);
    reader.readAsDataURL(file);
    return false;
  };
  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      {userData ? (
        <div>
          <Typography.Title
            level={3}
            style={{
              //   color: "#07689F",
              fontWeight: 700,
            }}
          >
            Edit Basic Information
          </Typography.Title>
          <Text>
            Make sure this information matches your travel ID, like your
            passport or license.
          </Text>

          <Form
            form={form}
            // onFinish={onFinish}
            layout="vertical"
            style={{ marginTop: "20px" }}
          >
            {/* Avatar */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar size={100} src={avatar} />
              <Upload
                name="avatar"
                showUploadList={false}
                style={{ marginTop: "15px" }}
                beforeUpload={handleImageChange}
              >
                <Button
                  icon={<UploadOutlined />}
                  style={{ color: "#007BFF", marginTop: "15px" }}
                >
                  Upload New Avatar
                </Button>
              </Upload>
            </div>

            {/* First Name and Last Name */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  { required: true, message: "First Name is required" },
                  { whitespace: true, message: "First Name cannot be empty" },
                ]}
                style={{ width: "48%" }}
              >
                <Input
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  { required: true, message: "Last Name is required" },
                  { whitespace: true, message: "Last Name cannot be empty" },
                ]}
                style={{ width: "48%" }}
              >
                <Input
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Item>
            </div>

            {/* Gender and Birthdate*/}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: "Gender is required" }]}
                style={{ width: "48%" }}
              >
                <Select
                  placeholder="Gender"
                  //   value={gender !== undefined ? gender : null}
                  onChange={(value) => setGender(value)}
                >
                  <Option value={true}>Man</Option>
                  <Option value={false}>Woman</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="dateOfBirth"
                label="Birthdate"
                rules={[{ required: true, message: "Birthdate is required" }]}
                style={{ width: "48%" }}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  onChange={(date, dateString) => handleDOB(dateString)}
                />
              </Form.Item>
            </div>

            {/* Nationality and Country*/}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                name="nationality"
                label="Nationality"
                rules={[{ required: true, message: "ID Card is required" }]}
                style={{ width: "48%" }}
              >
                <Select placeholder="Select Nationality">
                  {citiesInVietnam.map((item, index) => (
                    <Option key={index} value={item.value}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="country"
                label="Country"
                // rules={[{ required: true, message: "District is required" }]}
                style={{ width: "48%" }}
              >
                <Select placeholder="Select Country">
                  {citiesInVietnam.map((item, index) => (
                    <Option key={index} value={item.value}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            {/* City and District */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                name="city"
                label="City"
                // rules={[{ required: true, message: "City is required" }]}
                style={{ width: "48%" }}
              >
                <Select placeholder="Select City">
                  {citiesInVietnam.map((item, index) => (
                    <Option key={index} value={item.value}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="district"
                label="District"
                // rules={[{ required: true, message: "District is required" }]}
                style={{ width: "48%" }}
              >
                <Select
                  placeholder="Select District"
                  //   onChange={handleDistrictChange}
                  //   disabled={!selectedCity}
                >
                  {/* {districts.map((district, index) => (
                    <Option key={index} value={district.value}>
                      {district.name}
                    </Option>
                  ))} */}
                </Select>
              </Form.Item>
            </div>

            {/* Ward and number*/}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                name="ward"
                label="Ward"
                // rules={[{ required: true, message: "Ward is required" }]}
                style={{ width: "48%" }}
              >
                <Select
                  placeholder="Select Ward"
                  //   disabled={wards.length === 0}
                  onChange={(value) => seclectedWard(value)}
                >
                  {/* {wards.map((ward, index) => (
                    <Option key={index} value={ward.value}>
                      {ward.name}
                    </Option>
                  ))} */}
                </Select>
              </Form.Item>

              <Form.Item
                name="street"
                label="Street"
                // rules={[{ required: true, message: "Number and Street is required" }]}
                style={{ width: "48%" }}
              >
                <Input
                  placeholder="Street"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Item>
            </div>

            {/* Password */}
            <Form.Item
              name="currentPassword"
              label="Password"
              rules={[
                { required: true, message: "Current password is required" },
              ]}
            >
              <Input.Password
                placeholder="Current Password"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            {/* Save and Cancel Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#07689F] text-white rounded-md hover:bg-[#054b74]"
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </div>
      ) : (
        <div>Loading</div>
      )}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default EditInfoPage;
