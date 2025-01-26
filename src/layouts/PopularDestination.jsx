import React from 'react';
import Slider from 'react-slick';
import ParaHeader from '../components/ParaHeader';
import ParaText from '../components/ParaText';
import Container from './../components/Container';
import PopularCard from './../components/PopularCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../App.css"
const PopularDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '40px', // Use centerPadding to add space around slides
    arrows: true,
  };

  return (
    <section className='pb-[150px] mt-10'>
      <Container>
        <ParaHeader className='text-center' text='Popular Destination' />
        <ParaText
          className='text-center mx-auto w-[680px] mt-[25px]'
          text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.'
        />
      </Container>
      <div className="overflow-hidden w-full mx-auto relative mt-[40px]">
        <Slider {...settings}>
          <div className="slide">
            <PopularCard />
          </div>
          <div className="slide">
            <PopularCard />
          </div>
          <div className="slide">
            <PopularCard />
          </div>
          <div className="slide">
            <PopularCard />
          </div>
          <div className="slide">
            <PopularCard />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default PopularDestination;