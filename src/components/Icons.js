import React from "react";

const Icons = ({ content, hover, img,onMouseEnter,onMouseLeave }) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative cursor-pointer">
      <div className="p-3 hover:bg-gray-200 rounded-full">{img}</div>
      {hover && (
        <small className="absolute -left-2 w-16 text-center text-xs bg-black text-white bg-opacity-70 px-2 py-1 rounded">
          {content}
        </small>
      )}
    </div>
  );
};

export default Icons;
