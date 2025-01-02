import React from "react";
import { Button } from "antd";
import Rectangle_1 from "../components/img/Rectangle 3-1.png";
import Rectangle_2 from "../components/img/Rectangle 3-2.png";
import Rectangle_3 from "../components/img/Rectangle 3-3.png";
import Rectangle_4 from "../components/img/Rectangle 3-4.png";

function FlightHomePageBody() {
  return (
    <div className="w-full mt-10 mb-10 flex flex-col  items-center">
      <div className="w-full m-5 flex justify-between items-center">
        <div className="max-w-[700px]">
          <h3 className="text-2xl font-bold">Fall into travel</h3>
          <div className="text-base mt-2 text-[#07689F]">
            Review Affordable EasySet24 Trip Packages
          </div>
          <div className="text-base mt-2">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </div>
        </div>
        <Button
          style={{
            width: "189px",
            height: "40px",
            color: "#07689f",
            border: "1px solid #07689f",
            borderRadius: "6px",
            textAlign: "center",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          See All
        </Button>
      </div>

      <div className="w-full m-5 flex justify-between items-center gap-8">
        <div className="w-1/2 flex flex-col gap-y-8">
          <div className="flex gap-2 justify-between">
            <div className="bg-[#07689F] text-white flex flex-col p-4 text-center rounded-md">
              <div>From</div>
              <div> $700</div>
            </div>
            <h3 className="font-bold text-4xl">
              Backpacking South Of Asia ...{" "}
            </h3>
          </div>
          <div className="text-justify text-lg indent-8 leading-relaxed">
            Traveling is a unique experience as it's the best way to unplug from
            the pushes and pulls of daily life.
          </div>
          <div className="text-justify text-lg leading-relaxed">
            Relaxing through an organized trip, helps us to forget about our
            problems, frustrations, and fears at home.
          </div>
          <div className="text-justify text-lg leading-relaxed">
            During our journey, we experience life in different ways. We explore
            new places, cultures, cuisines, traditions, and ways of living.
          </div>
          <Button
            style={{
              width: "100%",
              height: "40px",
              color: "#07689f",
              fontWeight: 500,
              borderColor: "#07689f",
            }}
          >
            Book Flight
          </Button>
        </div>

        <div className="w-1/2 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <img
              src={Rectangle_1}
              alt="Landscape 1"
              className="w-full h-[200px] object-cover rounded-md"
            />
          </div>

          <div className="col-span-1">
            <img
              src={Rectangle_2}
              alt="Landscape 2"
              className="w-full h-[200px] object-cover rounded-md"
            />
          </div>

          <div className="col-span-1">
            <img
              src={Rectangle_3}
              alt="Landscape 3"
              className="w-full h-[200px] object-cover rounded-md"
            />
          </div>

          <div className="col-span-1">
            <img
              src={Rectangle_4}
              alt="Landscape 4"
              className="w-full h-[200px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightHomePageBody;
