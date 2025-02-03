import React from 'react'

const ParaText = ({text, className}) => {
  return (
    <p className={`md:text-[16px] text-[14px] md:p-4 px-4 text-paraText font-poppins font-normal ${className}`}>{text}</p>
  )
}

export default ParaText