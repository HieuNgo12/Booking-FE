import React, { useEffect } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Input, Dropdown, Space, Button, Avatar } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
  GlobalOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../Redux/Slide/infoUserSlice";

const items = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

function Navbar() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const { infor, status, error } = useSelector((state) => state.inforUser);

  console.log(infor);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserInfo());
    }
  }, []);

  return (
    <div className="max-w-[1224px] w-full flex flex-col mt-3 justify-between items-center">
      <nav className="flex w-full justify-between">
        <img
          style={{ cursor: "pointer" }}
          src="/log.png"
          onClick={() => {
            navigate("/");
          }}
        />

        {/* <div>
          <a href="/hotel-search">
            {" "}
            <img className="classic-image" src={"/homepage/hotel.png"} />
          </a>
        </div> */}

        <div className="flex items-center">
          <Input
            placeholder="input search text"
            allowClear
            // onSearch={onSearch}
            style={{ width: 500, height: 40, marginRight: 20 }}
            suffix={
              <SearchOutlined style={{ color: "#07689F", cursor: "pointer" }} />
            }
          />
        </div>

        <div className="flex justify-around gap-5 mr-5">
          <GlobalOutlined
            style={{
              fontSize: "24px",
              color: "#07689F",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            className="hover:text-[#05486C]"
          />

          <QuestionCircleOutlined
            style={{
              fontSize: "24px",
              color: "#07689F",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            className="hover:text-[#05486C]"
          />

          <HeartOutlined
            style={{
              fontSize: "24px",
              color: "#07689F",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            className="hover:text-[#05486C]"
            onClick={() => navigate("/hotel-favorite-page")}
          />
        </div>

        {!infor ? (
          <div className="flex flex-row gap-3 items-center">
            <Button className="ath-button" onClick={() => navigate("/login")}>
              SIGN IN
            </Button>
            <Button className="ath-button" onClick={() => navigate("/signup")}>
              SIGN UP
            </Button>
          </div>
        ) : (
          <div className="flex flex-row gap-3 items-center">
            <Avatar
              src={infor?.avatar}
              style={{ height: "55px", width: "55px" }}
            />
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ fontWeight: 700 }}>
                  {infor?.firstName}{infor?.lastName}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        )}
      </nav>

      <div className="flex justify-center mb-5 mt-2 product-tags">
        <div
          className={`middle ${
            pathname === "/trip" ? "active" : ""
          }  cursor-pointer`}
        >
          <a>Trip</a>
        </div>
        <div
          className={`middle ${
            pathname === "/deals" ? "active" : ""
          }  cursor-pointer`}
        >
          <a>Deals</a>
        </div>
        <div
          className={`middle ${
            pathname === "/" || pathname === "/" ? "active" : ""
          }  cursor-pointer`}
        >
          <a>Hotel</a>
        </div>
        <div
          className={`middle ${
            pathname === "/flight" ? "active" : ""
          }  cursor-pointer`}
        >
          <a>Flight</a>
        </div>
        <div
          className={`middle ${
            pathname === "/apartment" ? "active" : ""
          }  cursor-pointer`}
        >
          <a>Apartment</a>
        </div>
        <div
          className={`middle ${
            pathname === "/camper" ? "active" : ""
          }  cursor-pointer`}
        >
          <a>Camper</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
