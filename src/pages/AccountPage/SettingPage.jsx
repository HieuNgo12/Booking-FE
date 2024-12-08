import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  RightOutlined,
  MailOutlined,
  LockOutlined,
  WifiOutlined,
  BellOutlined,
  ApiOutlined,
  DownloadOutlined,
  FileTextOutlined,
  DeleteOutlined,
  StopOutlined
} from "@ant-design/icons";

const SettingPage = () => {
  const listSecurity = [
    { name: "Email", value: "email-2FA-verify", icon: MailOutlined },
    { name: "Password", value: "password", icon: LockOutlined },
    { name: "Connected Devices", value: "devices", icon: WifiOutlined },
  ];
  const listAccount = [
    // { name: "Preferences", value: "preferences", icon: ProfileOutlined },
    { name: "Notification ", value: "notification", icon: BellOutlined },
    { name: "Data Control", value: "data-control", icon: DownloadOutlined },
  ];
  const listPolicy = [
    { name: "View Privacy Policy", value: "polices", icon: FileTextOutlined },
    { name: "Block Account", value: "block-account", icon: StopOutlined },
  ];
  // const location = useLocation();
  // const currentPath = location.pathname;
  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Settings</h2>
        </div>
        <h1 className="text-xl font-bold">Sign-in and security</h1>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Keep your account safe with a secure password and by signing out of
          devices you're not actively using.
        </p>
        <div>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {listSecurity.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{
                    marginBottom: "15px",
                    fontFamily: "Poppins",
                  }}
                >
                  <Link
                    to={`/account/setting/${item.value}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      textDecoration: "none",
                      fontSize: "16px",
                      border: "1px solid #eaeaea",
                      borderRadius: "8px",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <item.icon style={{ fontSize: "18px" }} />
                      <span>{item.name}</span>
                    </div>
                    <RightOutlined />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mb-5">
        <h1 className="text-xl font-bold">Account management</h1>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Control other options to manage your data, like deleting your account.
        </p>
        <div>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {listAccount.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{
                    marginBottom: "15px",
                    fontFamily: "Poppins",
                  }}
                >
                  <Link
                    to={`/account/${item.value}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      textDecoration: "none",
                      fontSize: "16px",
                      border: "1px solid #eaeaea",
                      borderRadius: "8px",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <item.icon style={{ fontSize: "18px" }} />
                      <span>{item.name}</span>
                    </div>
                    <RightOutlined />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">Privacy & Policy</h1>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Your privacy is protected under our Privacy & Policy guidelines.
        </p>
        <div>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {listPolicy.map((item, index) => {
              return item.value === "delete-account" ? (
                <Link
                  to={`/account/${item.value}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    textDecoration: "none",
                    fontSize: "16px",
                    color: "red",
                    border: "1px solid #eaeaea",
                    borderRadius: "8px",
                    transition: "all 0.3s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <item.icon style={{ fontSize: "18px" }} />
                    <span>{item.name}</span>
                  </div>
                  <RightOutlined />
                </Link>
              ) : (
                <li
                  key={index}
                  style={{
                    marginBottom: "15px",
                    fontFamily: "Poppins",
                  }}
                >
                  <Link
                    to={`/account/${item.value}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      textDecoration: "none",
                      fontSize: "16px",
                      border: "1px solid #eaeaea",
                      borderRadius: "8px",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <item.icon style={{ fontSize: "18px" }} />
                      <span>{item.name}</span>
                    </div>
                    <RightOutlined />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
