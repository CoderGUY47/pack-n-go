import React from 'react'

const ParaText = ({text, className}) => {
  return (
    <p className={`text-base text-paraText font-poppins font-normal ${className}`}>{text}</p>
  )
}

export default ParaText