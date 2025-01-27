import React from 'react';
import Slider from 'react-slick';
import ParaHeader from '../components/ParaHeader';
import ParaText from '../components/ParaText';
import Container from './../components/Container';
import PopularCard from './../components/PopularCard';
import destiOne from '../assets/destination-1.png'
import destiTwo from '../assets/destination-2.png'
import destiThree from '../assets/destination-3.png'
import destiFour from '../assets/destination-4.png'
import destiFive from '../assets/destination-5.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../App.css"
import Flex from './../components/Flex';
const PopularDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0px 40px',
    arrows: true,
  };

  return (
    <section className='pb-[150px] mt-20'>
      <Container>
        <ParaHeader className='text-center' text='Popular Destination' />
        <ParaText
          className='text-center mx-auto w-[680px] mt-[25px]'
          text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.'
        />
      </Container>
      <Flex>
        <div className="overflow-hidden w-full mx-auto relative mt-[40px]">
          <Slider {...settings}>
          <div className="slide">
            <PopularCard image={destiOne} title='Mount Agung, Bali' 
            details='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' 
            price='$150'/>
          </div>
          <div className="slide">
            <PopularCard image={destiTwo} title='Venice, Italy' 
            details='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' 
            price='$150'/>
          </div>
          <div className="slide">
            <PopularCard image={destiThree} title='Paris, France' 
            details='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' 
            price='$150'/>
          </div>
          <div className="slide">
            <PopularCard image={destiFour} title='Santorini, Greece' 
            details='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' 
            price='$150'/>
          </div>
          <div className="slide">
            <PopularCard image={destiFive} title='Lake Thun, Switzerland' 
            details='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' 
            price='$150'/>
          </div>
          </Slider>
        </div>
      </Flex>

    </section>
  );
};

export default PopularDestination;