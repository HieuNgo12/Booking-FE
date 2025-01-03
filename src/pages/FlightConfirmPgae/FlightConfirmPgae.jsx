import React from "react";
import { Divider } from "antd";

function FlightConfirmPgae() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Digital Ticket</h2>
        <p className="text-sm text-gray-500 font-semibold">
          It Is Not Necessary To Print Your Ticket
        </p>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 text-center bg-gray-200 font-bold text-gray-700">
        <div className="col-span-2 py-3 border-r">✈️ Flight</div>
        <div className="col-span-2 py-3 border-r">🛫 From</div>
        <div className="col-span-2 py-3 border-r">🛬 To</div>
        <div className="py-3 border-r">⏳ Duration</div>
        <div className="py-3">📊 Bar Code</div>
      </div>

      {/* Flight Details - First Flight */}
      <div className="grid grid-cols-6 text-sm">
        {/* Airline Info */}
        <div className="col-span-2 flex flex-col items-center justify-center p-4 border-r">
          <img
            src="https://via.placeholder.com/80"
            alt="Airline Logo"
            className="h-12 mb-2"
          />
          <h3 className="text-lg font-bold text-gray-700">Lufthansa</h3>
          <p className="text-gray-500">Tk 881</p>
          <p className="text-blue-500">Economy Class</p>
        </div>

        {/* From */}
        <div className="col-span-2 flex flex-col justify-center p-4 border-r">
          <p className="text-blue-600 font-bold text-lg">12:00 PM</p>
          <p className="text-green-600 font-semibold">Thursday, April 6</p>
          <p className="font-bold">Stockholm (Sweden)</p>
          <p className="text-gray-500 text-sm">
            Stockholm Arlanda Airport (ARN)
          </p>
        </div>

        {/* To */}
        <div className="col-span-2 flex flex-col justify-center p-4 border-r">
          <p className="text-blue-600 font-bold text-lg">15:45 PM</p>
          <p className="text-green-600 font-semibold">Thursday, April 6</p>
          <p className="font-bold">Rome (Italy)</p>
          <p className="text-gray-500 text-sm">Rome Fiumicino Airport (FCO)</p>
        </div>

        {/* Duration */}
        <div className="flex items-center justify-center p-4 border-r">
          <p className="font-bold text-xl text-gray-700">3:45h</p>
        </div>

        {/* Barcode */}
        <div className="flex items-center justify-center p-4">
          <img
            src="https://via.placeholder.com/60x60"
            alt="QR Code"
            className="h-16"
          />
        </div>
      </div>

      {/* Stopover Section */}
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl">➡️</span>
          <p className="font-bold">One Stop</p>
        </div>
        <p className="text-gray-600">
          Layovers & Connecting Flights For Rome, Italy{" "}
          <a href="#" className="text-blue-500 hover:underline">
            See More...
          </a>
        </p>
        <p className="font-bold">4h 45m</p>
      </div>

      {/* Flight Details - Second Flight */}
      <div className="grid grid-cols-6 text-sm border-t">
        {/* Airline Info */}
        <div className="col-span-2 flex flex-col items-center justify-center p-4 border-r">
          <img
            src="https://via.placeholder.com/80"
            alt="Airline Logo"
            className="h-12 mb-2"
          />
          <h3 className="text-lg font-bold text-gray-700">British Airways</h3>
          <p className="text-gray-500">Tk 29</p>
          <p className="text-blue-500">Economy Class</p>
        </div>

        {/* From */}
        <div className="col-span-2 flex flex-col justify-center p-4 border-r">
          <p className="text-blue-600 font-bold text-lg">21:45 PM</p>
          <p className="text-green-600 font-semibold">Thursday, April 6</p>
          <p className="font-bold">Rome (Italy)</p>
          <p className="text-gray-500 text-sm">Rome Fiumicino Airport (FCO)</p>
        </div>

        {/* To */}
        <div className="col-span-2 flex flex-col justify-center p-4 border-r">
          <p className="text-blue-600 font-bold text-lg">23:45 PM</p>
          <p className="text-green-600 font-semibold">Thursday, April 6</p>
          <p className="font-bold">Istanbul (Türkiye)</p>
          <p className="text-gray-500 text-sm">Sabha (SAW)</p>
        </div>

        {/* Duration */}
        <div className="flex items-center justify-center p-4 border-r">
          <p className="font-bold text-xl text-gray-700">2 Hours</p>
        </div>

        {/* Barcode */}
        <div className="flex items-center justify-center p-4">
          <img
            src="https://via.placeholder.com/60x60"
            alt="Barcode"
            className="h-16"
          />
        </div>
      </div>
    </div>
  );
}

export default FlightConfirmPgae;
