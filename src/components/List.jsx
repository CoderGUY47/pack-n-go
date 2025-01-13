/* eslint-disable react/prop-types */
import React from 'react'

const List = ({liText}) => {
  return (
    <li className='text-base text-[#616161] list-none font-normal font-poppins hover:text-[#00755f] duration-300 cursor-pointer'>{liText}</li>
  )
}

export default List