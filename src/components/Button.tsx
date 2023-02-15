import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button id = "CustomButton" className= "bg-dark-dray text-yellow font-droid font-light w-56 h-12 flex justify-center items-center" >
      {text}
    </button>
  );
};

export default Button;