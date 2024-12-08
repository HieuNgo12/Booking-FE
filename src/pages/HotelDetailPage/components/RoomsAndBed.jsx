import React from "react";
import "./RoomsAndBed.css";
function RoomsAndBed() {
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th>Room Type</th>
          <th>Number Of Guest</th>
          <th>Today's Price</th>
          <th>Your Choices</th>
          <th>Select Room</th>
          <th>Today's Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="select" />
          </td>

          <td>
            <input type="select" />
          </td>

          <td>
            Free cancellation before 2:00 PM on December 13, 2024 10% Genius
            discount applied to the price before taxes and charges • Only 2
            rooms left on our site
          </td>
          <td>
            <input type="select" />
          </td>
          <td>
            <button>I'll Reserve</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default RoomsAndBed;
