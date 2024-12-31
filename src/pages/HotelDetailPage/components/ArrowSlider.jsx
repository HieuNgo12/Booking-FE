import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";
// import Card from "./Card";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src="/right.png" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src="/right2.png" />
    </div>
  );
}

function ArrowSlider({ people, hotel, ...props }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="mt-6 mb-6">
      {/* {people?.length &&
          people.map((person, index) => {
            return (
              <div className="container">
                <Card
                  person={person}
                />
              </div>
            );
          })} */}
      {hotel
        ? hotel.reviewId.map((review) => {
            console.log(review);
            return <Card review={review} />;
          })
        : null}
    </Slider>
  );
}

export default ArrowSlider;
