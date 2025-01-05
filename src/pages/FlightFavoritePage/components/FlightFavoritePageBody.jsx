import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FlightFavoriteCard from "./FlightFavoriteCard";
function FlightFavoritePageBody() {
  const [list, setList] = useState([]);
  const savedList = JSON?.parse(localStorage?.getItem("favListFlight")) || [];

  useEffect(() => {}, []);
  return (
    <div className=" content-center">
      <div className="hotel-favorites ">Flight Favorites</div>
      <div>
        {" "}
        <a href="/flight-favorite-page">Flight</a>
      </div>
      <div className="mt-6 flex card-container">
        <div class="grid grid-cols-3 gap-3">
          {/* {savedList.length
            ? savedList.map((hotel) => {
                return <FlightFavoriteCard hotel={hotel} />;
              })
            : null} */}
          <FlightFavoriteCard />
        </div>
      </div>
    </div>
  );
}

export default FlightFavoritePageBody;
