import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelDetailTabs from "./components/Tabs";
import Slider from "react-slick";
import ArrowSlider from "./components/ArrowSlider";
import "./components/Tabs.css";
import "./HotelDetailPage.css";
import { url } from "../../url";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Questions from "./components/Questions";
function HotelDetailPage({ hotels, ...props }) {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    const getHotel = async () => {
      console.log(hotelId);
      const dataUrl = `${url}/api/v1/hotel/${hotelId}`;
      const data = await axios.get(dataUrl);
      console.log(data.data.data);
      setHotel([data.data.data]);
    };
    getHotel();
  }, []);
  return (
    <div>
      <Navbar />
      {hotel?.length ? (
        <div className="img-container  flex p-6">
          <div
            className="p-6"
            style={{ width: "601px", height: "558px", borderRadius: "4px" }}
          >
            <img src={"/detailPage/photo.png"} />
          </div>
          <div style={{ width: "601px", height: "558px" }}>
            <div className="flex p-6">
              <img
                className="image-corner mr-6"
                style={{ width: "294px", height: "247px", borderRadius: "4px" }}
                src={"/detailPage/photo.png"}
              />
              <img
                className="image-corner"
                style={{ width: "294px", height: "247px", borderRadius: "4px" }}
                src={"/detailPage/photo.png"}
              />
            </div>
            <div className="flex p-6">
              <img
                className="image-corner mr-6"
                style={{ width: "50%", height: "247px", borderRadius: "4px" }}
                src={"/detailPage/photo.png"}
              />
              <img
                className="image-corner"
                style={{ width: "50%", height: "247px", borderRadius: "4px" }}
                src={"/detailPage/photo.png"}
              />
            </div>
          </div>
        </div>
      ) : null}
      {hotel.length ? <HotelDetailTabs hotel={hotel} /> : null}
      <div className="ml-6">
        <div>
          <div>
        
            <div className="head-title">
              The Most Frequented Questions Asked By Travellers
            </div>
         
          </div>
        </div>
        <div>
              <Questions />
            </div>

        <div className="black-card">
          Since This option is a non-refundable reservation And there is no
          cancellation opportunity, payment is usually processed at the time of
          booking or shortly thereafter.
        </div>
        <div className="black-card">Is there Anti-Allergic Meal?</div>
        <div className="black-card">Does The Hotel Have A pool?</div>
        <div className="black-card">
          Any Idenfication Documents Is Necessary
        </div>
        <div className="black-card">
          What are the Checkin and Checkout Time?
        </div>
        <div className="black-card">Why was I charged?</div>
        <div className="black-card">Is there a sport?</div>
      </div>

      <div className=" mt-6 ">
        <ArrowSlider />
        <div>
          <div className="review-rates mb-2 mt-2 ml-6">Review Rates</div>
          <div className="flex ml-6">
            <div style={{ width: "20%" }}>
              <div className="flex">
                <div className="review-rating-text ">Staff Politeness</div>
                <div className="review-number">8.5</div>
              </div>

              <div>
                <img src="/detailPage/Line.png" />
              </div>
            </div>
            <div style={{ width: "20%" }}>
              <div className="flex">
                <div className="review-rating-text">VIP Options</div>
                <div className="review-number">8</div>
              </div>

              <div>
                <img src="/detailPage/Line.png" />
              </div>
            </div>

            <div style={{ width: "20%" }}>
              <div className="flex">
                <div className="review-rating-text">Free Wi-fi Speed</div>
                <div className="review-number"> 8</div>
              </div>

              <div>
                <img src="/detailPage/Line.png" />
              </div>
            </div>

            <div style={{ width: "20%" }}>
              <div className="flex">
                <div className="review-rating-text">Cleanliness</div>
                <div className="review-number">6</div>
              </div>

              <div>
                <img src="/detailPage/Line.png" />
              </div>
            </div>

            <div style={{ width: "20%" }}>
              {" "}
              <div className="flex">
                <div className="review-rating-text">
                  Access To The City Center
                </div>
                <div className="review-number">6</div>
              </div>
              <div>
                <img src="/detailPage/Line.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HotelDetailPage;
