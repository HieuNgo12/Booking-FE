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
import moment from "moment";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { Option } = Select;

const listNationality = [
  { name: "Việt Nam", value: "VietNam" },
  { name: "Nhật Bản", value: "Japan" },
  { name: "Hàn Quóc", value: "Korea" },
];
const EditInfoPage = ({ dataUser, callApi }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [avatar, setAvatar] = useState(dataUser?.avatar);
  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
    };
    setNewImage(file);
    reader.readAsDataURL(file);
    return false;
  };

  useEffect(() => {
    if (dataUser) {
      setAvatar(dataUser?.avatar);
    }
  }, [dataUser]);

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("file", newImage);
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("gender", values.gender);
      formData.append("DOB", values.DOB);
      formData.append("nationality", values.nationality);
      formData.append("country", values.country);
      formData.append("city", values.city);
      formData.append("district", values.district);
      formData.append("ward", values.ward);
      formData.append("street", values.street);
      formData.append("checkPassword", values.checkPassword);

      let req1 = await fetch(`${import.meta.env.VITE_URL_API}/update-profile`, {
        method: "PATCH",
        credentials: "include",
        body: formData,
      });
      if (req1.status === 401) {
        let req2 = await fetch(
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
            `${import.meta.env.VITE_URL_API}/update-profile`,
            {
              method: "PATCH",
              credentials: "include",
              body: formData,
            }
          );
          if (req1.ok) {
            let res1 = await req1.json();
            toast.success(res1.message, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              onClose: () => callApi(),
            });
            form.resetFields(["checkPassword"]);
          } else if (req1.status === 400) {
            let res1 = await req1.json();
            toast.warn(res1.message, {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            form.resetFields(["checkPassword"]);
          }
        }
      }
      if (req1.ok) {
        let res1 = await req1.json();
        toast.success(res1.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => callApi(),
        });
        form.resetFields(["checkPassword"]);
      } else if (req1.status === 400) {
        let res1 = await req1.json();
        toast.warn(res1.message, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.resetFields(["checkPassword"]);
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
      {dataUser ? (
        <div>
          <div className="flex justify-between">
            <Typography.Title
              level={3}
              style={{
                fontWeight: 700,
              }}
            >
              Edit Basic Information
            </Typography.Title>
            <Button
              type="default"
              onClick={() => navigate(-1)}
              style={{ marginBottom: "20px" }}
            >
              Back
            </Button>
          </div>

          <Text>
            Make sure this information matches your travel ID, like your
            passport or license.
          </Text>

          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            style={{ marginTop: "20px" }}
            initialValues={{
              firstName: dataUser?.firstName || "",
              lastName: dataUser?.lastName || "",
              gender: dataUser?.gender || true,
              DOB: dataUser.DOB ? moment(dataUser.DOB) : null,
              nationality: dataUser?.nationality || null,
              country: dataUser?.address.country || "",
              city: dataUser?.address.city || null,
              district: dataUser?.address.district || null,
              ward: dataUser?.address.ward || null,
              street: dataUser?.address.street || null,
            }}
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
                <Input placeholder="First Name" />
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
                <Input placeholder="Last Name" />
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
                <Select placeholder="Gender">
                  <Option value={true}>Man</Option>
                  <Option value={false}>Woman</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="DOB"
                label="Birthdate"
                rules={[{ required: true, message: "Birthdate is required" }]}
                style={{ width: "48%" }}
              >
                <DatePicker style={{ width: "100%" }} />
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
                  {listNationality.map((item, index) => (
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
                  {listNationality.map((item, index) => (
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
                <Input placeholder="Street" />
              </Form.Item>
            </div>

            {/* Password */}
            <Form.Item
              name="checkPassword"
              label="Password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password placeholder="Password" />
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
