import React from "react";
import { useNavigate } from "react-router";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Layout,
  Row,
  Col,
  Typography,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imgLogIn from "./img/login.jpg";
import imgLogo from "./img/Logo.png";
import imgEN from "./img/EN.png";
import ChatBox from "../ChatPage/ChatBox";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const req1 = await fetch(`${import.meta.env.VITE_URL_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      const res1 = await req1.json();
      if (req1.status === 400) {
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
      } else if (req1.status === 200) {
        toast.success(res1.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            navigate("/profile");
          },
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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          background: "#fff",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src={imgLogo}
          alt=""
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center gap-3">
          <img
            src={imgEN}
            alt="language"
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
          <Button
            type="text"
            icon={<QuestionCircleOutlined style={{ fontSize: "24px" }} />}
            style={{
              height: "24px",
              width: "24px",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      </Header>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Row
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: "10px",
            // overflow: "hidden",
            maxWidth: "750px",
            width: "100%",
            maxHeight: "600px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Col xs={24} md={12} style={{ padding: "0" }}>
            <img
              src={imgLogIn}
              alt="Login"
              className="w-full h-full object-cover hidden md:block"
            />
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="w-full">
              <Title level={2} style={{ fontWeight: "bold" }}>
                Reset Password
              </Title>
              <Text>Check email to get OTP and reset password.</Text>

              <Form
                name="resetpassword"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{ marginTop: "20px" }}
              >
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input new password!" },
                  ]}
                >
                  <Input placeholder="New password" />
                </Form.Item>

                <Form.Item
                  label="Confirm"
                  name="confirmPassword"
                  rules={[{ required: true, message: "Please input confirm!" }]}
                >
                  <Input placeholder="Confirm password" />
                </Form.Item>

                <Form.Item
                  label="OTP"
                  name="otp"
                  rules={[
                    { required: true, message: "Please input new password!" },
                  ]}
                >
                  <div className="flex justify-center items-center">
                    {" "}
                    <Input.OTP placeholder="OTP" />
                  </div>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <div className="flex justify-between items-center">
                    <a
                      className="text-[#07689f] font-bold"
                      onClick={() => navigate("/forgot-passowrd")}
                    >
                      Forgot Password
                    </a>
                    <a
                      className="text-[#07689f] font-bold"
                      // onClick={() => navigate("/forgot-passowrd")}
                    >
                      Resent OTP
                    </a>
                  </div>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    className="bg-[#07689f]"
                  >
                    Reset Password
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>
      <ToastContainer />
      <ChatBox />
    </Layout>
  );
};

export default ResetPasswordPage;
