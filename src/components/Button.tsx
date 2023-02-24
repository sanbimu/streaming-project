import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  id?:string;
  className?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style: any;
};

const Button: React.FC<ButtonProps> = ({ 
   id, 
   className, 
   text, 
   type, 
   onClick,
   disabled,
   style
  }) => {
  return (
    
      <button id = {id}
        className={`${className} bg-dark-grey text-yellow font-light flex justify-center`}
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={style}
        >
        {text}
      </button>
    
  );
};

export default Button;