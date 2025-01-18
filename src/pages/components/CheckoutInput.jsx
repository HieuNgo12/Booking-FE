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
        <button type="submit" className="search-button  mt-5">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default CheckoutInput;
