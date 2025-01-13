import React from 'react'

const Button = ({text}) => {
  return (
    <button className='text-white text-base bg-[#00755f] px-9 py-4 
    text-2xl rounded-2xl font-poppins font-semibold border-2 border-transparent 
    hover:bg-transparent hover:border-[#00755f] hover:text-[#00755f] duration-300'>{text}</button>
  )
}

export default Button