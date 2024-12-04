import React from "react";
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
import { useNavigate } from "react-router";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imgLogIn from "./img/login.jpg";
import imgLogo from "./img/Logo.png";
import imgEN from "./img/EN.png";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const SignUpPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const req1 = await fetch(`${import.meta.env.VITE_URL_API}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
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
            navigate("/login");
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
        <img src={imgLogo} alt="" />
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
            overflow: "hidden",
            maxWidth: "900px",
            width: "100%",
            height: "720px",
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
              padding: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="w-full">
              <Title level={2} style={{ fontWeight: "bold" }}>
                Register
              </Title>
              <Form
                name="register"
                layout="vertical"
                initialValues={{ policies: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{ marginTop: "20px" }}
              >
                <div className="flex justify-between gap-5">
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                    className="w-1/2"
                  >
                    <Input placeholder="Easyset24" />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                    className="w-1/2"
                  >
                    <Input placeholder="Easyset24" />
                  </Form.Item>
                </div>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Easyset24@gmail.com" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="********" />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  rules={[{ required: true, message: "Please input confirm!" }]}
                >
                  <Input.Password
                    placeholder="********"
                    visibilityToggle={false}
                  />
                </Form.Item>

                <Text>
                  Read Terms and Privacy Policies{" "}
                  <Text className="text-[#07689f] cursor-pointer font-bold hover:text-blue-400">
                    here
                  </Text>
                </Text>

                <Form.Item
                  name="policies"
                  // valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error(
                                "You must agree to the Terms and Privacy Policies!"
                              )
                            ),
                    },
                  ]}
                >
                  <Checkbox className="font-medium">
                    I agree to all the Terms and Privacy Policies
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    className="bg-[#07689f]"
                  >
                    SIGN UP 
                  </Button>
                </Form.Item>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <Text>
                    Already have an account?{" "}
                    <Text
                      className="text-[#07689f] cursor-pointer font-bold hover:text-blue-400"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Text>
                  </Text>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "10px",
                    fontWeight: "600",
                  }}
                >
                  Or
                </div>
                <Row gutter={10} className="flex justify-center cursor-pointer">
                  <Col>
                    <img src="/login/facebook.png" />
                  </Col>
                  <Col>
                    <img src="/login/apple.png" />
                  </Col>
                  <Col>
                    <img src="/login/google.png" />
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>
      <ToastContainer />
    </Layout>
  );
};

export default SignUpPage;
