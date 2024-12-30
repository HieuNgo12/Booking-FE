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
            <div>Flight Duration: 9:45h</div>
          </div>
          <div>
            <div>
              <div className="flex">
                <div>First Flight No From Stockholm</div>
                <div>CS650</div>
                <div className="flex airway">
                  <div>
                    <img />
                  </div>
                  <div>Delta Airlines</div>
                </div>
              </div>
              <div className="flex">
                <div>Second Flight No From Rome</div>
                <div>JSG113</div>
                <div className="flex airway">
                  <div>
                    <img />
                  </div>
                  <div>British Airways</div>
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
        <div className="mt-6 mb-6">Price Details</div>
        <div className="flex">
          <div> $87 2 Adults</div>
          <div> $24 3 Children</div>
          <div> $12 1 infant</div>
        </div>
        <hr />
        <div className="flex">
          <div>Total {"USD"}</div>
          <div>$157</div>
        </div>
        <hr />
        <div className="flex">
          <div className="flex">
            <div>
              <input type="checkbox" />
            </div>
            <div className="sub-small-title">Booking For Work</div>
            <div className="flex">
              <div className="sub-small-title payment-method">
                Payment Method
              </div>

              <div>
                <input />
              </div>
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
