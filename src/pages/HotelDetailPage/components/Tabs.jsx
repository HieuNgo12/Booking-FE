import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import RoomsAndBed from "./RoomsAndBed";
import PlaceRules from "./PlaceRules";
import HotelInfo from "./HotelInfo";
import { useNavigate } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function hotelDetailTabs({ hotel, disable, ...props }) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    console.log(hotel);
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onBook = (e) => {
    // alert("Book Success")
    e.preventDefault();
    toast.success("Book Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // onClose: () => setModal(false),
    });
    navigate(`/payment-detail/${hotel[0].roomId[0]._id}`);
  };
  const onFav = () => {
    toast.success("Favorite Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // onClose: () => setModal(false),
    });
  };
   const tabSx = {
    '& .MuiTabs-indicator': {
      backgroundColor: '#07689F',
      color: "#07689F",
    },
    '& .MuiButtonBase-root.MuiTab-root': {
      color: 'black',
      transition: 'color 0.2s ease-in-out',
      '&:hover': {
        color: '#07689F)',
      },
      '&.Mui-selected': {
        color: '#07689F',
      },
    },
  };
  return (
    <Box className="p-6" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
        sx={tabSx }
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Place Details" {...a11yProps(0)} />
          <Tab label="Info & Prices" {...a11yProps(1)} />
          <Tab label="Rooms & Beds" {...a11yProps(2)} />
          <Tab label="Place Rules" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {hotel.length
          ? hotel?.map((ht) => {
              console.log(ht);
              return (
                <div>
                  <div className="flex">
                    <div style={{ width: "50%" }}>{ht?.detailHotel}</div>
                    <div style={{ width: "50%" }}>{ht?.detailHotel}</div>
                  </div>
                  <div>
                    <div className="flex mt-10">
                      <div style={{ width: "50%" }}>
                        <div className="head-title">Amenities</div>
                        <div className="">
                          {hotel[0].roomId[0].amenities?.map((amenity) => {
                            return (
                              <div className="flex" style={{ width: "50%" }}>
                                <div>
                                  <img src="/detailPage/wifi.png" />
                                </div>
                                <div className="amenity ml-6">{amenity}</div>
                              </div>
                            );
                          })}
                          <div style={{ width: "50%" }}></div>
                        </div>
                        <div></div>
                      </div>

                      <div style={{ width: "50%" }} className="">
                        <div className="family">
                          2 Adults, 3 Children, 4 Nights | Two room , Double Bed
                        </div>
                        <div className="flex">
                          <div>
                            <img src="/homepage/location_on.png" />
                          </div>
                          <div>{ht?.address?.number   + " " + ht?.address?.district  + " " +   " " + ht?.address?.ward + ht?.address?.city}</div>

                        </div>
                      </div>
                    </div>
                    <div style={{ marginLeft: "70%" }} className="flex">
                      <div className="price">
                        {hotel[0].roomId[0].pricePerNight}$
                      </div>{" "}
                      <div className="per-night ml-4">per night</div>
                    </div>
                    <div
                      className="flex"
                      style={{ marginLeft: "70%", marginTop: "20px" }}
                    >
                      <div>
                        <button
                          onClick={() => {
                            onFav();
                          }}
                        >
                          <img src={"/detailPage/fav.png"} />
                        </button>
                      </div>
                      <div>
                        <button className="book-now-button">
                          <a
                            href=""
                            onClick={(e) => {
                              onBook(e);
                            }}
                          >
                            Book Now
                          </a>
                        </button>
                      </div>
                    </div>

                    <div
                      className="flex"
                      style={{ marginLeft: "70%", marginTop: "20px" }}
                    >
                      <div></div>
                 
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <HotelInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {hotel[0]?.roomId?.length ? <RoomsAndBed hotel={hotel} /> : null}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <PlaceRules />
      </CustomTabPanel>
    </Box>
  );
}
