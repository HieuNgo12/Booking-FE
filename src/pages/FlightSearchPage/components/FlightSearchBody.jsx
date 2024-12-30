import React, { useState } from "react";
import FlightCard from "./FlightCard";
import { Slider } from "@mui/material";

function FlightSearchBody() {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div>
      <div className="flex ">
        <div>
          <div>
            <div>Departure Time</div>
            <Slider
              size="small"
              value={sliderValue}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <div>
              <button className="time-button">From 12:00</button>
              <button className="time-button">Up to 16:45</button>
            </div>
          </div>
          <div>Trip Duration</div>
          <Slider
            size="small"
            value={sliderValue}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <div>
            <button className="time-button">From: 7h to 12h</button>
            <button className="time-button">One Stop</button>
          </div>
          <div>
            <div className="head-title">Airline</div>

            <div className="flex">
              <div>
                <input type="checkbox" />
              </div>
              <div className="ml-2">Austrian Airlines</div>
            </div>
          </div>
        </div>
        <div className="ml-6">
          <FlightCard />
        </div>
      </div>
      <div className="mt-10">
        <button
          className="white-button-classic"
          onClick={() => {
            const favplaces = JSON.parse(localStorage.getItem("favList"));
            setHotelList(favplaces);
            setLoading(true);
          }}
        >
          List Your Favorite Places
        </button>
      </div>
    </div>
  );
}

export default FlightSearchBody;
