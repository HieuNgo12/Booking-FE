import React from "react";
import "./Footer.css";
import {
  MailOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  CopyrightOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input, Button, Space } from "antd";

function Footer() {
  return (
    <div className="w-full bg-[#F9F9F9]">
      <div className="w-full flex justify-center">
        <div className="w-[1224px] flex flex-col justify-between">
          <div className="flex mb-12">
            <div>
              <div className="go-further">
                Go Further With The EasySet24 App
              </div>
              <div className="enjoy-savings">
                Enjoy savings on chosen hotels and flights when you book through
                the EasySet24 website. Additionally, earn One Key Cash for every
                booking made through the app.
              </div>
              <div className="secured">Secured By Europe GTP</div>
            </div>
            <div className="auto-layout pt-12">
              <img src="/homepage/auto-layout.png" />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="footer-text">
              <ul>
                <li className="footer-title">About Us</li>
                <li>Our Story</li>
                <li>Work With Us</li>
                <li>Press & Media</li>
                <li>Privacy & Security</li>
              </ul>
            </div>
            <div className="footer-text">
              <ul>
                <li className="footer-title">We offer</li>
                <li>Trip Sponsorship</li>
                <li>Last Minute Flights</li>
                <li>Best Deals</li>
                <li>AI Driven Search</li>
              </ul>
            </div>
            <div className="footer-text">
              <ul>
                <li className="footer-title">Headquarters</li>
                <li>England</li>
                <li>France</li>
                <li>Canada</li>
                <li>Iceland</li>
              </ul>
            </div>
            <div className="footer-text">
              <ul>
                <li className="footer-title">Travel Blogs</li>
                <li>Bali Travel Guide</li>
                <li>Sri Travel Guide</li>
                <li>Peru Travel Guide</li>
                <li>Swiss Travel Guide</li>
              </ul>
            </div>
            <div className="footer-text">
              <ul>
                <li className="footer-title">Activities</li>
                <li>Tour leading</li>
                <li>Cruising & Sailing</li>
                <li>Camping</li>
                <li>Kayaking</li>
              </ul>
            </div>
            <div className="">
              <ul>
                <li className="footer-title">Service</li>
                <li>Report error</li>
                <li>Ask online</li>
                <li>Travel Insurance</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="text-gray-400 flex mt-12 mb-12 max-w-[405px] gap-2">
              <img src="/homepage/visacard.png" />
              <img src="/homepage/ameexpress.png" />
              <img src="/homepage/mastercard.png" />
              <img src="/homepage/Paypal.png" />
            </div>

            <div className="flex justify-center gap-4 py-4 items-center">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined className="text-[#07689F] text-3xl hover:text-[#05486C] transition-colors duration-300" />
              </a>

              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SendOutlined className="text-[#07689F] text-3xl hover:text-[#05486C] transition-colors duration-300" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterOutlined className="text-[#07689F] text-3xl hover:text-[#05486C] transition-colors duration-300" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined className="text-[#07689F] text-3xl hover:text-[#05486C] transition-colors duration-300" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramOutlined className="text-[#07689F] text-3xl hover:text-[#05486C] transition-colors duration-300" />
              </a>
            </div>

            <div className="flex justify-between items-center">
              <Space.Compact style={{ width: "100%" }}>
                <Input
                  id="email"
                  placeholder="Enter Your Email"
                  prefix={<MailOutlined />}
                />
                <Button style={{ backgroundColor: "#07689F" }} type="primary">
                  Submit
                </Button>
              </Space.Compact>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-[#D9D9D9]  text-gray-800 py-4 px-6 items-center justify-around">
        <div className="w-[1224px] flex justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <CopyrightOutlined className="text-[#07689F] text-xl mr-2" />
            <span>Copyright EasySet24</span>
          </div>

          <div className="flex items-center mb-2 md:mb-0">
            <MailOutlined className="text-[#07689F] text-xl mr-2" />
            <span>Easyset24@Gmail.com</span>
          </div>

          <div className="text-center mb-2 md:mb-0 font-semibold">
            "EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"
          </div>

          <div className="flex items-center mb-2 md:mb-0">
            <EnvironmentOutlined className="text-[#07689F] text-xl mr-2" />
            <span>123 Oxford Street, London</span>
          </div>

          <div className="flex items-center">
            <PhoneOutlined className="text-[#07689F] text-xl mr-2" />
            <span>+44 20 7123 4567</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
