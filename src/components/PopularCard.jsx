import React from 'react'
import destiOne from '../assets/destination-1.png'
import destiTwo from '../assets/destination-2.png'
import destiThree from '../assets/destination-3.png'
import destiFour from '../assets/destination-4.png'
import destiFive from '../assets/destination-5.png'
import { FaStar } from "react-icons/fa";
import Image from './Image';
import Flex from './Flex';
import Button from './Button';

const PopularCard = () => {
  return (
    <div className='w-[370px] h-[550px] bg-white shadow-3xl p-5 rounded-2xl pb-500px'>
      <div className='w-[329px] h-[203px] flex items-center justify-center'>
        <Image className='w-full rounded-2xl -mt-2' src={destiOne} />
      </div>
      <Flex className='gap-x-1 justify-start w-full items-center pt-4'>
        <li className='list-none'><FaStar className='text-star hover:text-orange-400 duration-500 cursor-pointer'/></li>
        <li className='list-none'><FaStar className='text-star hover:text-orange-400 duration-500 cursor-pointer'/></li>
        <li className='list-none'><FaStar className='text-star hover:text-orange-400 duration-500 cursor-pointer'/></li>
        <li className='list-none'><FaStar className='text-star hover:text-orange-400 duration-500 cursor-pointer'/></li>
        <li className='list-none'><FaStar className='text-star hover:text-orange-400 duration-500 cursor-pointer'/></li>
        <li className='list-none ml-2 hover:text-orange-400 duration-500 cursor-default font-poppins text-[14px]'>5 Reviews</li>
      </Flex>
      <h4 className='text-[25px] text-primary font-poppins font-semibold py-2'>Mount Agung, Bali</h4>
      <p className='w-[325px] text-[16px] text-paraText font-poppins font-normal py-4'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</p>
      <Flex>
        <h5 className='text-[20px] text-primary font-poppins font-semibold'>$150 
          <span className='text-base text-primary font-poppins font-normal'>/ Person</span></h5>
      </Flex>
      <Button className='mt-[25px] mb-[38px] py-2.5' text='Book Now'/>
    </div>
  );
};

export default PopularCard