import React from "react";
import "./PaymentPageBody.css";
function PaymentPageBody() {
  return (
    <div className="payment-container  p-6">
      <div className=" mt-8 flex">
        {" "}
        <div style={{ width: "50%" }} className="side-card-payment">
          <div className="flex">
            <div style={{ width: "30%" }}>
              <div>
                <img src="/log.png" />
              </div>
              <div>
                <img src="/log.png" />
              </div>
              <div>
                <img src="/log.png" />
              </div>
              <div>
                <img src="/log.png" />
              </div>
            </div>
            <div className="description" style={{ width: "70%" }}>
              <div className="head-title">First Hotel G</div>
              <div>Modern Hotel at Gothenburg Central Station</div>
              <div>More than 4325 views</div>
              <div>9.2</div>
              <div>Location Information</div>
              <ol>
                <li>0 m to City Centre</li>
                <li>24km to Lavender Airport</li>
                <li>2.5km to Liseberg Amusement Park</li>
                <li>0m to Gothenburg Central Station</li>
              </ol>
              <div className="ancilaries">
                <div>Breakfast Included</div>
                <div>Free Wi-Fi</div>
                <div>Free Parking</div>
                <div>Pets Are Welcome</div>
                <div>Free Laundry Service</div>
                <div>No Smoking</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div style={{ width: "50%" }} className="profile-card">
          <div className="flex">
            <div>
              <img />
            </div>
            <div>
              <div className="payment-name">Anna Carinna</div>
              <div className="payment-email">Easyset24@gmail.com</div>
            </div>
            <button className="check-button">Check Your Booking History</button>
          </div>
          <div className="flex">
            <div className="who-are-you">Who are you booking for?</div>
            <div className="flex">
              <div>
                <input type="radio" />
              </div>
              <div className="main-guest">I am the main guest</div>
            </div>
            <div className="flex">
              <div>
                <input type="radio" />
              </div>
              <div>Booking is for someone else</div>
            </div>
          </div>
          <div className="enter-info">Enter Your Information</div>
          <div className="make-sure">
            Make Sure The Information That You Have Already Written in Yoy
            profile is Correct.
          </div>
          <div className="edit-profile">Edit Profile</div>
        </div>
      </div>
      <div className="flex">
        <div style={{ width: "50%" }}>
          <div className="head-title">Your Booking Details</div>
          <div className="flex">
            <div className="check-in-border">
              <div className="head-title check-in">Check-in</div>
              <div>2 August 2023</div>
            </div>
            <div className="check-in-border">
              <div className="head-title check-in">Check-out</div>
              <div>3 August 2023</div>
            </div>
          </div>
          <div>
            <div>You will stay 4 nights</div>
            <div>
              You selected rooms for 2 Adults, 3 Children 12,7 and 5 y ears old
            </div>
            <div> 0 Infant</div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className="p-6">
            <div className="head-title">Full Name</div>
            <div className="flex">
              <input className="classic-input mr-3" />
              <input className="classic-input mr-3" />
              <input className="classic-input " />
            </div>
            <div className="flex">
              <div className="email-phone  mr-6">
                <div>Email Address</div>
                <div>
                  <input className="long-payment-input " />
                </div>
              </div>
              <div className="email-phone  ">
                <div>Phone Number</div>
                <div>
                  <input className="classic-input" />
                </div>
              </div>
            </div>
            <div>
              <div className="head-title">If You Need Assistance</div>
              <div>
                Choose An Option Based On Physical Disability Accordingly.
              </div>
              <div>
                <div>
                  <div>Choose An Option</div>
                  <div>
                    <input
                      placeholder="Not Provided"
                      className="classic-input"
                    />
                  </div>
                </div>
                <div>
                  <div>Region/Country</div>
                  <div>
                    <input placeholder="Country" className="classic-input" />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div style={{ width: "50%" }}>
          <div className="flex">
            <div className="head-title">The Room:</div>
            <div>Superior Twin room</div>{" "}
          </div>
          <div className="flex">
            <div>
              <div className="">+ Guest Number </div>
              <div>2 Adult</div>
            </div>
            <div>Cleanliness Room Rate</div>
            <div>
              <div> 18 m2</div>
              <div>City Center</div>
              <div>Next to Forest</div>
              <div>En Suit Bath Room</div>
              <div>Flat Screen TV</div>
            </div>
            <div>
              <div>You will stay 4 nights</div>
              <div>
                You selected rooms for 2 Adults, 3 Children 12,7 and 5 y ears
                old
              </div>
              <div> 0 Infant</div>
            </div>
          </div>
        </div>

        <div style={{ width: "50%", padding: "6px" }}>
          <div className="head-title mb-6">Add to Your Stay</div>
          <div className="flex">
            <div>
              <div className="">
                <div className="flex mb-2">
                  <input type="checkbox" />
                  <div className="sub-title ml-2">
                    I Will Need A Flight For My Trip
                  </div>
                </div>
                <div>
                  <div>
                    <img />
                  </div>
                  <div className=" ml-2">
                    20% Special Offer if you book a flight
                  </div>
                </div>
                <div>
                  Flexible Flight Options from Stockholm to Turkyie From SLK
                  766/Round Trip Finish Booking
                </div>
                <div>
                  This Stay to get Flight Recommendations That Match Your
                  Selected Dates.
                </div>
              </div>
              <div>
                <div className="flex">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="sub-title">
                    I want to Book a Taxi Or Shuttle Ride In Advance
                  </div>
                </div>
                <div>
                  <div>
                    <img />
                  </div>
                  <div>10% special Offer If you Rent A Taxi</div>
                  <div>
                    Avoid surprises_ get from the airport to your accommodation
                    without a hitch. we will add taxi options to your booking
                    confirmation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div style={{ width: "50%" }}>
          <div className="head-title">Payment Information</div>
          <div className="">
            <div className="price-summary"> Your Price Summary</div>
            <hr />
            <div className="flex">
              <div className="original-price ">Original Price</div>
              <div className="price-and-nights">$980 4 Nights</div>
            </div>
            <hr />
            <div className="flex">
              <div>EasySet24 Loyal Discount 4%</div>
              <div className="price-and-nights">$100 Discount</div>
            </div>
            <hr />

            <div className="flex">
              <div>Total Amount for Paymnet</div>
              <div className="price-and-nights">860$</div>
            </div>
            <div className="mt-6">
              <div className="head-title">Cancellation Policy</div>
              <div className="sub-title">Free Cancellation </div>
              <div>
                Cancel /Rebook No Later Than 24 Hours Before, Otherwise You Pay
                80% Of The Cost.
              </div>
            </div>
            <div className="">
              <div className="head-title">Pay Part Now, Part Later</div>
              <div>
                Pay $ 200 now, and the rest {"($6,60)"} will be automatically
                charged to the same payment method on August 27, 2023. No extra
                fees.{" "}
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "50%" }}>
          <div className="head-title">Special Requests</div>
          <div>
            Special requests can not be guaranteed _ but the property will do
            its best to meet your needs. you can always make a special request
            after your booking is complete!
          </div>
          <div>{"Optional"}</div>
          <div>
            <textarea />
          </div>
          <div>
            <input type="checkbox" />
            <div>I would like to Rooms Close to each other</div>
          </div>
          <div>
            <div>Your Arrival Time</div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div style={{ width: "50%" }}>
          <div className="head-title">Payment Information</div>
          <div className="flex">
            <div>Payment Method</div>
            <div>
              <input />
            </div>
            <div>
              <div>Booking for Work</div>
              <input type="" />
            </div>
          </div>
        </div>

        <div style={{ width: "50%" }}>
          <div className="head-title">Bank Card Information</div>
          <div className="flex">
            <div style={{ width: "30%" }} className="">
              <div>Full Name On The Card</div>
              <div>
                <input placeholder="Anna Carina" />
              </div>
            </div>
            <div style={{ width: "30%" }} className="">
              <div>Card Number</div>
              <div>
                <input />
              </div>
            </div>
            <div style={{ width: "15%" }} className="">
              <div>Exp Date</div>
              <div>
                <input />
              </div>
            </div>
            <div style={{ width: "15%" }} className="">
              <div>CVC</div>
              <div>
                <input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPageBody;
