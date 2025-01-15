import React from 'react'
import Flex from './Flex'
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

const InputCard = () => {
  return (
    <div>
        <Flex className='gap-x-3 items-center'>
            <SlLocationPin className='text-secondary'/>
            <p className='text-base text-nunito font-bold font-nunito text-bannerCard'>Location</p>
            <IoIosArrowDown className='text-secondary'/>
        </Flex>
        <p className='text-paraText text-base text-nunito font-nunito font-medium pl-[27px]'>Enter Your Location</p>
        {/* <input type="text" className="text-paraText text-base text-nunito font-nunito font-medium pl-[27px]" placeholder='Enter Your Location'/> */}
    </div>
  )
}

export default InputCard