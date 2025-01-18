import { Link, useLocation } from "react-router-dom";
import {
  QuestionCircleOutlined,
  RightOutlined,
  PhoneOutlined,
  MessageOutlined,
  FormOutlined,
  MailOutlined,
} from "@ant-design/icons";

const SupportPage = () => {
  const list = [
    {
      name: "Support",
      value: "list-support",
      icon: MailOutlined,
    },
    {
      name: "Visit the help center",
      value: "help-center",
      icon: QuestionCircleOutlined,
    },
  ];
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Support</h2>
      </div>
      <p className="text-gray-600 mb-4 font-[Subtitle]">
        Have questions or feedback for us? We're listening.
      </p>
      <div>
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
                  to={`/account/support/${item.value}`}
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
    </div>
  );
};

export default SupportPage;
