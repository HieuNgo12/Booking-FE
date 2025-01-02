import React, { useState, useEffect } from "react";
import FlightCard from "./FlightCard";
import { Slider } from "@mui/material";
import ResponsiveDrawer from "../../HotelSearchPage/components/HotelDrawer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useFormik } from "formik";
import SearchPlaceInput from "../../components/SearchPlaceInput";
import * as Yup from "yup";
import ReactPaginate from "react-paginate";
import RadioGroup from "../../components/RadioGroup";

function FlightSearchBody() {
  const [sliderValue, setSliderValue] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [hotelList, setHotelList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [orgList, setOrgList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);
  const SignupSchema = Yup.object().shape({
    place: Yup.string(),
    vip: Yup.string(),
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePageClick = ({ selected }) => {
    setLoading(true);
    console.log(selected);
    // setLoading(true);
    setCurrentPage(selected);
  };
  useEffect(() => {
    const timeId = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeId);
    };
  }, [loading]);
  const formik = useFormik({
    initialValues: {
      place: "",

      vip: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      getRooms(values.place);
      setClickSearch(true);
    },
    // return redirect("");

    // setSuccess(true);
  });

  const airlines = [
    {
      label: "Austrian Airlines",
      value: "austrianAirlines",
    },
    {
      label: "Lufthansa",
      value: "lufthansa",
    },
    {
      label: "Brussel Airlines",
      value: "brusselAirlines",
    },
    {
      label: "ITA Airways",
      value: "itaAirways",
    },
  ];
  const passengerRatings = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Outstanding 8+",
      value: "outstanding",
    },
    {
      label: "Very Good 8+",
      value: "veryGood8+",
    },
    {
      label: "Good7+",
      value: "good7+",
    },
    {
      label: "Excellent",
      value: "excellent",
    },
    {
      label: "Poor",
      value: "poor",
    },
  ];  const popularFilters = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Drink Included",
      value: "drinkIncluded",
    },
    {
      label: "Taxes Included",
      value: "taxesIncluded",
    },
    {
      label: "VIP",
      value: "vip",
    },
    {
      label: "Child Friendly",
      value: "childFriendly",
    },
    {
      label: "Pet Friendly",
      value: "petFriendly",
    },
  ];
  const leftBar = () => {
    return (
      <div className="flex pl-3">
        <div>
          <div>
            <div>Departure Time</div>
            <Slider
              size="small"
              value={sliderValue}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <div>
              <button className="time-button">From 12:00</button>
              <button className="time-button">Up to 16:45</button>
            </div>
          </div>
          <div>Trip Duration</div>
          <Slider
            size="small"
            value={sliderValue}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <div>
            <button className="time-button">From: 7h to 12h</button>
            <button className="time-button">One Stop</button>
          </div>
          <div>
            <div className="head-title mt-10">Airline</div>

            {airlines.length
              ? airlines.map((airline) => {
                  return (
                    <div className="flex">
                      <div>
                        <input type="checkbox"  value={airline.value} />
                      </div>
                      <div className="ml-2">{airline.label}</div>
                    </div>
                  );
                })
              : null}
            <div className="head-title mt-3">Passengers Rating</div>

            {
              <div>
                <div></div>
                <div>
                  <RadioGroup object={passengerRatings} />
                </div>
              </div>
            }

            <div className="head-title mt-10">Popular Filters</div>

            {popularFilters.length
              ? popularFilters.map((popularFilter) => {
                  return (
                    <div className="flex">
                      <div>
                        <input type="checkbox" value={popularFilter.value} />
                      </div>
                      <div className="ml-2">{popularFilter.label}</div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  };
  const rightBar = () => {
    return (
      <div>
        <Navbar />
        <div>
          <SearchPlaceInput formik={formik} />
        </div>

        <div>
          <div className="mt-6">
            <FlightCard />
          </div>
          <div className="flex mt-10">
            <div className="white-button-classic">
              <button
                onClick={() => {
                  const favplaces = JSON.parse(localStorage.getItem("favList"));
                  setHotelList(favplaces);
                  setLoading(true);
                }}
              >
                List Your Favorite Places
              </button>
            </div>
            <div>
              {clickSearch && formik.values.place ? null : (
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  return (
    <div>
      <ResponsiveDrawer leftBar={leftBar} rightBar={rightBar} />
    </div>
  );
}

export default FlightSearchBody;
