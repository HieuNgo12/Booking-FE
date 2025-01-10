import React from "react";
import { Carousel } from "antd";

const CarouselHeader = () => (
  <Carousel autoplay className="w-full">
    <div>
      <img
        src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/07/1736213025922-9bb5bbbe63079c87c196277ab306f098.jpeg?tr=q-75"
        alt="Slide 1"
        className="w-full h-[275px]  object-top"
      />
    </div>
    <div>
      <img
        src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/07/1736209654996-aa302beed43dde1cee38c3fb0310e3ec.jpeg?tr=q-75"
        alt="Slide 2"
        className="w-full h-[275px] object-cover object-center"
      />
    </div>
    <div>
      <img
        src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/07/1736213014994-48e09042e91ab6d099d681f475dd5f5e.jpeg?tr=q-75"
        alt="Slide 3"
        className="w-full h-[275px]  object-center"
      />
    </div>
  </Carousel>
);
export default CarouselHeader;
