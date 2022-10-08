import React from "react";
import LogoImage from '../images/logo.png'

const Logo = () => {
  return (
      <div className="flex items-center gap-3">
        <div className="h-16 w-12">
          <img src={LogoImage} alt="Logo" className="h-full w-full object-cover block" />
        </div>
        <h3 className="text-gray-500 text-3xl">Keep</h3>
      </div>
  );
};

export default Logo;
