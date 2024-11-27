import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className=" ">
        <div className="flex mb-12">
        <div>
          <div className="go-further">Go Further With The EasySet24 App</div>
          <div className="enjoy-savings">
            Enjoy savings on chosen hotels and flights when you book through the
            EasySet24 website. Additionally, earn One Key Cash for every booking
            made through the app.
          </div>
          <div className="secured">Secured By Europe GTP</div>
        </div>
        <div className="auto-layout pt-12">
          <img src="./homepage/auto-layout.png" />
        </div>
      </div>
      <hr />
      <div className=" flex" style={{ width: "1600px" }}>
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
      <div className="flex">
        <div className="copy-right  text-gray-400 flex mt-12 flex">
          <img src="./homepage/visacard.png" />
          <img src="./homepage/ameexpress.png" />
          <img src="./homepage/mastercard.png" />
          <img src="./homepage/Paypal.png" />
        </div>
        <div className="flex social-media">
          <img src="./homepage/linkedin.png" />
          <img src="./homepage/telegram.png" />
          <img src="./homepage/twitter.png" />
          <img src="./homepage/Facebook.png" />
          <img src="./homepage/insta.png" />
        </div>
        <div>
          <div>Email</div>
          <div>
            <input placeholder="Enter Your Email" className="email-input" />
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
        <div>
        <img src="./homepage/linkedin.png" />
          <img src="./homepage/telegram.png" />
          <img src="./homepage/twitter.png" />
          <img src="./homepage/Facebook.png" />
          <img src="./homepage/insta.png" />
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
