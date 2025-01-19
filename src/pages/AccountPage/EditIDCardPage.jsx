import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  DatePicker,
  Upload,
  message,
  Row,
  Col,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import moment from "moment";
import { apiPatch } from "../../API/APIService";
import { useDispatch } from "react-redux";

const EditIDCardPage = ({ dataUser }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [frontFileList, setFrontFileList] = useState([]);
  const [backFileList, setBackFileList] = useState([]);
  const [changeBtn, setChangeBtn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleFrontChange = ({ fileList }) => {
    setFrontFileList(fileList.slice(-1));
  };

  const handleBackChange = ({ fileList }) => {
    setBackFileList(fileList.slice(-1));
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleNameUpperCase = (e) => {
    const value = e.target.value.toUpperCase();
    form.setFieldsValue({ fullName: value });
  };

  const onFinish = async (values) => {
    console.log("Form Values: ", values);
    try {
      const response = await apiPatch("update-id-card", {
        number: values.number,
        fullName: values.fullName,
        DOI: values.DOI,
        POI: values.POI,
      });

      setChangeBtn(true);
      toast.success(response.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => {
          callApi(), dispatch(fetchUserInfo());
        },
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
  //   console.log("Form Values: ", values);
  //   try {
  //     let req1 = await fetch(`${import.meta.env.VITE_URL_API}/update-id-card`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //       body: JSON.stringify({
  //         number: values.number,
  //         fullName: values.fullName,
  //         DOI: values.DOI,
  //         POI: values.POI,
  //       }),
  //     });
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
  //           `${import.meta.env.VITE_URL_API}/update-id-card`,
  //           {
  //             method: "PATCH",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             credentials: "include",
  //             body: JSON.stringify({
  //               number: values.number,
  //               fullName: values.fullName,
  //               DOI: values.DOI,
  //               POI: values.POI,
  //             }),
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

  return (
    <div className="p-6 w-3/4 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
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
        Please upload your ID card information to keep your account secure.
      </p>

      {dataUser ? (
        <Form
          form={form}
          layout="vertical"
          className="mt-5"
          onFinish={onFinish}
          initialValues={{
            number: dataUser?.idCard.number || "",
            DOI: dataUser?.idCard.DOI ? moment(dataUser.idCard.DOI) : null,
            fullName: dataUser?.idCard.fullName || "",
            POI: dataUser?.idCard.POI || "",
          }}
        >
          {/* First Row */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="number"
                label="ID Card"
                rules={[{ required: true, message: "ID Card is required" }]}
              >
                <Input
                  placeholder="Enter ID Card Number"
                  disabled={changeBtn}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="DOI"
                label="Date of Issue"
                rules={[
                  { required: true, message: "Date of Issue is required" },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Select Date"
                  disabled={changeBtn}
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Second Row */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[{ required: true, message: "Full Name is required" }]}
              >
                <Input
                  placeholder="Enter Full Name"
                  disabled={changeBtn}
                  onChange={handleNameUpperCase}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="POI"
                label="Place of Issue"
                rules={[
                  { required: true, message: "Place of Issue is required" },
                ]}
              >
                <Input
                  placeholder="Enter Place of Issue"
                  disabled={changeBtn}
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Image Upload Section */}
          <div className="mt-5">
            <Row gutter={16}>
              <Col span={12}>
                <div className="font-bold mb-2">Front ID Card</div>
                <Form.Item>
                  <ImgCrop rotate aspect={85.6 / 54} grid>
                    <Upload
                      name="frontId"
                      listType="picture-card"
                      fileList={frontFileList}
                      beforeUpload={beforeUpload}
                      onChange={handleFrontChange}
                    >
                      {frontFileList.length < 1 && uploadButton}
                    </Upload>
                  </ImgCrop>
                </Form.Item>
              </Col>
              <Col span={12}>
                <div className="font-bold mb-2">Back ID Card</div>
                <Form.Item>
                  <ImgCrop rotate aspect={85.6 / 54} grid>
                    <Upload
                      name="backId"
                      listType="picture-card"
                      fileList={backFileList}
                      beforeUpload={beforeUpload}
                      onChange={handleBackChange}
                    >
                      {backFileList.length < 1 && uploadButton}
                    </Upload>
                  </ImgCrop>
                </Form.Item>
              </Col>
            </Row>
          </div>

          {/* Submit Button */}
          <Form.Item>
            {changeBtn ? (
              <Button
                type="primary"
                htmlType="button"
                className="w-full bg-[#07689F]"
                style={{
                  whiteSpace: "nowrap",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setChangeBtn(false);
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
              >
                SAVE
              </Button>
            )}
          </Form.Item>
        </Form>
      ) : (
        <p>Loading...</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default EditIDCardPage;
