
import React, { useState } from "react";
import { useTourSearchContext } from "../../context/TourSearchContext";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const { endDestination, startDateBooking, budget, saveSearchValues } = useTourSearchContext();

  const [destination, setDestination] = useState(endDestination);
  const [checkIn, setCheckIn] = useState(startDateBooking);
  const [budgetAmount, setBudgetAmount] = useState(budget);

  const handleSubmit = (event) => {
    event.preventDefault();
 
    console.log("Destination:", destination);
    console.log("Check-in Date:", checkIn);
    console.log("Budget:", budgetAmount);
    saveSearchValues(destination, checkIn, budgetAmount);
    navigate("/search-tour");


    setDestination("");
    setCheckIn(new Date());
    setBudgetAmount("");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 p-3 bg-[#096ba2] rounded shadow-md grid grid-cols-4 items-center gap-4"
    >
      <div className="flex flex-row items-center flex-1 bg-white p-2">

        <input
          placeholder="Where are you going?"
          className="text-md w-full focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="flex bg-white px-2 py-1 gap-2 order-3">
        <label className="items-center flex">
          Budget:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={0}
            max={1000000}
            value={budgetAmount}
            onChange={(event) => setBudgetAmount(parseInt(event.target.value))}
          />
        </label>
      </div>

      <div>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date)}
          selectsStart
          startDate={checkIn}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Start Date"
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>

      <div className="flex gap-1 order-4">
        <button type="submit" className="w-full bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
