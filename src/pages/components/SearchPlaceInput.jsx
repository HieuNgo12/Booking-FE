import React, { useEffect, useState } from "react";
import PassengerModal from "../HotelSearchPage/components/PassengerModal";
import { Input, AutoComplete, Form } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const suggestions = [
  { value: "Thành Phố Hồ Chí Minh" },
  { value: "Hà Nội" },
  { value: "Đà Nẵng" }
];
function SearchPlaceInput({ formik, ...props }) {
  const [pageCount, setPageCount] = useState(1);
  const [hotelList, setHotelList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [departureOptions, setDepartureOptions] = useState(suggestions);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePageClick = ({ selected }) => {
    console.log(selected);
    // setLoading(true);
    setCurrentPage(selected);
  };
  const handleDepartureSearch = (value) => {
    setDepartureOptions(
      suggestions.filter((item) =>
        item.value.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="flex">
      <div className="flex flex-wrap md:flex-nowrap items-end justify-center">
        <div className=" ml-4">
          <Form.Item
            style={{ width: "1030px" }}
            id="place"
            name="place"
            type="place"
            onChange={formik.handleChange}
            value={formik.values.place}
          >
            <div className="title">Place</div>
            <AutoComplete
              options={departureOptions}
              onSearch={handleDepartureSearch}
              placeholder="Type your destination"
              className=" h-10"
            />
            <div className="flex">
              <div className="error-field ">
                {" "}
                {formik.errors.place && <div>{formik.errors.place}</div>}
              </div>
            </div>
          </Form.Item>
          {/* <Input
            className="search-input  p-2"
            style={{ width: "1030px" }}
            id="place"
            name="place"
            type="place"
            onChange={formik.handleChange}
            value={formik.values.place}
          /> */}
        </div>
        <Form.Item className="flex items-end">
          <button type="submit" className="search-button  mt-5">
            Search
          </button>
        </Form.Item>
      </div>
    </div>
  );
}

export default SearchPlaceInput;
