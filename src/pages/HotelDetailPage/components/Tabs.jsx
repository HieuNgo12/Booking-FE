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
import ReactGoogleMap from "../../components/ReactGoogleMap";
import { utils } from "../../Services/utils";
import FiveStar from "./PostReview/FiveStar";

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
  let navigate = useNavigate();

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
    const checkoutTime = {
      passengers: "",
      checkIn: "",
      checkOut: "",
    };

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
    const savedList = JSON?.parse(localStorage?.getItem("favList")) || [];
    const filterList = savedList.filter((ht) => ht._id === hotel[0]._id);
    console.log(savedList);
    savedList.push(hotel[0]);
    if (!filterList.length) {
      localStorage.setItem("favList", JSON.stringify(savedList));
    }
  };
  const tabSx = {
    "& .MuiTabs-indicator": {
      backgroundColor: "#07689F",
      color: "#07689F",
      width: "250px",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
      fontWeight: "700",
      color: "#07689F",
      transition: "color 0.2s ease-in-out",
      width: "250px",

      "&:hover": {
        color: "#07689F",
      },
      "&.Mui-selected": {
        color: "#07689F",
      },
    },
  };
  return (
    <Box className="p-6" sx={{ width: "1250px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          sx={tabSx}
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
              return (
                <div>
                  <div className="flex">
                    <div style={{ width: "50%" }}>
                      {ht?.detailHotel ||
                        `Located within 3.3 km of Giac Lam Pagoda and 4.3 km of Tan Dinh Market, HANZ Quynh Giang Hotel provides rooms with air conditioning and a private bathroom in Ho Chi Minh City. This 3-star hotel offers free WiFi. The property is allergy-free and is situated 4.8 km from Dam Sen Cultural Park.

At the hotel, every room comes with a desk, a flat-screen TV, a private bathroom, bed linen and towels. All units include a wardrobe.

War Remnants Museum is 5.2 km from HANZ Quynh Giang Hotel, while Reunification Palace is 5.6 km away. Tan Son Nhat International Airport is 2 km from the property.`}{" "}
                    </div>
                    <div style={{ width: "50%" }}>
                      {ht?.detailHotel ||
                        "Distance in property description is calculated using © OpenStreetMap"}
                    </div>
                  </div>
                  <div>
                    <div className="flex mt-10">
                      <div style={{ width: "300px" }}>
                        {" "}
                        <div className="head-title">Map</div>
                        <ReactGoogleMap />
                      </div>
                      <div style={{ width: "1000px" }} className="ml-3 mr-3">
                        <div className="head-title">Amenities</div>
                        <div className="flex">
                          {hotel[0].roomId[0].amenities?.map((amenity) => {
                            return (
                              <div
                                className="flex mt-3"
                                style={{ width: "50%" }}
                              >
                                <div>
                                  <img src="/detailPage/wifi.png" />
                                </div>
                                <div className="amenity ml-6">{amenity}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div style={{ width: "50%" }} className="">
                        <div className="flex mt-3 mb-3">
                          <div className="mr-3">
                            <img src="/homepage/location_on.png" />
                          </div>
                          <div>
                            {ht?.address?.number ||
                              "" + " " + ht?.address?.district ||
                              "" + " " + " " + ht?.address?.ward ||
                              "" + ht?.address?.city ||
                              ""}
                          </div>
                        </div>
                        <div className="flex">
                          <div className="price">
                            {utils.numberWithCommas(
                              hotel[0].roomId[0].pricePerNight * 1
                            )}{" "}
                            VND
                          </div>{" "}
                          <div className="per-night ml-1">per night</div>
                          <div></div>
                        </div>

                        <div>
                          <div>
                            <div className="flex mt-6">
                              <button
                                onClick={() => {
                                  onFav();
                                }}
                              >
                                <img src={"/detailPage/fav.png"} />
                              </button>

                              <button className="book-now-button">
                                <a
                                  className="book-now-button"
                                  href={`/payment-detail/${hotel[0].roomId[0]._id}`}
                                  disabled={!disable}
                                >
                                  Book Now
                                </a>
                              </button>
                            </div>
                          </div>
                        </div>
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
        <HotelInfo hotel={hotel} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {hotel[0]?.roomId?.length ? (
          <RoomsAndBed disable={disable} hotel={hotel} />
        ) : null}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <PlaceRules />
      </CustomTabPanel>
    </Box>
  );
}
