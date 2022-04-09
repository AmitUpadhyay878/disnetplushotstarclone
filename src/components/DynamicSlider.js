import React from "react";
import Slider from "react-slick";

const DynamicSlider = ({ data }) => {

    

  const settings = {
    // centerMode: true,
    infinite: true,
    slidesToShow:1,
    speed: 500,
    autoplay:true,
    swipeToSlide: true,
    dots: true,
  };
  return (
    <div>
      <Slider
        {...settings}
        style={{ width: "1250px", padding: "0 20px", marginLeft: "52px" }}
      >
        {data.map((item) => {
          return (  
            <div key={item.id}>
              <img
                src={item.image}
                alt=""
                height="400"
                width="1200"
                // style={{borderRadius:"25px", marginTop:"10px"}}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default DynamicSlider;
