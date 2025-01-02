import React from "react";
import "./FlightPaymentBody.css";
function FlightPaymentBody() {
  return (
    <div className="card-body flex">
      <div className="card-section ml-6 mt-6">
        <div className="head-title">
          Information You need to pay attention .
        </div>
        <div className="passengers-are-divided">
          Passengers are divided according to age categories .
        </div>
        <div className="please-check-category">Please Check Categories</div>
        <div>
          <div className="top-head flex">
            <div>One Stop, 3h Between</div>
            <div className="left-auto">Flight Duration: 9:45h</div>
          </div>
          <div className="card-info-body">
            <div>
              <div className="flex">
                <div>First Flight No From Stockholm</div>
                <div className="white ml-3">CS650</div>
                <div className="flex airway">
                  <div>
                    <img />
                  </div>
                  <div className="white">Delta Airlines</div>
                </div>
              </div>
              <div className="flex">
                <div>Second Flight No From Rome</div>
                <div  className="white  ml-3">JSG113</div>
                <div className="flex airway">
                  <div>
                    <img />
                  </div>
                  <div className="white">British Airways</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="head-title">Your Trip Summary</div>
          <div>
            Your flight take off from ARN Gate 23A , you Enter through C
            Entrance. In FCO Airport in Rome You will stay 3h &45m then Exit
            through Gate D14 . Final Destination will be SABIHA Airport and You
            can Exit Through L Door .
          </div>
          <div className="flex mt-6">
            <div className="head-card-title">Very Good</div>
            <div className="review ml-6">2259 Reviews</div>
            <div className="flex ml-6">
              <div>
                <img src="/flight-payment-page/leaves-2.png" />
              </div>
              <div className="sustainability-level">Sustainability Level</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-section pl-6">
        <div className="head-title pt-6">Payment Methods and Information</div>
        <div className="sub-title mt-6 mb-6">Price Details</div>
        <div className="flex">
          <div className="flex price-width">
            {" "}
            <div className="green-title ">$87</div>{" "}
            <div className="ml-2">2 Adults</div>
          </div>
          <div className="flex  price-width">
            <div className="green-title "> $24</div>
            <div className="ml-2">3 Children</div>{" "}
          </div>
          <div className="flex  price-width">
            <div className="green-title ">$12</div>{" "}
            <div className="ml-2">1 infant</div>{" "}
          </div>
        </div>
        <hr />
        <div className="flex mt-3 mb-3 pr-3">
          <div className="sub-title">Total {"USD"}</div>
          <div className="green-title left-auto ">$157</div>
        </div>
        <hr />
        <div className="">
          <div className="flex mt-3">
            <div className="mr-3">
              <input type="checkbox" />
            </div>
            <div className="sub-small-title">Booking For Work</div>
            <div className="flex payment-method">
              <div className="sub-small-title payment-method">
                Payment Method
              </div>

              <div>
                <input />
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <div>
              <div className="label-input">First Name</div>
              <div>
                <input className="classic-input mr-3" />
              </div>
            </div>
            <div>
              <div className="label-input"> Last Name</div>
              <div>
                <input className="classic-input  mr-3" />
              </div>
            </div>
            <div>
              <div className="label-input">Phone Number</div>
              <div>
                <input className="classic-input" />
              </div>
            </div>
          </div>
          <div className="head-title mt-3">Cancellation Policy</div>
          <div className="flex mt-3">
            <div>Get a Full Refund If You Cancel By Jun 23 {"(PDT)"} .</div>
            <div className="ml-3">Read More</div>
          </div>
          <div className="flex mt-6">
            <div>
              <button className="blue-button">Confirm And Pay</button>
            </div>
            <div>
              <button className="save-button ml-6">
                {" "}
                Save If You Like It {"<3"}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default FlightPaymentBody;
