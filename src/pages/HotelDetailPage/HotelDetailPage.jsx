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
import { addDefaultSrc } from "../Services/defaultImage";
import SearchPlaceInput from "../components/SearchPlaceInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import CheckoutInput from "../components/CheckoutInput";
import { useNavigate } from "react-router-dom";
import FiveStar from "./components/PostReview/FiveStar";
import { toast } from "react-toastify";
import ChatBox from "../ChatPage/ChatBox";
function HotelDetailPage({ hotels, ...props }) {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState([]);
  const [disable, setDisable] = useState(false);
  const [postingComment, setPostingComment] = useState(false);

  const SignupSchema = Yup.object().shape({
    passengers: Yup.string().required("Passengers is Required"),
    checkin: Yup.date().required("Check In is Required"),

    checkout: Yup.date()
      .when(
        "checkin",
        (checkin, yup) =>
          checkin && yup.min(checkin, "Checkout Date cannot be before Checkin")
      )
      // .moreThan(Yup.ref("checkin"), "Cannot Exceed Checkin Date")
      .required("Check Out Is Required"),
    children: Yup.string().required("Children is Required"),
  });
  const navigate = useNavigate();
  const getHotel = async () => {
    const dataUrl = `${url}/api/v1/hotel/${hotelId}`;
    const data = await axios.get(dataUrl);

    setHotel([data.data.data]);
  };
  const formik = useFormik({
    initialValues: {
      passengers: "",
      checkin: "",
      checkout: "",
      children: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      // console.log(values);
      setDisable(true);
      toast.success("Check In Checkout Date Confirmed", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => setChanegBtn(true),
      });
      localStorage.setItem(
        "checkoutTime",
        JSON.stringify({
          checkin: values.checkin,
          checkout: values.checkout,
        })
      );
      localStorage.setItem(
        "hotelPassengers",
        JSON.stringify({
          passengers: values.passengers,
          children: values.children,
        })
      );
      // navigate(`/payment-detail${JSON.parse(localStorage.getItem("roomId"))}`, { replace: true })
    },
    // return redirect("");

    // setSuccess(true);
  });
  useEffect(() => {
 
    getHotel();
  }, []);
  useEffect(() => {
 
    getHotel();
  }, [postingComment]);
  const handleSubmit = (values, customParam) => {
    console.log({ values, customParam });
  };
  return (
    <div className="center-gov content-center ">
      <form>
        {" "}
        <Navbar />
        {hotel?.length ? (
          <div className="img-container  flex p-6">
            <div className="">
              <img
                src={hotel[0]?.imgHotel?.avatar}
                onError={(ev) => addDefaultSrc(ev)}
                style={{ width: "601px", height: "565px", borderRadius: "4px" }}
              />
            </div>
            <div style={{ width: "601px", height: "558px" }}>
              <div className="flex ml-2 ">
                <img
                  className="image-corner mr-2 mb-2"
                  style={{
                    width: "294px",
                    height: "279px",
                    borderRadius: "4px",
                  }}
                  onError={(ev) => addDefaultSrc(ev)}
                  src={hotel[0]?.imgHotel?.avatar}
                />
                <img
                  className="image-corner mb-2"
                  style={{
                    width: "294px",
                    height: "279px",
                    borderRadius: "4px",
                  }}
                  onError={(ev) => addDefaultSrc(ev)}
                  src={hotel[0]?.imgHotel?.avatar}
                />
              </div>
              <div className="flex  ml-2">
                <img
                  className="image-corner mr-2"
                  style={{
                    width: "294px",
                    height: "279px",
                    borderRadius: "4px",
                  }}
                  onError={(ev) => addDefaultSrc(ev)}
                  src={hotel[0]?.imgHotel?.avatar}
                />
                <img
                  className="image-corner"
                  style={{
                    width: "294px",
                    height: "279px",
                    borderRadius: "4px",
                  }}
                  onError={(ev) => addDefaultSrc(ev)}
                  src={hotel[0]?.imgHotel?.avatar}
                />
              </div>
            </div>
          </div>
        ) : null}
        {hotel.length ? (
          <HotelDetailTabs disable={disable} hotel={hotel} />
        ) : null}
        <div className="ml-6">
          <div>
            <div>
              <div className="head-title mb-6">
                The Most Frequented Questions Asked By Travellers
              </div>
            </div>
          </div>
          <div>
            <Questions />
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
          <ArrowSlider hotel={hotel[0]} />
          <FiveStar hotel={hotel[0]} postingComment={postingComment} setPostingComment={setPostingComment}/>
          <div>
            <div className="review-rates mb-6 mt-6 ml-6">Review Rates</div>
            <div className="flex ml-6 mb-6">
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
        <ChatBox />
      </form>
    </div>
  );
}

export default HotelDetailPage;
