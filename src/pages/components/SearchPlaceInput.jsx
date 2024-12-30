import React, { useEffect, useState } from "react";
import PassengerModal from "../HotelSearchPage/components/PassengerModal";
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
      <div>
        <div className="title">Place</div>
        <input
          className="search-input  p-2"
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
          className="small-input p-2"
          style={{
            width: "200px",
          }}
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
        <button type="submit" className="search-button  mt-5">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchPlaceInput;
