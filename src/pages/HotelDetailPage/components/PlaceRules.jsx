import React from "react";

function PlaceRules() {
  return (
    <div>
      <div className="flex ">
        <div className="head-line section">Check In</div>
        <div>From 3:00PM to 12:00AM</div>
      </div>
      <div className="flex">
        <div className="head-line section">Check Out</div>
        <div>From 1:00AM to 11:00AM</div>
      </div>
      <div className="flex">
        <div className="head-line section">Cancellation / Prepayment</div>
        <div>From 1:00AM to 11:00AM</div>
      </div>
      <div className="flex">
        <div className="head-line section">Children * Pets</div>
        <div>Child Policies</div>
      </div>
      <div className="flex">
        <div className="head-line section">No Age Restriction</div>
        <div>There's no age requirement for check-in</div>
      </div>
      <div className="flex">
        <div className="head-line section">Pets</div>
        <div className="">Pets are not allowed</div>
      </div>
    </div>
  );
}

export default PlaceRules;
