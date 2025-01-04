import React, { useEffect, useState } from "react";
import PassengerModal from "../HotelSearchPage/components/PassengerModal";
import { Input } from "antd";
function SearchPlaceInput({ formik, ...props }) {
  const [pageCount, setPageCount] = useState(1);
  const [hotelList, setHotelList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePageClick = ({ selected }) => {
    console.log(selected);
    // setLoading(true);
    setCurrentPage(selected);
  };
  return (
    <div className="flex">
      <div className="flex flex-wrap md:flex-nowrap items-end justify-center">
        <div className=" ml-4">
          <div className="title">Place</div>
          <Input
            className="search-input  p-2"
            style={{ width: "1030px" }}
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
        {/* <div>
          <div className="title">VIP</div>
          <input
            id="vip"
            className="search-input  p-2"
            style={{ width: "356px" }}
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
        </div> */}

        <div>
          <button type="submit" className="search-button  mt-5">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPlaceInput;
