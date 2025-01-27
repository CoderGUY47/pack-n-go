import React from 'react'
import Flex from './Flex'
import { IoCheckmarkSharp } from "react-icons/io5";


const OffersList = ({className, text}) => {
  return (
    <Flex className='gap-x-2 gap-y-5 w-[230px]'>
        <Flex className='gap-x-2 items-center'>
            <IoCheckmarkSharp className='text-secondary'/>
            <li className={`text-base text-paraText font-poppins font-normal list-none ${className}`}>{text}</li>
        </Flex>
    </Flex>
  )
}

export default OffersList