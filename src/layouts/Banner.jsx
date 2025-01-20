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
      <div className='absolute top-[180px] right-[-183px] z-10'><Image className='w-[80%]' src={BannerOne}/></div>
      <div className='absolute top-[325.5px] right-[310px] z-0'><Image className='w-[80%]'src={BannerTwo}/></div>
      <Container>
        <Flex>
          <div className="w-1/2 pt-[27px] pb-[100px] z-10 relative">
            <h1 className='pt-10 pb-2 w-[590px] text-[65px] text-primary font-semibold font-poppins leading-[70px]'>
              Start Exploring to Find Inner Peace by Traveling.</h1>
            <p className="pt-5 pb-7 w-[590px] text-base text-third font-normal font-poppins text-paraText leading-7">
            Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.
            </p>
            <Button text='Discover Now'/>
            <div className="relative w-[825px] mt-10 bg-white rounded-lg rounded-tl-none pb-0">
              <Flex className='py-9 px-6 gap-[50px]'>
                <InputCard icon={<SlLocationPin/>} label="Destination" placeholder="Enter destination" />
                <InputCard icon={<HiOutlineCalendarDateRange />} label="Date" placeholder="Select date" />
                <InputCard icon={<IoPersonOutline />} label="User" placeholder="Select date" />
              </Flex>
              <button className='absolute top-5 right-7 p-[30px] bg-secondary rounded-lg'>
                <FiSearch className='text-white text-xl'/>
              </button>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;