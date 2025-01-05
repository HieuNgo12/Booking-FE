import React from "react";
import "./FlightTable.css";
function FlightTable() {
  return (
    <div className="flex">
      <table class="table-auto">
        <thead>
          <tr>
            <th className="long-tab">Flight</th>
            <th className="long-tab">From</th>
            <th className="long-tab">To</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex">
                <div>
                  <img src="./flight-confirm-page/lufthansa.png" />
                </div>
                <div>Lufthansa</div>
              </div>
              <div>TK 881</div>
              <div>Economy Class</div>
            </td>
            <td>
              <div className="blue-title-medium">12:00PM</div>
              <div className="green-title">Thursday, April 8</div>
              <div>Stockholm{"Sweden"}</div>
              <div>Stockholm Airlanda Airport {"(ARN)"}</div>
            </td>
            <td>
              <div className="blue-title-medium">15:45PM</div>
              <div className="green-title">Thursday, April 8</div>
              <div>Stockholm{"Sweden"}</div>
              <div>Stockholm Airlanda Airport {"(ARN)"}</div>
            </td>
            <td>3:45h</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="./flight-confirm-page/smaller-than.png" />
              </div>
              <div>One Stop</div>
            </td>
            <td >
              <div >Layovers & Connecting Flights For Rome, Italy</div>
              <div className="blue-title-small">
                Italy Fiumicino airport, See more-
              </div>
            </td>
            <td>4h45</td>
          </tr>
          <tr>
            <td>
              <div></div>
              <div>British Airways</div>
              <div>Tk29</div>
              <div className="blue-title-small">Economy Class</div>
            </td>
            <td>
              <div className="blue-title-medium">21:45 PM</div>
              <div className="green-title">Thursday, April 6</div>
              <div>
                <div>
                  <img />
                </div>
                <div>
                  <div>Rome {"(Italy)"}</div>
                  <div>Rome Fiumicino Airport (FCO)</div>
                </div>
              </div>
            </td>
            <td>
              <div className="blue-title-medium">21:45 PM</div>

              <div className="green-title">Thursday, April 8</div>

              <div>Stanbul{"(Turkey)"}</div>
              <div>Sabha {"(SAW)"}</div>
            </td>
            <td>
              <div>3:45h</div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto">
        <thead>
          <tr>
            <th className="bar-code">BarCode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex">
                <div>
                  <img src="./flight-confirm-page/lufthansa.png" />
                </div>
                <div>Lufthansa</div>
              </div>
              <div>TK 881</div>
              <div>Economy Class</div>
            </td>
       
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FlightTable;
