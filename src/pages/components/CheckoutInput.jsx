import React, { useEffect, useState } from "react";
import PassengerModal from "../HotelSearchPage/components/PassengerModal";
import { toast } from "react-toastify";
import { Form, Input, Button, Typography, Space } from "antd";

function CheckoutInput({ formik, disable, ...props }) {
  const [pageCount, setPageCount] = useState(1);
  const [hotelList, setHotelList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePageClick = ({ selected }) => {
    console.log(selected);

    // setLoading(true);
    setDisabled(true);
    setCurrentPage(selected);
  };
  return (
    <div className="flex ml-6" style={{ width: "1250px" }}>
      <div></div>
      <div>
        <div className="title">Passengers</div>
        <Input
          type="number"
          className="search-input"
          style={{ disabled: true }}
          disabled={disable ? "disabled" : ""}
          id="passengers"
          name="passengers"
          min="1"
          onChange={formik.handleChange}
          value={formik.values.passengers}
        />

        <div className="flex">
          <div className="error-field ">
            {" "}
            {formik.errors.passengers && <div>{formik.errors.passengers}</div>}
          </div>
        </div>
      </div>
      <div>
        <div className="title">Children</div>
        <Input
          type="number"
          min="0"
          className="search-input"
          style={{ disabled: true }}
          disabled={disable ? "disabled" : ""}
          id="children"
          name="children"
          onChange={formik.handleChange}
          value={formik.values.children}
        />

        <div className="flex">
          <div className="error-field ">
            {" "}
            {formik.errors.children && <div>{formik.errors.children}</div>}
          </div>
        </div>
      </div>
      <div>
        <div className="title">Check In</div>
        <Input
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
   
        <Input
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
