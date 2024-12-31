import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FavoriteCard from "./components/FavoriteCard";
import "./HotelFavoriteListPage.css";
function HotelFavoriteListPage() {
  const [list, setList] = useState([]);
  const savedList = JSON?.parse(localStorage?.getItem("favList")) || [];

  useEffect(() => {}, []);
  return (
    <div className="center-gov">
      <Navbar />
      <div className="hotel-favorites ">Hotel Favorites</div>
      <div className="mt-6 flex card-container">
        <div class="grid grid-cols-3 gap-3">
          {savedList.length
            ? savedList.map((hotel) => {
                return <FavoriteCard hotel={hotel} />;
              })
            : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HotelFavoriteListPage;
