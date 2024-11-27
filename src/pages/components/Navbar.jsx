import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex w-full relative top-0 left-0">
        <img src="./log.png" />
        <input className="nav-search" />
        <button className="sign-in-button">Sign In</button>
        <button className="sign-in-button">Register</button>
      </nav>
      <div className="flex product-tags">
        <div>
          <a href="/hotel-search">Trip</a>
        </div>
        <div>
          <a href="/payment-detail">Deals</a>
        </div>
        <div>
          <a href="/">Hotel</a>
        </div>
        <div>Flight</div>
        <div>Apartment</div>
        <div>Camper</div>
      </div>
    </div>
  );
}

export default Navbar;
