import React from "react";
import { Carousel } from "antd";

const CarouselHeader = () => (
  <Carousel autoplay className="w-full">
    <div>
      <img
        src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Slide 1"
        className="w-full h-[500px] object-cover object-top"
      />
    </div>
    <div>
      <img
        src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Slide 2"
        className="w-full h-[500px] object-cover object-center"
      />
    </div>
    <div>
      <img
        src="https://images.unsplash.com/photo-1523833082115-1e8e294bd14e?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Slide 3"
        className="w-full h-[500px] object-cover object-center"
      />
    </div>
    <div>
      <img
        src="https://images.unsplash.com/photo-1608023136037-626dad6c6188?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Slide 4"
        className="w-full h-[500px] object-cover object-center"
      />
    </div>
  </Carousel>
);
export default CarouselHeader;
