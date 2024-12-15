import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();

  return (
    <div>
      <nav className="flex w-full relative top-0 left-0">
        <img
          src="/log.png"
          onClick={() => {
            navigate("/");
          }}
        />
        <img src="/homepage/England.png" className="classic-image" />
        <img src="/homepage/Help.png" className="classic-image" />
        <input className="nav-search" />
        <div className="ath-button ml-6">
          <a href="/login">Sign In</a>
        </div>
        <div className="ath-button ml-6">
          <a href="/signup">Register</a>
        </div>
      </nav>
      <div style={{ marginLeft: "20%" }} className="flex product-tags">
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
