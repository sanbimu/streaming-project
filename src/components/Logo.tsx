import React from 'react';
interface LogoProps {
    className?: string;
  };
  
const Logo: React.FC<LogoProps> = ({ className }) => {
    return ( 
        <img className = {className} id = "waveLogoMain" src = "./WAVE-logo-black-01.svg" alt ="wave logo"></img>
     );
}
 
export default Logo;
