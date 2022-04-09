import React from "react";
import Slider from "react-slick";
const BodySlider = () => {
  const settings = {
    // centerMode: true,
    infinite: true,
    slidesToShow: 8,
    speed: 500,
    autoplay: false,
    swipeToSlide: true,
    dots: true,
  };
  return (
    <div>
      <Slider
        {...settings}
      >

      </Slider>
    </div>
  );
};

export default BodySlider;
