import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="specific-image">
          <img src={image} alt={`slide-${index}`} style={{width: "250px", margin: "1rem auto", height:  "200px",}}/>
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;