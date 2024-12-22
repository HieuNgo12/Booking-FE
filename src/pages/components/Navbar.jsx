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
        <div >
          <a href="/hotel-favorite-page">
          {"<3"}</a>
        </div>
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
      <div style={{ marginLeft: "20%", marginBottom: "30px" }} className="flex product-tags ">
        <div className="middle" >
          <a >Trip</a>
        </div>
        <div className="middle">
          <a >Deals</a>
        </div>
        <div className="middle">
          <a >Hotel</a>
        </div>
        <div className="middle">Flight</div>
        <div className="middle">Apartment</div>
        <div className="middle">Camper</div>
      </div>
    </div>
  );
}

export default Navbar;
