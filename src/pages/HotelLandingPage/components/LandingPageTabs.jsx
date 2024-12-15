import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import RoomsAndBed from "./RoomsAndBed";
import PlaceRules from "./PlaceRules";
import HotelInfo from "./HotelInfo";

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

export default function HotelLandingTabs({ hotel, ...props }) {

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Special Offers" {...a11yProps(0)} />
          <Tab label="Last Search" {...a11yProps(1)} />
          <Tab label="Trending Destinations" {...a11yProps(2)} />
          <Tab label="Highest Reviewed" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      </CustomTabPanel>
    </Box>
  );
}
