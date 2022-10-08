import React from "react";

const Menu = ({ active, name, img, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`flex ${className} py-4 w-full hover:bg-gray-200  cursor-pointer ${
        active && "bg-yellow-200 hover:bg-yellow-200"
      }`}
    >
      {img}
      <p className="">{name}</p>
    </div>
  );
};

export default Menu;
