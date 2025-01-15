/* eslint-disable react/prop-types */
import React from 'react'

const List = ({liText}) => {
  return (
    <li className='text-base text-paratext list-none font-normal font-poppins hover:text-secondary duration-300 cursor-pointer'>{liText}</li>
  )
}

export default List