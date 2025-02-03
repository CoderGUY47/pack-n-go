import React from 'react';
import Flex from './Flex';
import { IoIosArrowDown } from "react-icons/io";
const InputCard = ({ icon, label, placeholder }) => {
  return (
    <div>
      <Flex className='md:gap-x-3 gap-x-1 items-center'>
        {icon}
        <p className='md:text-base text-xs text-nunito font-bold font-nunito text-bannerCard'>{label}</p>
        <IoIosArrowDown className='text-secondary'/>
      </Flex>
      <p className='text-paraText md:text-base text-xs text-nunito font-nunito font-medium md:pl-[27px]'>{placeholder}</p>
    </div>
  );
};
export default InputCard;

