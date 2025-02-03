import React from 'react'
import Container from './../components/Container';
import Flex from '../components/Flex';
import Button from '../components/Button';
import InputCard from '../components/InputCard';
import { FiSearch } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import Image from '../components/Image';
import BannerOne from '../assets/bannerOne.png'
import BannerTwo from '../assets/bannerTwo.png'

const Banner = () => {
  return (
    <section className='bg-banner relative overflow-hidden'>
      <div className='md:block hidden absolute top-[180px] right-[-183px] z-10'><Image className='w-[80%]' src={BannerOne}/></div>
      <div className='md:block hidden absolute top-[325.5px] right-[310px] z-0'><Image className='w-[80%]'src={BannerTwo}/></div>
      <Container>
        <Flex className='!block'>
          <div className="md:w-1/2 md:px-0 px-2 pt-[27px] pb-[60px] md:pb-[100px] z-10 relative">
            <h1 className='pt-2 md:pt-10 pb-2 md:w-[590px] text-[30px] w-[270px] md:text-[65px] text-primary font-semibold font-poppins leading-[40px] md:leading-[70px]'>
              Start Exploring to Find Inner Peace by Traveling.</h1>
            <p className="md:py-5 py-1 pb-7 md:w-[590px] w-auto text-[14px] md:text-[16px] font-normal font-poppins text-paraText leading-[20px] md:leading-[30px]">
            Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.
            </p>
            <Button text='Discover Now'/>
            <div className="relative md:w-[825px] w-auto mt-10 h-[150px] md:h-[120px] bg-white shadow-3xl rounded-2xl rounded-tl-none pb-0">
              <Flex className='py-9 px-6 md:gap-[50px] gap-8'>
                <InputCard icon={<SlLocationPin/>} label="Destination" placeholder="Enter destination" />
                <InputCard icon={<HiOutlineCalendarDateRange />} label="Date" placeholder="Select date" />
                <InputCard icon={<IoPersonOutline />} label="User" placeholder="Select date" />
                <button className='absolute  py-[15px] px-[160px] md:px-[30px] md:py-[30px] 
                top-[90px] md:top-[20px] left-[10px] md:left-[719px] md:right-7  bg-secondary rounded-lg '>
                  <FiSearch className='text-white text-md md:text-xl'/>
                </button>
              </Flex>

            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;