import React from 'react'

const TopButton = ({ text, className }) => {
    return (
    <button
        className={`text-paraText bg-[#F3F3F3] px-7 py-3 
        text-1xl rounded-2xl font-poppins font-semibold border-transparent 
        hover:bg-secondary hover:text-white duration-300 ${className}`}>
        {text}
    </button>
    );
  };

export default TopButton