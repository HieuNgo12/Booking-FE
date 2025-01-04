import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./HotelSearchBody.css";
import { Slider } from "@mui/material";
import HotelListingCard from "./HotelListingCard";
import { services } from "../../Services/services";
import RadioGroup from "../../components/RadioGroup";
import SearchPlaceInput from "../../components/SearchPlaceInput";
import Loading from "../../components/Loading";
import { Checkbox, Divider, List } from "antd";
import ReactPaginate from "react-paginate";
import { HeartOutlined } from "@ant-design/icons";
import HeaderHotelPage from "./HeaderHotelPage";
import HotelFilterCheckboxes from "./HotelFilterCheckboxes";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const popularFilters = [
  "Breakfast Included",
  "All-Inclusive",
  "Free Cancellation",
  "Pool",
  "Pet Friendly",
];
const roomFacilities = [
  "Own Bathroom",
  "Kitchen",
  "See View",
  "Baby Bed",
  "Pet Friendly",
];
const passengerRatingArr = [
  "All",
  "Outstanding 9+",
  "Very Good 8+",
  "Good 7+",
  "Excellent",
  "Poor",
];
const leisureActivities = [
  "Sauna",
  "Fitness Centre",
  "Bar",
  "Steam Bath",
  "Yoga",
];
const travelSustainability = [
  "Sauna",
  "Fitness Centre",
  "Bar",
  "Steam Bath",
  "Yoga",
];
const CheckboxGroup = Checkbox.Group;

function HotelSearchBody() {
  const [pageCount, setPageCount] = useState(1);
  const [hotelList, setHotelList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [orgList, setOrgList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [clickSearch, setClickSearch] = useState(false);
  const [checkedListPassenger, setCheckedListPassenger] = useState([]);

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
    place: Yup.string(),
    vip: Yup.string(),
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
      setClickSearch(true);
    },
    // return redirect("");

    // setSuccess(true);
  });
  const getRooms = async (place) => {
    try {
      const itemsPerPage = 5;
      const data = await services.getHotelListSearch();
      const dataByPage = await services.getHotelListSearchByQuery(
        {
          place,
        },
        itemsPerPage,
        formik.values.place ? 0 : currentPage
      );
      console.log(dataByPage, data);
      const list = data?.data?.data;
      setOrgList(list);

      const listByPage = dataByPage?.data?.data;
      setPageCount(Math.ceil(list.length / itemsPerPage));
      setHotelList(listByPage);
    } catch (e) {}
  };
  useEffect(() => {
    getRooms();
  }, [currentPage]);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const onChangePLane = (list) => {
    setCheckedListPlane(list);
  };
  const onCheckAllChangePassenger = (e) => {
    setCheckedListPassenger(e.target.checked ? passengerRatingArr : []);
  };
  const onChangePassenger = (list) => {
    setCheckedListPassenger(list);
  };
  const indeterminatePassenger =
    checkedListPassenger.length > 0 &&
    checkedListPassenger.length < passengerRatingArr.length;
  const checkAllPassenger =
    passengerRatingArr.length === checkedListPassenger.length;
  const leftBar = () => {
    return (
      <div className="ml-4">
        <div>
          <div>
            <div className="grey-head-title">Filter By</div>
            <div>
              <Slider
                size="small"
                value={sliderValue}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setSliderValue(e.target.value);
                }}
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
          <div className="head-sidebar-title">Popular Rating</div>
          <div>
            {
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <Checkbox
                    indeterminate={indeterminatePassenger}
                    onChange={onCheckAllChangePassenger}
                    checked={checkAllPassenger}
                  >
                    All
                  </Checkbox>
                  <CheckboxGroup
                    options={popularFilters}
                    value={checkedListPassenger}
                    onChange={onChangePassenger}
                    className="flex flex-col gap-2"
                  />
                </div>
              </div>
            }
          </div>
        </div>
        <div>
          <div className="head-sidebar-title">Room Facilities</div>
          <div>{<HotelFilterCheckboxes options={roomFacilities} />}</div>
        </div>
        <div>
          <div className="head-sidebar-title">Guests Rating</div>
          <div>{<HotelFilterCheckboxes options={passengerRatingArr} />}</div>
        </div>
        <div>
          <div className="head-sidebar-title">Bed Type</div>
          <div> {<HotelFilterCheckboxes options={roomFacilities} />}</div>
        </div>
        <div>
          <div className="head-sidebar-title">Leisure Activities</div>
          <div>
            {" "}
            <div className="flex flex-col gap-2">
              {<HotelFilterCheckboxes options={leisureActivities} />}
            </div>
          </div>
        </div>
        <div>
          <div className="head-sidebar-title">Travel Sustainability</div>
          <div>
            {
              <HotelFilterCheckboxes
                options={[
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
            }
          </div>
        </div>
        <div>
          <div className="head-sidebar-title">Accommodation Classification</div>
          <div>
            {
              <HotelFilterCheckboxes
                options={[
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
            }
            
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
    );
  };
  const rightBar = () => {
    return (
      <div className="pl-6">
        <div >
          <div>
            <div></div>
            <div className="flex mt-6 mb-6">
              <div>
                <div>
                  <input
                    className="sort-by-input"
                    placeholder="Sort By - Our   Top Pick for Family"
                  />
                </div>
                <div className=" mt-6">
                  {/* <div className="gothenberg">{formik.values.place}</div> */}
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

        <div style={{ width: "1000px" }}>
          {!loading ? (
            hotelList.length ? (
              hotelList.map((hotel) => {
                return <HotelListingCard hotel={hotel} />;
              })
            ) : (
              "No Property Found"
            )
          ) : (
            <Loading />
          )}
          <div className="flex justify-between mt-10 mb-10">
            <button
              className="white-button-classic ml-3"
              onClick={() => {
                const favplaces = JSON.parse(localStorage.getItem("favList"));
                setHotelList(favplaces);
                setLoading(true);
              }}
            >
              List Your Favorite Places
            </button>
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
    );
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <SearchPlaceInput formik={formik} />

        <div className="flex">
          {leftBar()}
          {rightBar()}
        </div>
      </form>
    </div>
  );
}

export default HotelSearchBody;
