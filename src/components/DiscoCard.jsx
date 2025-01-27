import React from 'react'
const DiscoCard = ({DiscoIcon, cardTitle, cardInfo}) => {
  return (
    <div className='group w-[270px] px-7 py-[60px] shadow-md
        hover:shadow-3xl hover:bg-secondary duration-500 rounded-xl'>
        <DiscoIcon className='bg-iconCard rounded-2xl w-[74px] h-[75px] p-5 text-secondary group-hover:bg-white'/>
        <h4 className='text-[25px] text-primary font-poppins font-semibold mt-6 group-hover:text-white'>{cardTitle}</h4>
        <p className='w-[515px] text-[16px] text-paraText font-poppins font-normal group-hover:text-white'>{cardInfo}</p>
    </div>
  )
}

export default DiscoCard
