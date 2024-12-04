import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UserOutlined,
  ProfileOutlined,
  FolderOpenOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  RightOutlined,
  LockOutlined 
} from "@ant-design/icons";

const SideBarAccountPage = () => {
  const list = [
    { name: "Profile", value: "profile", icon: UserOutlined },
    { name: "Password", value: "password", icon: LockOutlined  },
    { name: "Preferences", value: "preferences", icon: ProfileOutlined },
    { name: "Payment", value: "payment", icon: FolderOpenOutlined },
    { name: "Support", value: "support", icon: QuestionCircleOutlined },
    { name: "Setting", value: "setting", icon: SettingOutlined },
  ];
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div
      style={{
        width: "25%",
        height : "50%",
        paddingRight: "20px",
        borderRight: "1px solid #ccc",
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {list.map((item, index) => {
          const isActive = currentPath === `/account/${item.value}`;
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
                  color: isActive ? "#07689F" : "#000",
                  border: "1px solid #eaeaea",
                  borderRadius: "8px",
                  boxShadow: isActive
                    ? "0px 2px 4px rgba(0, 0, 0, 0.1)"
                    : "none",
                  backgroundColor: isActive ? "#f0f9ff" : "#fff",
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
  );
};

export default SideBarAccountPage;
