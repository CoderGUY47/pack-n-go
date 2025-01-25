import React from 'react'
import Image from './Image'

const DiscoCard = ({className, cardTitle, cardInfo, src, alt}) => {
  return (
    <div className='group w-[270px] px-7 py-[80px] shadow-2xl 
        hover:shadow-xl hover:bg-secondary duration-500 rounded-xl'>
        <Image className={`bg-iconCard group-hover:bg-white w-[74px] h-[75px] object-contain ${className}`} src={src} alt={alt}/>
        <h4 className='text-[25px] text-primary font-poppins font-semibold pt-2 group-hover:text-white'>{cardTitle}</h4>
        <p className='w-[515px] text-[16px] text-paraText font-poppins font-normal group-hover:text-white'>{cardInfo}</p>
    </div>
  )
}

export default DiscoCard
