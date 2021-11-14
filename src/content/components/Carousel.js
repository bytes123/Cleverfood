import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners } from '../../data'
import CarouselItem from './CarouselItem';
export default function Carousel() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

  };

 
  return (
    <Slider {...settings}>
        {banners.map((banner,index) => {
          return (
              <CarouselItem {...banner} key={index} />
            )
        })}
    </Slider>
  );
}
