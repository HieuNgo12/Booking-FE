import React from "react";
import HotelLandingTabs from "./components/LandingPageTabs";

function HotelLandingPage() {
  return (
    <div>
      <div>
        <div>Why Choose Us</div>
        <div><img src="/hotel-lading-page/special-offer-cards.png"/></div>
        <div>Explore More</div>
        <div>Exclusive Hotel Search</div>
      </div>
      <HotelLandingTabs />
    </div>
  );
}

export default HotelLandingPage;
