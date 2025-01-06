import React, { useEffect, useState } from "react";
import ExploreStayCard from "./ExploreStayCard";
import "./HomePageBody.css";
import { services } from "../../Services/services";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import HeaderHotelPage from "../../HotelSearchPage/components/HeaderHotelPage";
import SearchPlaceInput from "../../components/SearchPlaceInput";

function HomePageBody() {
  const SignupSchema = Yup.object().shape({
    place: Yup.string()
      .min(2, "Required at least 2 letters")
      .max(50, "Required maximum 50 letters")
      .required("Place Is Required"),
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
  const [hotelList, setHotelList] = useState([]);
  const formik = useFormik({
    initialValues: {
      place: "",
      vip: "",
      passengers: "",
      checkout: "",
      children: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      
    },
    // return redirect("");

    // setSuccess(true);
  });
  useEffect(() => {
    const getHotel = async () => {
      const data = await services.getHotelList();
      setHotelList(data.data.data);
    };
    getHotel();
  }, []);
  let navigate = useNavigate();

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* <div className="discover-your-trip">Discover your trip Worldwide!</div> */}

        {/* Radio */}
        <div className="mb-6">
          <div className="head-titles mb-6">Special Offers</div>
        </div>

        {/* Image Grid  */}
     
        <div>
          <img src="/special-offers.png" />
        </div>
        {/* Explore stay */}
        <div>
          <div className="head-titles mt-6 mb-6">
            Explore Stays In Trending Hotel
          </div>
          <div className="flex">
            <div class="grid grid-cols-4 gap-4">
              {hotelList.length
                ? hotelList.map((hotel) => {
                    return <ExploreStayCard hotel={hotel} />;
                  })
                : null}
            </div>
          </div>
        </div>
        <div>
          <div className="head-titles mb-6">
            Compare The Highest Review Past Offers
          </div>
        </div>
        <div>
          <img src="/homepage/inspiration.png" />
        </div>
        <div className="mt-6">
          <img src="/homepage/back-review-cards.png" />
        </div>
        <div className="mt-6">
          <img src="/homepage/hotel-service.png" />
        </div>
      </form>
    </div>
  );
}

export default HomePageBody;
