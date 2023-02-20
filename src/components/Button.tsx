import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  id?:string;
  className?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ id, className, text, type, onClick }) => {
  return (
    <button id = {id}
      className={`${className} bg-dark-grey text-yellow font-droid font-light flex justify-center`}
      type={type}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;