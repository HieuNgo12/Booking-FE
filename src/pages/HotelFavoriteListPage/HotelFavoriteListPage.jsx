import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FavoriteCard from "./components/FavoriteCard";
import "./HotelFavoriteListPage.css";
import HeaderFlightPageBody from "../FlightHomePage/components/HeaderFlightPageBody";
import FavoriteFlightCard from "./components/FavoriteFlightCard";
import ChatBox from "../ChatPage/ChatBox";
function HotelFavoriteListPage() {
  const [list, setList] = useState([]);
  const [listFlight, setListFlight] = useState([]);
  const savedList = JSON?.parse(localStorage?.getItem("favList")) || [];

  const callListFavFlight = () => {
    setListFlight(JSON?.parse(localStorage?.getItem("fav")) || []);
  };

  useEffect(() => {
    callListFavFlight();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex w-full sticky top-0 bg-[#F9F9F9] justify-center z-10">
        <Navbar />
      </div>
      <div className="max-w-[1224px]">
        <h1 className="text-3xl font-bold text-[#07689F] mb-4">
          Which Exciting Place Is Your Next Adventure Taking You?
        </h1>
        <div className="text-[#07689F] text-lg mb-6">
          Discover exclusive Genius rewards wherever your journey takes you!
        </div>
        <div className="hotel-favorites ">Hotel Favorites</div>
        <div className="flex">
          <div class="grid grid-cols-3 gap-3">
            {savedList.length
              ? savedList.map((hotel) => {
                  return <FavoriteCard hotel={hotel} />;
                })
              : null}
          </div>
        </div>

        <div className="border-2"></div>

        <div className="hotel-favorites ">Flight Favorites</div>
        <div className="flex shadow-sm">
          <div class="grid grid-cols-3 gap-3">
            {listFlight.length > 0 ? (
              listFlight.map((item) => (
                <FavoriteFlightCard
                  key={item.productId}
                  flight={item}
                  callListFavFlight={callListFavFlight}
                />
              ))
            ) : (
              <p>No favorite flights available</p>
            )}
          </div>
        </div>

        <div className="border-2"></div>

        <div className="hotel-favorites ">Tour Favorites</div>
      </div>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default HotelFavoriteListPage;
