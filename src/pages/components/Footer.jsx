import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer ">
      <div className="flex mb-12 ml-6">
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
          <img src="/homepage/auto-layout.png" />
        </div>
      </div>
      <hr />
      <div className=" flex" style={{ width: "1400px" }}>
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
        <div className="copy-right  text-gray-400 flex mt-12 flex mb-12">
          <img src="/homepage/visacard.png" />
          <img src="/homepage/ameexpress.png" />
          <img src="/homepage/mastercard.png" />
          <img src="/homepage/Paypal.png" />
        </div>
        <div className="flex social-media">
          <img src="/homepage/linkedin.png" />
          <img src="/homepage/telegram.png" />
          <img src="/homepage/twitter.png" />
          <img src="/homepage/Facebook.png" />
          <img src="/homepage/insta.png" />
        </div>
        <div>
          <div>Email</div>
          <div>
            <input placeholder="Enter Your Email" className="email-input" />
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex bottom-footer ">
        <div className="  flex justify-center mr-6 ">
          <div>
            <img src="/homepage/R.png" />
          </div>
          <div className="ml-2">Copyright Rimel EasySet</div>
        </div>
        <div className=" flex justify-center mr-6 ">
          <div>
            <img src="/homepage/mail.png" />{" "}
            <div className="   flex justify-center ">
              123 Oxford Street. London Kingdom
            </div>
          </div>
          <div className="ml-2">Easyset@gmail.com</div>
        </div>
        <div className="  flex justify-center mr-6 ">
          Easyset24: Seamless Journeys. Unrivalled Travel Wisdom
        </div>
        <div className="   flex justify-center ">
          123 Oxford Street. London Kingdom
        </div>
        <div className="   flex justify-center ml-10">446699</div>
      </div>
    </div>
  );
}

export default Footer;
