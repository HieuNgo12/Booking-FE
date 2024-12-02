import React from "react";
import "./PaymentPageBody.css";
function PaymentPageBody() {
  return (
    <div>
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
              <div>First Hotel G</div>
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
        <div style={{ width: "50%" }}>
          <div className="flex">
            <div>
              <img />
            </div>
            <div>
              <div>Anna Carinna</div>
              <div>Easyset24@gmail.com</div>
            </div>
            <button>Check Your Booking History</button>
          </div>
          <div className="flex">
            <div>Who are you booking for?</div>
            <div className="flex">
              <div>
                <input type="radio" />
              </div>
              <div>I am the main guest</div>
            </div>
            <div className="flex">
              <div>
                <input type="radio" />
              </div>
              <div>Booking is for someone else</div>
            </div>
          </div>
          <div>Enter Your Information</div>
          <div>
            Make Sure The Information That You Have Already Written in Yoy
            profile is Correct.
          </div>
          <div className="edit-profile">Edit Profile</div>
        </div>
      </div>
      <div className="flex">
        <div style={{ width: "50%" }}>
          <div>Your Booking Details</div>
        </div>
        <div style={{ width: "50%" }}>
          <div>
            <div>Full Name</div>
            <div className="flex">
              <input />
              <input />
              <input />
            </div>
            <div className="flex">
              <div style={{width: "70%"}}>
                <div>Email Address</div>
                <div><input /></div>
              </div>
              <div style={{width:"30%"}}>
                <div>
                    Phone Number
                </div>
                <div>
                    <input />
                </div>
              </div>
            </div>
            <div>
                <div>If You Need Assistance</div>
                <div>
                    Choose An Option Based On Physical Disability Accordingly.
                </div>
                <div>
                    
                    <input placeholder="Not Provided"/>

                </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPageBody;
