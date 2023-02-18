import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  id?:string;
  className?: string;
  text: string;
  // linkTo: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ id, className, text, type, onClick }) => {
  return (
    // <Link to={linkTo}>
      <button id = {id}
        className={`${className} bg-dark-grey text-yellow font-droid font-light flex justify-center`}
        type={type}
        onClick={onClick}>
        {text}
      </button>
    // </Link>
  );
};

export default Button;