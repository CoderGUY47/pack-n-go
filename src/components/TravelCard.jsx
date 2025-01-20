import React from 'react'
import Image from './Image';

const TravelCard = ({cardTitle, cardInfo, src, alt}) => {
  return (
    <div className='w-[370px] px-[54px] py-[63px] 
      bg-gray-50 rounded-[14px] hover:shadow-3xl duration-500'>
        <Image src={src} alt={alt}/>
        <h4 className='text-[25px] text-primary font-poppins font-semibold pt-10 pb-5'>{cardTitle}</h4>
        <p className='text-[16px] text-paraText font-poppins font-normal'>{cardInfo}</p>
    </div>
  )
}

export default TravelCard