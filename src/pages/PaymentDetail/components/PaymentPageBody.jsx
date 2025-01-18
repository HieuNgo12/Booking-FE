import React, { useEffect, useState } from "react";
import "./PaymentPageBody.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import RadioGroup from "../../components/RadioGroup";
import moment from "moment";
import { toast } from "react-toastify";
import { services } from "../../Services/services";
import { useNavigate } from "react-router-dom";
import PromocodeModal from "./PromocodeModal";
import { utils } from "../../Services/utils";
import PaymentModal from "./PaymentModal";

function PaymentPageBody({ room, ...props }) {
  const [disablePromo, setDisablePromo] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  const [price, setPrice] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePaymentOpen = () => openPayment(true);
  const handlePaymentClose = () => setOpenPayment(false);

  const SignupSchema = Yup.object().shape({
    fullNameOnCard: Yup.string(),
    cardNumber: Yup.string(),

    cardExpDate: Yup.string(),
    cardCvc: Yup.string(),
    promoCode: Yup.string(),
  });
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      cardCvc: "",
      cardExpDate: "",
      cardNumber: "",
      fullNameOnCard: "",
      needAFlight: false,
      promoCode: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setOpenPayment(true);
    },
    // return redirect("");

    // setSuccess(true);
  });
  useEffect(() => {
    localStorage.setItem("currentPrice", JSON.stringify(room[0].pricePerNight));
  }, []);
  const handlePageClick = ({ selected }) => {
    console.log(selected);
    // setLoading(true);
    setCurrentPage(selected);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex background-payment p-6">
          <div style={{ width: "50%" }}>
            <div className="flex p-6 bg-white ">
              <div className=" mr-4" style={{ width: "30%" }}>
                <div>
                  <img
                    className="mt-2"
                    src={room[0].imgRoom.avatar}
                    onError={(ev) => addDefaultSrc(ev)}
                    style={{ height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    className="mt-2"
                    src={room[0].imgRoom.avatar}
                    onError={(ev) => addDefaultSrc(ev)}
                  />
                </div>
                <div>
                  <img
                    className="mt-2"
                    src={room[0].imgRoom.avatar}
                    onError={(ev) => addDefaultSrc(ev)}
                  />
                </div>
                <div>
                  <img
                    className="mt-2"
                    src={room[0].imgRoom.avatar}
                    onError={(ev) => addDefaultSrc(ev)}
                  />
                </div>
              </div>
              <div className="description " style={{ width: "70%" }}>
                <div className=" ">
                  <div className="head-title">{room[0].roomName}</div>
                  <div className="mt-6">{room[0].description}</div>
                  <div className="flex mt-6">
                    <div className="mr-4">
                      More than {room[0].hotelId.reviewId.length} reviews
                    </div>
                    <div className="reviews">9.2</div>
                  </div>
                  <div className="mt-4">
                    <img src="/paymentPage/scale.png" />
                  </div>
                  <div className="sub-title flex mt-6 mb-6">
                    <div className="mt-1">
                      <img src="/detailPage/loc.png" />
                    </div>
                    <div className="sub-title">Location Information</div>
                  </div>
                  <ol>
                    <li>0 m to City Centre</li>
                    <li>24km to Lavender Airport</li>
                    <li>2.5km to Liseberg Amusement Park</li>
                    <li>0m to Gothenburg Central Station</li>
                  </ol>
                  <div className="ancilaries">
                    {room[0].amenities?.length
                      ? room[0].amenities.map((amenity) => {
                          return (
                            <div className="mt-6 flex">
                              <div>
                                <img src="/detailPage/wifi.png" />
                              </div>
                              <div className="ml-2">{amenity}</div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
            <div style={{}} className="bg-white p-6">
              <div className="head-title mt-6 mb-6">Your Booking Details</div>
              <div className="flex mb-6">
                <div className="check-in-border">
                  <div className="head-title check-in">Check-in</div>
                  <div>
                    {JSON.parse(localStorage.getItem("checkoutTime")).checkin ||
                      moment().format("MMMM Do YYYY")}
                  </div>
                </div>
                <div className="check-in-border">
                  <div className="head-title check-in">Check-out</div>
                  <div>
                    {" "}
                    {JSON.parse(localStorage.getItem("checkoutTime"))
                      .checkout || moment().format("MMMM Do YYYY")}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  You will stay{" "}
                  {utils.convertDate(
                    JSON.parse(localStorage.getItem("checkoutTime")).checkIn,
                    JSON.parse(localStorage.getItem("checkoutTime")).checkout
                  )}{" "}
                  nights
                </div>
                <div className="flex">
                  <div>
                    You selected rooms for{" "}
                    {
                      JSON.parse(localStorage.getItem("hotelPassengers"))
                        .passengers
                    }{" "}
                    adults
                  </div>
                  <div>
                    {" "}
                    {
                      JSON.parse(localStorage.getItem("hotelPassengers"))
                        .children
                    }{" "}
                    children
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white pl-6">
              <div className="flex ">
                <div className="head-title">The Room:</div>
                <div className="superior-twin-room">
                  Superior Twin room
                </div>{" "}
              </div>
              <div className="flex">
                <div className="flex">
                  <div className="sub-title">+ Guest Number </div>
                  <div className="ml-4 adult-number">
                    {" "}
                    {
                      JSON.parse(localStorage.getItem("hotelPassengers"))
                        .passengers
                    }{" "}
                    adults,{" "}
                    {
                      JSON.parse(localStorage.getItem("hotelPassengers"))
                        .children
                    }{" "}
                    children
                  </div>
                </div>
              </div>
              <div className="flex mt-6 mb-6">
                <div>
                  <img src="/paymentPage/hotel-please-clean.png" />
                </div>
                <div className="flex">
                  <div className="cleanliness-room-rate ml-4">
                    Cleanliness Room Rate
                  </div>
                  <div className="reviews ml-4">8.9</div>
                </div>
              </div>

              <div className="  mb-6 pb-6 ">
                <div className="flex">
                  <div className="room-characters">
                    <div>
                      <img src="/paymentPage/hotel.png" />
                    </div>
                    <div> 18 m2</div>
                  </div>
                  <div className="room-characters">
                    {" "}
                    <div>
                      <img src="/paymentPage/local-two.png" />
                    </div>
                    <div className="ml-2">City Center</div>
                  </div>
                  <div className="room-characters">
                    <div>
                      {" "}
                      <img src="/paymentPage/tree.png" />
                    </div>
                    <div className="ml-2">Next to Forest</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="room-characters">
                    <div>
                      {" "}
                      <img src="/paymentPage/shower-head.png" />
                    </div>
                    <div>En Suit Bath Room</div>
                  </div>
                  <div className="room-characters">
                    {" "}
                    <div>
                      {" "}
                      <img src="/paymentPage/tv-one.png" />
                    </div>
                    <div>Flat Screen TV</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ paddingBottom: "20px" }}
              className="bg-white pl-6 mb-2"
            >
              <div className="head-title ">Payment Information</div>
              <div className=" pr-6">
                <div className="price-summary mb-6"> Your Price Summary</div>
                <hr />
                <div className="flex  mt-6 mb-6 ">
                  <div className="original-price ">Original Price</div>
                  <div className="flex" style={{ marginLeft: "auto" }}>
                    <div className="price-and-nights mr-2">
                      VND{" "}
                      {utils.numberWithCommas(
                        JSON.parse(localStorage?.getItem("currentPrice")) *
                          JSON.parse(localStorage.getItem("hotelPassengers"))
                            .passengers *
                          utils.convertDate(
                            JSON.parse(localStorage.getItem("checkoutTime"))
                              .checkin,
                            JSON.parse(localStorage.getItem("checkoutTime"))
                              .checkout
                          ) *
                          23000
                      )}
                    </div>
                    <div className="nights-stay">
                      {" "}
                      {utils.convertDate(
                        JSON.parse(localStorage.getItem("checkoutTime"))
                          .checkin,
                        JSON.parse(localStorage.getItem("checkoutTime"))
                          .checkout
                      )}{" "}
                      Nights
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex  mt-6 mb-6">
                  <div>EasySet24 Loyal Discount 4%</div>
                  <div className="discount flex">
                    <div className="discount-price">0 </div>
                    <div className="discount-letter ml-2">Discount</div>
                  </div>
                </div>
                <hr />

                <div className="flex  mt-6">
                  <div className="original-price">Total Amount for Paymnet</div>
                  <div className="price-and-nights">
                    VND{" "}
                    {utils.numberWithCommas(
                      JSON.parse(localStorage?.getItem("currentPrice")) *
                        JSON.parse(localStorage.getItem("hotelPassengers"))
                          .passengers *
                        23000 *
                        utils.convertDate(
                          JSON.parse(localStorage.getItem("checkoutTime"))
                            .checkin,
                          JSON.parse(localStorage.getItem("checkoutTime"))
                            .checkout
                        )
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="mt-6 ">
                    <div className="head-title">Cancellation Policy</div>
                    <div className="sub-title flex">
                      <div>
                        <img src="/paymentPage/check.png" />
                      </div>
                      <div className="ml-2">Free Cancellation</div>{" "}
                    </div>
                    <div className="mt-6 mb-6">
                      Cancel /Rebook No Later Than 24 Hours Before, Otherwise
                      You Pay 80% Of The Cost.
                    </div>
                  </div>
                  <div className="" style={{ marginBottom: "30px" }}>
                    <div className="flex">
                      <div className="head-title">Pay Part Now, Part Later</div>
                      <div className="pay-part-now-radio">
                        <input type="radio" />
                      </div>
                    </div>
                    <div className="mt-6 mb-6">
                      Pay $ 200 now, and the rest {"($6,60)"} will be
                      automatically charged to the same payment method on August
                      27, 2023. No extra fees.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div style={{ height: "120px" }} className="pl-6 bg-white ">
              <div className="head-title pt-4">Payment Methods </div>
              <div className="flex pt-4">
                <div className="sub-title mr-6 ">Payment Method</div>
                <div>
                  <button type="submit">Choose A Method</button>
                </div>
                <div className="flex booking-for-work ">
                  <div className="sub-title p-2">Booking for Work</div>
                  <input className="ml-2" type="radio" />
                </div>
              </div>
            </div> */}
          </div>
          <div style={{ width: "50%" }}>
            <div className="profile-card bg-white p-6  ml-6">
              <div className="flex">
                <div>
                  <img
                    className="mr-6"
                    src="/paymentPage/avatar.png"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <div>
                  <div className="payment-name ">Anna Carinna</div>
                  <div className="payment-email">Easyset24@gmail.com</div>
                </div>
                <button className="check-button">
                  Check Your Booking History
                </button>
              </div>
              <div className="flex  mt-3">
                <div className="who-are-you mr-2 ">
                  Who are you booking for?
                </div>
                <RadioGroup
                  flex={true}
                  object={[
                    { value: "mainGuest", label: "I am the main guest" },
                    {
                      value: "forSomeoneElse",
                      label: "Booking is for someone else",
                    },
                  ]}
                />
              </div>
              <div className="enter-info mt-6">Enter Your Information</div>
              <div className="make-sure mt-6">
                Make Sure The Information That You Have Already Written in Yoy
                profile is Correct.
              </div>
              <div className="edit-profile mt-6 flex">
                <div>
                  <img src="/detailPage/pencil.png" />
                </div>
                <div className="ml-2">Edit Profile</div>
              </div>
            </div>
            <div className="pl-6">
              <div className="pl-6 pt-6 bg-white">
                <div className="head-title mb-6 ">Add to Your Stay</div>
                <div className="flex">
                  <div>
                    <div className="">
                      <div className="flex mb-2 mt-2">
                        <input
                          type="checkbox"
                          id="needAFlight"
                          name="needAFlight"
                          onChange={formik.handleChange}
                          value={true}
                        />
                        <div className="sub-title ml-2">
                          I Will Need A Flight For My Trip
                        </div>
                      </div>
                      <div>
                        <div>
                          <img />
                        </div>
                        <div className="flex mt-6 mb-6 ">
                          <div className="mr-2">
                            <img src="/paymentPage/flight-airflow.png" />
                          </div>
                          <div>20% Special Offer if you book a flight</div>
                        </div>
                      </div>
                      <div className="mb-6 mt-6">
                        Flexible Flight Options from Stockholm to Turkyie From
                        SLK 766/Round Trip Finish Booking
                      </div>
                      <div className="mb-6 mt-6">
                        This Stay to get Flight Recommendations That Match Your
                        Selected Dates.
                      </div>
                    </div>
                    <div>
                      <div className="flex ">
                        <div className="mt-1">
                          <input
                            type="checkbox"
                            id="bookATaxi"
                            name="bookATaxi"
                            onChange={formik.handleChange}
                            value={true}
                          />
                        </div>
                        <div className="sub-title ml-2">
                          I want to Book a Taxi Or Shuttle Ride In Advance
                        </div>
                      </div>
                      <div className="mb-6 mt-6 ">
                        <div className="flex">
                          <div>
                            <img src="/paymentPage/taxi.png" />
                          </div>
                          <div className="mb-6 ml-2 ">
                            10% special Offer If you Rent A Taxi
                          </div>
                        </div>
                        <div className="mb-6 ">
                          Avoid surprises_ get from the airport to your
                          accommodation without a hitch. we will add taxi
                          options to your booking confirmation.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white pl-6 pb-6">
                <div className="head-title mb-6">Special Requests</div>
                <div className=" mb-6">
                  Special requests can not be guaranteed _ but the property will
                  do its best to meet your needs. you can always make a special
                  request after your booking is complete!
                </div>
                <div className="mb-6">{"Optional"}</div>
                <div className="mb-6">
                  <textarea className="text-area-message" />
                </div>
                <div className="section-width flex mb-6">
                  <input type="checkbox" className="mr-2" />
                  <div>I would like to Rooms Close to each other</div>
                </div>
                <div>
                  <div className="sub-title">Your Arrival Time</div>
                  <div>
                    <div className="flex  mb-7">
                      <div className="mr-2">
                        <img src="/paymentPage/check-one.png" />
                      </div>
                      <div>
                        your rooms will be ready for check_in between 15:00 and
                        23:00
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-2">
                        <img src="/paymentPage/history.png" />
                      </div>
                      <div>24-huor front desk_Help wherever you need it!</div>
                    </div>
                  </div>
                  <div>
                    <div className="sub-title mt-6 mb-6">
                      Add Your Estimated Arrival Time {"(Optional)"}
                    </div>
                    <input
                      placeholder="Please select"
                      className="please-select"
                    />
                    <div className="">Time for CET time zone</div>
                    <div>
                      <img
                        src="/paymentPage/images.jpg"
                        style={{ height: "255px",marginBottom: "9px", marginTop: "9px" }}
                      />
                    </div>
                    <div className="flex ">
                      <div>
                        <button
                          className="save-in-shortcut "
                          onClick={() => {
                            setOpen(true);
                          }}
                        >
                          Apply Promo Code For Booking
                        </button>
                      </div>
                      <div>
                        <button className="payment-button ml-6" type="submit">
                          Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <PromocodeModal
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
              handleOpen={handleOpen}
              formik={formik}
            />
            <PaymentModal
              open={openPayment}
              setOpen={setOpenPayment}
              handleClose={handlePaymentClose}
              handleOpen={handlePaymentOpen}
            />
            {/* <div
              className="section-width bg-white m-6 p-6 "
              style={{ marginTop: "95px" }}
            >
              <div className="head-title">Bank Card Information</div>
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentPageBody;
