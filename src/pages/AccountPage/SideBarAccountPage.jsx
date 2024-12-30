import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  RightOutlined,
  KeyOutlined,
  ApiOutlined,
  StopOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Cookies from "js-cookie";

const list = [
  { name: "Profile", value: "profile", icon: UserOutlined },
  { name: "Authentication", value: "authentication", icon: KeyOutlined },
  { name: "Booking", value: "booking", icon: CalendarOutlined },
  { name: "Preferences", value: "preferences", icon: ProfileOutlined },
  { name: "Payment", value: "payment", icon: FolderOpenOutlined },
  { name: "Support", value: "support", icon: QuestionCircleOutlined },
  { name: "Setting", value: "setting", icon: SettingOutlined },
];

const SideBarAccountPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const Logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("refreshToken");
    navigate("/login");
  };
  return (
    <div
      style={{
        width: "25%",
        height: "100%",
        paddingRight: "20px",
        borderRight: "1px solid #ccc",
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="h-1/2">
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
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f5f5f5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = isActive
                      ? "#f0f9ff"
                      : "#fff";
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
          <li
            style={{
              marginBottom: "15px",
              fontFamily: "Poppins",
              borderTop: "1px solid #eaeaea", // Đường kẻ
              paddingTop: "15px", // Khoảng cách trên đường kẻ
              cursor: "pointer",
            }}
          >
            <div
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
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f5f5f5";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff";
              }}
              onClick={() => Logout()}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <LogoutOutlined style={{ fontSize: "18px" }} />
                <span>Log Out</span>
              </div>
              <RightOutlined />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarAccountPage;
