import React from 'react'

const Button = ({text}) => {
  return (
    <button className='text-white bg-secondary px-7 py-3 text-1xl rounded-2xl 
    font-poppins font-semibold border-2 border-transparent 
    hover:bg-transparent hover:border-secondary hover:text-secondary duration-300'>{text}</button>
  )
}

export default Button