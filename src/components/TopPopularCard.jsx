import React from 'react'
import Image from './Image'
import Flex from './Flex';
import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";

const TopPopularCard = ({image, topIcon, title, details, location}) => {
    return (
        <div className='relative w-[370px] h-[500px] bg-white shadow-3xl p-5 rounded-2xl pb-[500px]'>
          <div className='w-[329px] h-[203px] flex items-center justify-center'>
            <Image className='w-full rounded-2xl -mt-2' src={image}/>
            <Flex className='absolute bg-white rounded-full text-orange-400 
                text-[20px] ml-[16.2rem] -mt-[144px] w-10 h-10 items-center justify-center
                hover:text-white hover:bg-orange-400 duration-500'>
                {topIcon}<LuHeart /></Flex>
          </div>
          <Flex className='gap-x-1 justify-start w-full items-center pt-4'>
            <li className='list-none'><FaStar className='text-orange-400 duration-500 cursor-pointer'/></li>
            <li className='list-none text-base text-orange-400 font-poppins font-medium'>5</li>
          </Flex>
          <div>
              <h4 className='text-[25px] text-primary font-poppins font-medium py-2'>{title}</h4>
              <p className='w-[325px] text-[16px] text-paraText font-poppins font-normal py-4'>{details}</p>
          </div>

          <Flex className='text-paraText text-[20px] font-poppins font-medium items-center'>
            <span><GrLocation/></span>{location}
          </Flex>
        </div>
      );
}

export default TopPopularCard