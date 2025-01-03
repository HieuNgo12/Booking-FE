import React, { useEffect, useState } from "react";
import FlightCard from "./FlightCard";
import { Slider } from "@mui/material";
import { Button } from "antd";
import { Checkbox, Divider, List } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { apiGet } from "../../../API/APIService";

const CheckboxGroup = Checkbox.Group;
const passengerRatingArr = [
  "Outstanding 9+",
  "Very good 8+",
  "Good 7+",
  "Excellent",
  "Poor",
];
const airPlaneNameArr = [
  "Vietnam Airlines",
  "VietJet",
  "Jetstar Pacific",
  "Bamboo Airways",
];

const popularFiltersArr = [
  "Drink Included",
  "Taxes Included",
  "VIP",
  "Child Friendly",
  "Pet friendly",
];

function FlightSearchBody() {
  const [sliderValue, setSliderValue] = useState(0);
  const [checkedListPLane, setCheckedListPlane] = useState([]);
  const [checkedListPassenger, setCheckedListPassenger] = useState([]);
  const [checkedListPopular, setCheckedListPopular] = useState([]);
  const [dataResult, setDataResult] = useState([]);
  const location = useLocation();

  const callApi = async () => {
    try {
      const response = await apiGet("search-flight", location.state.findFlight);
      setDataResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.state) {
      callApi();
    }
  }, [location?.state?.findFlight]);

  console.log(location?.state?.findFlight);
  //Air Plane
  const checkAllPLane = airPlaneNameArr.length === checkedListPLane.length;
  const indeterminatePlane =
    checkedListPLane.length > 0 &&
    checkedListPLane.length < airPlaneNameArr.length;
  const onChangePLane = (list) => {
    setCheckedListPlane(list);
  };

  const onCheckAllChangePLane = (e) => {
    setCheckedListPlane(e.target.checked ? airPlaneNameArr : []);
  };

  // Passenger Rating
  const checkAllPassenger =
    passengerRatingArr.length === checkedListPassenger.length;
  const indeterminatePassenger =
    checkedListPassenger.length > 0 &&
    checkedListPassenger.length < passengerRatingArr.length;
  const onChangePassenger = (list) => {
    setCheckedListPassenger(list);
  };

  const onCheckAllChangePassenger = (e) => {
    setCheckedListPassenger(e.target.checked ? passengerRatingArr : []);
  };

  // Popular Filters
  const checkAllPopular =
    popularFiltersArr.length === checkedListPopular.length;
  const indeterminatePopular =
    checkedListPopular.length > 0 &&
    checkedListPopular.length < popularFiltersArr.length;
  const onChangePopular = (list) => {
    setCheckedListPopular(list);
  };

  const onCheckAllChangePopular = (e) => {
    setCheckedListPopular(e.target.checked ? popularFiltersArr : []);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="min-w-[1224px]">
      <div className="flex justify-between gap-5">
        <div className="flex flex-col gap-5 max-w-64">
          <div>
            <div className="head-title">Departure Time</div>
            <Slider
              size="small"
              value={sliderValue}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <div className="flex">
              <Button className="time-button">From 12:00</Button>
              <Button className="time-button">Up to 16:45</Button>
            </div>
          </div>

          <div>
            <div className="head-title">Trip Duration</div>
            <Slider
              size="small"
              value={sliderValue}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <div className="flex">
              <Button className="time-button">From: 7h to 12h</Button>
              <Button className="time-button">One Stop</Button>
            </div>
          </div>

          {/*Airline Name*/}
          <div>
            <div className="head-title">Airline</div>
            <div className="flex flex-col gap-2">
              <Checkbox
                indeterminate={indeterminatePlane}
                onChange={onCheckAllChangePLane}
                checked={checkAllPLane}
              >
                All
              </Checkbox>
              <CheckboxGroup
                options={airPlaneNameArr}
                value={checkedListPLane}
                onChange={onChangePLane}
                className="flex flex-col gap-2"
              />
            </div>
          </div>

          {/* Passenger Rating */}
          <div>
            <div className="head-title">Passenger Rating</div>
            <div className="flex flex-col gap-2">
              <Checkbox
                indeterminate={indeterminatePassenger}
                onChange={onCheckAllChangePassenger}
                checked={checkAllPassenger}
              >
                All
              </Checkbox>
              <CheckboxGroup
                options={passengerRatingArr}
                value={checkedListPassenger}
                onChange={onChangePassenger}
                className="flex flex-col gap-2"
              />
            </div>
          </div>

          {/* Popular Filters */}
          <div>
            <div className="head-title">Popular Filters</div>
            <div className="flex flex-col gap-2">
              <Checkbox
                indeterminate={indeterminatePopular}
                onChange={onCheckAllChangePopular}
                checked={checkAllPopular}
              >
                All
              </Checkbox>
              <CheckboxGroup
                options={popularFiltersArr}
                value={checkedListPopular}
                onChange={onChangePopular}
                className="flex flex-col gap-2"
              />
            </div>
          </div>

          <div className="flex">
            <Checkbox
              onChange={onChange}
              style={{
                transform: "scale(1.5)",
                transformOrigin: "center",
              }}
            />
            <div className="flex flex-col  ml-5">
              <div className="font-bold text-base">
                Filter With the Help Of AI.
              </div>
              <span className="font-semibold text-sm text-[#07689F] cursor-pointer">
                See the results here !
              </span>
            </div>
          </div>

          <div className="flex">
            <Checkbox
              onChange={onChange}
              style={{
                transform: "scale(1.5)",
                transformOrigin: "center",
              }}
            />
            <div className="flex flex-col  ml-5">
              <div className="font-bold text-base">Filter Randomly</div>
              <span className="font-semibold text-sm text-[#07689F] cursor-pointer">
                See the results here !
              </span>
            </div>
          </div>
        </div>

        <div className="border-[#F9F9F9] border-solid border"></div>

        <div className="">
          {dataResult && dataResult.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={dataResult}
              pagination={{
                pageSize: 5,
              }}
              renderItem={(item) => (
                <List.Item>
                  <FlightCard dataSource={item} />
                </List.Item>
              )}
            />
          ) : (
            <div>Không tìm thấy kết quả phù hợp !</div>
          )}

          <div className="flex justify-between mt-10 mb-10">
            <Button
              className="text-[#07689F] border-[#07689F] h-10"
              icon={<HeartOutlined />}
              onClick={() => {
                const favplaces = JSON.parse(localStorage.getItem("favList"));
                setHotelList(favplaces);
                setLoading(true);
              }}
              // prefix={}
            >
              List Your Favorite Places
            </Button>
            <Button
              type="primary"
              className="text-white bg-[#07689F] h-10"
              onClick={() => {
                const favplaces = JSON.parse(localStorage.getItem("favList"));
                setHotelList(favplaces);
                setLoading(true);
              }}
            >
              See More Search Results <RightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSearchBody;
