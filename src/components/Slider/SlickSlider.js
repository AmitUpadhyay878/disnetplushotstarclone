import React from "react";
import Slider from "react-slick";
 import SimpleImageSlider from "react-simple-image-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "@mui/material";
// import styled from "styled-components";
const images = [
    { url: "images/maxresdefault.jpg" },
    { url: "images/slider-badging.jpg" },
    { url: "images/slider-scale.jpg" },
    // { url: "images/slider-scales.jpg" },
    //  { url: "images/maxresdefault.jpg"},
    //  { url: "images/Untitled-design---2020-08-11T132331233_5f324eb465d43.jpg" },
    //  { url: "images/Heres-the-line-up-of-shows-and-movies-arriving-on-Disney-Hotstar-this-September.jpg"},
  ];


const SlickSlider = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   arrows:true,
  //   speed: 700,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   // adaptiveHeight: true,
  //   // rows: 2,
  //   // fade: true,
  //   //waitForAnimate: false


  // };
  return (

 <>      {/* <Slider {...settings}>
        <div>
            <img
              src={
                "images/slider-scale.jpg "
              } 
            />
         
        </div>
        <div >
        <img
              src={
                "images/slider-badging.jpg "
            }

            />
        </div>
        <div>
        <img
              src={
                "images/slider-badag.jpg "
              } 
            />
        </div>
        <div>
        <img
              src={
                "images/sliderImage2.jpg"
              }
            />
        </div>
        <div>
        <img
              src={
                "images/Rudra-Disney-Hotstar.jpg"
              } 
            />
        </div>
        <div>
        <img
              src={
                "images/Special-OPS-1024x576.jpg "
              }
            />
        </div>
      </Slider> */}
          <Card elevation={12}>
          <SimpleImageSlider
        width={1920}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay = {true}   
      
      /> 
          </Card>

     
</>

  )
};

export default SlickSlider;

