import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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

export default function HotelDetailTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
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
        <div className="flex">
          <div style={{ width: "50%" }}>
            This stylish and roomy family home is nestled in Stockholm's Kista
            district, just 14 km away from the Royal Swedish Opera, Museum of
            Medieval Stockholm, and Stureplan. Offering the convenience of free
            private parking, it's also a short 9 km drive from Friends Arena and
            14 km from Sergels Torg Square.
          </div>
          <div style={{ width: "50%" }}>
            Your stay at our hotel includes a complimentary breakfast to
            kickstart your day, and our rooms offer a cosy and comfortable
            retreat. Select rooms feature a relaxing bath tub for added luxury.
            Our dedicated staff is at your service, ensuring a seamless and
            enjoyable experience throughout your stay. In addition to the
            inviting accommodations, indulge in extra leisure activities such as
            our fitness centre or pool. We've thoughtfully curated every aspect
            to make your stay special, promising a combination of comfort,
            convenience, and delightful extras.
          </div>
      
          <div style={{ width: "50%" }}>
            Your stay at our hotel includes a complimentary breakfast to
            kickstart your day, and our rooms offer a cosy and comfortable
            retreat. Select rooms feature a relaxing bath tub for added luxury.
            Our dedicated staff is at your service, ensuring a seamless and
            enjoyable experience throughout your stay. In addition to the
            inviting accommodations, indulge in extra leisure activities such as
            our fitness centre or pool. We've thoughtfully curated every aspect
            to make your stay special, promising a combination of comfort,
            convenience, and delightful extras.
          </div>
          <div style={{ width: "50%" }}>
            <div>Amenities</div>
            <div>
              <div style={{ width: "50%" }}>

                <ul>
                  <li>Free Wifis</li>  
                </ul>
              </div>
              <div style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
