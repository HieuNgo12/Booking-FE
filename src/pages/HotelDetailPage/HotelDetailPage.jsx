import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelDetailTabs from "./components/Tabs";

function HotelDetailPage() {
  return (
    <div>
      <Navbar />
      <div className="img-container">
        <div>
          <img src={""} />
        </div>
        <div>
          <img className="image-corner" src={""} />
          <img className="image-corner" src={""} />
          <img className="image-corner" src={""} />
          <img className="image-corner" src={""} />
        </div>
      </div>
      <HotelDetailTabs />
      <div>
        The Most Frequented Questions Asked By Travellers
      </div>
      <div>
        How and When Do I Pay?
      </div>
      <Footer />
    </div>
  );
}

export default HotelDetailPage;
