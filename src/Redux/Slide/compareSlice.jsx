import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compareFlights: [],
};

console.log(initialState);

const compareFlightSlice = createSlice({
  name: "compareFlight",
  initialState,
  reducers: {
    addFlight: (state, action) => {
      if (state.compareFlights.length < 4) {
        const exists = state.compareFlights.some(
          (flight) => flight._id === action.payload._id
        );
        if (!exists) {
          state.compareFlights.push(action.payload);
        }
      }
    },
    removeFlight: (state, action) => {
      console.log("Before filter:", state.compareFlights);
      console.log("Payload:", action.payload);
      state.compareFlights = state.compareFlights.filter(
        (flight) => flight._id !== action.payload
      );
      console.log("After filter:", state.compareFlights);
    },
    clearFlights: (state) => {
      state.compareFlights = [];
    },
  },
});

export const { addFlight, removeFlight, clearFlights } =
  compareFlightSlice.actions;

export default compareFlightSlice.reducer;
