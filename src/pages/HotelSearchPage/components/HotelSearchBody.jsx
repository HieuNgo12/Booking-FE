import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./HotelSearchBody.css";
import { Slider } from "@mui/material";
import HotelListingCard from "./HotelListingCard";
import ReactPaginate from "react-paginate";
import { services } from "../../Services/services";
import PassengerModal from "./PassengerModal";
import RadioGroup from "../../components/RadioGroup";
const SignupSchema = Yup.object().shape({
  place: Yup.string()
    .min(2, "Required at least 2 letters")
    .max(50, "Required maximum 50 letters")
    .required("First Name Is Required"),
  vip: Yup.string()
    .min(2, "Company must be at least 2 letters")
    .max(50, "Company name must be maximum 50 letters")
    .required("VIP is Required"),
  passengers: Yup.string().required("Passengers is Required"),
  checkin: Yup.string().required("Check In is Required"),

  checkout: Yup.string()
    // .moreThan(Yup.ref("checkin"), "Cannot Exceed Checkin Date")
    .required("Check Out Is Required"),
});
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
  const [hotelList, sethotelList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePageClick = ({ selected }) => {
    console.log(selected);
    // setLoading(true);
    setCurrentPage(selected);
  };

  const itemsPerPage = 5;
  const getRooms = async () => {
    const data = await services.getHotelListByQuery(itemsPerPage, currentPage);

    console.log(data.data.data);
    sethotelList(data.data.data);
  };
  useEffect(() => {
    getRooms();
  }, [currentPage]);

  const formik = useFormik({
    initialValues: {
      place: "",
      vip: "",
      passengers: "",
      checkout: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      console.log(values);
      alert("Hello");
      const data = await services.postRoomSearch(values);
      console.log(data);
    },
    // return redirect("");

    // setSuccess(true);
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div></div>
        <div className="mt-10 mb-10">
          <div className="blue-title ">What is your Next Dream Place?</div>
          <div className="sub-title ">
            Find Exclusive Genius Rewards In Every Career Of The World
          </div>
        </div>
        <div>
          <div className="flex">
            <div>
              <div className="title">Place</div>
              <input
                className="search-input"
                id="place"
                name="place"
                type="place"
                onChange={formik.handleChange}
                value={formik.values.place}
              />

              <div className="flex">
                <div className="error-field ">
                  {" "}
                  {formik.errors.place && <div>{formik.errors.place}</div>}
                </div>
              </div>
            </div>
            <div>
              <div className="title">VIP</div>
              <input
                id="vip"
                className="small-input"
                name="vip"
                type="vip"
                onChange={formik.handleChange}
                value={formik.values.vip}
              />

              <div className="flex">
                <div className="error-field ">
                  {" "}
                  {formik.errors.vip && <div>{formik.errors.vip}</div>}
                </div>
              </div>
            </div>
            <div>
              <div className="title">Passengers - Room Condition</div>
              <input
                onClick={(ev) => setOpen(true)}
                className="search-input"
                id="passengers"
                name="passengers"
                type="passengers"
                onChange={formik.handleChange}
                value={formik.values.passengers}
              />

              <div className="flex">
                <div className="error-field ">
                  {" "}
                  {formik.errors.passengers && (
                    <div>{formik.errors.passengers}</div>
                  )}
                </div>
              </div>
              <PassengerModal
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                handleOpen={handleOpen}
              />
            </div>
            <div>
              <div className="title">Check In</div>
              <input
                className="search-input"
                id="checkin"
                name="checkin"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.checkin}
              />

              <div className="flex">
                <div className="error-field ">
                  {" "}
                  {formik.errors.checkin && <div>{formik.errors.checkin}</div>}
                </div>
              </div>
            </div>
            <div>
              <div className="title">Check Out</div>
              <input
                className="search-input"
                id="checkout"
                name="checkout"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.checkout}
              />

              <div className="flex">
                <div className="error-field ">
                  {" "}
                  {formik.errors.checkout && (
                    <div>{formik.errors.checkout}</div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="search-button  mt-5">
                Search
              </button>
            </div>
          </div>
          <div className="flex mt-6 mb-6">
            <div className="mr-6">
              <img src="/listpage/horizontal.png" />
            </div>
            <div>
              <div className="  sort-by-input">
                <input placeholder="Sort By - Our Top Pick for Family" />
              </div>
              <div>
                <div>Gothenberg</div>
                <div>120 properties found</div>
                <div className="flex">
                  <div>
                    Travel professionals dedicated to simplifying your travel
                    experience by curating flight and accommodation services on
                    a user-friendly platform. Committed to quality and
                    assurance.
                  </div>

                  <div>Find More Here ...</div>
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
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                  />
                </div>
                <div className="flex">
                  <div>
                    <button className="min-price">Min Price $</button>
                  </div>
                  <div>
                    <button className="min-price">Max Price $</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="head-sidebar-title">Popular Rating</div>
              <div>
                {guestRatings.map((rating) => {
                  return (
                    <div className="flex">
                      <input type="checkbox" />
                      <div className="ml-2">{rating.label}</div>
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
                      <div className="ml-2">{facility.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="head-sidebar-title">Guests Rating</div>
              <div>
                {roomFacilities.map((facility) => {
                  return (
                    <div className="flex">
                      <input type="radio" />
                      <div className="ml-2">{facility.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="head-sidebar-title">Bed Type</div>
              <div>
                {roomFacilities.map((facility) => {
                  return (
                    <div className="flex">
                      <input type="radio" />
                      <div className="ml-2">{facility.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="head-sidebar-title">Leisure Activities</div>
              <div>{<RadioGroup object={leisureActivities} />}</div>
            </div>
            <div>
              <div className="head-sidebar-title">Travel Sustainability</div>
              <div>
                <RadioGroup
                  flex={false}
                  object={[
                    {
                      value: "level2AndAbove1",
                      label: "Level 2 and Above 1",
                    },
                    {
                      value: "level2AndAbove2",
                      label: "Level  and Above 2",
                    },
                  ]}
                />
              </div>
            </div>
            <div>
              <div className="head-sidebar-title">
                Accommodation Classification
              </div>
              <div>
                <RadioGroup
                  flex={false}
                  object={[
                    {
                      value: "5stars",
                      label: "5 Stars",
                    },
                    {
                      value: "4stars",
                      label: "4 Stars",
                    },
                    {
                      value: "3stars",
                      label: "3 Stars",
                    },
                  ]}
                />
              </div>
            </div>
            <div>
              <div className="head-sidebar-title">Distance From the Centre</div>
              <div>
                <RadioGroup
                  flex={false}
                  object={[
                    {
                      value: "lessThan1KM",
                      label: "Less Than 1 KM",
                    },
                    {
                      value: "lessThan5KM",
                      label: "Less Than 5 KM",
                    },
                    {
                      value: "lessThan15KM",
                      label: "Less Than 15KM",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          {/* Card */}
          <div style={{ width: "1000px" }}>
            {hotelList.length
              ? hotelList.map((hotel) => {
                  return <HotelListingCard hotel={hotel} />;
                })
              : null}
            <div className="mt-10">
              <button className="white-button-classic">
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
