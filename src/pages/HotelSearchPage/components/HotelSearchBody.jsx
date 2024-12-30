import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./HotelSearchBody.css";
import { Slider } from "@mui/material";
import HotelListingCard from "./HotelListingCard";
import ReactPaginate from "react-paginate";
import { services } from "../../Services/services";
import PassengerModal from "./PassengerModal";
import RadioGroup from "../../components/RadioGroup";
import SearchPlaceInput from "../../components/SearchPlaceInput";
import Loading from "../../components/Loading";
import ReactGoogleMap from "../../components/ReactGoogleMap";

const popularFilters = [
  {
    id: "breakfastIncluded",
    label: "Breakfast Included",
  },
  {
    id: "allInclusive",
    label: "All-Inclusive",
  },
  {
    id: "freeCancellation",
    label: "Free Cancellation",
  },
  {
    id: "pool",
    label: "Pool",
  },
  {
    id: "petFriendly",
    label: "Pet Friendly",
  },
];
const roomFacilities = [
  {
    id: "ownBathroom",
    label: "Own Bathroom",
  },
  {
    id: "kitchen",
    label: "Kitchen",
  },
  {
    id: "seeView",
    label: "See View",
  },
  {
    id: "babyBed",
    label: "Baby Bed",
  },
  {
    id: "petFriendly",
    label: "Pet Friendly",
  },
];
const guestRatings = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "outstanding9",
    label: "Outstanding 9+",
  },
  {
    id: "veryGood8",
    label: "Very Good 8+",
  },
  {
    id: "good7",
    label: "Good 7+",
  },
  {
    id: "excellent",
    label: "Excellent",
  },
  {
    id: "poor",
    label: "Poor",
  },
];
const leisureActivities = [
  {
    id: "sauna",
    label: "Sauna",
  },
  {
    id: "fitnessCentre",
    label: "Fitness Centre",
  },
  {
    id: "bar",
    label: "Bar",
  },
  {
    id: "steamBath",
    label: "Steam Bath",
  },
  {
    id: "yoga",
    label: "Yoga",
  },
];
const travelSustainability = [
  {
    id: "sauna",
    label: "Sauna",
  },
  {
    id: "fitnessCentre",
    label: "Fitness Centre",
  },
  {
    id: "bar",
    label: "Bar",
  },
  {
    id: "steamBath",
    label: "Steam Bath",
  },
  {
    id: "yoga",
    label: "Yoga",
  },
];
function HotelSearchBody() {
  const [pageCount, setPageCount] = useState(1);
  const [hotelList, setHotelList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [orgList, setOrgList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
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

  const SignupSchema = Yup.object().shape({
    place: Yup.string()
      .min(2, "Required at least 2 letters")
      .max(50, "Required maximum 50 letters")
      .required("First Name Is Required"),
    vip: Yup.string()
      .min(2, "Company must be at least 2 letters")
      .max(50, "Company name must be maximum 50 letters"),
  });
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
    },
    // return redirect("");

    // setSuccess(true);
  });
  const getRooms = async (place) => {
    try{

      const itemsPerPage = 5;
      const data = await services.getHotelListSearch();
      const dataByPage = await services.getHotelListSearchByQuery(
        {
          place,
        },
        itemsPerPage,
        currentPage
      );
      console.log(dataByPage, data);
      const list = data?.data?.data;
      setOrgList(list);
  
      const listByPage = dataByPage?.data?.data;
      setPageCount(Math.ceil(list.length / itemsPerPage));
      setHotelList(listByPage);
    }catch(e){
    }
  };
  useEffect(() => {
    getRooms();
  }, [currentPage]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          
        </div>
        <div className="mt-10 mb-10">
          <div className="blue-title ">What is your Next Dream Place?</div>
          <div className="sub-title ">
            Find Exclusive Genius Rewards In Every Career Of The World
          </div>
        </div>
        <div>
          <SearchPlaceInput formik={formik} />
          <div>
            <div className="flex mt-6">
              <div>
                <ReactGoogleMap />{" "}
              </div>
              <div></div>
              <div>
                <div>
                  <input
                    className="sort-by-input"
                    placeholder="Sort By - Our Top Pick for Family"
                  />
                </div>
                <div className="ml-2 mt-6">
                  <div className="gothenberg">{formik.values.place}</div>
                  <div className="properties-found">
                    {orgList.length + " "} properties found
                  </div>
                  <div>
                    <div>
                      travel professionals dedicated to simplifying your travel
                      experience by curating flight and accommodation services
                      on a user-friendly platform. Committed to quality and
                      assurance. Find More Here ...
                    </div>
                    <div>Find out more </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div style={{ width: "30%" }}>
            <div>
              <div>
                <div className="grey-head-title">Filter By</div>
                <div>
                  <Slider
                    size="small"
                    value={sliderValue}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                  />
                </div>
                <div className="flex">
                  <div>
                    <button
                      className="min-price"
                      onClick={() => {
                        setSliderValue(0);
                        formik.values.place = "";
                      }}
                    >
                      Min Price $
                    </button>
                  </div>
                  <div>
                    <button
                      className="min-price"
                      onClick={() => {
                        setSliderValue(120);
                      }}
                    >
                      Max Price $
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="head-sidebar-title">Guests Rating</div>
              <div>
                {popularFilters.map((rating) => {
                  return (
                    <div className="flex">
                      <input type="checkbox" />
                      <div>{rating.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="head-sidebar-title">Room Facilities</div>
              <div>
                {roomFacilities.map((facility) => {
                  return (
                    <div className="flex">
                      <input type="checkbox" />
                      <div>{facility.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="head-sidebar-title">Guests Rating</div>
              <div>{<RadioGroup object={guestRatings} />}</div>
            </div>
            <div>
              <div className="head-sidebar-title">Bed Type</div>
              <div>{<RadioGroup object={roomFacilities} />}</div>
            </div>
            <div>
              <div>Guests Rating</div>
              <div>
                {guestRatings.map((rating) => {
                  return (
                    <div className="flex">
                      <input type="radio" />
                      <div>{rating.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div>Leisure Activities</div>
              <div>
                {leisureActivities.map((activity) => {
                  return (
                    <div className="flex">
                      <input type="radio" />
                      <div>{activity.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Card */}
          <div style={{ width: "1000px" }}>
            {!loading  ? hotelList.length ?(
              hotelList.map((hotel) => {
                return <HotelListingCard hotel={hotel} />;
              })
            ): "No Property Found" : (
              <Loading />
            )}
            <div className="mt-10">
              <button
                className="white-button-classic"
                onClick={() => {
                  const favplaces = JSON.parse(localStorage.getItem("favList"));
                  setHotelList(favplaces);
                  setLoading(true);
                }}
              >
                List Your Favorite Places
              </button>
              <button className="button-classic" style={{ marginLeft: "45%" }}>
                See More Search Results
              </button>
            </div>
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
          </div>
        </div>
        
      
      </form>
    </div>
  );
}

export default HotelSearchBody;
