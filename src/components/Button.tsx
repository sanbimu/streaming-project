import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  linkTo: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ text, linkTo, type, onClick }) => {
  return (
    <Link to={linkTo}>
      <button id = "CustomButton" className= "bg-dark-dray text-yellow font-droid font-light w-56 h-12 flex justify-center items-center" 
        type={type}
        onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

export default Button;