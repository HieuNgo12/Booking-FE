import React from "react";
import ExploreStayCard from "./ExploreStayCard";
import "./HomePageBody.css";
function HomePageBody() {
  const SignupSchema = Yup.object().shape({
    // place: Yup.string()
    //   .min(2, "Required at least 2 letters")
    //   .max(50, "Required maximum 50 letters")
    //   .required("Place Is Required"),
    // passengers: Yup.string().required("Passengers is Required"),
    // checkin: Yup.string().required("Check In is Required"),

  });
  const [hotelList, setHotelList] = useState([]);
  const formik = useFormik({
    initialValues: {
      place: "",
      vip: "",
      passengers: "",
      checkout: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      navigate("/hotel-search");
    },
    // return redirect("");

    // setSuccess(true);
  });
  useEffect(() => {
    const getHotel = async () => {
      const data = await services.getHotelList();
      console.log(data);
      setHotelList(data.data.data);
    };
    getHotel();
  }, []);
  let navigate = useNavigate();

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="discover-your-trip">Discover your trip Worldwide!</div>
        <div className="flex mb-6">
          <div>
            {" "}
            <input
              id="place"
              name="place"
              type="place"
              placeholder="Where are you going to"
              className="search-input-style"
              onChange={formik.handleChange}
              value={formik.values.place}
            />
            <div className="flex">
              <div className="error-field ">
                {" "}
                {formik.errors.place && <div>{formik.errors.place}</div>}
              </div>
            </div>
          </div>
          <div>
            <input
              id="checkin"
              name="checkin"
              type="date"
              placeholder="Checkin Date Checkout Date"
              className="search-input-style"
              onChange={formik.handleChange}
              value={formik.values.checkin}
            />
            <div className="flex">
              <div className="error-field ">
                {" "}
                {formik.errors.checkin && <div>{formik.errors.checkin}</div>}
              </div>
            </div>
          </div>
          <div>
            <input
              id="passengers"
              name="passengers"
              type="passengers"
              placeholder="Adults Children Room"
              className="search-input-style"
              onChange={formik.handleChange}
              value={formik.values.passengers}
            />
            <div className="flex">
              <div className="error-field ">
                {" "}
                {formik.errors.passengers && <div>{formik.errors.passengers}</div>}
              </div>
            </div>
          </div>

          <button className="search-hotel" type="submit">
            Search
          </button>
        </div>
        {/* Radio */}
        <div className="mb-6">
          <div className="head-titles mb-6">Special Offers</div>
          {/* <div className="flex">
            <div class="flex items-center mb-4">
              <input
                id="all-1"
                type="radio"
                value=""
                name="all"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="all-1"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                All
              </label>
            </div>
            <div class="flex items-center">
              <input
                checked
                id="hotels-radio-2"
                type="radio"
                value=""
                name="hotels-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="Hotels-radio-2"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Flights
              </label>
            </div>
            <div class="flex items-center">
              <input
                checked
                id="flights-radio-2"
                type="radio"
                value=""
                name="flights-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="Hotels-radio-2"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Flights
              </label>
            </div>
            <div class="flex items-center">
              <input
                checked
                id="multi-radio-2"
                type="radio"
                value=""
                name="multi-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="Hotels-radio-2"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Multi
              </label>
            </div>
          </div> */}
        </div>
        <div class="flex items-center">
          <input
            checked
            id="flights-radio-2"
            type="radio"
            value=""
            name="flights-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="Hotels-radio-2"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Flights
          </label>
        </div>
        <div class="flex items-center">
          <input
            checked
            id="multi-radio-2"
            type="radio"
            value=""
            name="multi-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="Hotels-radio-2"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Multi
          </label>
        </div>
      </div>
      {/* Image Grid  */}
      <div>
        <div>
          <img />
          <img />
          <img />
        </div>
        <div>
          <img />
          <img />
          <img />
        </div>
      </div>
      <img src="/special-offers.png" />
      {/* Explore stay */}
      <div>
        <div className="head-titles">
          Explore Stays In Trending Destinations
        </div>
        <ExploreStayCard />
      </div>
      <div>
        <div className="head-titles">
          Compare The Highest Review Past Offers
        </div>
      </div>
      <div>
        <img src="/homepage/inspiration.png" />
      </div>
    
    </div>
  );
}

export default HomePageBody;
