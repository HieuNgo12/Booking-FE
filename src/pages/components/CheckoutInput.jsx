import React, { useEffect, useState } from "react";
import PassengerModal from "../HotelSearchPage/components/PassengerModal";
function CheckoutInput({ formik, disable, ...props }) {
  const [pageCount, setPageCount] = useState(1);
  const [hotelList, setHotelList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePageClick = ({ selected }) => {
    console.log(selected);
    // setLoading(true);
    setDisabled(true);
    setCurrentPage(selected);
  };
  return (
    <div className="flex">
      <div>
        <div className="title">Passengers - Room Condition</div>
        <input
          //   onClick={(ev) => setOpen(true)}
          className="search-input"
          style={{ disabled: true } }
          disabled={disable ? "disabled" : ""}
          id="passengers"
          name="passengers"
          type="passengers"
          onChange={formik.handleChange}
          value={formik.values.passengers}
        />

        <div className="flex">
          <div className="error-field ">
            {" "}
            {formik.errors.passengers && <div>{formik.errors.passengers}</div>}
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
          disabled={disable ? "disabled" : ""}
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
          disabled={disable ? "disabled" : ""}
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
            {formik.errors.checkout && <div>{formik.errors.checkout}</div>}
          </div>
        </div>
      </div>
      <div>
        <button type="submit" className="search-button  mt-5">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default CheckoutInput;
