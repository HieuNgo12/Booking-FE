import React, { useEffect, useState } from "react";
import "./PaymentPageBody.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import RadioGroup from "../../components/RadioGroup";
import moment from "moment";
import { toast } from "react-toastify";
import { services } from "../../Services/services";
import { useNavigate } from "react-router-dom";

function PaymentPageBody({ room, ...props }) {
  const [disablePromo, setDisablePromo] = useState(false);
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Required at least 2 letters")
      .max(50, "Required maximum 50 letters")
      .required("First Name Is Required"),
    middleName: Yup.string()
      .min(2, "Company must be at least 2 letters")
      .max(50, "Company name must be maximum 50 letters")
      .required("Middle Name Is Required"),
    lastName: Yup.string().required("Last Name Is Required"),
    emailAddress: Yup.string().required("Email Is Required"),
    phoneNumber: Yup.string().required("Phone Number Is Required"),
    fullNameOnCard: Yup.string().required("Card Name Number Is Required"),
    cardNumber: Yup.string().required("Card Number Is Required"),

    cardExpDate: Yup.string().required("Card Date Is Required"),
    cardCvc: Yup.string().required("Card CVC Is Required"),
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
      toast.success("Payment Success", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // onClose: () => setModal(false),
      });
      console.log({
        userId: "6751570cbd20ef4184e7b5e8",
        objectId: "674b530cfa3469716c80aeef",
        bookingStartDate: JSON.parse(localStorage.getItem("checkoutTime"))
          .checkin,
        bookingEndDate: JSON.parse(localStorage.getItem("checkoutTime"))
          .checkout,
        objectType: "hotel",
        totalPersons: room[0].maxOccupancy,
        totalAmount: room[0].pricePerNight,
        bookingReference: "ABD",
        status: "confirmed",
      });
      const bodySubmit = {
        userId: "6751570cbd20ef4184e7b5e8",
        objectId: "674b530cfa3469716c80aeef",
        bookingStartDate: JSON.parse(localStorage.getItem("checkoutTime"))
          .checkin,
        bookingEndDate: JSON.parse(localStorage.getItem("checkoutTime"))
          .checkout,
        objectType: "hotel",
        totalPersons: room[0].maxOccupancy,
        totalAmount: room[0].pricePerNight,
        bookingReference: "ABD",
        status: "confirmed",
      };
      await services.createBooking(bodySubmit).then((data) => {
        console.log(data);
        navigate(`/confirm-page/${data.data.data._id}`, {
          replace: true,
        });
      });

      // alert("Hello World")
    },
    // return redirect("");

    // setSuccess(true);
  });
  useEffect(() => {
    console.log(room);
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
                      More than {room[0].hotelId.reviewId.length} views
                    </div>
                    <div className="reviews">9.2</div>
                  </div>
                  <div className="mt-4">
                    <img src="/paymentPage/scale.png" />
                  </div>
                  <div className="sub-title flex mt-6 mb-6">
                    <div>
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
                <div>You will stay 1 nights</div>
                <div>
                  You selected rooms for 1 adults, 3 Children 12,7 and 5 y ears
                  old
                </div>
                <div> 0 Infant</div>
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
                  <div className="ml-4 adult-number">1 adult</div>
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

              <div className=" room-characters mb-6 pb-6">
                <div> 18 m2</div>
                <div>City Center</div>
                <div>Next to Forest</div>
                <div>En Suit Bath Room</div>
                <div>Flat Screen TV</div>
              </div>
            </div>
            <div
              style={{ marginBottom: "50px", paddingBottom: "20px" }}
              className="bg-white pl-6"
            >
              <div className="head-title ">Payment Information</div>
              <div className=" ">
                <div className="price-summary mb-6"> Your Price Summary</div>
                <hr />
                <div className="flex  mt-6 mb-6">
                  <div className="original-price ">Original Price</div>
                  <div className="flex" style={{ marginLeft: "auto" }}>
                    <div className="price-and-nights mr-2">
                      ${room[0].pricePerNight * 1}
                    </div>
                    <div className="nights-stay"> 1 Nights</div>
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
                    ${room[0].pricePerNight * 1}{" "}
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
                  <div className="">
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
            <div style={{ height: "120px" }} className="pl-6 bg-white">
              <div className="head-title pt-4">Payment Methods</div>
              <div className="flex pt-4">
                <div className="sub-title mr-6 ">Payment Method</div>
                <div>
                  <form class="max-w-sm mx-auto">
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a Method</option>
                      <option value="cash">Cash</option>
                      <option value="credit">Credit Card</option>
                    </select>
                  </form>
                </div>
                <div className="flex booking-for-work">
                  <div className="sub-title p-2">Booking for Work</div>
                  <input className="ml-2" type="radio" />
                </div>
              </div>
            </div>
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
              <div className="pl-6 bg-white">
                <div className="head-title">Full Name</div>
                <div className="flex">
                  <div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="firstName"
                      placeholder="First Name"
                      className="classic-input mr-3 p-4"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    <div className="flex">
                      <div className="error-field ">
                        {" "}
                        {formik.errors.firstName && (
                          <div>{formik.errors.firstName}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <input
                      id="middleName"
                      name="middleName"
                      type="middleName"
                      placeholder="Middle Name"
                      className="classic-input mr-3 p-4"
                      onChange={formik.handleChange}
                      value={formik.values.middleName}
                    />
                    <div className="flex">
                      <div className="error-field ">
                        {" "}
                        {formik.errors.middleName && (
                          <div>{formik.errors.middleName}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="lastName"
                      placeholder="Last Name"
                      className="classic-input p-4 "
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    <div className="flex">
                      <div className="error-field ">
                        {" "}
                        {formik.errors.lastName && (
                          <div>{formik.errors.lastName}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex mt-6 pb-6">
                  <div className="email-phone  mr-6">
                    <div>Email Address</div>
                    <div>
                      <input
                        id="emailAddress"
                        name="emailAddress"
                        type="emailAddress"
                        placeholder=".........................."
                        className="long-payment-input pl-4"
                        onChange={formik.handleChange}
                        value={formik.values.emailAddress}
                      />
                    </div>
                    <div className="flex">
                      <div className="error-field ">
                        {" "}
                        {formik.errors.emailAddress && (
                          <div>{formik.errors.emailAddress}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="email-phone  ">
                    <div>Phone Number</div>
                    <div>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="phoneNumber"
                        placeholder="764378888888"
                        className="classic-input pl-4"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                      />
                    </div>
                    <div className="flex">
                      <div className="error-field ">
                        {" "}
                        {formik.errors.phoneNumber && (
                          <div>{formik.errors.phoneNumber}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="head-title mt-6">If You Need Assistance</div>
                <div className="mt-6">
                  Choose An Option Based On Physical Disability Accordingly.
                </div>
                <div className="flex mt-6">
                  <div className="" style={{ width: "100%" }}>
                    <div className="smart-title">Choose An Option</div>
                    <div>
                      <input
                        placeholder="Not Provided"
                        className="classic-input pl-4"
                      />
                    </div>
                  </div>
                  <div style={{ width: "60%" }}>
                    <div className="smart-title">Region/Country</div>
                    <div>
                      <input
                        id="country"
                        name="country"
                        type="country"
                        placeholder="Country"
                        className="classic-input pl-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pl-6 pt-6 bg-white">
                <div className="head-title mb-6 ">Add to Your Stay</div>
                <div className="flex">
                  <div>
                    <div className="">
                      <div className="flex mb-2">
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
                        <div className="flex mt-6 mb-6">
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
                      <div className="flex">
                        <div>
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

              <div className="bg-white pl-6">
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
                <div className="flex mb-6">
                  <input type="checkbox" className="mr-2" />
                  <div>I would like to Rooms Close to each other</div>
                </div>
                <div>
                  <div className="sub-title">Your Arrival Time</div>
                  <div>
                    <div className="flex mt-6 mb-6">
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
                    <div className="pb-6">Time for CET time zone</div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="bg-white m-6 p-6">
              <div className="head-title">Bank Card Information</div>
              <div className="flex mt-6 ">
                <div style={{ width: "30%" }} className="">
                  <div className="plain-text">Full Name On The Card</div>
                  <div>
                    <input
                      id="fullNameOnCard"
                      name="fullNameOnCard"
                      type="fullNameOnCard"
                      className="classic-input pl-4 "
                      placeholder="Anna Carina"
                      onChange={formik.handleChange}
                      value={formik.values.fullNameOnCard}
                    />
                    <div className="flex">
                      <div className="error-field ">
                        {" "}
                        {formik.errors.fullNameOnCard && (
                          <div>{formik.errors.fullNameOnCard}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: "30%" }} className="">
                  <div className="plain-text">Card Number</div>
                  <div>
                    <input
                      id="cardNumber"
                      name="cardNumber"
                      type="cardNumber"
                      style={{ width: "150px" }}
                      className="classic-input pl-4 ml-4 mr-4"
                      placeholder="........................."
                      onChange={formik.handleChange}
                      value={formik.values.cardNumber}
                    />
                    <div className="flex">
                      <div className="error-field ">
                        {" "}
                        {formik.errors.cardNumber && (
                          <div>{formik.errors.cardNumber}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: "15%" }} className="">
                  <div className="plain-text">Exp Date</div>
                  <div>
                    <input
                      id="cardExpDate"
                      name="cardExpDate"
                      type="cardExpDate"
                      className="short-input pl-4 "
                      placeholder="**/**"
                      onChange={formik.handleChange}
                      value={formik.values.cardExpDate}
                    />
                  </div>
                  <div className="flex">
                    <div className="error-field ">
                      {" "}
                      {formik.errors.cardExpDate && (
                        <div>{formik.errors.cardExpDate}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ width: "15%" }} className="">
                  <div className="plain-text">CVC</div>
                  <div>
                    <input
                      id="cardCvc"
                      name="cardCvc"
                      type="cardCvc"
                      placeholder="***"
                      className="short-input pl-4 "
                      onChange={formik.handleChange}
                      value={formik.values.cardCvc}
                    />
                    <div className="flex">
                      <div className="error-field ">
                        {" "}
                        {formik.errors.cardCvc && (
                          <div>{formik.errors.cardCvc}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-6">
                <div>
                  <div>Promo Code</div>
                  <div className="flex">
                    <div>
                      <input
                        placeholder="mindx"
                        id="promoCode"
                        name="promoCode"
                        type="promoCode"
                        className="classic-input pl-4 "
                        onChange={formik.handleChange}
                        value={formik.values.promoCode}
                        disabled={disablePromo ? true : false}
                      />
                    </div>
                    <div>
                      <button
                        className="payment-button ml-6"
                        onClick={() => {
                          console.log(formik.values.promoCode);
                          toast.success("Successfully apply promocode", {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                          });
                          setDisablePromo(true);
                          localStorage.setItem(
                            "promoCode",
                            formik.values.promoCode
                          );
                        }}
                      >
                        {" "}
                        Apply Code
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="error-field ">
                      {" "}
                      {formik.errors.cardCvc && (
                        <div>{formik.errors.cardCvc}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-6">
                <div>
                  <button className="save-in-shortcut ">
                    Save In Shortcut
                  </button>
                </div>
                <div>
                  <button className="payment-button ml-6" type="submit">
                    Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentPageBody;
