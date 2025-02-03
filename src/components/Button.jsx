import React from 'react';

const Button = ({ text, className }) => {
  return (
    <button
      className={`text-white bg-secondary px-7 py-3 
      text-1xl rounded-2xl font-poppins font-semibold 
      border-2 border-transparent 
      md:hover:bg-transparent md:hover:border-secondary 
      md:hover:text-secondary duration-300 ${className}`}>{text}</button>
  );
};

export default Button;