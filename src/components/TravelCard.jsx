import React from 'react'
import Image from './Image';

const TravelCard = ({cardTitle, cardInfo, src, alt}) => {
  return (
    <div className='md:w-[370px] w-[350px] px-[54px] py-[63px] 
      md:bg-gray-50 bg-gray-100 rounded-[14px] md:hover:shadow-3xl shadow-lg duration-500'>
        <Image className='p-4 bg-iconCard rounded-lg' src={src} alt={alt}/>
        <h4 className='md:text-[25px] text-[22px] text-primary font-poppins font-semibold pt-10 pb-5'>{cardTitle}</h4>
        <p className='md:text-[16px] text-[14px] text-paraText font-poppins font-normal'>{cardInfo}</p>
    </div>
  )
}

export default TravelCard