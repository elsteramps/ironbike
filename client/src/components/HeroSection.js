import React from 'react';
import '../App.css';
import './HeroSection.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
  ];



function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/batumi_night_1.mp4' autoPlay loop muted />
      <h1>NAGRYWANIE Z DRONA</h1>
      <p>I nie tylko!</p> */}

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='slide'>
            <img src={image} alt={`Slide ${index + 1}`} className='slide-image'/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;
