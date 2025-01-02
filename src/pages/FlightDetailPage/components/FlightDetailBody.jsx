import React from "react";
import "./FlightDetailBody.css";
function FlightDetailBody() {
  return (
    <div className="flight-detail-body">
      <div className="flight-detail-card ">
        <div className="top-head-card flex p-6">
          <div className="">One Stop 3h Between</div>
          <div className="duration-flight">Flight Duration: 9:45h</div>
        </div>
        <div className="header-box">
          <div className="">
            <div className="flex flight-section">
              <div>First Flight No. From Stockholm C650</div>
              <div className="airline-label flex">
                <div className="mr-3">
                  <img src="/flight-detail-page/triangle.png" />
                </div>
                <div className="airline-label">Delta Airlines</div>
              </div>
            </div>
            <hr />
            <div className="flex flight-section">
              <div>
                <div>Second Flight No. From Stockholm </div>
                <div className="ml-3">C650</div>{" "}
              </div>
              <div className="airline-label flex">
                <div className="mr-3">
                  <img src="/flight-detail-page/turkairline.png" />
                </div>
                <div className="airline-label">Turkish Airways</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex">
          <div className="ml-6 middle-section">
            <div className="blue-title">ARN</div>
            <div className="head-line">Stockholm</div>
            <div>CET{"01:00"}</div>
            <div className="flex">
              <div className="gate">GATE</div>
              <div className="big-grey-text">{"14D"}</div>
            </div>
          </div>
          <div className="middle-section">
            <div className="blue-title text-center">FCO</div>

            <div className="flex ">
              <div className="">CET{"18:00"}</div>
              <div className="head-line ml-6 mr-6">Rome</div>
              <div>
                <div>CET</div>
                <div>{"20:00"}</div>
              </div>
            </div>
          </div>

          <div className="ml-6 middle-section">
            <div className="blue-title">SABIHA</div>
            <div className="head-line">Istanbul</div>
            <div>CET +{"20:30"}</div>
            <div className="flex">
              <div className="gate">GATE</div>
              <div className="big-grey-text">{"23E"}</div>
            </div>
          </div>
        </div>

        <div>
          <img src="/flight-detail-page/Airplane.png" />
        </div>
        <div className="flex">
          <div className="left-box-container">
            <div className="left-box-grey flex">
              <div className="medium-text-grey">
                ARN - Entrance C- Gate 23 A
              </div>
              <div className="number-plus">+468313</div>
            </div>
            <div className="left-box-grey flex">
              <div className=" medium-text-grey">
                ARN - Entrance C- Gate 23 A
              </div>
              <div className="number-plus">+468313</div>
            </div>
          </div>
          <div className="right-box-container">
            <div className="right-box-grey flex mb-12">
              <div className="medium-text-grey">SABIHA - Exit L</div>
              <div className="number">+903348</div>
            </div>
            <div className="right-box-grey flex">
              <div className="medium-text-grey ">One stop, 3h Between</div>
              <div className="number">
                It Is Not Possible To Exit the Airport
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <div className="flex amenities">
              <div>
                <img />
              </div>
              <div>-7 - Stockholm</div>
            </div>
            <div className="flex amenities">
              <div>
                <img />
              </div>
              <div>15 kg</div>
            </div>
            <div>
              <div>
                <img />
              </div>
              <div>Pet Allowed</div>
            </div>
          </div>
          <div className="amenities">
            <div>
              <div>
                <img />
              </div>
              <div>2 - Rome</div>
            </div>
            <div>
              <div>
                <img />
              </div>
              <div>15 Kg</div>
            </div>
            <div>
              <div>
                <img />
              </div>
              <div>Pet Allowed</div>
            </div>
          </div>
          <div>
            <div>
              <img />
            </div>
            <div>10 - Istanbul</div>
          </div>
        </div>
        <hr />
        <div className="flex mt-6 mb-10">
          <div className=" ml-6">
            <div className="price">$157</div>
            <div>Taxes Included</div>
          </div>
          <div className="ml-10">
            <div>
              <img src="/flight-detail-page/Icons.png" />
            </div>
            <div>Transactions are encrypted By EsaySet24</div>
          </div>
        </div>
        <div className="bottom-footer flex ">
          <div>
            <div>
              <img src="/flight-detail-page/stereo-perspective.png" />
            </div>
            <div className="text-help">3d View</div>
          </div>
          <div className="ml-6">
            <div>
              <img src="/flight-detail-page/share.png" />
            </div>
            <div className="text-help">Share</div>
          </div>
          <div className="ml-6">
            <div>
              <img src="/flight-detail-page/helpcenter.png" />
            </div>
            <div className="text-help">Help</div>
          </div>
          <div>
            <button className="purchase-the-flight">Purchase The Flight</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetailBody;
