import React from 'react'

const ParaHeader = ({text, className}) => {
  return (
    <h3 className={`text-[40px] text-primary font-poppins font-semibold ${className}`}>{text}</h3>
  )
}

export default ParaHeader